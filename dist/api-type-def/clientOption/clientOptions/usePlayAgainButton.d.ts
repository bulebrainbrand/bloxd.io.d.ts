import { PlayerId } from "../../../type/index";
/**
 * When player is dead, also show a play again button to matchmake player into a new lobby. Mostly useful for sessionBased games
 * @type {boolean}
 */
type ValueType = boolean;
interface SetClientOption {
    /**
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"usePlayAgainButton"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId, option: "usePlayAgainButton", value: boolean): void;
}
interface GetClientOption {
    /**
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"usePlayAgainButton"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId, option: "usePlayAgainButton"): boolean;
}
interface SetClientOptionToDefault {
    /**
     * set usePlayAgainButton option to default
     * usePlayAgainButton default is `false`
     *
     * option document:
     * When player is dead, also show a play again button to matchmake player into a new lobby. Mostly useful for sessionBased games
     *
     * @overload
     *
     * @param {PlayerId} playerId
     * @param {"usePlayAgainButton"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId, option: "usePlayAgainButton"): void;
}
type ExportTypes = {
    SetClientOption: SetClientOption;
    SetClientOptionToDefault: SetClientOptionToDefault;
    GetClientOption: GetClientOption;
    name: "usePlayAgainButton";
    ValueType: ValueType;
};
export default ExportTypes;
