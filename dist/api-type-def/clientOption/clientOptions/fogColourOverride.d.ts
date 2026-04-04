import { PlayerId } from "../../../type/index";
/**
 * RGB string for fog colour override. e.g. #ffffff
 * @type {string}
 */
type ValueType = string;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"fogColourOverride"} option
     * @param {string} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "fogColourOverride", value: string): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"fogColourOverride"} option
     * @returns {string}
     */
    getClientOption(playerId: PlayerId, option: "fogColourOverride"): string;
}
interface SetClientOptionToDefault {
    /**
     * set fogColourOverride option to default
     * fogColourOverride default is `null`
     *
     * option document:
     * RGB string for fog colour override. e.g. #ffffff
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"fogColourOverride"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "fogColourOverride"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "fogColourOverride";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=fogColourOverride.d.ts.map