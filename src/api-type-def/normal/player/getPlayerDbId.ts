import { PlayerDbId, PlayerId } from "@type";

interface GetPlayerDbIdInterface {
  /**
   * Given a player, get their permanent identifier that doesn't change when leaving and re-entering
   *
   * @param {PlayerId} playerId
   * @returns {PlayerDbId}
   */
  getPlayerDbId(playerId: PlayerId): PlayerDbId;
}

export default GetPlayerDbIdInterface;
