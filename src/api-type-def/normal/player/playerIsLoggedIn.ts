import { PlayerId } from "@type";

interface PlayerIsLoggedInInterface {
  /**
   * @param {PlayerId} playerId
   * @returns {boolean}
   */
  playerIsLoggedIn(playerId: PlayerId): boolean;
}

export default PlayerIsLoggedInInterface;
