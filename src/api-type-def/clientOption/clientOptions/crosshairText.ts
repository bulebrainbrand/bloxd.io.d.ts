import { PlayerId, CustomTextStyling } from "@type";

/**
 * Text to display by the crosshair
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"crosshairText"} option
   * @param {string | CustomTextStyling} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "crosshairText",
    value: string | CustomTextStyling,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"crosshairText"} option
   * @returns {string | CustomTextStyling}
   */
  getClientOption(
    playerId: PlayerId,
    option: "crosshairText",
  ): string | CustomTextStyling;
}

interface SetClientOptionToDefault {
  /**
   * set crosshairText option to default
   * crosshairText default is `""`
   *
   * option document:
   * Text to display by the crosshair
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"crosshairText"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "crosshairText"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "crosshairText";
  ValueType: ValueType;
};
export default ExportTypes;
