import { PlayerDbId, PlayerId } from "@type";

/**
 * Given a player, get their permanent identifier that doesn't change when leaving and re-entering
 *
 * @param {PlayerId} playerId
 * @returns {PlayerDbId}
 */
declare const getPlayerDbId: (playerId: PlayerId) => PlayerDbId;

export { getPlayerDbId };

/**
 * Given a player, get their permanent identifier that doesn't change when leaving and re-entering
 *
 * @param {PlayerId} playerId
 * @returns {PlayerDbId}
 *
 * getPlayerDbId(playerId)
 */
