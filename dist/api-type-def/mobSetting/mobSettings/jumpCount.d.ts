import { MobType } from "@type";
type JumpCountDictionary = Record<MobType, number>;
export type JumpCount<K extends MobType> = JumpCountDictionary[K];
export {};
//# sourceMappingURL=jumpCount.d.ts.map