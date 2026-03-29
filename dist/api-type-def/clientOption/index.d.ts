import { PlayerId } from "../../type/index";
import { ClientOptions } from "./clientOptions/index";
export * from "./clientOptions/index";
export declare const ClientOptionApis: {
    setClientOption: (<TOption extends keyof ClientOptions>(playerId: PlayerId, option: TOption, value: ClientOptions[TOption]) => void) & {
        (playerId: PlayerId, option: "canChange", value: true): void;
        (playerId: PlayerId, option: "canChange", value: false): void;
    } & ((playerId: PlayerId, option: "crouchingSpeed", value: number) => void) & ((playerId: PlayerId, option: "walkingSpeed", value: number) => void) & ((playerId: PlayerId, option: "runningSpeed", value: number) => void) & ((playerId: PlayerId, option: "speedMultiplier", value: number) => void);
    getClientOption: (<TOption extends keyof ClientOptions>(playerId: PlayerId, option: TOption) => ClientOptions[TOption]) & ((playerId: PlayerId, option: "canChange") => boolean) & ((playerId: PlayerId, option: "crouchingSpeed") => number) & ((playerId: PlayerId, option: "walkingSpeed") => number) & ((playerId: PlayerId, option: "runningSpeed") => number) & ((playerId: PlayerId, option: "speedMultiplier") => number);
    setClientOptionToDefault: (<TOption extends keyof ClientOptions>(playerId: PlayerId, option: TOption) => void) & ((playerId: PlayerId, option: "canChange") => void) & ((playerId: PlayerId, option: "crouchingSpeed") => void) & ((playerId: PlayerId, option: "walkingSpeed") => void) & ((playerId: PlayerId, option: "runningSpeed") => void) & ((playerId: PlayerId, option: "speedMultiplier") => void);
    setClientOptions: (playerId: PlayerId, options: Partial<ClientOptions>) => void;
};
