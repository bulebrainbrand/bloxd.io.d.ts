import { getPlayerIds } from "./getPlayerIds";
import { getNumPlayers } from "./getNumPlayers";
import { getPlayerPartyWhenJoined } from "./getPlayerPartyWhenJoined";
import { playerIsInGame } from "./playerIsInGame";
import { playerIsLoggedIn } from "./playerIsLoggedIn";
import { getPlayerId } from "./getPlayerId";
import { getPlayerDbId } from "./getPlayerDbId";
import { getPlayerIdFromDbId } from "./getPlayerIdFromDbId";
import { kickPlayer } from "./kickPlayer";
import { isMobile } from "./isMobile";
export const PlayerApis = {
  getPlayerIds,
  getNumPlayers,
  getPlayerPartyWhenJoined,
  playerIsInGame,
  playerIsLoggedIn,
  getPlayerId,
  getPlayerDbId,
  getPlayerIdFromDbId,
  kickPlayer,
  isMobile,
};
