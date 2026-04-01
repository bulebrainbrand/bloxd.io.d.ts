import { MobType } from "@type";

type BaseJumpImpulseXZDictionary = Record<MobType, number>;

export type BaseJumpImpulseXZ<K extends MobType> =
  BaseJumpImpulseXZDictionary[K];
