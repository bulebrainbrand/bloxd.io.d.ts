import { PlayerId } from "@type";
/**
 * The default block the player can change blocks to, used if canChange is true but useInventory is false
 * @type {string}
 */
type ValueType = string;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"defaultBlock"} option
     * @param {string} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "defaultBlock", value: string): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"defaultBlock"} option
     * @returns {string}
     */
    getClientOption(playerId: PlayerId, option: "defaultBlock"): string;
}
interface SetClientOptionToDefault {
    /**
     * set defaultBlock option to default
     * defaultBlock default is `"Block of Gold"`
     *
     * option document:
     * The default block the player can change blocks to, used if canChange is true but useInventory is false
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"defaultBlock"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "defaultBlock"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "defaultBlock";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=defaultBlock.d.ts.map