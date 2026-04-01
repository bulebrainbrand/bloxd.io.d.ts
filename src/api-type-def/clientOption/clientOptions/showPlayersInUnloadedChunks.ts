import { PlayerId } from "@type";

/**
 * Whether to show the player in unloaded chunks
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showPlayersInUnloadedChunks"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "showPlayersInUnloadedChunks",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showPlayersInUnloadedChunks"} option
   * @returns {boolean}
   */
  getClientOption(
    playerId: PlayerId,
    option: "showPlayersInUnloadedChunks",
  ): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set showPlayersInUnloadedChunks option to default
   * showPlayersInUnloadedChunks default is `false`
   *
   * option document:
   * Whether to show the player in unloaded chunks
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"showPlayersInUnloadedChunks"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "showPlayersInUnloadedChunks",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "showPlayersInUnloadedChunks";
  ValueType: ValueType;
};
export default ExportTypes;
