import { PlayerDbId, PlayerId } from "@type";

interface GetPlayerIdFromDbIdInterface {
  /**
   * Returns null if player not in lobby
   *
   * @param {PlayerDbId} dbId
   * @returns {null | PlayerId}
   */
  getPlayerIdFromDbId(dbId: PlayerDbId): null | PlayerId;
}

export default GetPlayerIdFromDbIdInterface;
