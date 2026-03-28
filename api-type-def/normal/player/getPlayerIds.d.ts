import { PlayerId } from "../../..";

interface GetPlayerIdsInterface {
  /**
   * Get all the player ids.
   *
   * @returns {PlayerId[]}
   */
  getPlayerIds(): PlayerId[];
}

export default GetPlayerIdsInterface;
