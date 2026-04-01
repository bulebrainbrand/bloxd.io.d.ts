import { PlayerId } from "../../../type/index";
/**
 * Maximum camera zoom level for the player
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxPlayerZoom"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "maxPlayerZoom", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxPlayerZoom"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "maxPlayerZoom"): number;
}
interface SetClientOptionToDefault {
    /**
     * set maxPlayerZoom option to default
     * maxPlayerZoom default is `15`
     *
     * option document:
     * Maximum camera zoom level for the player
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxPlayerZoom"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "maxPlayerZoom"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "maxPlayerZoom";
    ValueType: ValueType;
};
export default ExportTypes;
