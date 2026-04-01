import { PlayerId } from "../../../type/index";
/**
 * Damage multiplier for all types of damage
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "dealingDamageMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "dealingDamageMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     * set dealingDamageMultiplier option to default
     * dealingDamageMultiplier default is `1`
     *
     * option document:
     * Damage multiplier for all types of damage
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "dealingDamageMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "dealingDamageMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
