// TODO: make this api

/**
 * Update the max players and soft max players matchmaking will use
 *
 * softMaxPlayers is the number of players that matchmaking will route to using "Quick Play".
 * Once the softMaxPlayers limit is reached, this lobby can only be joined by requesting the lobby name or joining a friend.
 *
 * maxPlayers is the absolute maximum: a lobby will not have more players than this.
 * Tip: softMaxPlayers should be around 90% of maxPlayers
 *
 * WARNING: This change is not immediate, as it takes a while for matchmaking to find out.
 * Also, this will not kick players out of the lobby if set to a lower value than the current player count.
 *
 * @param {number} softMaxPlayers
 * @param {number} maxPlayers
 * @returns {void}
 *
 * setMaxPlayers(softMaxPlayers, maxPlayers);
 */
