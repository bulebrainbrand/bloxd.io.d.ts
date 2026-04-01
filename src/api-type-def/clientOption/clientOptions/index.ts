import { MargeObject } from "@type";
import canChange from "./canChange";
import crouchingSpeed from "./crouchingSpeed";
import walkingSpeed from "./walkingSpeed";
import runningSpeed from "./runningSpeed";
import speedMultiplier from "./speedMultiplier";
import jumpAmount from "./jumpAmount";
import airJumpCount from "./airJumpCount";
import bunnyhopMaxMultiplier from "./bunnyhopMaxMultiplier";
import musicVolumeLevel from "./musicVolumeLevel";
import showPlayersInUnloadedChunks from "./showPlayersInUnloadedChunks";
import useInventory from "./useInventory";
import useFullInventory from "./useFullInventory";
import canCraft from "./canCraft";
import canPickUpItems from "./canPickUpItems";
import playerZoom from "./playerZoom";
import zoomOutDistance from "./zoomOutDistance";
import maxPlayerZoom from "./maxPlayerZoom";
type ClientOptionExportFormat = {
  name: string;
  ValueType: any;
  SetClientOption: {
    setClientOption: (playerId: never, option: never, value: never) => void;
  };
  SetClientOptionToDefault: {
    setClientOptionToDefault: (playerId: never, option: never) => void;
  };
  GetClientOption: {
    getClientOption: (playerId: never, option: never) => any;
  };
};

type AllClientOptionUnion =
  | canChange
  | crouchingSpeed
  | walkingSpeed
  | runningSpeed
  | speedMultiplier
  | jumpAmount
  | airJumpCount
  | bunnyhopMaxMultiplier
  | musicVolumeLevel
  | showPlayersInUnloadedChunks
  | useInventory
  | useFullInventory
  | canCraft
  | canPickUpItems
  | playerZoom
  | zoomOutDistance
  | maxPlayerZoom;

type GenerateClientOptions<U extends ClientOptionExportFormat> = {
  [K in U as K["name"]]: K["ValueType"];
};

export type ClientOptions = GenerateClientOptions<AllClientOptionUnion>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type GenerateClientOptionInterface<
  U extends ClientOptionExportFormat,
  K extends keyof any,
> = MargeObject<
  UnionToIntersection<
    U extends any ? (K extends keyof U ? U[K] : never) : never
  >
>;

export type SetClientOption = GenerateClientOptionInterface<
  AllClientOptionUnion,
  "SetClientOption"
>;

export type GetClientOption = GenerateClientOptionInterface<
  AllClientOptionUnion,
  "GetClientOption"
>;

export type SetClientOptionToDefault = GenerateClientOptionInterface<
  AllClientOptionUnion,
  "SetClientOptionToDefault"
>;

export * from "./canChange";
export * from "./speedMultiplier";
export * from "./crouchingSpeed";
export * from "./walkingSpeed";
export * from "./runningSpeed";
