import { BlockName, PlayerId } from "../../../type/index";
interface GetBlockTypesPlayerStandingOnInterface {
    /**
     * Get the types of block the player is standing on
     * For example, if a player is standing on 4 dirt blocks, this will return ["Dirt", "Dirt", "Dirt", "Dirt"]
     *
     * @param {PlayerId} playerId
     * @returns {BlockName[]}
     */
    getBlockTypesPlayerStandingOn(playerId: PlayerId): BlockName[];
}
export default GetBlockTypesPlayerStandingOnInterface;
