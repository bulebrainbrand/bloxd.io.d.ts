import { PlayerId, CustomTextStyling } from "../../../type/index";
/**
 * Text to display in the right info box
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"RightInfoText"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "RightInfoText", value: string | CustomTextStyling): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"RightInfoText"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId, option: "RightInfoText"): string | CustomTextStyling;
}
interface SetClientOptionToDefault {
    /**
     * set RightInfoText option to default
     * RightInfoText default is `""`
     *
     * option document:
     * Text to display in the right info box
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"RightInfoText"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "RightInfoText"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "RightInfoText";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=RightInfoText.d.ts.map