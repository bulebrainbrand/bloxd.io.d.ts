import { MobType } from "@type";
import { Variation } from "./variation";
export type MobSettings<K extends MobType> = { variation: Variation<K> };
export * from "./variation";
