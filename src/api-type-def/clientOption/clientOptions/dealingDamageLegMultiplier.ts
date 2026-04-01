import { PlayerId } from "@type";

/**
 * Damage multiplier for when the player hits a leg. Only applies to guns
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"dealingDamageLegMultiplier"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "dealingDamageLegMultiplier",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"dealingDamageLegMultiplier"} option
   * @returns {number}
   */
  getClientOption(
    playerId: PlayerId,
    option: "dealingDamageLegMultiplier",
  ): number;
}

interface SetClientOptionToDefault {
  /**
   * set dealingDamageLegMultiplier option to default
   * dealingDamageLegMultiplier default is `1`
   *
   * option document:
   * Damage multiplier for when the player hits a leg. Only applies to guns
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"dealingDamageLegMultiplier"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "dealingDamageLegMultiplier",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "dealingDamageLegMultiplier";
  ValueType: ValueType;
};
export default ExportTypes;
