import { Item, LifeformId } from "@type";

export type WhoDidDamage =
  | LifeformId
  | { lifeformId: LifeformId; withItem: Item };
