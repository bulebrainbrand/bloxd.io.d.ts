import { Block, Coordinate } from "../../../type/index";
/**
 * Helper function that sets all blocks in a rectangle to a specific block.
 *
 * @param {number[]} pos1 - array [x, y, z]
 * @param {number[]} pos2 - array [x, y, z]
 * @param {BlockName} blockName
 * @returns {void}
 */
declare const setBlockRect: (pos1: Coordinate, pos2: Coordinate, blockName: Block) => void;
export { setBlockRect };
