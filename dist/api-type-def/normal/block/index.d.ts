declare const BlockApiObject: {
    readonly isBlockInLoadedChunk: (x: number, y: number, z: number) => boolean;
    readonly getBlock: {
        (x: number, y: number, z: number): import("../../..").BlockName;
        (pos: import("../../..").Coordinate): import("../../..").BlockName;
    };
    readonly getBlockId: (x: number, y: number, z: number) => import("../../..").BlockId;
    readonly setBlock: {
        (x: number, y: number, z: number, blockName: import("../../..").BlockName): void;
        (pos: import("../../..").Coordinate, blockName: import("../../..").BlockName): void;
    };
    readonly attemptWorldChangeBlock: (initatorDbId: null | import("../../..").PlayerDbId, x: number, y: number, z: number, blockName: import("../../..").BlockName, extraInfo?: import("../../..").WorldBlockChangedInfo) => "preventChange" | "preventDrop" | void;
    readonly getBlockSolidity: {
        (x: number, y: number, z: number): boolean;
        (pos: import("../../..").Coordinate): boolean;
    };
    readonly setBlockRect: (pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate, blockName: import("../../..").Block) => void;
    readonly setBlockWalls: (pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate, blockName: import("../../..").Block, hasFloor?: boolean, hasCeiling?: boolean) => void;
    readonly getChunk: (pos: import("../../..").Coordinate) => never;
    readonly getEmptyChunk: () => never;
    readonly getMetaInfo: (blockName: import("../../..").Block | null | undefined) => import("../../..").ItemMetaInfo;
    readonly blockNameToBlockId: {
        (blockName: import("../../..").BlockName): import("../../..").BlockId;
        (blockName: import("../../..").BlockName, allowInvalidBlock: true): null | import("../../..").BlockId;
        (blockName: import("../../..").BlockName, allowInvalidBlock: false): import("../../..").BlockId;
    };
    readonly blockIdToBlockName: (blockId: import("../../..").BlockId) => import("../../..").BlockName;
    readonly blockCoordToChunkId: (pos: import("../../..").Coordinate) => import("../../..").ChunkId;
    readonly chunkIdToBotLeftCoord: (chunkId: import("../../..").ChunkId) => import("../../..").Coordinate;
};
export type BlockApis = typeof BlockApiObject;
export {};
