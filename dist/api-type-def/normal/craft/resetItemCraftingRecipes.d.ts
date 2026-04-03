import { ItemName, PlayerId } from "../../../type/index";
/**
 * Reset the crafting recipes for a given back to its original bloxd state
 *
 * @param {PlayerId} playerId
 * @param {ItemName | null} itemName - Resets all crafting recipes for the given player if null, otherwise resets the crafting recipes for the given item.
 * @returns {void}
 */
declare const resetItemCraftingRecipes: (playerId: PlayerId, itemName: ItemName | null) => void;
export { resetItemCraftingRecipes };
/**
 * Reset the crafting recipes for a given back to its original bloxd state
 *
 * @param {PlayerId} playerId
 * @param {PNull<string>} itemName - Resets all crafting recipes for the given player if null, otherwise resets the crafting recipes for the given item.
 * @returns {void}
 *
 * resetItemCraftingRecipes(playerId, itemName);
 */
