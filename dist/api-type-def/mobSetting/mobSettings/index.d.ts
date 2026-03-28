import { MobType } from "../../../type/index";
import { Variation } from "./variation";
export type MobSettings<K extends MobType> = {
    variation: Variation<K>;
};
export * from "./variation";
