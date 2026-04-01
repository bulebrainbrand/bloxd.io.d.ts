import { PlayerId } from "@type";

/**
 * Whether the player can use the zoom key
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"canUseZoomKey"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "canUseZoomKey",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"canUseZoomKey"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "canUseZoomKey"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set canUseZoomKey option to default
   * canUseZoomKey default is `true`
   *
   * option document:
   * Whether the player can use the zoom key
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"canUseZoomKey"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "canUseZoomKey"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "canUseZoomKey";
  ValueType: ValueType;
};
export default ExportTypes;
