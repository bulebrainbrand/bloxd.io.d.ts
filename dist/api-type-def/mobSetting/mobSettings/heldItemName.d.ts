import { Item, MobType } from "@type";
type HeldItemNameDictionary = Record<MobType, Item | null>;
export type HeldItemName<K extends MobType> = HeldItemNameDictionary[K];
export {};
//# sourceMappingURL=heldItemName.d.ts.map