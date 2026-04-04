import { PlayerId } from "../../../type/index";
/**
 * Amount of friction to apply to grounded players.
 * Only change if absolutely necessary i.e. Rocket Obby uses 3.
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
     * @param {"groundFrictionScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "groundFrictionScale", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"groundFrictionScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "groundFrictionScale"): number;
}
interface SetClientOptionToDefault {
    /**
     * set groundFrictionScale option to default
     * groundFrictionScale default is `1`
     *
     * option document:
     * Amount of friction to apply to grounded players.
     * Only change if absolutely necessary i.e. Rocket Obby uses 3.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"groundFrictionScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "groundFrictionScale"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "groundFrictionScale";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=groundFrictionScale.d.ts.map