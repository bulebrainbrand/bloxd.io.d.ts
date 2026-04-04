import { PlayerId } from "@type";
/**
 * Shield upon joining or respawning
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"initialShield"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "initialShield", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"initialShield"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "initialShield"): number;
}
interface SetClientOptionToDefault {
    /**
     * set initialShield option to default
     * initialShield default is `0`
     *
     * option document:
     * Shield upon joining or respawning
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"initialShield"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "initialShield"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "initialShield";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=initialShield.d.ts.map