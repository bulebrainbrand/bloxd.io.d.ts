// TODO: make this api

import { PlayerId } from "@type";

/**
 * Sets the total aura for a player. Will not go over max level or under 0
 *
 * @param {PlayerId} playerId
 * @param {number} totalAura
 * @returns {void}
 */
declare const setTotalAura: (playerId: PlayerId, totalAura: number) => void;
export { setTotalAura };
/**
 * Sets the total aura for a player. Will not go over max level or under 0
 *
 * @param {PlayerId} playerId
 * @param {number} totalAura
 * @returns {void}
 *
 * setTotalAura(playerId, totalAura);
 */
