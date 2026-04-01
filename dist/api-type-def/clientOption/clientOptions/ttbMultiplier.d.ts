import { PlayerId } from "../../../type/index";
/**
 * Multiplier for the time to break any block
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"ttbMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "ttbMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"ttbMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "ttbMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     * set ttbMultiplier option to default
     * ttbMultiplier default is `1`
     *
     * option document:
     * Multiplier for the time to break any block
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"ttbMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "ttbMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "ttbMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
