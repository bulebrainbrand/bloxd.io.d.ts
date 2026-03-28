import { EntityId, Health } from "@type";

interface GetHealthInterface {
  /**
   * Get the current health of an entity.
   *
   * @bulebrainbrand may be this function can use all entity...
   * but offical docment is contradiction Playerid and EntityId
   * well,pls test and report
   *
   * @param {EntityId} entityId
   * @returns {number}
   */
  getHealth(entityId: EntityId): Health;
}

export default GetHealthInterface;
