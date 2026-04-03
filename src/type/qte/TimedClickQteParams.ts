import { CustomTextStyling, Icon } from "@type";

export type TimedClickQteParams = {
  timeWindow: number; // Duration in milliseconds the player has to click. default: 3000
  icon: Icon; // Icon displayed on the click target. default: "fa-solid fa-computer-mouse"
  label: CustomTextStyling; // Rich text shown as the QTE prompt. default: [{ str: "Click to complete the QTE!" }]
  showTimer: boolean; // Whether to display a countdown timer. default: true
  scale?: number; // Scale multiplier for the icon (must be > 0). default: 1
  rotation?: number; // Rotation in degrees for the icon (must be ≥ 0). default: 15
  breatheCenter?: boolean; // If true, the icon pulses with a breathing animation anchored to the centre. default: false
};
