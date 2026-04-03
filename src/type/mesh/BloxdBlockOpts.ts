import { BlockNameOrId, EntityId } from "@type";

export type BloxdBlockOpts = {
  hideDist?: number;
  meshOffset?: number[];
  autoRotate?: boolean;
  lineToEId?: EntityId; // EntityId to connect to using a line
  blockName: BlockNameOrId;
  size: number | [number, number, number];
};
