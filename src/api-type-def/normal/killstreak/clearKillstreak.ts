import { PlayerId } from "../../../type";

interface ClearKillstreakInterface {
  /**
   * Clears the player's current killstreak
   *
   * @param {PlayerId} playerId
   * @returns {void}
   */
  clearKillstreak(playerId: PlayerId): void;
}

export default ClearKillstreakInterface;
