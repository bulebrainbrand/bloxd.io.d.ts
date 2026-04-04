import { PlayerId } from "../../../type/index";
/**
 * Whether the player can use the alt action key (right click on PC)
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canAltAction"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canAltAction", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canAltAction"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canAltAction"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canAltAction option to default
     * canAltAction default is `true`
     *
     * option document:
     * Whether the player can use the alt action key (right click on PC)
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canAltAction"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canAltAction"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canAltAction";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=canAltAction.d.ts.map