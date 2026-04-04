import { PlayerId } from "@type";
/**
 * This will initiate the MiddleScreenBar, starting at empty and filling up to full over the given duration.
 * Good to represent cooldowns (eg gun reload) or charged items (eg crossbow)
 *
 * @param {PlayerId} playerId
 * @param {number} duration - ms over which the MiddleScreenBar fills up
 * @param {boolean} [chargeExpiresAutomatically] - Defaults to true. If true, the bar will disappear upon reaching full. If false, the bar will remain at full until hidden with removeMiddleScreenBar
 * @param {number} [horizontalBarRemOffset] - Offset the bar left or right (in css unit - rem)
 * @returns {void}
 */
declare const initiateMiddleScreenBar: (playerId: PlayerId, duration: number, chargeExpiresAutomatically?: boolean, horizontalBarRemOffset?: number) => void;
export { initiateMiddleScreenBar };
/**
 * This will initiate the MiddleScreenBar, starting at empty and filling up to full over the given duration.
 * Good to represent cooldowns (eg gun reload) or charged items (eg crossbow)
 *
 * @param {PlayerId} playerId
 * @param {number} duration - ms over which the MiddleScreenBar fills up
 * @param {boolean} [chargeExpiresAutomatically] - Defaults to true. If true, the bar will disappear upon reaching full. If false, the bar will remain at full until hidden with removeMiddleScreenBar
 * @param {number} [horizontalBarRemOffset] - Offset the bar left or right (in css unit - rem)
 * @returns {void}
 *
 * initiateMiddleScreenBar(
  playerId,
  duration,
  chargeExpiresAutomatically,
  horizontalBarRemOffset,
);
 */
//# sourceMappingURL=initiateMiddleScreenBar.d.ts.map