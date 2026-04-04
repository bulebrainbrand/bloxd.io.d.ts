import { PlayerId } from "../../../type/index";
/**
 * Speed multiplier for the player when crouching.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 * @default 2
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"crouchingSpeed"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "crouchingSpeed", value: number): void;
}
interface GetClientOption {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"crouchingSpeed"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "crouchingSpeed"): number;
}
interface SetClientOptionToDefault {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"crouchingSpeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "crouchingSpeed"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "crouchingSpeed";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=crouchingSpeed.d.ts.map