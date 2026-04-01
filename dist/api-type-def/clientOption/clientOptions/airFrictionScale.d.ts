import { PlayerId } from "../../../type/index";
/**
 * Amount of friction to apply to airborne players.
 * Only change if absolutely necessary i.e. Rocket Obby uses 0.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"airFrictionScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "airFrictionScale", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"airFrictionScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "airFrictionScale"): number;
}
interface SetClientOptionToDefault {
    /**
     * set airFrictionScale option to default
     * airFrictionScale default is `1`
     *
     * option document:
     * Amount of friction to apply to airborne players.
     * Only change if absolutely necessary i.e. Rocket Obby uses 0.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"airFrictionScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "airFrictionScale"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "airFrictionScale";
    ValueType: ValueType;
};
export default ExportTypes;
