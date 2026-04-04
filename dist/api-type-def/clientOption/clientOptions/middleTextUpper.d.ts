import { PlayerId, CustomTextStyling } from "@type";
/**
 * Large text to display in the middle of the screen
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextUpper"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "middleTextUpper", value: string | CustomTextStyling): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextUpper"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId, option: "middleTextUpper"): string | CustomTextStyling;
}
interface SetClientOptionToDefault {
    /**
     * set middleTextUpper option to default
     * middleTextUpper default is `""`
     *
     * option document:
     * Large text to display in the middle of the screen
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextUpper"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "middleTextUpper"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "middleTextUpper";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=middleTextUpper.d.ts.map