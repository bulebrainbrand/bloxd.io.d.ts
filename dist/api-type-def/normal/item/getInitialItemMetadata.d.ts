/**
 * Get the metadata about a block or item before stats have been modified by any client options
 * (i.e. its entry in either blockMetadata.ts or nonBlockMetadata in itemMetadata.ts)
 *
 * @param {string} itemName
 * @returns {Partial<BlockMetadataItem & NonBlockMetadataItem>}
 *
 * getInitialItemMetadata(itemName)
 */
