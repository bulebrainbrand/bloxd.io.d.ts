import { PlayerId } from "../../../type/index";
/**
 * Whether the player can change blocks
 * @type {boolean}
 * @default true
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     * set status player who can changing block
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canchange"} option
     * @param {true} value
     */
    setClientOption(playerId: PlayerId, option: "canChange", value: true): void;
    /**
     * set status player who can not changing block
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canchange"} option
     * @param {false} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canChange", value: false): void;
}
interface GetClientOption {
    /**
     * get player can change block
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canChange"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canChange"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canChange option to default
     * canChange default is `true`
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canChange"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canChange"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canChange";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=canChange.d.ts.map