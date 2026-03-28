import { EntityId, PlayerId } from "@type";
/**
 * Applies a colour tint to the entity when set, like the red tint when an entity gets hurt.
 * @type {string | null}
 * @default null
 */
type ValueType = string | null;
declare const name: "overlayColour";
interface SetTargetedPlayerSettingForEveryone {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"overlayColour"} settingName
     * @param {string | null} settingValue
     * @param {boolean} includeNewJoiners
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId, settingName: typeof name, settingValue: ValueType, includeNewJoiners?: boolean): void;
}
interface SetEveryoneSettingForPlayer {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"overlayColour"} settingName
     * @param {string | null} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId, settingName: typeof name, settingValue: ValueType, includeNewJoiners?: boolean): void;
}
interface SetOtherEntitySetting {
    /**
     *
     * @overload
     *
     * @param {PlayerId}
     * @param {"overlayColour"} settingName
     * @param {string | null} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId, targetedEntityId: EntityId, settingName: typeof name, settingValue: ValueType): void;
}
interface GetOtherEntitySetting {
    /**
     *
     * @overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"overlayColour"} settingName
     * @returns {string | null}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId, targetedEntityId: EntityId, settingName: typeof name): ValueType;
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
