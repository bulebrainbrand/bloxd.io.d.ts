import { MobType } from "@type";
type SecondaryAttackImpulseDictionary = Record<MobType, number>;
export type SecondaryAttackImpulse<K extends MobType> = SecondaryAttackImpulseDictionary[K];
export {};
//# sourceMappingURL=secondaryAttackImpulse.d.ts.map