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
import { setCameraDirection } from "./setCameraDirection";
import { setPlayerOpacity } from "./setPlayerOpacity";
import { setPlayerOpacityForOnePlayer } from "./setPlayerOpacityForOnePlayer";
import { setCanChangeBlock } from "./setCanChangeBlock";
import { setCantChangeBlock } from "./setCantChangeBlock";
import { setCanChangeBlockType } from "./setCanChangeBlockType";
import { setCantChangeBlockType } from "./setCantChangeBlockType";
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
  setCameraDirection,
  setPlayerOpacity,
  setPlayerOpacityForOnePlayer,
  setCanChangeBlock,
  setCantChangeBlock,
  setCanChangeBlockType,
  setCantChangeBlockType,
};
