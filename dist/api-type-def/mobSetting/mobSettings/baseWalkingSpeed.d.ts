import { MobType } from "../../../type/index";
type BaseWalkingSpeedDictionary = Record<MobType, number>;
export type BaseWalkingSpeed<K extends MobType> = BaseWalkingSpeedDictionary[K];
export {};
//# sourceMappingURL=baseWalkingSpeed.d.ts.map