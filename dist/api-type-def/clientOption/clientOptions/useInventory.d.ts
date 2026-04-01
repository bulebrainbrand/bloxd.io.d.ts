import { PlayerId } from "../../../type/index";
/**
 * Whether to allow the player to use the inventory
 * Disabling this will also disable the hotbar
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"useInventory"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "useInventory", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"useInventory"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "useInventory"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set useInventory option to default
     * useInventory default is `true`
     *
     * option document:
     * Whether to allow the player to use the inventory
     * Disabling this will also disable the hotbar
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"useInventory"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "useInventory"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "useInventory";
    ValueType: ValueType;
};
export default ExportTypes;
