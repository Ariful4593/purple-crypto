import axios from "axios";

var currencyPrices = {};
var lastUpdateTime = Date.now();

const getCurrencyPrice = async (currency, vs_currencies) => {
  const minuteInMills = 1000 * 60 * 10;

  const isTimeToUpdatePrice =
    new Date(lastUpdateTime + minuteInMills) <= Date.now();
  const isEmptyObjectPrice = JSON.stringify(currencyPrices) === "{}";
  const objectContainsCurrency = currencyPrices[currency];

  if (!isTimeToUpdatePrice && !isEmptyObjectPrice && objectContainsCurrency) {
    return currencyPrices[currency].usd;
  }

  const urlAPI = new URL("https://api.coingecko.com/api/v3/simple/price");
  urlAPI.searchParams.append("ids", currency);
  urlAPI.searchParams.append("vs_currencies", vs_currencies);

  const { data } = await axios.get(urlAPI.toString());
  currencyPrices[currency] = data[currency];
  lastUpdateTime = Date.now();

  return data[currency].usd;
};

export { getCurrencyPrice };
