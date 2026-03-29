import { PlayerDbId, PlayerId } from "@type";

/**
 * Returns null if player not in lobby
 *
 * @param {PlayerDbId} dbId
 * @returns {null | PlayerId}
 */
declare const getPlayerIdFromDbId: (dbId: PlayerDbId) => null | PlayerId;

export { getPlayerIdFromDbId };
