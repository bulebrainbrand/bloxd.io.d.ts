import { PlayerId } from "@type";

/**
 * Open a chest for a player.
 * If there is no chest, or the player cannot open it, do nothing.
 * WARNING: This may call "onPlayerAttemptOpenChest" to determine if the player has permission to open it. Using this function inside that callback risks infinite recursion.
 *
 * @param {PlayerId} playerId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {void}
 */
declare const openChestForPlayer: (
  playerId: PlayerId,
  x: number,
  y: number,
  z: number,
) => void;

export { openChestForPlayer };
