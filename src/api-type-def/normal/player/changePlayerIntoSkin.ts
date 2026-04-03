import { CosmeticName, CosmeticType, PlayerId } from "@type";

/**
 * Change a part of a player's skin
 *
 * @param {PlayerId} playerId - Player to change
 * @param {CosmeticType} cosmeticType - Type of cosmetic
 * @param {CosmeticName} cosmeticName - Chosen cosmetic, will be made lowercase automatically
 * @returns {void}
 */
declare const changePlayerIntoSkin: (
  playerId: PlayerId,
  cosmeticType: CosmeticType,
  cosmeticName: CosmeticName,
) => void;
export { changePlayerIntoSkin };
/**
 * Change a part of a player's skin
 *
 * @param {PlayerId} playerId - Player to change
 * @param {CosmeticType} cosmeticType - Type of cosmetic
 * @param {CosmeticName} cosmeticName - Chosen cosmetic, will be made lowercase automatically
 * @returns {void}
 *
 * changePlayerIntoSkin(playerId, cosmeticType, cosmeticName);
 */
