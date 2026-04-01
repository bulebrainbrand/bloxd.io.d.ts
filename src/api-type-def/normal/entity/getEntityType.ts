import { EntityId, EntityType } from "@type";

/**
 * @param {EntityId} entityId
 * @returns {EntityType}
 */
declare const getEntityType: (entityId: EntityId) => EntityType;
export { getEntityType };
/**
 * @param {EntityId} entityId
 * @returns {EntityType}
 *
 * getEntityType(entityId);
 */
