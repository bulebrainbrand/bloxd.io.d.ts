import { MobType } from "../../../type/index";
type AttackImpulseDictionary = Record<MobType, number>;
export type AttackImpulse<K extends MobType> = AttackImpulseDictionary[K];
export {};
//# sourceMappingURL=attackImpulse.d.ts.map