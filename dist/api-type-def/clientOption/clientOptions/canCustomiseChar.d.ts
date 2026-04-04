import { PlayerId } from "@type";
/**
 * Whether the player can customise their character
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canCustomiseChar"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "canCustomiseChar", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canCustomiseChar"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "canCustomiseChar"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set canCustomiseChar option to default
     * canCustomiseChar default is `true`
     *
     * option document:
     * Whether the player can customise their character
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"canCustomiseChar"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "canCustomiseChar"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "canCustomiseChar";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=canCustomiseChar.d.ts.map