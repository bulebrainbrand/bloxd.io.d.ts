import { PlayerId } from "../../../type/index";
/**
 * Speed multiplier for the player.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * @type {number}
 * @default 1
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"speedMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "speedMultiplier", value: number): void;
}
interface GetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"speedMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "speedMultiplier"): number;
}
interface SetClientOptionToDefault {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"speedMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "speedMultiplier"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "speedMultiplier";
    ValueType: ValueType;
};
export default ExportTypes;
