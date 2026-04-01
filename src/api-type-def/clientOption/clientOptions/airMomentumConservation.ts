import { PlayerId } from "@type";

/**
 * Whether to allow the player to strafe and conserve momentum while airborne.
 * Only change if absolutely necessary i.e. only Rocket Obby uses true.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"airMomentumConservation"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "airMomentumConservation",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"airMomentumConservation"} option
   * @returns {boolean}
   */
  getClientOption(
    playerId: PlayerId,
    option: "airMomentumConservation",
  ): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set airMomentumConservation option to default
   * airMomentumConservation default is `false`
   *
   * option document:
   * Whether to allow the player to strafe and conserve momentum while airborne.
   * Only change if absolutely necessary i.e. only Rocket Obby uses true.
   * Players are used to the default bloxd movement behaviour and speed,
   * and may be put off from your game if different muscle memory is required.
   * We suggest applying speed or slowness effects instead, using api.applyEffect.
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"airMomentumConservation"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "airMomentumConservation",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "airMomentumConservation";
  ValueType: ValueType;
};
export default ExportTypes;
