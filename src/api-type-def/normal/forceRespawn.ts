import { Coordinate, PlayerId } from "../../type";

interface ForceRespawnInterface {
  /**
   * Force respawn a player
   *
   * @param {PlayerId} playerId
   * @param {Coordinate} [respawnPos]
   * @returns {void}
   */
  forceRespawn(playerId: PlayerId, respawnPos?: Readonly<Coordinate>): void;
}
