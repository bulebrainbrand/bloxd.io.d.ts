import { BlockNameOrId, Coordinate } from "../../../type/index";
/**
 * Create walls by providing two opposite corners of the cuboid
 *
 * @param {number[]} pos1 - array [x, y, z]
 * @param {number[]} pos2 - array [x, y, z]
 * @param {BlockName} blockName
 * @param {boolean} [hasFloor]
 * @param {boolean} [hasCeiling]
 * @returns {void}
 */
declare const setBlockWalls: (pos1: Coordinate, pos2: Coordinate, blockName: BlockNameOrId, hasFloor?: boolean, hasCeiling?: boolean) => void;
export { setBlockWalls };
/**
 * Create walls by providing two opposite corners of the cuboid
 *
 * @param {number[]} pos1 - array [x, y, z]
 * @param {number[]} pos2 - array [x, y, z]
 * @param {BlockName} blockName
 * @param {boolean} [hasFloor]
 * @param {boolean} [hasCeiling]
 * @returns {void}
 *
 * setBlockWalls(pos1, pos2, blockName, hasFloor, hasCeiling)
 */
//# sourceMappingURL=setBlockWalls.d.ts.map