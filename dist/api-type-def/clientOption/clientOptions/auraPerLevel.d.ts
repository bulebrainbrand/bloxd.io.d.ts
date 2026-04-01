import { PlayerId } from "../../../type/index";
/**
 * How much Aura XP is required per level.
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"auraPerLevel"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "auraPerLevel", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"auraPerLevel"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "auraPerLevel"): number;
}
interface SetClientOptionToDefault {
    /**
     * set auraPerLevel option to default
     * auraPerLevel default is `100`
     *
     * option document:
     * How much Aura XP is required per level.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"auraPerLevel"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "auraPerLevel"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "auraPerLevel";
    ValueType: ValueType;
};
export default ExportTypes;
