export declare const ItemApis: {
    readonly createItemDrop: (x: number, y: number, z: number, itemName: import("../../..").ItemName, amount?: number | null, margeItems?: boolean, attributes?: import("../../..").ItemAttributes, timeTillDespawn?: number, dropperId?: import("../../..").LifeformId | null, options?: never) => null | import("../../..").ItemEntityId;
    readonly setCantPickUpItem: (playerId: import("../../..").PlayerId, itemId: import("../../..").ItemEntityId) => void;
    readonly deleteItemDrop: (itemId: import("../../..").ItemEntityId) => void;
};
