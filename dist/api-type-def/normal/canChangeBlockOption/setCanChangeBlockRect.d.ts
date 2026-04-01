import { Coordinate, PlayerId } from "../../../type/index";
/**
 * Make it so a player can Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1
 * and [1, 1, 1] is pos2 then the 8 blocks contained within low and high will be able to be broken.
 * Overrides setCantChangeBlockType
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} pos1 - Arg as [x, y, z]
 * @param {Coordinate} pos2 - Arg as [x, y, z]
 * @returns {void}
 */
declare const setCanChangeBlockRect: (playerId: PlayerId, pos1: Coordinate, pos2: Coordinate) => void;
export { setCanChangeBlockRect };
/**
 * Make it so a player can Change blocks within two points. Coordinates are inclusive. E.g. if [0, 0, 0] is pos1
 * and [1, 1, 1] is pos2 then the 8 blocks contained within low and high will be able to be broken.
 * Overrides setCantChangeBlockType
 *
 * @param {PlayerId} playerId
 * @param {number[]} pos1 - Arg as [x, y, z]
 * @param {number[]} pos2 - Arg as [x, y, z]
 * @returns {void}
 *
 * setCanChangeBlockRect(playerId, pos1, pos2);
 */
