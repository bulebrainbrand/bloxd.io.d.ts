import { isBlockInLoadedChunk } from "./isBlockInLoadedChunk";
import { getBlock } from "./getBlock";
import { getBlockId } from "./getBlockId";
import { setBlock } from "./setBlock";
import { attemptWorldChangeBlock } from "./attemptWorldChangeBlock";
import { getBlockSolidity } from "./getBlockSolidity";
import { setBlockRect } from "./setBlockRect";
import { setBlockWalls } from "./setBlockWalls";
import { getChunk } from "./getChunk";
import { getEmptyChunk } from "./getEmptyChunk";
import { getMetaInfo } from "./getMetaInfo";
import { blockNameToBlockId } from "./blockNameToBlockId";
import { blockIdToBlockName } from "./blockIdToBlockName";
import { blockCoordToChunkId } from "./blockCoordToChunkId";
import { chunkIdToBotLeftCoord } from "./chunkIdToBotLeftCoord";
const BlockApiObject = {
  isBlockInLoadedChunk,
  getBlock,
  getBlockId,
  setBlock,
  attemptWorldChangeBlock,
  getBlockSolidity,
  setBlockRect,
  setBlockWalls,
  getChunk,
  getEmptyChunk,
  getMetaInfo,
  blockNameToBlockId,
  blockIdToBlockName,
  blockCoordToChunkId,
  chunkIdToBotLeftCoord,
} as const;
export type BlockApis = typeof BlockApiObject;
