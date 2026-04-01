import { Party, PlayerId } from "../../../type/index";
/**
 * Returns the party that the player was in when they joined the game. The returned object contains the playerDbIds, as well
 * as the playerIds if available, of the party leader and members.
 *
 * @param {PlayerId} playerId
 * @returns {PNull<{ partyCode: string; playerDbIds: PlayerDbId[] }>}
 */
declare const getPlayerPartyWhenJoined: (playerId: PlayerId) => Party | null;
export { getPlayerPartyWhenJoined };
/**
 * Returns the party that the player was in when they joined the game. The returned object contains the playerDbIds, as well
 * as the playerIds if available, of the party leader and members.
 *
 * @param {PlayerId} playerId
 * @returns {PNull<{ partyCode: string; playerDbIds: PlayerDbId[] }>}
 *
 * getPlayerPartyWhenJoined(playerId)
 */
