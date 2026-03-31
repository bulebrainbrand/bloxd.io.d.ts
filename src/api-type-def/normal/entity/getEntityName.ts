import { EntityId } from "@type";

/**
 * Get the in game name of an entity.
 *
 * @param {EntityId} entityId
 * @returns {string}
 */
declare const getEntityName: (entityId: EntityId) => string;

export { getEntityName };

/**
 * Get the in game name of an entity.
 *
 * @param {EntityId} entityId
 * @returns {string}
 *
 * getEntityName(entityId)
 */
