import CoinPayments from "coinpayments";

export default async function handler(request, response) {
  const client = new CoinPayments({
    key: process.env.COINPAYMENTS_PUBLIC_KEY,
    secret: process.env.COINPAYMENTS_PRIVATE_KEY,
  });

  const transaction = await client.getTx({
    txid: request.query.txn_id,
    full: 1,
  });
  return response.status(200).json(transaction);
}
