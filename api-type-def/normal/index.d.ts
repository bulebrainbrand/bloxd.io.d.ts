import GetPlayerIdsInterface from "./getPlayerIds";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
import GetPlayerPartyWhenJoinedInterface from "./getPlayerPartyWhenJoined";
import GetNumPlayersInterface from "./getNumPlayers";
import GetUnitCoordinatesLifeformWithinInterface from "./getUnitCoordinatesLifeformWithin";
import { ShopApis } from "./shops";
import { ShieldApis } from "./shields";
import { PositionApis } from "./positions";
import { StandingOnApis } from "./standingOns";
import { MargeObject } from "../../type";

type AllNormalApiIntersection = PositionApis &
  GetPlayerIdsInterface &
  PlayerIsInGameInterface &
  PlayerIsLoggedInInterface &
  GetPlayerPartyWhenJoinedInterface &
  GetNumPlayersInterface &
  StandingOnApis &
  GetUnitCoordinatesLifeformWithinInterface &
  ShopApis &
  ShieldApis;

export type NormalApi = MargeObject<AllNormalApiIntersection>;
