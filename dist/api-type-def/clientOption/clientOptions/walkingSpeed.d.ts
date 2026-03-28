import { PlayerId } from "@type";
/**
 * Walking speed for the player.
 * STRONGLY recommend using `speedMultiplier` unless you have a specific use case for this, walkingSpeed doesn't make UX sense on mobile.
 * (Walking speed ignored for mobile players, mobile player speed is determined by joystick input and the max of runningSpeed & walkingSpeed).
 *
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * The only use case for walkingSpeed/runningSpeed over speedMultiplier or speed effects is to disable running or to inverse walking/running (so you run by default and e.g. hold shift to go slower).
 * @type {number}
 * @default 4
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"walkingSpeed"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "walkingSpeed", value: number): void;
}
interface GetClientOption {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"walkingSpeed"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "walkingSpeed"): number;
}
interface SetClientOptionToDefault {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"walkingSpeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "walkingSpeed"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "walkingSpeed";
    ValueType: ValueType;
};
export default ExportTypes;
