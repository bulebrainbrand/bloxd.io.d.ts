import { PlayerId } from "@type";
interface PlayerIsInGameInterface {
  /**
   * Whether a player is currently in the game
   *
   * @param {PlayerId} playerId
   * @returns {boolean}
   */
  playerIsInGame(playerId: PlayerId): boolean;
}

export default PlayerIsInGameInterface;
