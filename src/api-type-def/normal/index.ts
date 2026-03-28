import GetUnitCoordinatesLifeformWithinInterface from "./getUnitCoordinatesLifeformWithin";
import { ShopApis } from "./shops/index";
import { ShieldApis } from "./shields/index";
import { PositionApis } from "./positions/index";
import { StandingOnApis } from "./standingOns/index";
import { HealthApis } from "./health/index";
import { KillstreakApis } from "./killstreak/index";
import { MessageApis } from "./message/index";
import { PlayerApis } from "./player/index";
import { MargeObject } from "@type";

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
