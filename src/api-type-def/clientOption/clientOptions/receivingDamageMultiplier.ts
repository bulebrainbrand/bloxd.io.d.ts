import { PlayerId } from "@type";

/**
 * Damage multiplier for all types of incoming damage
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"receivingDamageMultiplier"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "receivingDamageMultiplier",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"receivingDamageMultiplier"} option
   * @returns {number}
   */
  getClientOption(
    playerId: PlayerId,
    option: "receivingDamageMultiplier",
  ): number;
}

interface SetClientOptionToDefault {
  /**
   * set receivingDamageMultiplier option to default
   * receivingDamageMultiplier default is `1`
   *
   * option document:
   * Damage multiplier for all types of incoming damage
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"receivingDamageMultiplier"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "receivingDamageMultiplier",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "receivingDamageMultiplier";
  ValueType: ValueType;
};
export default ExportTypes;
