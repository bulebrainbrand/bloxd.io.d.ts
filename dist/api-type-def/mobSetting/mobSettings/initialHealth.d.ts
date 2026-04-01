import { MobType } from "../../../type/index";

type InitialHealthDictionary = Record<MobType, number>;

export type InitialHealth<K extends MobType> = InitialHealthDictionary[K];
