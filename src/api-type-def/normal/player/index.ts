import GetPlayerIdsInterface from "./getPlayerIds";
import GetNumPlayersInterface from "./getNumPlayers";
import GetPlayerPartyWhenJoinedInterface from "./getPlayerPartyWhenJoined";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
import GetPlayerIdInterface from "./getPlayerId";
import GetPlayerDbIdInterface from "./getPlayerDbId";
import GetPlayerIdFromDbIdInterface from "./getPlayerIdFromDbId";
import KickPlayerInterface from "./kickPlayer";
import IsMobile from "./isMobile";
export type PlayerApis = IsMobile &
  GetNumPlayersInterface &
  GetPlayerIdsInterface &
  GetPlayerPartyWhenJoinedInterface &
  PlayerIsInGameInterface &
  PlayerIsLoggedInInterface &
  GetPlayerIdInterface &
  GetPlayerDbIdInterface &
  GetPlayerIdFromDbIdInterface &
  KickPlayerInterface;
