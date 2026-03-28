import { PlayerId } from "../../../type/index";
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
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"runningSpeed"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "runningSpeed", value: number): void;
}
interface GetClientOption {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"runningSpeed"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "runningSpeed"): number;
}
interface SetClientOptionToDefault {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"runningSpeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "runningSpeed"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "runningSpeed";
    ValueType: ValueType;
};
export default ExportTypes;
