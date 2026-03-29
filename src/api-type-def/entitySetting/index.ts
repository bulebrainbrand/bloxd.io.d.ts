import { EntityId, PlayerId } from "@type";
import {
  EntitySettings,
  SetTargetedPlayerSettingForEveryone,
  SetOtherEntitySetting,
  GetOtherEntitySetting,
  SetEveryoneSettingForPlayer,
} from "./entitySettings/index";
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
type RootSetTargetedPlayerSettingForEveryone = <
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
type RootSetEveryoneSettingForPlayer = <Setting extends keyof EntitySettings>(
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
type RootSetOtherEntitySetting = <Setting extends keyof EntitySettings>(
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
type RootSetOtherEntitySettings = (
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
type RootGetOtherEntitySetting = <Setting extends keyof EntitySettings>(
  relevantPlayerId: PlayerId,
  targetedEntityId: EntityId,
  settingName: Setting,
) => EntitySettings[Setting];

type SetEveryoneSettingForPlayerType = RootSetEveryoneSettingForPlayer &
  SetEveryoneSettingForPlayer["setEveryoneSettingForPlayer"];
type SetTargetedPlayerSettingForEveryoneType =
  RootSetTargetedPlayerSettingForEveryone &
    SetTargetedPlayerSettingForEveryone["setTargetedPlayerSettingForEveryone"];
type SetOtherEntitySettingType = RootSetOtherEntitySetting &
  SetOtherEntitySetting["setOtherEntitySetting"];
type GetOtherEntitySettingType = RootGetOtherEntitySetting &
  GetOtherEntitySetting["getOtherEntitySetting"];

declare const setEveryoneSettingForPlayer: SetEveryoneSettingForPlayerType;
declare const setTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryoneType;
declare const setOtherEntitySetting: SetOtherEntitySettingType;
declare const getOtherEntitySetting: GetOtherEntitySettingType;

export const EntitySettingApis = {
  setEveryoneSettingForPlayer,
  setTargetedPlayerSettingForEveryone,
  setOtherEntitySetting,
  getOtherEntitySetting,
};
export * from "./entitySettings/index";
