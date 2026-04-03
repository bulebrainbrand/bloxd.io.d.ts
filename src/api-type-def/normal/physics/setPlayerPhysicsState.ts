import { PlayerId, PlayerPhysicsStateData } from "@type";

/**
 * Set physics state of player (vehicle type and tier)
 *
 * @param {PlayerId} playerId
 * @param {PlayerPhysicsStateData} physicsState
 * @param {[number, number, number]} [positionOffset] - Optional offset to adjust the player's collision box
 * @returns {void}
 */
declare const setPlayerPhysicsState: (
  playerId: PlayerId,
  physicsState: PlayerPhysicsStateData,
  positionOffset?: [number, number, number],
) => void;
export { setPlayerPhysicsState };
/**
 * Set physics state of player (vehicle type and tier)
 *
 * @param {PlayerId} playerId
 * @param {PlayerPhysicsStateData} physicsState
 * @param {[number, number, number]} [positionOffset] - Optional offset to adjust the player's collision box
 * @returns {void}
 *
 * setPlayerPhysicsState(playerId, physicsState, positionOffset);
 */
