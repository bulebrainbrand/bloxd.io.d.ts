/**
 * Get stat info about a block or item
 * Either based on a client option for a player: (e.g. `DirtTtb`)
 * or its entry in blockMetadata.ts or nonBlockMetadata in itemMetadata.ts if no client option is set.
 *
 * If null is passed for lifeformId, this is simply its entry in blockMetadata etc.
 *
 * @param {PNull<LifeformId>} lifeformId
 * @param {ItemName} itemName
 * @param {K} stat
 * @returns {AnyMetadataItem[K]}
 *
 * getItemStat(lifeformId, itemName, stat)
 */
