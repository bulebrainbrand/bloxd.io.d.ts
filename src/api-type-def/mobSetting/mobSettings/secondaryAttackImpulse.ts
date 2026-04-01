import { MobType } from "@type";

type SecondaryAttackImpulseDictionary = Record<MobType, number>;

export type SecondaryAttackImpulse<K extends MobType> =
  SecondaryAttackImpulseDictionary[K];
