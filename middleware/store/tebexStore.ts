import axios, { AxiosResponse } from "axios";
import { Store } from "./store";

class TebexStore extends Store {
  public async createGiftCard(
    amount: number,
    note: string
  ): Promise<AxiosResponse<any>> {
    const axiosResponse = await axios.post(
      "https://plugin.tebex.io/gift-cards",
      {
        amount,
        note,
      },
      {
        headers: {
          "X-Tebex-Secret": process.env.STORE_SECRET_KEY.trim(),
          "content-type": "application/json",
        },
      }
    );

    return axiosResponse;
  }
}

export { TebexStore };
