import { BlockName, EntityId } from "@type";

export type BoxOpts = {
  hideDist?: number;
  meshOffset?: number[];
  autoRotate?: boolean;
  lineToEId?: EntityId; // EntityId to connect to using a line
  width: number;
  height: number;
  depth: number;
  diffuseColor?: number[];
  emissiveColor?: number[];
  backFaceCulling?: boolean; // Default true
  texture?: BlockName; // Can be a blockname. Wraps every one block
  faceUV?: number[][];
};
