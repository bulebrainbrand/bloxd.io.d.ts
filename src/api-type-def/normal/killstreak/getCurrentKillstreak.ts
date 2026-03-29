import { PlayerId } from "@type";

/**
 * Gets the player's current killstreak
 *
 * @param {PlayerId} playerId
 * @returns {number}
 */
declare const getCurrentKillstreak: (playerId: PlayerId) => number;

export { getCurrentKillstreak };
