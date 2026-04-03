import { ItemName, PlayerId } from "../../../type/index";
/**
 * Removes crafting recipes
 *
 * @param {PlayerId} playerId
 * @param {ItemName | null} itemName - Removes all crafting recipes for the given player if null, otherwise removes the crafting recipes for the given item.
 * @returns {void}
 */
declare const removeItemCraftingRecipes: (playerId: PlayerId, itemName: null | ItemName) => void;
export { removeItemCraftingRecipes };
/**
 * Removes crafting recipes
 *
 * @param {PlayerId} playerId
 * @param {PNull<string>} itemName - Removes all crafting recipes for the given player if null, otherwise removes the crafting recipes for the given item.
 * @returns {void}
 *
 * removeItemCraftingRecipes(playerId, itemName);
 */
