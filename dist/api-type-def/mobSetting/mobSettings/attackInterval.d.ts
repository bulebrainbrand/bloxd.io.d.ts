import { MobType } from "../../../type/index";
type AttackIntervalDictionary = Record<MobType, number>;
export type AttackInterval<K extends MobType> = AttackIntervalDictionary[K];
export {};
//# sourceMappingURL=attackInterval.d.ts.map