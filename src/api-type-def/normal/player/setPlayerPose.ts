import { PlayerId, PlayerPose } from "@type";

/**
 * Set the pose of the player
 *
 * @param {PlayerId} playerId
 * @param {PlayerPose} pose
 * @param {[number, number, number]} [poseOffset]
 * @returns {void}
 */
declare const setPlayerPose: (
  playerId: PlayerId,
  pose: PlayerPose,
  poseOffset?: [number, number, number],
) => void;
export { setPlayerPose };
/**
 * Set the pose of the player
 *
 * @param {PlayerId} playerId
 * @param {PlayerPose} pose
 * @param {[number, number, number]} [poseOffset]
 * @returns {void}
 *
 * setPlayerPose(playerId, pose, poseOffset);
 */
