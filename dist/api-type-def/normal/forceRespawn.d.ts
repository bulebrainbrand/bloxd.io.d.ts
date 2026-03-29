import { Coordinate, PlayerId } from "../../type/index";
/**
 * Force respawn a player
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} [respawnPos]
 * @returns {void}
 */
declare const forceRespawn: (playerId: PlayerId, respawnPos?: Readonly<Coordinate>) => void;
export { forceRespawn };
