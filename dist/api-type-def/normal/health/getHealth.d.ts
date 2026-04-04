import { EntityId, Health } from "../../../type/index";
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
/**
 * Get the current health of an entity.
 *
 * @param {PlayerId} entityId
 * @returns {number}
 *
 * getHealth(entityId)
 */
//# sourceMappingURL=getHealth.d.ts.map