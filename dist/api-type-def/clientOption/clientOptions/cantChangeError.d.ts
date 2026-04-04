import { PlayerId, CustomTextStyling } from "@type";
/**
 * Error message for when the player fails to change a block
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantChangeError"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "cantChangeError", value: string | CustomTextStyling): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantChangeError"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId, option: "cantChangeError"): string | CustomTextStyling;
}
interface SetClientOptionToDefault {
    /**
     * set cantChangeError option to default
     * cantChangeError default is `"You cannot modify this block"`
     *
     * option document:
     * Error message for when the player fails to change a block
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"cantChangeError"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "cantChangeError"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "cantChangeError";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=cantChangeError.d.ts.map