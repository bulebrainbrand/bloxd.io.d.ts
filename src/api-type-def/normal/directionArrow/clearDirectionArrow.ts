import { PlayerId } from "@type";

/**
 * Clear a directional arrow from the player's screen.
 *
 * @param {PlayerId} playerId - The player to clear the arrow for
 * @param {PNull<string>} [id] - The arrow identifier to clear. If null, clears all arrows for this player.
 * @returns {void}
 */
declare const clearDirectionArrow: (
  playerId: PlayerId,
  id?: string | null,
) => void;

export { clearDirectionArrow };

/**
 * Clear a directional arrow from the player's screen.
 *
 * @param {PlayerId} playerId - The player to clear the arrow for
 * @param {PNull<string>} [id] - The arrow identifier to clear. If null, clears all arrows for this player.
 * @returns {void}
 *
 * clearDirectionArrow(playerId, id);
 */
