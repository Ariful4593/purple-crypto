import { createGiftCard } from "../../middleware/store/storeFactory";
import Transaction from "../../models/transaction";
import { verify } from "coinpayments-ipn";
import CoinpaymentsIPNError from "coinpayments-ipn/lib/error";
import connectDB from "../../middleware/mongodb";
import { sendEmailPaymentCompleted } from "../../middleware/mailjet";

const handler = async function handler(request, response) {
  if (request.method !== "POST")
    return response
      .status(405)
      .json({ Error: "This HTTP method is not allowed on this endpoint!" });

  if (!request.headers["hmac"])
    return response.status(400).json({ Error: "Missing HMAC header" });

  const { ipn_mode, merchant } = request.body;

  if (!ipn_mode)
    return response.status(400).json({ Error: "Missing ipn_mode field" });

  if (ipn_mode !== "hmac")
    return response.status(400).json({ Error: "ipn_mode field must be hmac" });

  if (!merchant)
    return response.status(400).json({ Error: "Missing merchant field" });

  if (merchant !== process.env.COINPAYMENTS_IPN_MERCHANT_ID)
    return response.status(400).json({ Error: "Merchant id does not match" });

  try {
    const isValid = verify(
      request.headers["hmac"],
      process.env.COINPAYMENTS_IPN_SECRET,
      request.body
    );
    if (!isValid) {
      return response
        .status(403)
        .json({ Error: "HMAC calculation does not match" });
    }
  } catch (e) {
    if (error instanceof CoinpaymentsIPNError) {
      return response.status(500).json({ Error: error });
    }
  }

  const { status, txn_id } = request.body;
  const isCompletedPayment = Number(status || 0) >= 100;
  const isRejectedPayment = Number(status || 0) < 0;

  if (isCompletedPayment) {
    const transaction = await Transaction.findOne({ transaction_id: txn_id });

    if (!transaction) {
      return response.status(404).json({ Error: "Transaction not found!" });
    }

    const { data: createdGiftCard } = await createGiftCard(
      transaction.amount_receive,
      txn_id
    );

    transaction.giftCard = createdGiftCard.data.code;
    await sendEmailPaymentCompleted(
      transaction.email,
      txn_id,
      createdGiftCard.data.code
    );
    await transaction.save();
    return response.status(200).json(request.body);
  }

  if (isRejectedPayment) {
    await Transaction.deleteOne({ transaction_id: txn_id });
    return response
      .status(201)
      .json({ Message: `Transaction has been deleted successfully!` });
  }

  return response.status(200).json(request.body);
};

export default connectDB(handler);
