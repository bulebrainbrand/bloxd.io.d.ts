import { Item, MobType } from "@type";

type AttackItemNameDictionary = Record<MobType, Item | null>;

export type AttackItemName<K extends MobType> = AttackItemNameDictionary[K];
