import { PlayerId } from "../../../type";

/**
 * Speed multiplier for the player when crouching.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 * @default 2
 */
export type CrouchingSpeedValue = number;

export interface SetClientOptionCrouchingSpeed {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"crouchingSpeed"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "crouchingSpeed",
    value: number,
  ): void;
}

export interface GetClientOptionCrouchingSpeed {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"crouchingSpeed"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "crouchingSpeed"): number;
}

export interface SetClientOptionToDefaultCrouchingSpeed {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"crouchingSpeed"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "crouchingSpeed"): void;
}
