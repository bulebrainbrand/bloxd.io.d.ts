import { EntityId } from "../../../type/index";
/**
 * Get the velocity of an entity
 * Will return [0, 0, 0] if the entity doesn't have a physics body
 *
 * @param {EntityId} eId
 * @returns {[number, number, number]}
 */
declare const getVelocity: (eId: EntityId) => [number, number, number];
export { getVelocity };
/**
 * Get the velocity of an entity
 * Will return [0, 0, 0] if the entity doesn't have a physics body
 *
 * @param {EntityId} eId
 * @returns {[number, number, number]}
 *
 * getVelocity(eId);
 */
