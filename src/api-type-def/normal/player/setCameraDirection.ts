import { Direcrion, PlayerId } from "@type";
/**
 * Set the direction the player is looking.
 *
 * @param {PlayerId} playerId
 * @param {number[]} direction - a vector of the direction to look, format [x, y, z]
 * @returns {void}
 */
declare const setCameraDirection: (
  playerId: PlayerId,
  direction: Direcrion,
) => void;

export { setCameraDirection };
