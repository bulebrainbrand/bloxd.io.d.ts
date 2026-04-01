import { MobType } from "../../../type/index";
type BaseRunningSpeedDictionary = Record<MobType, number>;
export type BaseRunningSpeed<K extends MobType> = BaseRunningSpeedDictionary[K];
export {};
