import { MobType, SoundName } from "@type";

type IdleSoundDictionary = Record<MobType, SoundName | string | null>;

export type IdleSound<K extends MobType> = IdleSoundDictionary[K];
