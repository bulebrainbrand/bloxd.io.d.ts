import { PlayerId } from "@type";

interface IsMobile {
  /**
   * Whether the player is on a mobile device or a computer.
   *
   * @param {PlayerId} playerId
   * @returns {boolean}
   */
  isMobile(playerId: PlayerId): boolean;
}

export default IsMobile;
