import { PlayerId } from "@type";

/**
 * Duration of potion effects
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"potionEffectDuration"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "potionEffectDuration",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"potionEffectDuration"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "potionEffectDuration"): number;
}

interface SetClientOptionToDefault {
  /**
   * set potionEffectDuration option to default
   * potionEffectDuration default is `12000`
   *
   * option document:
   * Duration of potion effects
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"potionEffectDuration"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "potionEffectDuration",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "potionEffectDuration";
  ValueType: ValueType;
};
export default ExportTypes;
