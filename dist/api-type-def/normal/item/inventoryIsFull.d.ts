import { PlayerId } from "../../../type/index";
/**
 * Whether the player has space in their inventory to get new blocks
 *
 * @param {PlayerId} playerId
 * @returns {boolean}
 */
declare const inventoryIsFull: (playerId: PlayerId) => boolean;
export { inventoryIsFull };
