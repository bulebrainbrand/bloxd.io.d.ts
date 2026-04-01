import { EntityId, PlayerId, StringColor } from "@type";

/**
 * The colour of the player in the lobby leaderboard.
 * @type {StringColor}
 */
type ValueType = StringColor;

declare const name: "colorInLobbyLeaderboard";

interface SetTargetedPlayerSettingForEveryone {
  /**
   *
   * @param {PlayerId} targetedPlayerId
   * @param {"colorInLobbyLeaderboard"} settingName
   * @param {StringColor} settingValue
   * @param {boolean} [includeNewJoiners]
   */
  setTargetedPlayerSettingForEveryone(
    targetedPlayerId: PlayerId,
    settingName: typeof name,
    settingValue: ValueType,
    includeNewJoiners?: boolean,
  ): void;
}

interface SetEveryoneSettingForPlayer {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"colorInLobbyLeaderboard"} settingName
   * @param {StringColor} settingValue
   * @param {boolean} [includeNewJoiners]
   * @returns {void}
   */
  setEveryoneSettingForPlayer(
    playerId: PlayerId,
    settingName: typeof name,
    settingValue: ValueType,
    includeNewJoiners?: boolean,
  ): void;
}

interface SetOtherEntitySetting {
  /**
   *
   * @overload
   *
   * @param {PlayerId}
   * @param {"colorInLobbyLeaderboard"} settingName
   * @param {StringColor} settingValue
   * @returns {void}
   */

  setOtherEntitySetting(
    relevantPlayerId: PlayerId,
    targetedEntityId: EntityId,
    settingName: typeof name,
    settingValue: ValueType,
  ): void;
}

interface GetOtherEntitySetting {
  /**
   *
   * @overload
   *
   * @param {PlayerId} relevantPlayerId
   * @param {EntityId} targetedEntityId
   * @param {"colorInLobbyLeaderboard"} settingName
   * @returns {StringColor}
   */
  getOtherEntitySetting(
    relevantPlayerId: PlayerId,
    targetedEntityId: EntityId,
    settingName: typeof name,
  ): ValueType;
}

type ExportTypes = {
  name: typeof name;
  ValueType: ValueType;
  SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone;
  SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer;
  SetOtherEntitySetting: SetOtherEntitySetting;
  GetOtherEntitySetting: GetOtherEntitySetting;
};

export default ExportTypes;
