import { PlayerId } from "@type";

/**
 * Whether a player can place fluid when canChange is false
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"strictFluidBuckets"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "strictFluidBuckets",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"strictFluidBuckets"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "strictFluidBuckets"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set strictFluidBuckets option to default
   * strictFluidBuckets default is `true`
   *
   * option document:
   * Whether a player can place fluid when canChange is false
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"strictFluidBuckets"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "strictFluidBuckets",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "strictFluidBuckets";
  ValueType: ValueType;
};
export default ExportTypes;
