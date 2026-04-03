import { CustomTextStyling, Icon } from "@type";

export type GravityBarQteParams = {
  progressStartValue?: number; // Starting progress value (0-100). default: 30
  catchZoneSize: number; // Size of the player's catch zone as a fraction of the bar (must be > 0, 0-1). default: 0.25
  moverSpeed: number; // Speed at which the mover travels along the bar (must be > 0). default: 3
  moverErraticness: number; // How erratically the mover changes direction (higher = more unpredictable). default: 0.8
  gravity: number; // Downward pull on the catch zone when the player isn't holding click. default: 1
  riseSpeed: number; // Upward force on the catch zone while the player holds click. default: 1.5
  progressGainPerSecond: number; // Progress gained per second while the mover is inside the catch zone. default: 8
  progressDrainPerSecond: number; // Progress lost per second while the mover is outside the catch zone. default: 4
  canFail: boolean; // If true, the QTE fails when progress reaches 0; otherwise progress clamps at 0. default: false
  description: CustomTextStyling; // Rich text shown as the QTE prompt. default: [{ str: "Hold to catch!" }]
  icon?: Icon; // Icon displayed on the mover. default: "Moonfish"
};
