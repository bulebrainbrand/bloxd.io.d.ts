import { PlayerId } from "../../../type/index";
/**
 * Whether the player can move items in their inventory, only applicable if useInventory is true
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"inventoryItemsMoveable"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "inventoryItemsMoveable", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"inventoryItemsMoveable"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "inventoryItemsMoveable"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set inventoryItemsMoveable option to default
     * inventoryItemsMoveable default is `true`
     *
     * option document:
     * Whether the player can move items in their inventory, only applicable if useInventory is true
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"inventoryItemsMoveable"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "inventoryItemsMoveable"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "inventoryItemsMoveable";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=inventoryItemsMoveable.d.ts.map