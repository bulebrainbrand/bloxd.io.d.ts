import { PlayerId } from "../../../type/index";
/**
 * After dying the player can respawn after this many seconds
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"secsToRespawn"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "secsToRespawn", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"secsToRespawn"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "secsToRespawn"): number;
}
interface SetClientOptionToDefault {
    /**
     * set secsToRespawn option to default
     * secsToRespawn default is `5`
     *
     * option document:
     * After dying the player can respawn after this many seconds
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"secsToRespawn"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "secsToRespawn"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "secsToRespawn";
    ValueType: ValueType;
};
export default ExportTypes;
