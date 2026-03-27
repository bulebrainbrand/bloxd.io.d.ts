import { NormalApi } from "./normal";
import { ClientOptionApi } from "./clientOption";
import { EntitySettingApi } from "./entitySetting";
import { MobSettingApi } from "./mobSetting";
import { MargeObject } from "../utilType";

export type Api = MargeObject<
  NormalApi & ClientOptionApi & EntitySettingApi & MobSettingApi
>;
