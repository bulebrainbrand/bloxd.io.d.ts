import { PlayerId } from "@type";

interface KickPlayerInterface {
  /**
   * @param {PlayerId} playerId
   * @param {string} reason
   * @returns {void}
   */
  kickPlayer(playerId: PlayerId, reason: string): void;
}

export default KickPlayerInterface;
