import { ChunkId, Coordinate } from "@type";

declare const blockCoordToChunkId: (pos: Coordinate) => ChunkId;

export { blockCoordToChunkId };
