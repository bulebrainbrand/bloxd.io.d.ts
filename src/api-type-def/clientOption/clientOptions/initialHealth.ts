import { PlayerId } from "@type";

/**
 * Health upon joining or respawning. Can be null for the player to not have health
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"initialHealth"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "initialHealth",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"initialHealth"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "initialHealth"): number;
}

interface SetClientOptionToDefault {
  /**
   * set initialHealth option to default
   * initialHealth default is `100`
   *
   * option document:
   * Health upon joining or respawning. Can be null for the player to not have health
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"initialHealth"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "initialHealth"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "initialHealth";
  ValueType: ValueType;
};
export default ExportTypes;
