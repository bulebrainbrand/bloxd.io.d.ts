import { PlayerId } from "../../../type/index";
/**
 * Fog distance which overrides graphic settings. Uses graphic settings if null.
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"fogChunkDistanceOverride"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "fogChunkDistanceOverride", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"fogChunkDistanceOverride"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "fogChunkDistanceOverride"): number;
}
interface SetClientOptionToDefault {
    /**
     * set fogChunkDistanceOverride option to default
     * fogChunkDistanceOverride default is `null`
     *
     * option document:
     * Fog distance which overrides graphic settings. Uses graphic settings if null.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"fogChunkDistanceOverride"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "fogChunkDistanceOverride"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "fogChunkDistanceOverride";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=fogChunkDistanceOverride.d.ts.map