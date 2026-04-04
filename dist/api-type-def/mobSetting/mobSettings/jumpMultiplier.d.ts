import { MobType } from "../../../type/index";
type JumpMultiplierDictionary = Record<MobType, number>;
export type JumpMultiplier<K extends MobType> = JumpMultiplierDictionary[K];
export {};
//# sourceMappingURL=jumpMultiplier.d.ts.map