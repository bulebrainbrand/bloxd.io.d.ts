import { Coordinate, LifeformId } from "../../type/index";
/**
 * Get the up to 12 unit co-ordinates the lifeform is located within
 * (A lifeform is modelled as having four corners and can be in up to 3 blocks vertically)
 *
 * @param {LifeformId} lifeformId
 * @returns {number[][]} - List of x, y, z positions e.g. [[-1, 0, 0], [-1, 1, 0], [-1, 2, 0]]
 */
declare const getUnitCoordinatesLifeformWithin: (lifeformId: LifeformId) => Coordinate[];
export { getUnitCoordinatesLifeformWithin };
