import { PlayerId } from "../../../type";

/**
 * Running speed for the player.
 * STRONGLY recommend using `speedMultiplier` unless you have a specific use case for this, runningSpeed doesn't make UX sense on mobile.
 * (Walking speed is ignored for mobile players, mobile player speed is determined by joystick input and the max of runningSpeed & walkingSpeed).
 *
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * The only use case for walkingSpeed/runningSpeed over speedMultiplier or speed effects is to disable running or to inverse walking/running (so you run by default and e.g. hold shift to go slower).
 * @type {number}
 * @default 7
 */
export type RunningSpeedValue = number;

export interface SetClientOptionRunningSpeed {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"runningSpeed"} option
   * @param {number} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "runningSpeed",
    value: number,
  ): void;
}

export interface GetClientOptionRunningSpeed {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"runningSpeed"} option
   * @returns {number}
   */
  getClientOption(playerId: PlayerId, option: "runningSpeed"): number;
}

export interface SetClientOptionToDefaultRunningSpeed {
  /**
   *
   * @param {PlayerId} playerId
   * @param {"runningSpeed"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "runningSpeed"): void;
}
