import { PlayerId, MargeObject } from "@type";
import {
  ClientOptions,
  SetClientOption,
  GetClientOption,
  SetClientOptionToDefault,
} from "./clientOptions/index";
export * from "./clientOptions/index";

interface RootSetClientOption {
  setClientOption<TOption extends keyof ClientOptions>(
    playerId: PlayerId,
    option: TOption,
    value: ClientOptions[TOption],
  ): void;
}
interface SetClientOptions {
  setClientOptions(playerId: PlayerId, options: Partial<ClientOptions>): void;
}

interface RootGetClientOption {
  getClientOption<TOption extends keyof ClientOptions>(
    playerId: PlayerId,
    option: TOption,
  ): ClientOptions[TOption];
}

interface RootSetClientOptionToDefault {
  setClientOptionToDefault<TOption extends keyof ClientOptions>(
    playerId: PlayerId,
    option: TOption,
  ): void;
}

declare const setClientOption: RootSetClientOption["setClientOption"] &
  SetClientOption["setClientOption"];
declare const getClientOption: RootGetClientOption["getClientOption"] &
  GetClientOption["getClientOption"];
declare const setClientOptionToDefault: RootSetClientOptionToDefault["setClientOptionToDefault"] &
  SetClientOptionToDefault["setClientOptionToDefault"];
declare const setClientOptions: SetClientOptions["setClientOptions"];

export const ClientOptionApis = {
  setClientOption,
  getClientOption,
  setClientOptionToDefault,
  setClientOptions,
};
