import { Coordinate, EntityId } from "../../../type/index";
/**
 * Get the entities in the rect between [minX, minY, minZ] and [maxX, maxY, maxZ]
 *
 * @param {number[]} minCoords
 * @param {number[]} maxCoords
 * @returns {EntityId[]}
 */
declare const getEntitiesInRect: (minCoords: Coordinate, maxCoords: Coordinate) => EntityId[];
export { getEntitiesInRect };
/**
 * Get the entities in the rect between [minX, minY, minZ] and [maxX, maxY, maxZ]
 *
 * @param {number[]} minCoords
 * @param {number[]} maxCoords
 * @returns {EntityId[]}
 *
 * getEntitiesInRect(minCoords, maxCoords);
 */
