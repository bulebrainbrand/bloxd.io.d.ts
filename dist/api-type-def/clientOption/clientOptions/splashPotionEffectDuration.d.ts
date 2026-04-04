import { PlayerId } from "@type";
/**
 * Duration of splash potion effects
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"splashPotionEffectDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "splashPotionEffectDuration", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"splashPotionEffectDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "splashPotionEffectDuration"): number;
}
interface SetClientOptionToDefault {
    /**
     * set splashPotionEffectDuration option to default
     * splashPotionEffectDuration default is `8000`
     *
     * option document:
     * Duration of splash potion effects
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"splashPotionEffectDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "splashPotionEffectDuration"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "splashPotionEffectDuration";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=splashPotionEffectDuration.d.ts.map