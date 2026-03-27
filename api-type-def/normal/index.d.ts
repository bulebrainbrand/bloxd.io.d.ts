import GetPositionInterface from "./getPosition";
import SetPositionInterface from "./setPosition";
import GetPlayerIdsInterface from "./getPlayerIds";
import PlayerIsInGameInterface from "./playerIsInGame";
import PlayerIsLoggedInInterface from "./playerIsLoggedIn";
import GetPlayerPartyWhenJoinedInterface from "./getPlayerPartyWhenJoined";
import GetNumPlayersInterface from "./getNumPlayers";
import GetBlockCoordinatesPlayerStandingOnInterface from "./getBlockCoordinatesPlayerStandingOn";
import GetBlockTypesPlayerStandingOnInterface from "./getBlockTypesPlayerStandingOn";
import GetUnitCoordinatesLifeformWithinInterface from "./getUnitCoordinatesLifeformWithin";
import ShowShopTutorialInterface from "./showShopTutorial";
import GetShieldAmountInterface from "./getShieldAmount";
import { MargeObject } from "../../type";

type AllNormalApiIntersection = GetPositionInterface &
  SetPositionInterface &
  GetPlayerIdsInterface &
  PlayerIsInGameInterface &
  PlayerIsLoggedInInterface &
  GetPlayerPartyWhenJoinedInterface &
  GetNumPlayersInterface &
  GetBlockCoordinatesPlayerStandingOnInterface &
  GetBlockTypesPlayerStandingOnInterface &
  GetUnitCoordinatesLifeformWithinInterface &
  ShowShopTutorialInterface &
  GetShieldAmountInterface;

export type NormalApi = MargeObject<AllNormalApiIntersection>;
