import { PlayerId } from "@type";

/**
 * The target the compass will point towards
 * @type {string | number | number[]}
 */
type ValueType = string | number | number[];

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"compassTarget"} option
   * @param {string | number | number[]} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "compassTarget",
    value: string | number | number[],
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"compassTarget"} option
   * @returns {string | number | number[]}
   */
  getClientOption(
    playerId: PlayerId,
    option: "compassTarget",
  ): string | number | number[];
}

interface SetClientOptionToDefault {
  /**
   * set compassTarget option to default
   * compassTarget default is `[0, 0, 0]`
   *
   * option document:
   * The target the compass will point towards
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"compassTarget"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "compassTarget"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "compassTarget";
  ValueType: ValueType;
};
export default ExportTypes;
