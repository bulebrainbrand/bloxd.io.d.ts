import { LifeformId, WhoDidDamage } from "../../../type/index";
/**
 * @param {LifeformId} lifeformId
 * @param {number} changeAmount - Must be an integer. A positive amount will increase the entity's health. A negative amount will decrease the entity's shield first, then their health.
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoDidDamage] - Optional - If damage done by another player
 * @param {boolean} [broadcastLifeformHurt]
 * @returns {boolean} - Whether the entity was killed
 */
declare const applyHealthChange: (lifeformId: LifeformId, changeAmount: number, whoDidDamage?: Readonly<WhoDidDamage>, broadcastLifeformHurt?: boolean) => boolean;
export { applyHealthChange };
/**
 * @param {LifeformId} lifeformId
 * @param {number} changeAmount - Must be an integer. A positive amount will increase the entity's health. A negative amount will decrease the entity's shield first, then their health.
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoDidDamage] - Optional - If damage done by another player
 * @param {boolean} [broadcastLifeformHurt]
 * @returns {boolean} - Whether the entity was killed
 *
 * applyHealthChange(lifeformId, changeAmount, whoDidDamage, broadcastLifeformHurt)
 */
