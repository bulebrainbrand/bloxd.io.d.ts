import { MobId } from "@type";

/**
 * Dispose of a mob's state and remove them from the world without triggering "on death" flows.
 * Always succeeds.
 *
 * @param {MobId} mobId
 * @returns {void}
 *
 * despawnMob(mobId);
 */
declare const despawnMob: (mobId: MobId) => void;
export { despawnMob };

/**
 * Dispose of a mob's state and remove them from the world without triggering "on death" flows.
 * Always succeeds.
 *
 * @param {MobId} mobId
 * @returns {void}
 *
 * despawnMob(mobId);
 */
