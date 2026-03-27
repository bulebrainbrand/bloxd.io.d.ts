import { Coordinate, EntityId } from "../../type";

/**
 * Get position of a player / entity.
 *
 * @param {EntityId} entityId
 * @returns {Coordinate}
 */
export type GetPosition = (entityId: EntityId) => Coordinate;
