import { BlockName, PlayerId } from "../../../type/index";
/**
 * Allow a player to walk through a type of block. For blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.
 *
 * @param {PlayerId} playerId
 * @param {BlockName} blockName
 * @param {boolean} [disable] - If you've enabled a player to walk through a block and want to make the block solid for them again, pass this with true. Otherwise you only need to pass playerId and blockName
 * @returns {void}
 */
declare const setWalkThroughType: (playerId: PlayerId, blockName: BlockName, disable?: boolean) => void;
export { setWalkThroughType };
/**
 * Allow a player to walk through a type of block. For blocks that are normally solid and not seethrough, the player will experience slight visual glitches while inside the block.
 *
 * @param {PlayerId} playerId
 * @param {BlockName} blockName
 * @param {boolean} [disable] - If you've enabled a player to walk through a block and want to make the block solid for them again, pass this with true. Otherwise you only need to pass playerId and blockName
 * @returns {void}
 *
 * setWalkThroughType(playerId, blockName, disable)
 */
