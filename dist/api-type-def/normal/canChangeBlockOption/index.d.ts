export declare const SetCanChangeApis: {
    setCanChangeBlock: (playerId: import("../../..").PlayerId, x: number, y: number, z: null) => void;
    setCanChangeBlockRect: (playerId: import("../../..").PlayerId, pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate) => void;
    setCanChangeBlockType: (playerId: import("../../..").PlayerId, blockName: import("../../..").Block) => void;
    setCantChangeBlock: (playerId: import("../../..").PlayerId, x: number, y: number, z: number) => void;
    setCantChangeBlockRect: (playerId: import("../../..").PlayerId, pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate) => void;
    setCantChangeBlockType: (playerId: import("../../..").PlayerId, block: import("../../..").Block) => void;
    resetCanChangeBlockType: (playerId: import("../../..").PlayerId, blockName: import("../../..").Block) => void;
    resetCanChangeBlockRect: (playerId: import("../../..").PlayerId, pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate) => void;
};
