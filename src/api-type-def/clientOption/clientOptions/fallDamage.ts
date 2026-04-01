import { PlayerId } from "@type";

/**
 * Whether to deal damage to the player when they fall
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"fallDamage"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "fallDamage",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"fallDamage"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "fallDamage"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set fallDamage option to default
   * fallDamage default is `false`
   *
   * option document:
   * Whether to deal damage to the player when they fall
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"fallDamage"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "fallDamage"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "fallDamage";
  ValueType: ValueType;
};
export default ExportTypes;
