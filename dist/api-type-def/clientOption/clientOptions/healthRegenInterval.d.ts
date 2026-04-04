import { PlayerId } from "../../../type/index";
/**
 * How often health regen is ticked
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenInterval"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "healthRegenInterval", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenInterval"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "healthRegenInterval"): number;
}
interface SetClientOptionToDefault {
    /**
     * set healthRegenInterval option to default
     * healthRegenInterval default is `4000`
     *
     * option document:
     * How often health regen is ticked
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenInterval"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "healthRegenInterval"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "healthRegenInterval";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=healthRegenInterval.d.ts.map