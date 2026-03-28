interface GetNumPlayersInterface {
  /**
   * Get the number of players in the room
   *
   * @description this return number is 1 - 40 int cuz one room max player number is 40
   * @returns {number}
   */
  getNumPlayers(): number;
}

export default GetNumPlayersInterface;
