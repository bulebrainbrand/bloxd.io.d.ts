import { Item, MobType } from "@type";
type SecondaryAttackItemNameDictionary = Record<MobType, Item | null>;
export type SecondaryAttackItemName<K extends MobType> = SecondaryAttackItemNameDictionary[K];
export {};
//# sourceMappingURL=secondaryAttackItemName.d.ts.map