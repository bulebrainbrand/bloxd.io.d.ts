import { PlayerId } from "@type";

/**
 * @param {PlayerId} playerId
 * @param {string} reason
 * @returns {void}
 */
declare const kickPlayer: (playerId: PlayerId, reason: string) => void;

export { kickPlayer };

/**
 * @param {PlayerId} playerId
 * @param {string} reason
 * @returns {void}
 *
 * kickPlayer(playerId, reason)
 */
