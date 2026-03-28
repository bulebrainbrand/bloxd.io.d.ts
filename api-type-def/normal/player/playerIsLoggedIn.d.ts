import { PlayerId } from "../../..";

interface PlayerIsLoggedInInterface {
  /**
   * @param {PlayerId} playerId
   * @returns {boolean}
   */
  playerIsLoggedIn(playerId: PlayerId): boolean;
}

export default PlayerIsLoggedInInterface;
