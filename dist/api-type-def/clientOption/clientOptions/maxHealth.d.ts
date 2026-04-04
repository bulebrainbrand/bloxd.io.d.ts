import { PlayerId } from "../../../type/index";
/**
 * Maximum health the player can have
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxHealth"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "maxHealth", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxHealth"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "maxHealth"): number;
}
interface SetClientOptionToDefault {
    /**
     * set maxHealth option to default
     * maxHealth default is `100`
     *
     * option document:
     * Maximum health the player can have
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"maxHealth"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "maxHealth"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "maxHealth";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=maxHealth.d.ts.map