import { EntityId, PlayerId } from "@type";
/**
 *
 */
type ValueType = never;
declare const name: "example";
interface SetTargetedPlayerSettingForEveryone {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"example"} settingName
     * @param {!!--never--!!} settingValue
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
     * @param {"example"} settingName
     * @param {!!--never--!!} settingValue
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
     * @param {"example"} settingName
     * @param {!!--never--!!} settingValue
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
     * @param {"example"} settingName
     * @returns {!!--never--!!}
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
