import { Coordinate } from "../../../type/index";
/**
 * Returns whether a block is solid or not.
 * E.g. Grass block is solid, while water, ladder and water are not.
 * Will be true if the block is unloaded.
 *
 * overload 1: getBlockSolidity(x: number, y: number, z: number): boolean
 * overload 2: getBlockSolidity(pos: Coordinate): boolean
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {boolean}
 */
declare const getBlockSolidity: {
    (x: number, y: number, z: number): boolean;
    (pos: Coordinate): boolean;
};
export { getBlockSolidity };
