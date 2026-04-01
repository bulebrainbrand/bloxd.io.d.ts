import { ItemAttributes, ItemName, PlayerId } from "../../../type/index";
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
declare const setItemSlot: (playerId: PlayerId, itemSlotIndex: number, itemName: ItemName, itemAmount: number, attributes: ItemAttributes, tellClient: boolean) => void;
export { setItemSlot };
/**
 * Put an item in a specific index. Default hotbar is indexes 0-9
 *
 * @param {PlayerId} playerId
 * @param {number} itemSlotIndex - 0-indexed
 * @param {ItemName} itemName - Can be 'Air', in which case itemAmount will be ignored and the slot will be cleared.
 * @param {PNull<number>} [itemAmount] - -1 for infinity. Should not be set, or null, for items that are not stackable.
 * @param {ItemAttributes} [attributes] - An optional object for certain types of item. For guns this can contain the shotsLeft field which is the amount of ammo the gun currently has.
 * @param {boolean} [tellClient] - whether to tell client about it - results in desync between client and server if client doesnt locally perform the same action
 * @returns {void}
 *
 * setItemSlot(
  playerId,
  itemSlotIndex,
  itemName,
  itemAmount,
  attributes,
  tellClient,
)
 */
