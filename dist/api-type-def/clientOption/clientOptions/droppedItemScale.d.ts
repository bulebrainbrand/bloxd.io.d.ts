import { PlayerId } from "@type";
/**
 * Scale factor to use for dropped item meshes
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"droppedItemScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "droppedItemScale", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"droppedItemScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "droppedItemScale"): number;
}
interface SetClientOptionToDefault {
    /**
     * set droppedItemScale option to default
     * droppedItemScale default is `1`
     *
     * option document:
     * Scale factor to use for dropped item meshes
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"droppedItemScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "droppedItemScale"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "droppedItemScale";
    ValueType: ValueType;
};
export default ExportTypes;
//# sourceMappingURL=droppedItemScale.d.ts.map