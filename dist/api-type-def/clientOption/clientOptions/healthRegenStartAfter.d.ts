import { PlayerId } from "../../../type/index";
/**
 * How long after a player receives damage to start regen again
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenStartAfter"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "healthRegenStartAfter", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenStartAfter"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "healthRegenStartAfter"): number;
}
interface SetClientOptionToDefault {
    /**
     * set healthRegenStartAfter option to default
     * healthRegenStartAfter default is `5000`
     *
     * option document:
     * How long after a player receives damage to start regen again
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenStartAfter"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "healthRegenStartAfter"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "healthRegenStartAfter";
    ValueType: ValueType;
};
export default ExportTypes;
