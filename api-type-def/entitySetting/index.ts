import { EntityId, PlayerId } from "../../type";
import { EntitySettings } from "./entitySettings";
type Setting = keyof EntitySettings;

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
type SetTargetedPlayerSettingForEveryone = <
  Setting extends keyof EntitySettings,
>(
  targetedPlayerId: PlayerId,
  settingName: Setting,
  settingValue: EntitySettings[Setting],
  includeNewJoiners?: boolean,
) => void;

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
type SetEveryoneSettingForPlayer = <Setting extends keyof EntitySettings>(
  playerId: PlayerId,
  settingName: Setting,
  settingValue: EntitySettings[Setting],
  includeNewJoiners?: boolean,
) => void;

/**
 * Set a player's other-entity setting for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Setting} settingName
 * @param {EntitySettings[Setting]} settingValue
 * @returns {void}
 */
type SetOtherEntitySetting = <Setting extends keyof EntitySettings>(
  relevantPlayerId: PlayerId,
  targetedEntityId: EntityId,
  settingName: Setting,
  settingValue: EntitySettings[Setting],
) => void;

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

/**
 * Get the value of a player's other-entity setting for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Setting} settingName
 * @returns {EntitySettings[Setting]}
 */
type GetOtherEntitySetting = <Setting extends keyof EntitySettings>(
  relevantPlayerId: PlayerId,
  targetedEntityId: EntityId,
  settingName: Setting,
) => EntitySettings[Setting];

export type EntitySettingApi = {
  setTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone;
  setEveryoneSettingForPlayer: SetEveryoneSettingForPlayer;
  setOtherEntitySetting: SetOtherEntitySetting;
  setOtherEntitySettings: SetOtherEntitySettings;
  getOtherEntitySetting: GetOtherEntitySetting;
};

export {
  SetTargetedPlayerSettingForEveryone,
  SetEveryoneSettingForPlayer,
  SetOtherEntitySetting,
  SetOtherEntitySettings,
  GetOtherEntitySetting,
};

export * from "./entitySettings";
