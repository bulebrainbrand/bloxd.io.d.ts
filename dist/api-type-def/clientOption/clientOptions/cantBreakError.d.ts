import { PlayerId, CustomTextStyling } from "../../../type/index";
/**
 * Error message for when the player fails to break a block
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBreakError"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "cantBreakError", value: string | CustomTextStyling): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBreakError"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId, option: "cantBreakError"): string | CustomTextStyling;
}
interface SetClientOptionToDefault {
    /**
     * set cantBreakError option to default
     * cantBreakError default is `null`
     *
     * option document:
     * Error message for when the player fails to break a block
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBreakError"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "cantBreakError"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "cantBreakError";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=cantBreakError.d.ts.map