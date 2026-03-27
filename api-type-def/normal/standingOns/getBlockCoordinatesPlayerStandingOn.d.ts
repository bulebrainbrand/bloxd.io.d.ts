import { Coordinate, PlayerId } from "../../../type";

interface GetBlockCoordinatesPlayerStandingOnInterface {
  /**
   * Get the co-ordinates of the blocks the player is standing on as a list. For example, if the center of the player is at 0,0,0
   * this function will return [[0, -1, 0], [-1, -1, 0], [0, -1, -1], [-1, -1, -1]]
   * If the player is just standing on one block, the function would return e.g. [[0, 0, 0]]
   * If the player is middair then returns an empty list [].
   *
   * @param {PlayerId} playerId
   * @returns {Coordinate[]}
   */
  getBlockCoordinatesPlayerStandingOn(playerId: PlayerId): Coordinate[];
}

export default GetBlockCoordinatesPlayerStandingOnInterface;
