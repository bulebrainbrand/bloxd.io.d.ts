import { EntityId, PlayerPose } from "@type";

// TODO Cosmeticを何とかして
export type PersonOpts = {
  hideDist?: number;
  meshOffset?: number[];
  autoRotate?: boolean;
  lineToEId?: EntityId; // EntityId to connect to using a line
  size?: number;
  textures?: Partial<object>; // Cosmetics> このobjectは本来Cosmetics
  pose?: PlayerPose;
};
