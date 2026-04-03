import { CosmeticName, CosmeticType, PlayerId } from "@type";

/**
 * Get a single equipped cosmetic for a player.
 *
 * @param {PlayerId} playerId
 * @param {CosmeticType} cosmeticType - Type of cosmetic
 * @returns {CosmeticName}
 */
declare const getPlayerCosmetic: (
  playerId: PlayerId,
  cosmeticType: CosmeticType,
) => CosmeticName;
export { getPlayerCosmetic };
/**
 * Get a single equipped cosmetic for a player.
 *
 * @param {PlayerId} playerId
 * @param {CosmeticType} cosmeticType - Type of cosmetic
 * @returns {CosmeticName}
 *
 * getPlayerCosmetic(playerId, cosmeticType);
 */
