import { BlockId, BlockName } from "../../../type/index";
/**
 * Goes from block id to block name. The reverse of blockNameToBlockId
 *
 * @param {BlockId} blockId
 * @returns {BlockName}
 */
declare const blockIdToBlockName: (blockId: BlockId) => BlockName;
export { blockIdToBlockName };
