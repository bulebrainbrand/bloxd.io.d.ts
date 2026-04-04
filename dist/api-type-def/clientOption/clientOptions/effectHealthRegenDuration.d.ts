import { PlayerId } from "@type";
/**
 * Duration of +health regen effect from cherry
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"effectHealthRegenDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "effectHealthRegenDuration", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"effectHealthRegenDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "effectHealthRegenDuration"): number;
}
interface SetClientOptionToDefault {
    /**
     * set effectHealthRegenDuration option to default
     * effectHealthRegenDuration default is `5000`
     *
     * option document:
     * Duration of +health regen effect from cherry
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"effectHealthRegenDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "effectHealthRegenDuration"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "effectHealthRegenDuration";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=effectHealthRegenDuration.d.ts.map