import { EntityId } from "@type";

export type CommonMeshEntityOpts = {
  hideDist?: number;
  meshOffset?: number[];
  autoRotate?: boolean;
  lineToEId?: EntityId; // EntityId to connect to using a line
};
