import { PlayerId } from "@type";

/**
 * If true, player will respawn automatically after secsToRespawn seconds
 * @type {boolean}
 */
type ValueType = boolean;

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"autoRespawn"} option
   * @param {boolean} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "autoRespawn",
    value: boolean,
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"autoRespawn"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "autoRespawn"): boolean;
}

interface SetClientOptionToDefault {
  /**
   * set autoRespawn option to default
   * autoRespawn default is `false`
   *
   * option document:
   * If true, player will respawn automatically after secsToRespawn seconds
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"autoRespawn"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "autoRespawn"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "autoRespawn";
  ValueType: ValueType;
};
export default ExportTypes;
