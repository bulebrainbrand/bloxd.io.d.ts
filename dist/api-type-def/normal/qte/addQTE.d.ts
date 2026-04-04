import { PlayerId, QTEClientParameters, QTERequestId } from "../../../type/index";
/**
 * Create and register the UI for the requested quicktime event (QTE) to the screen.
 * Handle the result via the onPlayerFinishQTE engine callback.
 *
 * @param {PlayerId} playerId
 * @param {QTEClientParameters<T>} qteParameters - includes type and parameters
 * @returns {QTERequestId} - an id that can be passed to deleteQTE
 */
declare const addQTE: (playerId: PlayerId, qteParameters: QTEClientParameters) => QTERequestId;
export { addQTE };
/**
 * Create and register the UI for the requested quicktime event (QTE) to the screen.
 * Handle the result via the onPlayerFinishQTE engine callback.
 *
 * @param {PlayerId} playerId
 * @param {QTEClientParameters<T>} qteParameters - includes type and parameters
 * @returns {QTERequestId} - an id that can be passed to deleteQTE
 *
 * addQTE(playerId, qteParameters);
 */
//# sourceMappingURL=addQTE.d.ts.map