import { PlayerId } from "@type";

/**
 * Distance to zoom the camera out to
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"zoomOutDistance"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "zoomOutDistance",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"zoomOutDistance"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "zoomOutDistance"): number;
}

interface SetClientOptionToDefault {
  /**
   * set zoomOutDistance option to default
   * zoomOutDistance default is `3`
   *
   * option document:
   * Distance to zoom the camera out to
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"zoomOutDistance"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "zoomOutDistance"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "zoomOutDistance";
  ValueType: ValueType;
};
export default ExportTypes;
