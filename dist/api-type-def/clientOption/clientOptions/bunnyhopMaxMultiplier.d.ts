import { PlayerId } from "@type";
/**
 * Maximum multiplier for jump height when bunnyhopping
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"bunnyhopMaxMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "bunnyhopMaxMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"bunnyhopMaxMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "bunnyhopMaxMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     * set bunnyhopMaxMultiplier option to default
     * bunnyhopMaxMultiplier default is `1.3`
     *
     * option document:
     * Maximum multiplier for jump height when bunnyhopping
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"bunnyhopMaxMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "bunnyhopMaxMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "bunnyhopMaxMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=bunnyhopMaxMultiplier.d.ts.map