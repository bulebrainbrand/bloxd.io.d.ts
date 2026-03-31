import { ItemAttributes } from "./ItemAttributes";

export type ItemObject = {
  name: string;
  amount: number | null;
  attributes: ItemAttributes;
  typeObj: { stackable: boolean };
};
