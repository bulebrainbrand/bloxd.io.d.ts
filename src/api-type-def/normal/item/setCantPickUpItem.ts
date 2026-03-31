import { ItemEntityId, PlayerId } from "@type";

declare const setCantPickUpItem: (
  playerId: PlayerId,
  itemId: ItemEntityId,
) => void;

export { setCantPickUpItem };

/**
 * Prevent a player from picking up an item. itemId returned by createItemDrop
 *
 * @param {PlayerId} playerId
 * @param {EntityId} itemId
 * @returns {void}
 *
 * setCantPickUpItem(playerId, itemId)
 */
