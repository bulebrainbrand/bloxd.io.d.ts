import { MobType } from "@type";
type AttackRadiusDictionary = Record<MobType, number>;
export type AttackRadius<K extends MobType> = AttackRadiusDictionary[K];
export {};
//# sourceMappingURL=attackRadius.d.ts.map