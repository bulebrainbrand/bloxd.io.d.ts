export declare const BlockApis: {
    isBlockInLoadedChunk: (x: number, y: number, z: number) => boolean;
    getBlock: {
        (x: number, y: number, z: number): import("../../..").BlockName;
        (pos: import("../../..").Coordinate): import("../../..").BlockName;
    };
    getBlockId: (x: number, y: number, z: number) => import("../../..").BlockId;
    setBlock: {
        (x: number, y: number, z: number, blockName: import("../../..").BlockName): void;
        (pos: import("../../..").Coordinate, blockName: import("../../..").BlockName): void;
    };
    attemptWorldChangeBlock: (initatorDbId: null | import("../../..").PlayerDbId, x: number, y: number, z: number, blockName: import("../../..").BlockName, extraInfo?: import("../../..").WorldBlockChangedInfo) => "preventChange" | "preventDrop" | void;
    getBlockSolidity: {
        (x: number, y: number, z: number): boolean;
        (pos: import("../../..").Coordinate): boolean;
    };
    setBlockRect: (pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate, blockName: import("../../..").Block) => void;
    setBlockWalls: (pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate, blockName: import("../../..").Block, hasFloor?: boolean, hasCeiling?: boolean) => void;
    getChunk: (pos: import("../../..").Coordinate) => never;
    getEmptyChunk: () => never;
    getMetaInfo: (blockName: import("../../..").Block | null | undefined) => import("../../..").ItemMetaInfo;
    blockNameToBlockId: {
        (blockName: import("../../..").BlockName): import("../../..").BlockId;
        (blockName: import("../../..").BlockName, allowInvalidBlock: true): null | import("../../..").BlockId;
        (blockName: import("../../..").BlockName, allowInvalidBlock: false): import("../../..").BlockId;
    };
    blockIdToBlockName: (blockId: import("../../..").BlockId) => import("../../..").BlockName;
    blockCoordToChunkId: (pos: import("../../..").Coordinate) => import("../../..").ChunkId;
    chunkIdToBotLeftCoord: (chunkId: import("../../..").ChunkId) => import("../../..").Coordinate;
};
