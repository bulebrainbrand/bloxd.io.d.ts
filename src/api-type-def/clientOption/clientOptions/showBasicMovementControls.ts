import { PlayerId } from "@type";

/**
 * Whether to show basic movement controls
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showBasicMovementControls"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "showBasicMovementControls",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showBasicMovementControls"} option
   * @returns {boolean}
   */
  getClientOption(
    playerId: PlayerId,
    option: "showBasicMovementControls",
  ): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set showBasicMovementControls option to default
   * showBasicMovementControls default is `true`
   *
   * option document:
   * Whether to show basic movement controls
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showBasicMovementControls"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "showBasicMovementControls",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "showBasicMovementControls";
  ValueType: ValueType;
};
export default ExportTypes;
