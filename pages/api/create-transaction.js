import CoinPayments from "coinpayments";
import Transaction from "../../models/transaction";
import connectDB from "../../middleware/mongodb";
import { isValidEmail } from "../../utilities/utils";
import { getCurrencyPrice } from "./currencyPrice";

const handler = async (request, response) => {
  if (request.method !== "POST") {
    return response.status(405).json({ Error: "Invalid request method" });
  }

  const { buyer_email, amount, currency, currencyAbbreviation } = request.body;

  if (!buyer_email) {
    return response.status(400).json({ Error: "Missing field buyer_email" });
  }

  if (!isValidEmail(buyer_email)) {
    return response.status(400).json({ Error: "Invalid email address" });
  }

  if (!amount) {
    return response.status(400).json({ Error: "Missing amount field" });
  }

  if (isNaN(amount)) {
    return response
      .status(400)
      .json({ Error: "The amount field must be a number" });
  }

  if (!currency) {
    return response.status(400).json({ Error: "Missing currency field" });
  }

  const client = new CoinPayments({
    key: process.env.COINPAYMENTS_PUBLIC_KEY,
    secret: process.env.COINPAYMENTS_PRIVATE_KEY,
  });

  try {
    const currencyPrice = await getCurrencyPrice(currency, "usd");
    const coinMultiplier =
      Number(process.env.COIN_MULTIPLIER || -1) > 1
        ? Number(process.env.COIN_MULTIPLIER)
        : 1;
    const amountReceive = currencyPrice * amount * coinMultiplier;
    const transaction = await client.createTransaction({
      currency1: `${currencyAbbreviation}`,
      currency2: `${currencyAbbreviation}`,
      amount,
      buyer_email,
    });
    const transactionDatabase = new Transaction({
      email: buyer_email,
      transaction_id: transaction.txn_id,
      transaction_key: transaction.qrcode_url.split("key=")[1],
      amount_receive: amountReceive,
    });
    await transactionDatabase.save();
    return response.status(200).json(transaction);
  } catch (error) {
    console.error(error);
    return response.status(500).json({ Error: error.message });
  }
};

export default connectDB(handler);
