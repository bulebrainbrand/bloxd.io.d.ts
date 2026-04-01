import { PlayerId } from "../../../type/index";
/**
 * Maximum shield the player can have
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxShield"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "maxShield", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxShield"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "maxShield"): number;
}
interface SetClientOptionToDefault {
    /**
     * set maxShield option to default
     * maxShield default is `100`
     *
     * option document:
     * Maximum shield the player can have
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxShield"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "maxShield"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "maxShield";
    ValueType: ValueType;
};
export default ExportTypes;
