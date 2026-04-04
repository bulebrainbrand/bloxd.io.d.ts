import { MobType } from "../../../type/index";
type NameDictionary = Record<MobType, string>;
export type Name<K extends MobType> = NameDictionary[K];
export {};
//# sourceMappingURL=name.d.ts.map