export declare const ChestApis: {
    readonly canOpenStandardChest: (playerId: import("../../..").PlayerId, chestX: number, chestY: number, chestZ: number) => boolean | null;
    readonly openChestForPlayer: (playerId: import("../../..").PlayerId, x: number, y: number, z: number) => void;
    readonly closeChestForPlayer: (playerId: import("../../..").PlayerId) => void;
    readonly giveStandardChestItem: (chestPos: import("../../..").Coordinate, itemName: import("../../..").ItemName, itemAmount?: number, playerId?: import("../../..").PlayerId, attributes?: import("../../..").ItemAttributes) => number;
    readonly getStandardChestFreeSlotCount: (chestPos: import("../../..").Coordinate) => number | null;
    readonly getStandardChestItemAmount: (chestPos: import("../../..").Coordinate, itemName: import("../../..").ItemName) => number;
};
