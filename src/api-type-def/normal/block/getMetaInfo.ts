import { Block, ItemMetaInfo } from "@type";
/**
 * Splits the block name by '|'. If no meta info, metaInfo is ''
 *
 * @param {BlockName | null | undefined} blockName
 * @returns {ItemMetaInfo}
 */
declare const getMetaInfo: (
  blockName: Block | null | undefined,
) => ItemMetaInfo;

export { getMetaInfo };

/**
 * Splits the block name by '|'. If no meta info, metaInfo is ''
 *
 * @param {BlockName | null | undefined} blockName
 * @returns {ItemMetaInfo}
 *
 * getMetaInfo(blockName)
 */
