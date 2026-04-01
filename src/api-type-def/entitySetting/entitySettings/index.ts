import { EntityId, MargeObject, PlayerId } from "@type";
import Opacity from "./opacity";
import ZIndex from "./zIndex";
import OverlayColour from "./overlayColour";
import CanAttack from "./canAttack";
import CanSee from "./canSee";
import ShowDamageAmounts from "./showDamageAmounts";
import KillfeedColour from "./killfeedColour";
import HasPriorityNametag from "./hasPriorityNametag";
import NameColour from "./nameColour";
import NameTagInfo from "./nameTagInfo";
import MeshScaling from "./meshScaling";
import LobbyLeaderboardValues from "./lobbyLeaderboardValues";

type EntitySettingExportFormat = {
  name: string;
  ValueType: any;
  SetTargetedPlayerSettingForEveryone: {
    setTargetedPlayerSettingForEveryone: (
      targetedPlayerId: PlayerId,
      settingName: never,
      settingValue: never,
      includeNewJoiners?: boolean,
    ) => void;
  };
  SetEveryoneSettingForPlayer: {
    setEveryoneSettingForPlayer: (
      playerId: PlayerId,
      settingName: never,
      settingValue: never,
      includeNewJoiners?: boolean,
    ) => void;
  };
  SetOtherEntitySetting: {
    setOtherEntitySetting: (
      relevantPlayerId: PlayerId,
      targetedEntityId: EntityId,
      settingName: never,
      settingValue: never,
    ) => void;
  };
  GetOtherEntitySetting: {
    getOtherEntitySetting: (
      relevantPlayerId: PlayerId,
      targetedEntityId: EntityId,
      settingName: never,
    ) => any;
  };
};

type AllEntitySettingUnion =
  | Opacity
  | ZIndex
  | OverlayColour
  | CanAttack
  | CanSee
  | ShowDamageAmounts
  | KillfeedColour
  | HasPriorityNametag
  | NameColour
  | NameTagInfo
  | MeshScaling
  | LobbyLeaderboardValues;

type GenerateClientOptions<U extends EntitySettingExportFormat> = {
  [K in U as K["name"]]: K["ValueType"];
};

export type EntitySettings = GenerateClientOptions<AllEntitySettingUnion>;

type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I,
) => void
  ? I
  : never;
type GenerateEntitySettingInterface<
  U extends EntitySettingExportFormat,
  K extends keyof any,
> = MargeObject<
  UnionToIntersection<
    U extends any ? (K extends keyof U ? U[K] : never) : never
  >
>;

export type SetTargetedPlayerSettingForEveryone =
  GenerateEntitySettingInterface<
    AllEntitySettingUnion,
    "SetTargetedPlayerSettingForEveryone"
  >;

export type SetEveryoneSettingForPlayer = GenerateEntitySettingInterface<
  AllEntitySettingUnion,
  "SetEveryoneSettingForPlayer"
>;

export type SetOtherEntitySetting = GenerateEntitySettingInterface<
  AllEntitySettingUnion,
  "SetOtherEntitySetting"
>;

export type GetOtherEntitySetting = GenerateEntitySettingInterface<
  AllEntitySettingUnion,
  "GetOtherEntitySetting"
>;
