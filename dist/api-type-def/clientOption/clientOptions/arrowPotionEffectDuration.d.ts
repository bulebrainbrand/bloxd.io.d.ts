import { PlayerId } from "../../../type/index";
/**
 * Duration of arrow potion effects
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"arrowPotionEffectDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "arrowPotionEffectDuration", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"arrowPotionEffectDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "arrowPotionEffectDuration"): number;
}
interface SetClientOptionToDefault {
    /**
     * set arrowPotionEffectDuration option to default
     * arrowPotionEffectDuration default is `6000`
     *
     * option document:
     * Duration of arrow potion effects
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"arrowPotionEffectDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "arrowPotionEffectDuration"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "arrowPotionEffectDuration";
    ValueType: ValueType;
};
export default ExportTypes;
