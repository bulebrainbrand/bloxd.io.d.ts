import { NormalApi } from "./normal";
import { ClientOptionApi } from "./clientOption";
import { EntitySettingApi } from "./entitySetting";
import { MobSettingApi } from "./mobSetting";
import { MargeObject } from "../type";

export type Api = MargeObject<
  NormalApi & ClientOptionApi & EntitySettingApi & MobSettingApi
>;

export * from "./normal";
export * from "./clientOption";
export * from "./entitySetting";
export * from "./mobSetting";
