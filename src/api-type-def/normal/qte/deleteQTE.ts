import { PlayerId, QTERequestId } from "@type";

/**
 * Delete a quicktime event from the screen
 *
 * @param {PlayerId} playerId
 * @param {QTERequestId} id - Returned from the addQTE request you want to cancel
 * @returns {void}
 */
declare const deleteQTE: (playerId: PlayerId, id: QTERequestId) => void;
export { deleteQTE };
/**
 * Delete a quicktime event from the screen
 *
 * @param {PlayerId} playerId
 * @param {QTERequestId} id - Returned from the addQTE request you want to cancel
 * @returns {void}
 *
 * deleteQTE(playerId, id);
 */
