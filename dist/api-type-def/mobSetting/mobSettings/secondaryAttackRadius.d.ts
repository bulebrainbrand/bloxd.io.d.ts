import { MobType } from "../../../type/index";
type SecondaryAttackRadiusDictionary = Record<MobType, number>;
export type SecondaryAttackRadius<K extends MobType> = SecondaryAttackRadiusDictionary[K];
export {};
