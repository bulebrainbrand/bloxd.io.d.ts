import { PlayerId, CustomTextStyling } from "@type";

/**
 * Small text to display in the middle of the screen
 * @type {string | CustomTextStyling}
 */
type ValueType = string | CustomTextStyling;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"middleTextLower"} option
   * @param {string | CustomTextStyling} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "middleTextLower",
    value: string | CustomTextStyling,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"middleTextLower"} option
   * @returns {string | CustomTextStyling}
   */
  getClientOption(
    playerId: PlayerId,
    option: "middleTextLower",
  ): string | CustomTextStyling;
}

interface SetClientOptionToDefault {
  /**
   * set middleTextLower option to default
   * middleTextLower default is `""`
   *
   * option document:
   * Small text to display in the middle of the screen
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"middleTextLower"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "middleTextLower"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "middleTextLower";
  ValueType: ValueType;
};
export default ExportTypes;
