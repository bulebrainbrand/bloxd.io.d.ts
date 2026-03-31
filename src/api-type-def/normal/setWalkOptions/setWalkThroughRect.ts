import { Coordinate, PlayerId, WalkThroughType } from "@type";

/**
 * Allow a player to walk through (or not walk through) voxels that are located within a given rectangle.
 * For blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.
 *
 * You could set both pos1 and pos2 to [0, 0, 0] to make only 0, 0, 0 walkthrough, for example.
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} pos1 - The one corner of the cuboid. Format [x, y, z]
 * @param {Coordinate} pos2 - The top right corner of the cuboid. Format [x, y, z]
 * @param {WalkThroughType} updateType - The type of update. Whether to make a rect solid, or able to be walked through.
 * Pass DEFAULT_WALK_THROUGH with a previously passed rect to disable any walkthrough setting for that rect.
 * @returns {void}
 */
declare const setWalkThroughRect: (
  playerId: PlayerId,
  pos1: Coordinate,
  pos2: Coordinate,
  updateType: WalkThroughType,
) => void;

export { setWalkThroughRect };

/**
 * Allow a player to walk through (or not walk through) voxels that are located within a given rectangle.
 * For blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.
 *
 * You could set both pos1 and pos2 to [0, 0, 0] to make only 0, 0, 0 walkthrough, for example.
 *
 * @param {PlayerId} playerId
 * @param {number[]} pos1 - The one corner of the cuboid. Format [x, y, z]
 * @param {number[]} pos2 - The top right corner of the cuboid. Format [x, y, z]
 * @param {WalkThroughType} updateType - The type of update. Whether to make a rect solid, or able to be walked through.
 * Pass DEFAULT_WALK_THROUGH with a previously passed rect to disable any walkthrough setting for that rect.
 * @returns {void}
 *
 * setWalkThroughRect(playerId, pos1, pos2, updateType)
 */
