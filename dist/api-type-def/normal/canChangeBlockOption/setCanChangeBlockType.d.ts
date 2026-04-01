import { Block, PlayerId } from "../../../type/index";
/**
 * Lets a player Change a block type. Valid names are those contained within blockMetadata.ts and 'Air'
 * Less priority than cant change block pos/can change block rect
 *
 * @param {PlayerId} playerId
 * @param {BlockName} blockName
 * @returns {void}
 */
declare const setCanChangeBlockType: (playerId: PlayerId, blockName: Block) => void;
export { setCanChangeBlockType };
/**
 * Lets a player Change a block type. Valid names are those contained within blockMetadata.ts and 'Air'
 * Less priority than cant change block pos/can change block rect
 *
 * @param {PlayerId} playerId
 * @param {BlockName} blockName
 * @returns {void}
 *
 * setCanChangeBlockType(playerId, blockName)
 */
