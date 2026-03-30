import { Coordinate, PlayerId } from "../../../type/index";
/**
 * Remove any previous can/cant change block rect settings for a player
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} pos1 - Arg as [x, y, z]
 * @param {Coordinate} pos2 - Arg as [x, y, z]
 * @returns {void}
 */
declare const resetCanChangeBlockRect: (playerId: PlayerId, pos1: Coordinate, pos2: Coordinate) => void;
export { resetCanChangeBlockRect };
