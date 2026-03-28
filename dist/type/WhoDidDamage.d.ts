import { Item, LifeformId } from ".";
export type WhoDidDamage = LifeformId | {
    lifeformId: LifeformId;
    withItem: Item;
};
