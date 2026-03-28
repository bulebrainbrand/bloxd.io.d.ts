import { Coordinate, EntityId } from "@type";
interface GetPositionInterface {
    /**
     * Get position of a player / entity.
     *
     * @param {EntityId} entityId
     * @returns {Coordinate}
     */
    getPosition(entityId: EntityId): Coordinate;
}
export default GetPositionInterface;
