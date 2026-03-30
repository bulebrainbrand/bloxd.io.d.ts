import { Block, PlayerId } from "@type";
/**
 * Stops a player from changing a block type. Valid names are those contained within blockMetadata.ts and 'Air'
 * Less priority than can change block pos/can change block rect
 *
 * @param {PlayerId} playerId
 * @param {BlockName} blockName
 * @returns {void}
 */
declare const setCantChangeBlockType: (
  playerId: PlayerId,
  block: Block,
) => void;

export { setCantChangeBlockType };
