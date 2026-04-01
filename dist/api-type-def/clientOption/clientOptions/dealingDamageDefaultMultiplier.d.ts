import { PlayerId } from "../../../type/index";
/**
 * Mult for when the player hits neither a leg or a head. Only applies to guns
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageDefaultMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "dealingDamageDefaultMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageDefaultMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "dealingDamageDefaultMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     * set dealingDamageDefaultMultiplier option to default
     * dealingDamageDefaultMultiplier default is `1`
     *
     * option document:
     * Mult for when the player hits neither a leg or a head. Only applies to guns
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageDefaultMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "dealingDamageDefaultMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "dealingDamageDefaultMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
