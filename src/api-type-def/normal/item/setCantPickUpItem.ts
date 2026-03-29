import { ItemEntityId, PlayerId } from "@type";

declare const setCantPickUpItem: (
  playerId: PlayerId,
  itemId: ItemEntityId,
) => void;

export { setCantPickUpItem };
