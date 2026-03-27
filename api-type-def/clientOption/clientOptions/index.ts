import { MargeObject } from "../../../utilType";
import {
  CanChangeValue,
  SetClientOptionCanChange,
  GetClientOptionCanChange,
  SetClientOptionToDefaultCanChange,
} from "./canChange";

import {
  SetClientOptionSpeedMultiplier,
  SpeedMultiplierValue,
  SetClientOptionToDefaultSpeedMultiplier,
  GetClientOptionSpeedMultiplier,
} from "./speedMultiplier";

export type ClientOptions = {
  canChange: CanChangeValue;
  speedMultiplier: SpeedMultiplierValue;
};

export type SetClientOption = MargeObject<
  SetClientOptionCanChange & SetClientOptionSpeedMultiplier
>;

export type GetClientOption = MargeObject<
  GetClientOptionCanChange & GetClientOptionSpeedMultiplier
>;

export type SetClientOptionToDefault = MargeObject<
  SetClientOptionToDefaultCanChange & SetClientOptionToDefaultSpeedMultiplier
>;

export * from "./canChange";
