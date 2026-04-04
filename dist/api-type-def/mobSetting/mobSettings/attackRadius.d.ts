import { MobType } from "../../../type/index";
type AttackRadiusDictionary = Record<MobType, number>;
export type AttackRadius<K extends MobType> = AttackRadiusDictionary[K];
export {};
//# sourceMappingURL=attackRadius.d.ts.map