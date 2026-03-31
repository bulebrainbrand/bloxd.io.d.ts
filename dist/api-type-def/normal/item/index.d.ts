export declare const ItemApis: {
    readonly createItemDrop: (x: number, y: number, z: number, itemName: import("../../..").ItemName, amount?: number | null, margeItems?: boolean, attributes?: import("../../..").ItemAttributes, timeTillDespawn?: number, dropperId?: import("../../..").LifeformId | null, options?: never) => null | import("../../..").ItemEntityId;
    readonly setCantPickUpItem: (playerId: import("../../..").PlayerId, itemId: import("../../..").ItemEntityId) => void;
    readonly deleteItemDrop: (itemId: import("../../..").ItemEntityId) => void;
    readonly giveItem: (playerId: import("../../..").PlayerId, itemName: import("../../..").ItemName, itemAmount: number, attributes: import("../../..").ItemAttributes) => void;
    readonly inventoryIsFull: (playerId: import("../../..").PlayerId) => boolean;
    readonly setItemSlot: (playerId: import("../../..").PlayerId, itemSlotIndex: number, itemName: import("../../..").ItemName, itemAmount: number, attributes: import("../../..").ItemAttributes, tellClient: boolean) => void;
    readonly removeItemName: (playerId: import("../../..").PlayerId, itemName: import("../../..").ItemName, amount: number) => void;
    readonly getItemSlot: (playerId: import("../../..").PlayerId, itemSlotIndex: number) => import("../../..").ItemObject | null;
    readonly clearInventory: (playerId: import("../../..").PlayerId) => void;
    readonly hasItem: (playerId: import("../../..").PlayerId, itemName: import("../../..").Item) => boolean;
    readonly getInventoryItemAmount: (playerId: import("../../..").PlayerId, itemName: import("../../..").Item) => number;
    readonly getSelectedInventorySlotI: (playerId: import("../../..").PlayerId) => number;
    readonly getHeldItem: (playerId: import("../../..").PlayerId) => import("../../..").ItemObject | null;
    readonly getInventoryFreeSlotCount: (playerId: import("../../..").PlayerId) => number;
};
