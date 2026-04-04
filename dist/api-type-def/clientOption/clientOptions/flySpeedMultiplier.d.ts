import { PlayerId } from "@type";
/**
 * Multiplier for the flying speed in creative mode
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"flySpeedMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "flySpeedMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"flySpeedMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "flySpeedMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     * set flySpeedMultiplier option to default
     * flySpeedMultiplier default is `1.5`
     *
     * option document:
     * Multiplier for the flying speed in creative mode
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"flySpeedMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "flySpeedMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "flySpeedMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=flySpeedMultiplier.d.ts.map