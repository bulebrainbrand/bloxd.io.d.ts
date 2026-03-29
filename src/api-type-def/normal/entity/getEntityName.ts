import { EntityId } from "@type";

interface GetEntityNameInterface {
  /**
   * Get the in game name of an entity.
   *
   * @param {EntityId} entityId
   * @returns {string}
   */
  getEntityName(entityId: EntityId): string;
}

export default GetEntityNameInterface;
