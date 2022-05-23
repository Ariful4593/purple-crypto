import axios, { AxiosResponse } from "axios";
import { Store } from "./store";

class CraftingStore extends Store {
  public async createGiftCard(
    amount: number,
    note: string
  ): Promise<AxiosResponse<any>> {
    const axiosResponse = await axios.post(
      "https://api.craftingstore.net/v7/gift-cards",
      {
        amount: Math.round(amount),
      },
      {
        headers: {
          token: process.env.STORE_SECRET_KEY.trim(),
          "content-type": "application/json",
        },
      }
    );
    return axiosResponse;
  }
}

export { CraftingStore };
