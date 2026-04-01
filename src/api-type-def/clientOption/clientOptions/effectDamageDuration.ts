import { PlayerId } from "@type";

/**
 * Duration of the +damage effect from plum
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectDamageDuration"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "effectDamageDuration",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectDamageDuration"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "effectDamageDuration"): number;
}

interface SetClientOptionToDefault {
  /**
   * set effectDamageDuration option to default
   * effectDamageDuration default is `8000`
   *
   * option document:
   * Duration of the +damage effect from plum
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectDamageDuration"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "effectDamageDuration",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "effectDamageDuration";
  ValueType: ValueType;
};
export default ExportTypes;
