import { MobType, SoundName } from "@type";

type HurtSoundDictionary = Record<MobType, SoundName | string | null>;

export type HurtSound<K extends MobType> = HurtSoundDictionary[K];
