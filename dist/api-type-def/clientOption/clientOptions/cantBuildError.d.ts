import { PlayerId, CustomTextStyling } from "@type";
/**
 * Error message for when the player fails to place a block
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBuildError"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "cantBuildError", value: string | CustomTextStyling): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBuildError"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId, option: "cantBuildError"): string | CustomTextStyling;
}
interface SetClientOptionToDefault {
    /**
     * set cantBuildError option to default
     * cantBuildError default is `null`
     *
     * option document:
     * Error message for when the player fails to place a block
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBuildError"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "cantBuildError"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "cantBuildError";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=cantBuildError.d.ts.map