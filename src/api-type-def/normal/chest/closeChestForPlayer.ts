import { PlayerId } from "@type";

/**
 * Close a chest for a player.
 * If the player does not have a chest open, do nothing.
 *
 * @param {PlayerId} playerId
 * @returns {void}
 */
declare const closeChestForPlayer: (playerId: PlayerId) => void;

export { closeChestForPlayer };

/**
 * Close a chest for a player.
 * If the player does not have a chest open, do nothing.
 *
 * @param {PlayerId} playerId
 * @returns {void}
 *
 * closeChestForPlayer(playerId)
 */
