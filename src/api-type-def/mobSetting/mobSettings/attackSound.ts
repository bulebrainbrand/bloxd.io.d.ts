import { MobType, SoundName } from "@type";

type AttackSoundDictionary = Record<MobType, SoundName | null>;

export type AttackSound<K extends MobType> = AttackSoundDictionary[K];
