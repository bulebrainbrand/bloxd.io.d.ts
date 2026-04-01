import { PlayerId } from "@type";

/**
 * Duration of +speed effect from cracked coconut
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectSpeedDuration"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "effectSpeedDuration",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectSpeedDuration"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "effectSpeedDuration"): number;
}

interface SetClientOptionToDefault {
  /**
   * set effectSpeedDuration option to default
   * effectSpeedDuration default is `8000`
   *
   * option document:
   * Duration of +speed effect from cracked coconut
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectSpeedDuration"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "effectSpeedDuration",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "effectSpeedDuration";
  ValueType: ValueType;
};
export default ExportTypes;
