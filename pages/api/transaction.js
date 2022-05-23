import CoinPayments from "coinpayments";
import Transaction from "../../models/transaction";
import connectDB from "../../middleware/mongodb";

const handler = async function handler(request, response) {
  const client = new CoinPayments({
    key: process.env.COINPAYMENTS_PUBLIC_KEY,
    secret: process.env.COINPAYMENTS_PRIVATE_KEY,
  });

  try {
    const transactionDB = await Transaction.findOne({
      transaction_id: request.query.txid,
    });
    const transaction = await client.getTx({
      txid: request.query.txid,
      full: 1,
    });

    const isCompletedPayment =
      transaction.status === 100 || transaction.status === 2;
    const canIncludeGiftcardInResponse =
      isCompletedPayment && transactionDB.giftCard;

    const result = {
      ...transaction,
      qrcode_url: `https://www.coinpayments.net/qrgen.php?id=${request.query.txid}&key=${transactionDB.transaction_key}`,
      amountReceive: transactionDB.amount_receive,
      giftCard: canIncludeGiftcardInResponse
        ? transactionDB.giftCard
        : undefined,
    };

    return response.status(200).json(result);
  } catch (error) {
    console.error(error);

    return response.status(404).json({
      Error: `Could not find the transaction with the id ${request.query.txid}`,
      StackTrace: error.stack,
    });
  }
};

export default connectDB(handler);
