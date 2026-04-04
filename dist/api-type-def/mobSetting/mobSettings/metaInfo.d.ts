import { MobType } from "@type";
type MetaInfoDictionary = Record<MobType, string>;
export type MetaInfo<K extends MobType> = MetaInfoDictionary[K];
export {};
//# sourceMappingURL=metaInfo.d.ts.map