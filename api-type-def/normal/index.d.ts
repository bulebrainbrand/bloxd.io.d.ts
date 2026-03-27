import GetPositionInterface from "./getPosition";
import SetPositionInterface from "./setPosition";
import GetPlayerIdsInterface from "./getPlayerIds";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
import GetPlayerPartyWhenJoinedInterface from "./getPlayerPartyWhenJoined";
import GetNumPlayersInterface from "./getNumPlayers";
import { MargeObject } from "../../type";

type AllNormalApiIntersection = GetPositionInterface &
  SetPositionInterface &
  GetPlayerIdsInterface &
  PlayerIsInGameInterface &
  PlayerIsLoggedInInterface &
  GetPlayerPartyWhenJoinedInterface &
  GetNumPlayersInterface;

export type NormalApi = MargeObject<AllNormalApiIntersection>;
