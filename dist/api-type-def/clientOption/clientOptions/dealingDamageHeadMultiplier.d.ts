import { PlayerId } from "../../../type/index";
/**
 * Damage multiplier for when the player hits a head. Only applies to guns
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageHeadMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "dealingDamageHeadMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageHeadMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "dealingDamageHeadMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     * set dealingDamageHeadMultiplier option to default
     * dealingDamageHeadMultiplier default is `1.75`
     *
     * option document:
     * Damage multiplier for when the player hits a head. Only applies to guns
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageHeadMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "dealingDamageHeadMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "dealingDamageHeadMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
