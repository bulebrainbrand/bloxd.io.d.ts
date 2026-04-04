import { PlayerId } from "@type";
/**
 * Whether the player is in creative mode
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"creative"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "creative", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"creative"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "creative"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set creative option to default
     * creative default is `false`
     *
     * option document:
     * Whether the player is in creative mode
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"creative"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "creative"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "creative";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=creative.d.ts.map