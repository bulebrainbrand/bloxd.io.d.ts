import { PlayerId } from "@type";

/**
 * Whether to show the killfeed
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showKillfeed"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "showKillfeed",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showKillfeed"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "showKillfeed"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set showKillfeed option to default
   * showKillfeed default is `true`
   *
   * option document:
   * Whether to show the killfeed
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showKillfeed"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "showKillfeed"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "showKillfeed";
  ValueType: ValueType;
};
export default ExportTypes;
