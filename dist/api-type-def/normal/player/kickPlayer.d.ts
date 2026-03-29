import { PlayerId } from "../../../type/index";
interface KickPlayerInterface {
    /**
     * @param {PlayerId} playerId
     * @param {string} reason
     * @returns {void}
     */
    kickPlayer(playerId: PlayerId, reason: string): void;
}
export default KickPlayerInterface;
