import { getCurrencyPrice } from "./currencyPrice";

export default async function handler(request, response) {
  const { ids: currency, vs_currencies } = request.query;

  if (!currency) {
    return response.status(400).json({ Error: "Missing the ids property." });
  }

  if (!vs_currencies) {
    return response
      .status(400)
      .json({ Error: "Missing the vs_currencies property." });
  }

  const currencyPrice = await getCurrencyPrice(currency, vs_currencies);

  return response.status(200).json(currencyPrice);
}
