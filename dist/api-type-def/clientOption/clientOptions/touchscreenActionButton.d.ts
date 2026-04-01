import { PlayerId, CustomTextStyling } from "../../../type/index";
/**
 * The contents of the action button. Supports custom text styling. onTouchscreenActionButton will be called when button pressed.
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"touchscreenActionButton"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "touchscreenActionButton", value: string | CustomTextStyling): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"touchscreenActionButton"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId, option: "touchscreenActionButton"): string | CustomTextStyling;
}
interface SetClientOptionToDefault {
    /**
     * set touchscreenActionButton option to default
     * touchscreenActionButton default is `null`
     *
     * option document:
     * The contents of the action button. Supports custom text styling. onTouchscreenActionButton will be called when button pressed.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"touchscreenActionButton"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "touchscreenActionButton"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "touchscreenActionButton";
    ValueType: ValueType;
};
export default ExportTypes;
