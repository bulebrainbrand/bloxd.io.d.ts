import { ChunkId, Coordinate } from "@type";
/**
 * Get the unique id of the chunk containing pos in the current map
 *
 * CunnkId is like a `5|5|5` string
 *
 * @param {number[]} pos
 * @returns {ChunkId}
 */
declare const blockCoordToChunkId: (pos: Coordinate) => ChunkId;
export { blockCoordToChunkId };
/**
 * Get the unique id of the chunk containing pos in the current map
 *
 * @param {number[]} pos
 * @returns {string}
 *
 * blockCoordToChunkId(pos)
 */
//# sourceMappingURL=blockCoordToChunkId.d.ts.map