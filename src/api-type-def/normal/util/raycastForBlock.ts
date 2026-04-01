import { Coordinate, Direcrion, BlockRaycastResult } from "@type";
/**
 * Raycast for a block in the world.
 * Given a position and a direction, find the first block that the "ray" hits.
 *
 * @param {Coordinate} fromPos
 * @param {Direcrion} dirVec
 * @returns {BlockRaycastResult}
 */
declare const raycastForBlock: (
  fromPos: Coordinate,
  dirVec: Direcrion,
) => BlockRaycastResult;

export { raycastForBlock };

/**
 * Raycast for a block in the world.
 * Given a position and a direction, find the first block that the "ray" hits.
 *
 * @param {number[]} fromPos
 * @param {number[]} dirVec
 * @returns {BlockRaycastResult}
 *
 * raycastForBlock(fromPos, dirVec);
 */
