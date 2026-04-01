import { PlayerId } from "@type";

/**
 * Whether to show the progress bar
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showProgressBar"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "showProgressBar",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showProgressBar"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "showProgressBar"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set showProgressBar option to default
   * showProgressBar default is `false`
   *
   * option document:
   * Whether to show the progress bar
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showProgressBar"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "showProgressBar"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "showProgressBar";
  ValueType: ValueType;
};
export default ExportTypes;
