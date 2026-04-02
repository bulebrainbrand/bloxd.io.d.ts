import { Coordinate, EntityId, PlayerId } from "@type";

/**
 * Add following entity to player
 *
 * @param {PlayerId} playerId
 * @param {EntityId} eId
 * @param {number[]} [offset]
 * @param {boolean} [followsPlayerRotation]
 * @returns {void}
 */
declare const addFollowingEntityToPlayer: (
  playerId: PlayerId,
  eId: EntityId,
  offset?: Coordinate,
  followsPlayerRotation?: boolean,
) => void;
export { addFollowingEntityToPlayer };

/**
 * Add following entity to player
 *
 * @param {PlayerId} playerId
 * @param {EntityId} eId
 * @param {number[]} [offset]
 * @param {boolean} [followsPlayerRotation]
 * @returns {void}
 *
 * addFollowingEntityToPlayer(playerId, eId, offset, followsPlayerRotation);
 */
