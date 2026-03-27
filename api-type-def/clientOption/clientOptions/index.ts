import { CanChangeValue } from "./canChange";
import { SpeedMultiplier } from "./speedMultiplier";
export type ClientOptions = {
  canChange: CanChangeValue;
  speedMultiplier: SpeedMultiplier;
};

export * from "./canChange";
