import { getUnitCoordinatesLifeformWithin } from "./getUnitCoordinatesLifeformWithin";
import { playParticleEffect } from "./playParticleEffect";
import { forceRespawn } from "./forceRespawn";
import { ShopApis } from "./shops/index";
import { ShieldApis } from "./shields/index";
import { PositionApis } from "./positions/index";
import { StandingOnApis } from "./standingOns/index";
import { HealthApis } from "./health/index";
import { ItemApis } from "./item/index";
import { KillstreakApis } from "./killstreak/index";
import { MessageApis } from "./message/index";
import { PlayerApis } from "./player/index";
import { EntityApis } from "./entity/index";
import { MargeObject } from "@type";

export const NormalApis = {
  getUnitCoordinatesLifeformWithin,
  playParticleEffect,
  ...ShopApis,
  ...ShieldApis,
  ...PositionApis,
  ...StandingOnApis,
  ...HealthApis,
  ...ItemApis,
  ...KillstreakApis,
  ...MessageApis,
  ...PlayerApis,
  ...EntityApis,
  forceRespawn,
} as const;
