import { Item, MobType } from "../../../type/index";
type SecondaryAttackItemNameDictionary = Record<MobType, Item | null>;
export type SecondaryAttackItemName<K extends MobType> = SecondaryAttackItemNameDictionary[K];
export {};
