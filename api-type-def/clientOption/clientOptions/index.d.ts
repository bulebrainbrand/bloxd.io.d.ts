import { MargeObject } from "../../../utilType";
import * as canChange from "./canChange";

import * as speedMultiplier from "./speedMultiplier";

import * as crouchingSpeed from "./crouchingSpeed";

import * as walkingSpeed from "./walkingSpeed";

import * as runningSpeed from "./runningSpeed";

export type ClientOptions = {
  canChange: canChange.CanChangeValue;
  speedMultiplier: speedMultiplier.SpeedMultiplierValue;
  crouchingSpeed: crouchingSpeed.CrouchingSpeedValue;
  walkingSpeed: walkingSpeed.WalkingSpeedValue;
  runningSpeed: runningSpeed.RunningSpeedValue;
};

export type SetClientOption = MargeObject<
  canChange.SetClientOptionCanChange &
    speedMultiplier.SetClientOptionSpeedMultiplier &
    crouchingSpeed.SetClientOptionCrouchingSpeed &
    walkingSpeed.SetClientOptionWalkingSpeed &
    runningSpeed.SetClientOptionRunningSpeed
>;

export type GetClientOption = MargeObject<
  canChange.GetClientOptionCanChange &
    speedMultiplier.GetClientOptionSpeedMultiplier &
    crouchingSpeed.GetClientOptionCrouchingSpeed &
    walkingSpeed.GetClientOptionWalkingSpeed &
    runningSpeed.GetClientOptionRunningSpeed
>;

export type SetClientOptionToDefault = MargeObject<
  canChange.SetClientOptionToDefaultCanChange &
    speedMultiplier.SetClientOptionToDefaultSpeedMultiplier &
    crouchingSpeed.SetClientOptionToDefaultCrouchingSpeed &
    walkingSpeed.SetClientOptionToDefaultWalkingSpeed &
    runningSpeed.SetClientOptionToDefaultRunningSpeed
>;

export * from "./canChange";
export * from "./speedMultiplier";
export * from "./crouchingSpeed";
export * from "./walkingSpeed";
export * from "./runningSpeed";
