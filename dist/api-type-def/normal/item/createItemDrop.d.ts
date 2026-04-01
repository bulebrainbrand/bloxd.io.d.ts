import { ItemAttributes, ItemEntityId, ItemName, LifeformId } from "../../../type/index";
/**
 * Create a dropped item.
 *
 * ItemDropOptions is never cuz i can't find type define in offical docment
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {ItemName} itemName - Name of the item. Valid names can be found in blockMetadata.ts and itemMetadata.ts
 * @param {number | null} [amount] - The amount of the item to include in the drop - so when the player picks up the item drop, they get this many of the item.
 * @param {boolean} [mergeItems] - Whether to merge the item into a nearby item of same type, if one exists. Defaults to false.
 * @param {ItemAttributes} [attributes] - Attributes of the item being dropped
 * @param {number} [timeTillDespawn] - Time till the item automatically despawns in milliseconds. Max of 5 mins.
 * @param {null | LifeformId } [dropperId] - Who dropped the item.
 * @param {ItemDropOptions} [options] - Additional options, such as doPhysics and size.
 * @returns {null | EntityId} - the id you can pass to setCantPickUpItem, or null if the item drop limit was reached
 */
declare const createItemDrop: (x: number, y: number, z: number, itemName: ItemName, amount?: number | null, margeItems?: boolean, attributes?: ItemAttributes, timeTillDespawn?: number, dropperId?: LifeformId | null, options?: never) => null | ItemEntityId;
export { createItemDrop };
/**
 * Create a dropped item.
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {ItemName} itemName - Name of the item. Valid names can be found in blockMetadata.ts and itemMetadata.ts
 * @param {PNull<number>} [amount] - The amount of the item to include in the drop - so when the player picks up the item drop, they get this many of the item.
 * @param {boolean} [mergeItems] - Whether to merge the item into a nearby item of same type, if one exists. Defaults to false.
 * @param {ItemAttributes} [attributes] - Attributes of the item being dropped
 * @param {number} [timeTillDespawn] - Time till the item automatically despawns in milliseconds. Max of 5 mins.
 * @param {PNull<LifeformId>} [dropperId] - Who dropped the item.
 * @param {ItemDropOptions} [options] - Additional options, such as doPhysics and size.
 * @returns {PNull<EntityId>} - the id you can pass to setCantPickUpItem, or null if the item drop limit was reached
 *
 * createItemDrop(x, y, z, itemName, amount, mergeItems, attributes, timeTillDespawn, dropperId, options)
 */
