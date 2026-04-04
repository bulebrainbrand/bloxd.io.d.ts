import { PlayerId } from "../../../type/index";
/**
 * If set, clients will only be able to see the closest x players (good for client perf in games with many players)
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"numClosestPlayersVisible"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "numClosestPlayersVisible", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"numClosestPlayersVisible"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "numClosestPlayersVisible"): number;
}
interface SetClientOptionToDefault {
    /**
     * set numClosestPlayersVisible option to default
     * numClosestPlayersVisible default is `null`
     *
     * option document:
     * If set, clients will only be able to see the closest x players (good for client perf in games with many players)
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"numClosestPlayersVisible"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "numClosestPlayersVisible"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "numClosestPlayersVisible";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=numClosestPlayersVisible.d.ts.map