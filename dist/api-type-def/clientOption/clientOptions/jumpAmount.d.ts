import { PlayerId } from "@type";
/**
 * Amount of jump power the player has
 * @type {number}
 * @default true
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"jumpAmount"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "jumpAmount", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"jumpAmount"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "jumpAmount"): number;
}
interface SetClientOptionToDefault {
    /**
     * set jumpAmount option to default
     * jumpAmount default is `8`
     *
     * option document:
     * Amount of jump power the player has
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"jumpAmount"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "jumpAmount"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "jumpAmount";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=jumpAmount.d.ts.map