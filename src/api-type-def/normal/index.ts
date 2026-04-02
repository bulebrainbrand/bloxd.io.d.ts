import { playParticleEffect } from "./playParticleEffect";
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
import { SetCanChangeApis } from "./canChangeBlockOption/index";
import { SetWalkOptionsApis } from "./setWalkOptions/index";
import { ChestApis } from "./chest/index";
import { MoonstoneChestApis } from "./moonstoneChest/index";
import { AuraApis } from "./aura/index";
import { UtilApis } from "./util/index";
import { BlockDataApis } from "./blockData/index";
import { DirectionArrowApis } from "./directionArrow/index";
import { EffectApis } from "./effect/index";
import { VelocityApis } from "./velocity/index";
import { SoundApis } from "./sound/index";
import { LobbyApis } from "./lobby/index";
import { setCallbackValueFallback } from "./setCallbackValueFallback";
import { MobApis } from "./mob/index";
import { MiddleScreenBarApis } from "./middleScreenBar/index";
import { CameraApis } from "./camera/index";

export const NormalApis = {
  playParticleEffect,
  setCallbackValueFallback,
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
  ...AuraApis,
  ...UtilApis,
  ...BlockDataApis,
  ...DirectionArrowApis,
  ...EffectApis,
  ...VelocityApis,
  ...SoundApis,
  ...LobbyApis,
  ...MobApis,
  ...MiddleScreenBarApis,
  ...CameraApis,
} as const;
