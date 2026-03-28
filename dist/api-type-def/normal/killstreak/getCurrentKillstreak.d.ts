import { PlayerId } from "@type";
interface GetCurrentKillsreakInterface {
    /**
     * Gets the player's current killstreak
     *
     * @param {PlayerId} playerId
     * @returns {number}
     */
    getCurrentKillstreak(playerId: PlayerId): number;
}
export default GetCurrentKillsreakInterface;
