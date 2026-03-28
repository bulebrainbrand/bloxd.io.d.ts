import { MobSettings } from "./mobSettings/index";
import { MobId, MobType } from "@type";

/**
 * Returns the current default value for a mob setting.
 *
 * @param {TMobType} mobType
 * @param {TMobSetting} setting
 * @returns {MobSettings<TMobType>[TMobSetting]}
 */
type GetDefaultMobSetting = <
  TMobType extends MobType,
  TMobSetting extends keyof MobSettings<TMobType>,
>(
  mobType: TMobType,
  setting: TMobSetting,
) => MobSettings<TMobType>[TMobSetting];

/**
 * Set the default value for a mob setting.
 *
 * @param {TMobType} mobType
 * @param {TMobSetting} setting
 * @param {MobSettings<TMobType>[TMobSetting]} value
 * @returns {void}
 */
type SetDefaultMobSetting = <
  TMobType extends MobType,
  TMobSetting extends keyof MobSettings<TMobType>,
>(
  mobType: TMobType,
  setting: TMobSetting,
  value: MobSettings<TMobType>[TMobSetting],
) => void;

/**
 * Get the current value of a mob setting for a specific mob.
 *
 * @param {MobId} mobId
 * @param {TMobSetting} setting
 * @param {boolean} [returnDefaultIfNotOverridden] - If true, return the default setting if not overridden.
 * @returns {MobSettings<MobType>[TMobSetting]}
 */
type GetMobSetting = <TMobSetting extends keyof MobSettings<MobType>>(
  mobId: MobId,
  setting: TMobSetting,
  returnDefaultIfNotOverridden?: boolean,
) => MobSettings<MobType>[TMobSetting];

/**
 * Set the current value of a mob setting for a specific mob.
 *
 * @param {MobId} mobId
 * @param {TMobSetting} setting
 * @param {MobSettings<MobType>[TMobSetting]} value
 * @returns {void}
 */
type SetMobSetting = <TMobSetting extends keyof MobSettings<MobType>>(
  mobId: MobId,
  setting: TMobSetting,
  value: MobSettings<MobType>[TMobSetting],
) => void;

export type MobSettingApi = {
  getDefaultMobSetting: GetDefaultMobSetting;
  setDefaultMobSetting: SetDefaultMobSetting;
  getMobSetting: SetMobSetting;
  setMobSetting: SetMobSetting;
};

export * from "./mobSettings/index";
