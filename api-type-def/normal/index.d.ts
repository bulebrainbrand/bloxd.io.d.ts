import GetPositionInterface from "./getPosition";
import SetPositionInterface from "./setPosition";
import GetPlayerIdsInterface from "./getPlayerIds";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
import { MargeObject } from "../../type";

type AllNormalApiIntersection = GetPositionInterface &
  SetPositionInterface &
  GetPlayerIdsInterface &
  PlayerIsInGameInterface &
  PlayerIsLoggedInInterface;

export type NormalApi = MargeObject<AllNormalApiIntersection>;
