import { MobType, SoundName } from "@type";

type SecondaryAttackSoundDictionary = Record<
  MobType,
  SoundName | string | null
>;

export type SecondaryAttackSound<K extends MobType> =
  SecondaryAttackSoundDictionary[K];
