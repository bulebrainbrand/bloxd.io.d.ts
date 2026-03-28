import GetPlayerIdsInterface from "./getPlayerIds";
import GetNumPlayersInterface from "./getNumPlayers";
import GetPlayerPartyWhenJoinedInterface from "./getPlayerPartyWhenJoined";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
export type PlayerApis = GetNumPlayersInterface & GetPlayerIdsInterface & GetPlayerPartyWhenJoinedInterface & PlayerIsInGameInterface & PlayerIsLoggedInInterface;
