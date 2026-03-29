import { EntityId, Health } from "@type";

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
declare const getHealth: (entityId: EntityId) => Health;

export { getHealth };
