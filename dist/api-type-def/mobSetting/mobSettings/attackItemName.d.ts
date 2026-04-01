import { Item, MobType } from "../../../type/index";
type AttackItemNameDictionary = Record<MobType, Item | null>;
export type AttackItemName<K extends MobType> = AttackItemNameDictionary[K];
export {};
