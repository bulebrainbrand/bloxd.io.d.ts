import { PlayerId } from "../../../type/index";
/**
 * Set the level of viewable opacity by one player on another player
 * A simple helper that calls setOtherEntitySetting
 *
 * @param {PlayerId} playerIdWhoViewsOpacityPlayer - The player who sees that with opacity
 * @param {PlayerId} playerIdOfOpacityPlayer - The player/player model who is given opacity
 * @param {number} opacity
 * @returns {void}
 */
declare const setPlayerOpacityForOnePlayer: (playerIdWhoViewsOpacityPlayer: PlayerId, playerIdOfOpacityPlayer: PlayerId, opacity: number) => void;
export { setPlayerOpacityForOnePlayer };
/**
 * Set the level of viewable opacity by one player on another player
 * A simple helper that calls setOtherEntitySetting
 *
 * @param {PlayerId} playerIdWhoViewsOpacityPlayer - The player who sees that with opacity
 * @param {PlayerId} playerIdOfOpacityPlayer - The player/player model who is given opacity
 * @param {number} opacity
 * @returns {void}
 *
 * setPlayerOpacityForOnePlayer(playerIdWhoViewsOpacityPlayer, playerIdOfOpacityPlayer, opacity)
 */
