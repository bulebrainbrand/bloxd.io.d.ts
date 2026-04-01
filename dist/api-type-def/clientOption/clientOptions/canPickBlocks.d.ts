import { PlayerId } from "../../../type/index";
/**
 * Whether the player can pick blocks (middle mouse click on PC), ignored if creative is false
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickBlocks"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canPickBlocks", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickBlocks"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canPickBlocks"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canPickBlocks option to default
     * canPickBlocks default is `true`
     *
     * option document:
     * Whether the player can pick blocks (middle mouse click on PC), ignored if creative is false
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickBlocks"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canPickBlocks"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canPickBlocks";
    ValueType: ValueType;
};
export default ExportTypes;
