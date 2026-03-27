import { PlayerId } from "../../type";

interface GetPlayerIdsInterface {
  /**
   * Get all the player ids.
   *
   * @returns {PlayerId[]}
   */
  getPlayerIds(): PlayerId[];
}

export default GetPlayerIdsInterface;
