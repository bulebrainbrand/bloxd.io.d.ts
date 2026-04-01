import { PlayerId } from "../../../type/index";
/**
 * Whether to allow the player to pick up items
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickUpItems"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canPickUpItems", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickUpItems"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canPickUpItems"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canPickUpItems option to default
     * canPickUpItems default is `true`
     *
     * option document:
     * Whether to allow the player to pick up items
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickUpItems"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canPickUpItems"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canPickUpItems";
    ValueType: ValueType;
};
export default ExportTypes;
