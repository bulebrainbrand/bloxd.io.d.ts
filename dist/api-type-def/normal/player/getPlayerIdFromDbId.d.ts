import { PlayerDbId, PlayerId } from "../../../type/index";
/**
 * Returns null if player not in lobby
 *
 * @param {PlayerDbId} dbId
 * @returns {null | PlayerId}
 */
declare const getPlayerIdFromDbId: (dbId: PlayerDbId) => null | PlayerId;
export { getPlayerIdFromDbId };
/**
 * Returns null if player not in lobby
 *
 * @param {PlayerDbId} dbId
 * @returns {PNull<PlayerId>}
 *
 * getPlayerIdFromDbId(dbId)
 */
