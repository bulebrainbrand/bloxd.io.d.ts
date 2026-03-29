import { PlayerId } from "../../../type/index";
interface GetPlayerIdInterface {
    /**
     * Given the name of a player, get their id
     *
     * @param {string} playerName
     * @returns {null | PlayerId}
     */
    getPlayerId(playerName: string): null | PlayerId;
}
export default GetPlayerIdInterface;
