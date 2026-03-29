import { EntityId, ShieldAmount } from "@type";

/**
 * Get the current shield of an entity.
 *
 * returns value is marking `ShiendAmount`.which is `number` alias
 *
 * @param {EntityId} entityId
 * @returns {number}
 */
declare const getShieldAmount: (entityId: EntityId) => ShieldAmount;

export { getShieldAmount };
