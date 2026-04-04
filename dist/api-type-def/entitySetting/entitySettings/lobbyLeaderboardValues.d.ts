import { EntityId, LobbyLeaderboardValues, PlayerId } from "@type";
/**
 *
 */
type ValueType = LobbyLeaderboardValues;
declare const name: "lobbyLeaderboardValues";
interface SetTargetedPlayerSettingForEveryone {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"lobbyLeaderboardValues"} settingName
     * @param {LobbyLeaderboardValues} settingValue
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
     * @param {"lobbyLeaderboardValues"} settingName
     * @param {LobbyLeaderboardValues} settingValue
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
     * @param {"lobbyLeaderboardValues"} settingName
     * @param {LobbyLeaderboardValues} settingValue
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
     * @param {"lobbyLeaderboardValues"} settingName
     * @returns {LobbyLeaderboardValues}
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
//# sourceMappingURL=lobbyLeaderboardValues.d.ts.map