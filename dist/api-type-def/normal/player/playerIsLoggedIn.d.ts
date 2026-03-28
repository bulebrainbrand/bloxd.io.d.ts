import { PlayerId } from "../../../type/index";
interface PlayerIsLoggedInInterface {
    /**
     * @param {PlayerId} playerId
     * @returns {boolean}
     */
    playerIsLoggedIn(playerId: PlayerId): boolean;
}
export default PlayerIsLoggedInInterface;
