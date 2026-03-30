import { PlayerId } from "@type";
/**
 * Set a player's opacity
 * A simple helper that calls setTargetedPlayerSettingForEveryone
 *
 *  Opacity is 0 - 1 number
 *
 * @param {PlayerId} playerId
 * @param {number} opacity
 * @returns {void}
 */
declare const setPlayerOpacity: (playerId: PlayerId, opacity: number) => void;

export { setPlayerOpacity };
