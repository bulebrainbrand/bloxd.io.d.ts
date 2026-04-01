import { PlayerId } from "../../../type/index";
/**
 * The maximum Aura Level attainable - Set to 0 to disable Aura XP
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxAuraLevel"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "maxAuraLevel", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxAuraLevel"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "maxAuraLevel"): number;
}
interface SetClientOptionToDefault {
    /**
     * set maxAuraLevel option to default
     * maxAuraLevel default is `0`
     *
     * option document:
     * The maximum Aura Level attainable - Set to 0 to disable Aura XP
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxAuraLevel"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "maxAuraLevel"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "maxAuraLevel";
    ValueType: ValueType;
};
export default ExportTypes;
