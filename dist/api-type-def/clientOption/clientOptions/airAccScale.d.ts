import { PlayerId } from "@type";
/**
 * Amount of acceleration to apply to airborne players.
 * Only change if absolutely necessary i.e. Rocket Obby uses 0.25.
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
     * @param {"airAccScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "airAccScale", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"airAccScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "airAccScale"): number;
}
interface SetClientOptionToDefault {
    /**
     * set airAccScale option to default
     * airAccScale default is `1`
     *
     * option document:
     * Amount of acceleration to apply to airborne players.
     * Only change if absolutely necessary i.e. Rocket Obby uses 0.25.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"airAccScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "airAccScale"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "airAccScale";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=airAccScale.d.ts.map