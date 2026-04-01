import { MobType } from "@type";

type SwingArmOnSecondaryAttackDictionary = Record<MobType, boolean>;

export type SwingArmOnSecondaryAttack<K extends MobType> = SwingArmOnSecondaryAttackDictionary[K];