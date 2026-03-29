import { Item, LifeformId } from "./index";
export type WhoDidDamage = LifeformId | {
    lifeformId: LifeformId;
    withItem: Item;
};
