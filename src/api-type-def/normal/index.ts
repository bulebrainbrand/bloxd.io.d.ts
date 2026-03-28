import GetUnitCoordinatesLifeformWithinInterface from "./getUnitCoordinatesLifeformWithin";
import { ShopApis } from "./shops";
import { ShieldApis } from "./shields";
import { PositionApis } from "./positions";
import { StandingOnApis } from "./standingOns";
import { HealthApis } from "./health";
import { KillstreakApis } from "./killstreak";
import { MessageApis } from "./message";
import { PlayerApis } from "./player";
import { MargeObject } from "../../type";

type AllNormalApiIntersection = PositionApis &
  PlayerApis &
  StandingOnApis &
  GetUnitCoordinatesLifeformWithinInterface &
  ShopApis &
  ShieldApis &
  HealthApis &
  KillstreakApis &
  MessageApis;

export type NormalApi = MargeObject<AllNormalApiIntersection>;
