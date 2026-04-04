import { PlayerId } from "../../../type/index";
/**
 * Whether the player can see name tags through walls
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canSeeNametagsThroughWalls"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canSeeNametagsThroughWalls", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canSeeNametagsThroughWalls"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canSeeNametagsThroughWalls"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canSeeNametagsThroughWalls option to default
     * canSeeNametagsThroughWalls default is `true`
     *
     * option document:
     * Whether the player can see name tags through walls
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canSeeNametagsThroughWalls"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canSeeNametagsThroughWalls"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canSeeNametagsThroughWalls";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=canSeeNametagsThroughWalls.d.ts.map