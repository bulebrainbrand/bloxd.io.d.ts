import { CustomTextStyling, Icon } from "@type";

export type ProgressBarQteParams = {
  progressStartValue?: number; // Starting progress value (0-100). default: 30
  progressDecreasePerTick: number; // How much progress drains each tick while the player isn't clicking. default: 0.075
  progressPerClick: number; // How much progress is gained per click. default: 5
  canFail: boolean; // If true, the QTE fails when progress reaches 0; otherwise progress clamps at 0. default: false
  description: CustomTextStyling; // Rich text shown as the QTE prompt. default: [{ str: "Click repeatedly to complete!" }]
  clickIcon: Icon; // Icon displayed on the click target. default: "fa-solid fa-computer-mouse"
  scale?: number; // Scale multiplier for the click icon (must be > 0). default: 1
  rotation?: number; // Rotation in degrees for the click icon (must be ≥ 0). default: 15
};
