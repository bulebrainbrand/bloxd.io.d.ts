import { BlockNameOrId, PlayerId } from "../../../type/index";
/**
 * Remove any previous can/cant change block type settings for a player
 *
 * @param {PlayerId} playerId
 * @param {BlockNameOrId} blockName
 * @returns {void}
 */
declare const resetCanChangeBlockType: (playerId: PlayerId, blockName: BlockNameOrId) => void;
export { resetCanChangeBlockType };
/**
 * Remove any previous can/cant change block type settings for a player
 *
 * @param {PlayerId} playerId
 * @param {BlockName} blockName
 * @returns {void}
 *
 * resetCanChangeBlockType(playerId, blockName)
 */
