import { PlayerId, MargeObject } from "../../type/index";
import { ClientOptions, SetClientOption, GetClientOption, SetClientOptionToDefault } from "./clientOptions/index";
export * from "./clientOptions/index";
interface RootSetClientOption {
    setClientOption<TOption extends keyof ClientOptions>(playerId: PlayerId, option: TOption, value: ClientOptions[TOption]): void;
}
interface SetClientOptions {
    setClientOptions(playerId: PlayerId, options: Partial<ClientOptions>): void;
}
interface RootGetClientOption {
    getClientOption<TOption extends keyof ClientOptions>(playerId: PlayerId, option: TOption): ClientOptions[TOption];
}
interface RootSetClientOptionToDefault {
    setClientOptionToDefault<TOption extends keyof ClientOptions>(playerId: PlayerId, option: TOption): void;
}
export type ClientOptionApi = MargeObject<SetClientOption & RootSetClientOption & GetClientOption & RootGetClientOption & SetClientOptions & SetClientOptionToDefault & RootSetClientOptionToDefault>;
