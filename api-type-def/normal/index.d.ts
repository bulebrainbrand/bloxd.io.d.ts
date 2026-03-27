import GetPlayerIdsInterface from "./getPlayerIds";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
import GetPlayerPartyWhenJoinedInterface from "./getPlayerPartyWhenJoined";
import GetNumPlayersInterface from "./getNumPlayers";
import GetBlockCoordinatesPlayerStandingOnInterface from "./getBlockCoordinatesPlayerStandingOn";
import GetBlockTypesPlayerStandingOnInterface from "./getBlockTypesPlayerStandingOn";
import GetUnitCoordinatesLifeformWithinInterface from "./getUnitCoordinatesLifeformWithin";
import ShowShopTutorialInterface from "./showShopTutorial";
import { ShieldApis } from "./shields";
import { PositionApis } from "./positions";
import { MargeObject } from "../../type";

type AllNormalApiIntersection = PositionApis &
  GetPlayerIdsInterface &
  PlayerIsInGameInterface &
  PlayerIsLoggedInInterface &
  GetPlayerPartyWhenJoinedInterface &
  GetNumPlayersInterface &
  GetBlockCoordinatesPlayerStandingOnInterface &
  GetBlockTypesPlayerStandingOnInterface &
  GetUnitCoordinatesLifeformWithinInterface &
  ShowShopTutorialInterface &
  ShieldApis;

export type NormalApi = MargeObject<AllNormalApiIntersection>;
