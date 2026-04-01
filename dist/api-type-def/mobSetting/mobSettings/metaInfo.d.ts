import { MobType } from "../../../type/index";
type MetaInfoDictionary = Record<MobType, string>;
export type MetaInfo<K extends MobType> = MetaInfoDictionary[K];
export {};
