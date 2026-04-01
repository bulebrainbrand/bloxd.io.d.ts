import { PlayerId } from "@type";

/**
 * Get the aura info for a player
 *
 * @param {PlayerId} playerId
 * @returns { { level: number; totalAura: number; auraPerLevel: number } }
 */
declare const getAuraInfo: (player: PlayerId) => {
  level: number;
  totalAura: number;
  auraPerLevel: number;
};

export { getAuraInfo };
/**
 * Get the aura info for a player
 *
 * @param {PlayerId} playerId
 * @returns { { level: number; totalAura: number; auraPerLevel: number } }
 *
 * getAuraInfo(playerId);
 */
