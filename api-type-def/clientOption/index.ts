import { PlayerId } from "../../type";
import { ClientOptions } from "./clientOptions";
export * from "./clientOptions";

type AllGetClientOptionFuncTypeIncludeObject = {
  [PassedOption in keyof ClientOptions]: (
    playerId: PlayerId,
    option: PassedOption,
  ) => ClientOptions[PassedOption];
};

type GetClientOption =
  AllGetClientOptionFuncTypeIncludeObject[keyof AllGetClientOptionFuncTypeIncludeObject];

type AllSetClientOptionFuncTypeIncludeObject = {
  [PassedOption in keyof ClientOptions]: (
    playerId: PlayerId,
    option: PassedOption,
    value: ClientOptions[PassedOption],
  ) => void;
};

type SetClientOption =
  AllSetClientOptionFuncTypeIncludeObject[keyof AllSetClientOptionFuncTypeIncludeObject];

type SetClientOptions = (
  aplyerId: PlayerId,
  optionsObj: Partial<ClientOptions>,
) => void;

type SetClientOptionToDefault = (
  PlayerId: PlayerId,
  option: keyof ClientOptions,
) => void;

export type ClientOptionApi = {
  setClientOption: SetClientOption;
  getClientOption: GetClientOption;
  setClientOptions: SetClientOptions;
  setClientOptionToDefault: SetClientOptionToDefault;
};
