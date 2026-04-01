import { PlayerId } from "@type";

/**
 * Volume level for the music
 * @type {number}
 */
type ValueType = number;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"musicVolumeLevel"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "musicVolumeLevel",
    value: number,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"musicVolumeLevel"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "musicVolumeLevel"): number;
}

interface SetClientOptionToDefault {
  /**
   * set musicVolumeLevel option to default
   * musicVolumeLevel default is `0.6`
   *
   * option document:
   * Volume level for the music
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"musicVolumeLevel"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "musicVolumeLevel",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "musicVolumeLevel";
  ValueType: ValueType;
};
export default ExportTypes;
