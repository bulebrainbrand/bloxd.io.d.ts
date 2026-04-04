import { PlayerId } from "../../../type/index";
/**
 * Prevents a player from changing a block at a specific co-ordinate. Useful when client option canChange is true.
 * Overrides blockRect and blockType settings, so also useful when you have allowed changing of a block type with setCantChangeBlockType.
 * Using this on 1000s of blocks will cause lag - if that is needed, find a way to use setCantChangeBlockType.
 *
 * @param {PlayerId} playerId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {void}
 */
declare const setCantChangeBlock: (playerId: PlayerId, x: number, y: number, z: number) => void;
export { setCantChangeBlock };
/**
 * Prevents a player from changing a block at a specific co-ordinate. Useful when client option canChange is true.
 * Overrides blockRect and blockType settings, so also useful when you have allowed changing of a block type with setCantChangeBlockType.
 * Using this on 1000s of blocks will cause lag - if that is needed, find a way to use setCantChangeBlockType.
 *
 * @param {PlayerId} playerId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {void}
 *
 * setCantChangeBlock(playerId, x, y, z)
 */
//# sourceMappingURL=setCantChangeBlock.d.ts.map