import { PlayerId } from "../../type";
/**
 * Whether a player is currently in the game
 *
 * @param {PlayerId} playerId
 * @returns {boolean}
 */
export type PlayerIsInGame = (palyerId: PlayerId) => boolean;
