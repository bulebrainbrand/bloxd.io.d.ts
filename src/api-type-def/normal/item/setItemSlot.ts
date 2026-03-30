import { ItemAttributes, ItemName, PlayerId } from "@type";

/**
 * Put an item in a specific index. Default hotbar is indexes 0-9
 *
 * @param {PlayerId} playerId
 * @param {number} itemSlotIndex
 * @param {ItemName} itemName
 * @param {number} itemAmount
 * @param {ItemAttributes} attributes
 * @param {boolean} tellClient
 * @returns {void}
 */
declare const setItemSlot: (
  playerId: PlayerId,
  itemSlotIndex: number,
  itemName: ItemName,
  itemAmount: number,
  attributes: ItemAttributes,
  tellClient: boolean,
) => void;

export { setItemSlot };
