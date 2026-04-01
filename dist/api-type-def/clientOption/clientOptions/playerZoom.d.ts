import { PlayerId } from "../../../type/index";
/**
 * Default camera zoom level for the player
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"playerZoom"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "playerZoom", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"playerZoom"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "playerZoom"): number;
}
interface SetClientOptionToDefault {
    /**
     * set playerZoom option to default
     * playerZoom default is `0`
     *
     * option document:
     * Default camera zoom level for the player
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"playerZoom"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "playerZoom"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "playerZoom";
    ValueType: ValueType;
};
export default ExportTypes;
