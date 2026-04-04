import { PlayerId } from "../../../type/index";
/**
 * Amount that player camera is affected by movement based fov
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"movementBasedFovScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "movementBasedFovScale", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"movementBasedFovScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "movementBasedFovScale"): number;
}
interface SetClientOptionToDefault {
    /**
     * set movementBasedFovScale option to default
     * movementBasedFovScale default is `1`
     *
     * option document:
     * Amount that player camera is affected by movement based fov
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"movementBasedFovScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "movementBasedFovScale"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "movementBasedFovScale";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=movementBasedFovScale.d.ts.map