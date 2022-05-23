import { AxiosResponse } from "axios";
import { Store } from "./store";
import { CraftingStore } from "./craftingStore";
import { TebexStore } from "./tebexStore";

const createStore = (): Store => {
  const store = process.env.STORE_NAME.toUpperCase().trim();
  const apiKey = process.env.STORE_SECRET_KEY.trim();

  console.log(`apiKey = ${apiKey}`);

  if (store === "TEBEX") {
    return new TebexStore();
  }

  if (store === "CRAFTING_STORE") {
    return new CraftingStore();
  }
};

const createGiftCard = async (
  amount: number,
  note: string
): Promise<AxiosResponse<any>> => {
  const store = createStore();
  const promise = await store.createGiftCard(amount, note);

  return promise;
};

export { createGiftCard };
