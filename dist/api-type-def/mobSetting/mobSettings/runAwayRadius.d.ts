import { MobType } from "../../../type/index";
type RunAwayRadiusDictionary = Record<MobType, number>;
export type RunAwayRadius<K extends MobType> = RunAwayRadiusDictionary[K];
export {};
//# sourceMappingURL=runAwayRadius.d.ts.map