import { PlayerId } from "../../../type";

/**
 * Speed multiplier for the player.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * @type {number}
 * @default 1
 */
export type SpeedMultiplierValue = number;

export interface SetClientOptionSpeedMultiplier {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"speedMultiplier"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "speedMultiplier",
    value: number,
  ): void;
}

export interface GetClientOptionSpeedMultiplier {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"speedMultiplier"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "speedMultiplier"): number;
}

export interface SetClientOptionToDefaultSpeedMultiplier {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"speedMultiplier"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "speedMultiplier"): void;
}
