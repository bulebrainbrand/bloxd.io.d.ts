import { CustomTextStyling, Icon } from "@type";

export type PrecisionBarQteParams = {
  speed: number; // Speed of the marker in full bar-widths per second (must be > 0, e.g. 1.0 = one full sweep per second). default: 0.5
  successZoneSize: number; // Fraction of the bar that counts as the success zone, centred in the middle (must be > 0, 0-1, e.g. 0.15 = 15%). default: 0.15
  label: CustomTextStyling; // Rich text shown as the QTE prompt. default: [{ str: "Click when the marker is within the green zone." }]
  icon?: Icon; // Icon displayed on the marker. default: ""
  scale?: number; // Scale multiplier for the icon (must be > 0). default: 1
  rotation?: number; // Rotation in degrees for the icon (must be ≥ 0). default: 0
};
