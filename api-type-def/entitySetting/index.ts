import { EntityId, PlayerId } from "../../type";
import { AllValue } from "../../utilType";
import { EntitySettings } from "./entitySettings";
type Setting = keyof EntitySettings;
type AllSetTargetedPlayerSettingForEveryoneFuncTypeIncludeObject = {
  [Setting in keyof EntitySettings]: (
    targetedPlayerId: PlayerId,
    settingName: Setting,
    settingvalue: EntitySettings[Setting],
    includeNewJoiners?: boolean,
  ) => void;
};

/**
 * Set every player's other-entity setting to a specific value for a particular player.
 * includeNewJoiners=true means that new players joining the game will also have this other player setting applied.
 *
 * @param {PlayerId} targetedPlayerId
 * @param {Setting} settingName
 * @param {EntitySettings[Setting]} settingValue
 * @param {boolean} [includeNewJoiners]
 * @returns {void}
 */
type SetTargetedPlayerSettingForEveryone =
  AllValue<AllSetTargetedPlayerSettingForEveryoneFuncTypeIncludeObject>;

type AllSetEveryoneSettingForPlayerFuncTypeIncludeObject = {
  [Setting in keyof EntitySettings]: (
    playerId: PlayerId,
    settingName: Setting,
    settingvalue: EntitySettings[Setting],
    includeNewJoiners?: boolean,
  ) => void;
};
/**
 * Set a player's other-entity setting for every lifeform in the game.
 * includeNewJoiners=true means that the player will have the setting applied to new joiners.
 *
 * @param {PlayerId} playerId
 * @param {Setting} settingName
 * @param {EntitySettings[Setting]} settingValue
 * @param {boolean} [includeNewJoiners]
 * @returns {void}
 */
type SetEveryoneSettingForPlayer =
  AllValue<AllSetEveryoneSettingForPlayerFuncTypeIncludeObject>;

type AllSetOtherEntitySettingFuncTypeIncludeObject = {
  [Setting in keyof EntitySettings]: (
    relevantPlayerId: PlayerId,
    targetedEntityId: EntityId,
    settingName: Setting,
    settingvalue: EntitySettings[Setting],
  ) => void;
};
/**
 * Set a player's other-entity setting for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Setting} settingName
 * @param {OtherEntitySettings[Setting]} settingValue
 * @returns {void}
 */
type SetOtherEntitySetting =
  AllValue<AllSetOtherEntitySettingFuncTypeIncludeObject>;

/**
 * Set many of a player's other-entity settings for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Partial<EntitySettings>} settingsObject
 * @returns {void}
 */
type SetOtherEntitySettings = (
  relevantPlayerId: PlayerId,
  targetedEntityId: EntityId,
  settingsObject: Partial<EntitySettings>,
) => void;

type AllGetOtherEntitySettingFuncTypeIncludeObject = {
  [Setting in keyof EntitySettings]: (
    relevantPlayerId: PlayerId,
    targetedEntityId: EntityId,
    settingName: Setting,
  ) => EntitySettings[Setting];
};

/**
 * Get the value of a player's other-entity setting for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Setting} settingName
 * @returns {OtherEntitySettings[Setting]}
 */
type GetOtherEntitySetting =
  AllValue<AllGetOtherEntitySettingFuncTypeIncludeObject>;

export type EntitySettingApi = {
  setTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone;
  setEveryoneSettingForPlayer: SetEveryoneSettingForPlayer;
  setOtherEntitySetting: SetOtherEntitySetting;
  setOtherEntitySettings: SetOtherEntitySettings;
  getOtherEntitySetting: GetOtherEntitySetting;
};

export {
  SetEveryoneSettingForPlayer,
  SetOtherEntitySetting,
  SetOtherEntitySettings,
  GetOtherEntitySetting,
};

export * from "./entitySettings";
