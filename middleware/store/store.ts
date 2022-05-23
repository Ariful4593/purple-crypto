import axios, { AxiosResponse } from "axios";

abstract class Store {
  public abstract createGiftCard(
    amount: number,
    note: string
  ): Promise<AxiosResponse<any>>;
}

export { Store };
