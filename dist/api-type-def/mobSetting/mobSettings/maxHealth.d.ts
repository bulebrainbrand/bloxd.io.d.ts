import { MobType } from "../../../type/index";
type MaxHealthDictionary = Record<MobType, number>;
export type MaxHealth<K extends MobType> = MaxHealthDictionary[K];
export {};
//# sourceMappingURL=maxHealth.d.ts.map