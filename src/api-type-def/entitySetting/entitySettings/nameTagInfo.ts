import { EntityId, NameTagInfo, PlayerId } from "@type";

/**
 * The name tag info of the player:
 * {
 *     backgroundColor?: string
 *     content?: StyledText[]
 *     subtitle?: StyledText[]
 *     subtitleBackgroundColor?: string
 * }
 * @type {NameTagInfo}
 */
type ValueType = NameTagInfo;

declare const name: "nameTagInfo";

interface SetTargetedPlayerSettingForEveryone {
  /**
   *
   * @param {PlayerId} targetedPlayerId
   * @param {"nameTagInfo"} settingName
   * @param {NameTagInfo} settingValue
   * @param {boolean} includeNewJoiners
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
   * @param {"nameTagInfo"} settingName
   * @param {NameTagInfo} settingValue
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
   * @param {"nameTagInfo"} settingName
   * @param {NameTagInfo} settingValue
   * @param {boolean} [includeNewJoiners]
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
   * @param {"nameTagInfo"} settingName
   * @returns {NameTagInfo}
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
