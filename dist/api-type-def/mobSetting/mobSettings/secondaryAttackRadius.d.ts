import { MobType } from "@type";
type SecondaryAttackRadiusDictionary = Record<MobType, number>;
export type SecondaryAttackRadius<K extends MobType> = SecondaryAttackRadiusDictionary[K];
export {};
//# sourceMappingURL=secondaryAttackRadius.d.ts.map