import { Coordinate } from "../../../type/index";
/**
 * Check if a position is within a cubic rectangle
 *
 * @param {Coordinate} coordsToCheck
 * @param {Coordinate} pos1 - position of one corner
 * @param {Coordinate} pos2 - position of opposite corner
 * @param {boolean} [addOneToMax]
 * @returns {boolean}
 */
declare const isInsideRect: (coordsToCheck: Coordinate, pos1: Coordinate, pos2: Coordinate, addOneToMax?: boolean) => boolean;
export { isInsideRect };
/**
 * Check if a position is within a cubic rectangle
 *
 * @param {number[]} coordsToCheck
 * @param {number[]} pos1 - position of one corner
 * @param {number[]} pos2 - position of opposite corner
 * @param {boolean} [addOneToMax]
 * @returns {boolean}
 *
 * isInsideRect(coordsToCheck, pos1, pos2, addOneToMax);
 */
//# sourceMappingURL=isInsideRect.d.ts.map