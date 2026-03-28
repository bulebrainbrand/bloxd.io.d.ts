import { EntityId, PlayerId } from "../../../type/index";
/**
 * Opacity of the entity
 * Fractional values will use dithering
 * 0 opacity will hide the entity but not its name tag
 * @type {number}
 * @default 1
 */
type ValueType = number;
interface SetTargetedPlayerSettingForEveryone {
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
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId, settingName: "opacity", settingValue: ValueType, includeNewJoiners?: boolean): void;
}
interface SetEveryoneSettingForPlayer {
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
    setEveryoneSettingForPlayer(playerId: PlayerId, settingName: "opacity", settingValue: ValueType, includeNewJoiners?: boolean): void;
}
interface SetOtherEntitySetting {
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
    setOtherEntitySetting(relevantPlayerId: PlayerId, targetedEntityId: EntityId, settingName: "opacity", settingValue: ValueType): void;
}
interface GetOtherEntitySetting {
    /**
     *
     * @overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"opacity"} settingName
     * @returns {void}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId, targetedEntityId: EntityId, settingName: "opacity"): ValueType;
}
type ExportTypes = {
    name: "opacity";
    ValueType: ValueType;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer;
    SetOtherEntitySetting: SetOtherEntitySetting;
    GetOtherEntitySetting: GetOtherEntitySetting;
};
export default ExportTypes;
