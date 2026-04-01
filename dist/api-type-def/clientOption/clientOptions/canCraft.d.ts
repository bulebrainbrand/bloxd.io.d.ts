import { PlayerId } from "../../../type/index";
/**
 * Whether to allow the player to craft items
 * useFullInventory must be true for this to work
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canCraft"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canCraft", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canCraft"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canCraft"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canCraft option to default
     * canCraft default is `true`
     *
     * option document:
     * Whether to allow the player to craft items
     * useFullInventory must be true for this to work
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canCraft"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canCraft"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canCraft";
    ValueType: ValueType;
};
export default ExportTypes;
