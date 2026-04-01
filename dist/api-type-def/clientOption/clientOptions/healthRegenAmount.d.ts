import { PlayerId } from "../../../type/index";
/**
 * Fraction of max health that regens each regen tick
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenAmount"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "healthRegenAmount", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenAmount"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "healthRegenAmount"): number;
}
interface SetClientOptionToDefault {
    /**
     * set healthRegenAmount option to default
     * healthRegenAmount default is `0.05`
     *
     * option document:
     * Fraction of max health that regens each regen tick
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenAmount"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "healthRegenAmount"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "healthRegenAmount";
    ValueType: ValueType;
};
export default ExportTypes;
