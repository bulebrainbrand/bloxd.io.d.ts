import { PlayerId, PlayerPhysicsStateData } from "@type";

/**
 * Get physics state for player
 *
 * @param {PlayerId} playerId
 * @returns {PlayerPhysicsStateData}
 */
declare const getPlayerPhysicsState: (
  playerId: PlayerId,
) => PlayerPhysicsStateData;
export { getPlayerPhysicsState };
/**
 * Get physics state for player
 *
 * @param {PlayerId} playerId
 * @returns {PlayerPhysicsStateData}
 *
 * getPlayerPhysicsState(playerId);
 */
