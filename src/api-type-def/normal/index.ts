import { getUnitCoordinatesLifeformWithin } from "./entity/getUnitCoordinatesLifeformWithin";
import { playParticleEffect } from "./playParticleEffect";
import { forceRespawn } from "./player/forceRespawn";
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
import { now } from "./util/now";
import { SetCanChangeApis } from "./canChangeBlockOption/index";
import { SetWalkOptionsApis } from "./setWalkOptions/index";
import { ChestApis } from "./chest/index";
import { MoonstoneChestApis } from "./moonstoneChest/index";

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
  ...SetCanChangeApis,
  ...SetWalkOptionsApis,
  ...ChestApis,
  ...MoonstoneChestApis,
  forceRespawn,
  now,
} as const;
