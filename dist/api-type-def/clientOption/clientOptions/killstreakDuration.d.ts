import { PlayerId } from "../../../type/index";
/**
 * Duration before a killstreak expires. (defaults to never expiring)
 * @type {number}
 */
type ValueType = number;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"killstreakDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "killstreakDuration", value: number): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"killstreakDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId, option: "killstreakDuration"): number;
}
interface SetClientOptionToDefault {
    /**
     * set killstreakDuration option to default
     * killstreakDuration default is `200000000`
     *
     * option document:
     * Duration before a killstreak expires. (defaults to never expiring)
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"killstreakDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "killstreakDuration"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "killstreakDuration";
    ValueType: ValueType;
};
export default ExportTypes;
