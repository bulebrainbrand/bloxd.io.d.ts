import { PlayerId } from "@type";

/**
 * For now just enables the UI of the full inventory
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"useFullInventory"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "useFullInventory",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"useFullInventory"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "useFullInventory"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set useFullInventory option to default
   * useFullInventory default is `true`
   *
   * option document:
   * For now just enables the UI of the full inventory
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"useFullInventory"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "useFullInventory",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "useFullInventory";
  ValueType: ValueType;
};
export default ExportTypes;
