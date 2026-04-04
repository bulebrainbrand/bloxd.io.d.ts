import { BlockId, BlockName } from "../../../type/index";
/**
 * Get the numeric id of a block used in the ndarrays returned from getChunk
 * I.e. chunk.blockData.set(x, y, z, api.blockNameToBlockId("Dirt"))
 * or chunk.blockData.get(x, y, z) === api.blockNameToBlockId("Dirt")
 *
 * @param {BlockName} blockName
 * @param {boolean} [allowInvalidBlock] - Don't throw an error if the block name is invalid.
 * Defaults false. If true and name is invalid, returns null.
 * @returns {PNull<number>}
 */
declare const blockNameToBlockId: {
    (blockName: BlockName): BlockId;
    (blockName: BlockName, allowInvalidBlock: true): null | BlockId;
    (blockName: BlockName, allowInvalidBlock: false): BlockId;
};
export { blockNameToBlockId };
/**
 * Get the numeric id of a block used in the ndarrays returned from getChunk
 * I.e. chunk.blockData.set(x, y, z, api.blockNameToBlockId("Dirt"))
 * or chunk.blockData.get(x, y, z) === api.blockNameToBlockId("Dirt")
 *
 * @param {BlockName} blockName
 * @param {boolean} [allowInvalidBlock] - Don't throw an error if the block name is invalid.
 * Defaults false. If true and name is invalid, returns null.
 * @returns {PNull<number>}
 *
 * blockNameToBlockId(blockName, allowInvalidBlock)
 */
//# sourceMappingURL=blockNameToBlockId.d.ts.map