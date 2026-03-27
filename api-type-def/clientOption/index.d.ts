import { PlayerId, MargeObject } from "../../type";
import {
  ClientOptions,
  SetClientOption,
  GetClientOption,
  SetClientOptionToDefault,
} from "./clientOptions";
export * from "./clientOptions";

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

export type ClientOptionApi = MargeObject<
  SetClientOption &
    RootSetClientOption &
    GetClientOption &
    RootGetClientOption &
    SetClientOptions &
    SetClientOptionToDefault &
    RootSetClientOptionToDefault
>;
