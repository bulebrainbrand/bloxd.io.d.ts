import { PlayerId } from "@type";

/**
 * Amount of air jumps the player has
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"airJumpCount"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "airJumpCount",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"airJumpCount"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "airJumpCount"): number;
}

interface SetClientOptionToDefault {
  /**
   * set airJumpCount option to default
   * airJumpCount default is `0`
   *
   * option document:
   * Amount of air jumps the player has
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"airJumpCount"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "airJumpCount"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "airJumpCount";
  ValueType: ValueType;
};
export default ExportTypes;
