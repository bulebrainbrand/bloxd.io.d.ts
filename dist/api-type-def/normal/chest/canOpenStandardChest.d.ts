import { PlayerId } from "@type";
/**
 * Checks if a player is able to open a chest at a given location,
 * as per the rules laid out by the "onPlayerAttemptOpenChest" game callback.
 * Returns true if the player can open the chest, false if they cannot, and void if the chest does not exist.
 *
 * @param {PlayerId} playerId
 * @param {number} chestX
 * @param {number} chestY
 * @param {number} chestZ
 * @returns {boolean | null}
 */
declare const canOpenStandardChest: (playerId: PlayerId, chestX: number, chestY: number, chestZ: number) => boolean | null;
export { canOpenStandardChest };
/**
 * Checks if a player is able to open a chest at a given location,
 * as per the rules laid out by the "onPlayerAttemptOpenChest" game callback.
 * Returns true if the player can open the chest, false if they cannot, and void if the chest does not exist.
 *
 * @param {PlayerId} playerId
 * @param {number} chestX
 * @param {number} chestY
 * @param {number} chestZ
 * @returns {PNull<boolean>}
 *
 * canOpenStandardChest(playerId, chestX, chestY, chestZ)
 */
//# sourceMappingURL=canOpenStandardChest.d.ts.map