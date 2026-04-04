import { PlayerId } from "../../../type/index";
/**
 * Add (or remove if negative) aura to a player. Will not go over max level or under 0
 *
 * @param {PlayerId} playerId
 * @param {number} auraDiff
 * @returns {number} - The actual change in aura
 */
declare const applyAuraChange: (playerId: PlayerId, auraDiff: number) => number;
export { applyAuraChange };
/**
 * Add (or remove if negative) aura to a player. Will not go over max level or under 0
 *
 * @param {PlayerId} playerId
 * @param {number} auraDiff
 * @returns {number} - The actual change in aura
 *
 * applyAuraChange(playerId, auraDiff);
 */
//# sourceMappingURL=applyAuraChange.d.ts.map