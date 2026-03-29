import { Coordinate, EntityId } from "../../../type/index";
/**
 * Get position of a player / entity.
 *
 * @param {EntityId} entityId
 * @returns {Coordinate}
 */
declare const getPosition: (entityId: EntityId) => Coordinate;
export { getPosition };
