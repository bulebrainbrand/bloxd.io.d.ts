import { MobType } from "@type";

type SecondaryAttackDamageDictionary = Record<MobType, number>;

export type SecondaryAttackDamage<K extends MobType> =
  SecondaryAttackDamageDictionary[K];
