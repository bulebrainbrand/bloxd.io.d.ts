/**
 * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
 *
 * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
 * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
 *
 * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
 * (currently only applicable to in-engine code), you should not verify using this
 *
 * @param {PlayerId} playerId
 * @returns { { position: [number, number, number]; normal: [number, number, number]; adjacent: [number, number, number] } }
 */
import { Coordinate, PlayerId } from "../../../type/index";
declare const getPlayerTargetInfo: (playerId: PlayerId) => {
    position: Coordinate;
    normal: Coordinate;
    adjacent: Coordinate;
};
export { getPlayerTargetInfo };
/**
 * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
 *
 * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
 * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
 *
 * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
 * (currently only applicable to in-engine code), you should not verify using this
 *
 * @param {PlayerId} playerId
 * @returns { { position: [number, number, number]; normal: [number, number, number]; adjacent: [number, number, number] } }
 *
 * getPlayerTargetInfo(playerId);
 */
