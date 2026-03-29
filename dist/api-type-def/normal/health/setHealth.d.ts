import { EntityId, Health, WhoDidDamage } from "../../../type/index";
/**
 * Set the current health of an entity.
 * If you want to set their health to more than their current max health, the optional increaseMaxHealthIfNeeded must be true.
 *
 * @bulebrainbrand i think this api cannot use other lifeformId
 *
 * @param {EntityId} entityId
 * @param {PNull<number>} newHealth - Can be null to make the player not have health
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoDidDamage] - Optional
 * @param {boolean} [increaseMaxHealthIfNeeded] - Optional
 * @returns {boolean} - Whether this change in health killed the player
 */
declare const setHealth: (entityId: EntityId, newHealth: Health | null, whoDidDamage?: Readonly<WhoDidDamage>, increaseMaxHealthIfNeeded?: boolean) => boolean;
export { setHealth };
