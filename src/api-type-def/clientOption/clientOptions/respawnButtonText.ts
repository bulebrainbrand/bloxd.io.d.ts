import { PlayerId } from "@type";

/**
 * Text to show on respawn button. (E.g. "Spectate")
 * @type {string}
 */
type ValueType = string;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"respawnButtonText"} option
   * @param {string} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "respawnButtonText",
    value: string,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"respawnButtonText"} option
   * @returns {string}
   */
  getClientOption(playerId: PlayerId, option: "respawnButtonText"): string;
}

interface SetClientOptionToDefault {
  /**
   * set respawnButtonText option to default
   * respawnButtonText default is `"general:respawn"`
   *
   * option document:
   * Text to show on respawn button. (E.g. "Spectate")
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"respawnButtonText"} option
   * @returns {void}
   */
  setClientOptionToDefault(
    playerId: PlayerId,
    option: "respawnButtonText",
  ): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "respawnButtonText";
  ValueType: ValueType;
};
export default ExportTypes;
