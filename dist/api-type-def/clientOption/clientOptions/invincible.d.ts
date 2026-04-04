import { PlayerId } from "../../../type/index";
/**
 * Whether the player is invincible
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"invincible"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "invincible", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"invincible"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "invincible"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set invincible option to default
     * invincible default is `false`
     *
     * option document:
     * Whether the player is invincible
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"invincible"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "invincible"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "invincible";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=invincible.d.ts.map