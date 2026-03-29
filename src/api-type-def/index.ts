import { NormalApis } from "./normal/index";
import { ClientOptionApis } from "./clientOption/index";
import { EntitySettingApis } from "./entitySetting/index";
import { MobSettingApis } from "./mobSetting/index";
import { MargeObject } from "@type";

export const Apis = {
  ...NormalApis,
  ...ClientOptionApis,
  ...EntitySettingApis,
  ...MobSettingApis,
} as const;

export * from "./normal/index";
export * from "./clientOption/index";
export * from "./entitySetting/index";
export * from "./mobSetting/index";
