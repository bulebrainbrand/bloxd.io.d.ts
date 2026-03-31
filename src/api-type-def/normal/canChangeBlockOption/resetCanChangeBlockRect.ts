import { Coordinate, PlayerId } from "@type";

/**
 * Remove any previous can/cant change block rect settings for a player
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} pos1 - Arg as [x, y, z]
 * @param {Coordinate} pos2 - Arg as [x, y, z]
 * @returns {void}
 */
declare const resetCanChangeBlockRect: (
  playerId: PlayerId,
  pos1: Coordinate,
  pos2: Coordinate,
) => void;

export { resetCanChangeBlockRect };

/**
 * Remove any previous can/cant change block rect settings for a player
 *
 * @param {PlayerId} playerId
 * @param {number[]} pos1
 * @param {number[]} pos2
 * @returns {void}
 *
 * resetCanChangeBlockRect(playerId, pos1, pos2)
 */
