import { MargeObject } from "../../../utilType";
import canChange from "./canChange";
import crouchingSpeed from "./crouchingSpeed";
import walkingSpeed from "./walkingSpeed";
import runningSpeed from "./runningSpeed";
import speedMultiplier from "./speedMultiplier";

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
  | speedMultiplier;

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
