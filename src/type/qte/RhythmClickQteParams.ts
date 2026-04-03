import { CustomTextStyling, Icon } from "@type";

export type RhythmClickQteParams = {
  requiredSuccesses: number; // Number of successful clicks needed to complete the QTE (must be a positive integer). default: 5
  shrinkDurationMs: number; // Duration in milliseconds for the outer circle to shrink from max size to centre (must be > 0). default: 1200
  toleranceFraction: number; // Fraction of the inner circle radius that counts as a successful overlap (must be > 0, 0-1, e.g. 0.15 = ±15%). default: 0.15
  maxMisses?: number; // Max misses allowed before failing. If omitted, unlimited misses are permitted (must be a non-negative integer). default: 3
  label: CustomTextStyling; // Rich text shown as the QTE prompt. default: [{ str: "Click when the circles align!" }]
  icon?: Icon; // Icon displayed in the centre of the circles. default: ""
};
