import { Coordinate, PlayerId } from "../../../type/index";
/**
 * Make it so a player cant Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1
 * and [1, 1, 1] is pos2 then the 8 blocks contained within low and high will not be able to be broken.
 * Overrides setCanChangeBlockType
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} pos1 - Arg as [x, y, z]
 * @param {Coordinate} pos2 - Arg as [x, y, z]
 * @returns {void}
 */
declare const setCantChangeBlockRect: (playerId: PlayerId, pos1: Coordinate, pos2: Coordinate) => void;
export { setCantChangeBlockRect };
