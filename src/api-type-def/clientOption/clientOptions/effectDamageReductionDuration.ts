import { PlayerId } from "@type";

/**
 * Duration of +damage reduction effect from pear
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectDamageReductionDuration"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "effectDamageReductionDuration",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectDamageReductionDuration"} option
   * @returns {number}
   */
  getClientOption(
    playerId: PlayerId,
    option: "effectDamageReductionDuration",
  ): number;
}

interface SetClientOptionToDefault {
  /**
   * set effectDamageReductionDuration option to default
   * effectDamageReductionDuration default is `13000`
   *
   * option document:
   * Duration of +damage reduction effect from pear
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"effectDamageReductionDuration"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "effectDamageReductionDuration",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "effectDamageReductionDuration";
  ValueType: ValueType;
};
export default ExportTypes;
