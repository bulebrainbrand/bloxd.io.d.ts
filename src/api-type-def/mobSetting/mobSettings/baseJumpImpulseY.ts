import { MobType } from "@type";

type BaseJumpImpulseYDictionary = Record<MobType, number>;

export type BaseJumpImpulseY<K extends MobType> = BaseJumpImpulseYDictionary[K];
