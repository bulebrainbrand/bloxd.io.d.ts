import { EntityId, PlayerId } from "@type";

/**
 * Whether the entity can attack other entities, ignored if the targeted entity is invincible
 * @type {boolean}
 */
type ValueType = boolean;

declare const name: "canAttack";

interface SetTargetedPlayerSettingForEveryone {
  /**
   *
   * @param {PlayerId} targetedPlayerId
   * @param {"canAttack"} settingName
   * @param {boolean} settingValue
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
   * @param {"canAttack"} settingName
   * @param {boolean} settingValue
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
   * @param {"canAttack"} settingName
   * @param {boolean} settingValue
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
   * @param {"canAttack"} settingName
   * @returns {boolean}
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
