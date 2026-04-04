import { PlayerId } from "@type";
/**
 * Update the progress bar in the bottom right corner.
 * Can be queued.
 *
 * @param {PlayerId} playerId
 * @param {number} toFraction - The fraction of the progress bar you want to be filled up.
 * @param {number} [toDuration] - The time it takes for the bar to reach the given toFraction in ms.
 * If this is too low and you queue multiple updates, this toFraction could be skipped. Treat 200ms as a minimum.
 * @returns {void}
 */
declare const progressBarUpdate: (playerId: PlayerId, toFraction: number, toDuration?: number) => void;
export { progressBarUpdate };
/**
 * Update the progress bar in the bottom right corner.
 * Can be queued.
 *
 * @param {PlayerId} playerId
 * @param {number} toFraction - The fraction of the progress bar you want to be filled up.
 * @param {number} [toDuration] - The time it takes for the bar to reach the given toFraction in ms.
 * If this is too low and you queue multiple updates, this toFraction could be skipped. Treat 200ms as a minimum.
 * @returns {void}
 *
 * progressBarUpdate(playerId, toFraction, toDuration);
 */
//# sourceMappingURL=progressBarUpdate.d.ts.map