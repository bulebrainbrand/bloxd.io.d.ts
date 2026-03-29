import { LifeformId } from "../../../type/index";
/**
 * Whether a lifeform is alive or dead (or on the respawn screen, in a player's case).
 *
 * @param {LifeformId} lifeformId
 * @returns {boolean}
 */
declare const isAlive: (lifeformId: LifeformId) => boolean;
export { isAlive };
