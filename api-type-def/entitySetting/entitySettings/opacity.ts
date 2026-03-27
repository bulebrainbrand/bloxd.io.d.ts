import { EntityId, PlayerId } from "../../../type";

/**
 * Opacity of the entity
 * Fractional values will use dithering
 * 0 opacity will hide the entity but not its name tag
 * @type {number}
 * @default 1
 */
export type Opacity = number;

export interface SetTargetedPlayerSettingForEveryone {
  /**
   *
   * @overload
   *
   * @param {PlayerId} targetedPlayerId
   * @param {"opacity"} settingName
   * @param {Opacity} settingValue
   * @param {boolean} [includeNewJoiners]
   * @returns {void}
   */
  setTargetedPlayerSettingForEveryone(
    targetedPlayerId: PlayerId,
    settingName: "opacity",
    settingValue: Opacity,
    includeNewJoiners?: boolean,
  ): void;
}

export interface SetEveryoneSettingForPlayer {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"opacity"} settingName
   * @param {Opacity} settingValue
   * @param {boolean} [includeNewJoiners]
   * @returns {void}
   */
  setEveryoneSettingForPlayer(
    playerId: PlayerId,
    settingName: "opacity",
    settingValue: Opacity,
    includeNewJoiners?: boolean,
  ): void;
}

export interface SetOtherEntitySetting {
  /**
   *
   * @overload
   *
   * @param {PlayerId}
   * @param {"opacity"} settingName
   * @param {Opacity} settingValue
   * @param {boolean} [includeNewJoiners]
   * @returns {void}
   */

  setOtherEntitySetting(
    relevantPlayerId: PlayerId,
    targetedEntityId: EntityId,
    settingName: "opacity",
    settingValue: Opacity,
  ): void;
}

export interface GetOtherEntitySetting {
  /**
   *
   * @overload
   *
   * @param {PlayerId} relevantPlayerId
   * @param {EntityId} targetedEntityId
   * @param {"opacity"} settingName
   * @returns {void}
   */
  getOtherEntitySetting(
    relevantPlayerId: PlayerId,
    targetedEntityId: EntityId,
    settingName: "opacity",
  ): Opacity;
}
