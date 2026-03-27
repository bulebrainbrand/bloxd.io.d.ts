import { PlayerId } from "../../../type";

/**
 * Whether the player can change blocks
 * @type {boolean}
 * @default true
 */
export type CanChangeValue = boolean;

export interface SetClientOptionCanChange {
  /**
   * set status player who can changing block
   *
   * option docment:
   * Whether the player can change blocks
   *
   * @param {PlayerId} playerId
   * @param {"canchange"} option
   * @param {true} value
   */
  setClientOption(playerId: PlayerId, option: "canChange", value: true): void;
  /**
   * set status player who can not changing block
   *
   * option docment:
   * Whether the player can change blocks
   *
   * @param {PlayerId} playerId
   * @param {"canchange"} option
   * @param {false} value
   * @returns {void}
   */
  setClientOption(playerId: PlayerId, option: "canChange", value: false): void;
}

export interface GetClientOptionCanChange {
  /**
   * get player can change block
   *
   * option docment:
   * Whether the player can change blocks
   *
   * @param {PlayerId} playerId
   * @param {"canChange"} option
   * @returns {boolean}
   */
  getClientOption(playerId: PlayerId, option: "canChange"): boolean;
}

export interface SetClientOptionToDefaultCanChange {
  /**
   * set canChange option to default
   * canChange default is `true`
   *
   * option docment:
   * Whether the player can change blocks
   *
   * @param {PlayerId} playerId
   * @param {"canChange"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "canChange"): void;
}
