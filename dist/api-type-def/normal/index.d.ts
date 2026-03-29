export declare const NormalApis: {
    readonly forceRespawn: (playerId: import("../../type/index").PlayerId, respawnPos?: Readonly<import("../../type/index").Coordinate>) => void;
    readonly getEntityName: (entityId: import("../../type/index").EntityId) => string;
    readonly getPlayerIds: () => import("../../type/index").PlayerId[];
    readonly getNumPlayers: () => number;
    readonly getPlayerPartyWhenJoined: (playerId: import("../../type/index").PlayerId) => import("../../type/index").Party | null;
    readonly playerIsInGame: (playerId: import("../../type/index").PlayerId) => boolean;
    readonly playerIsLoggedIn: (playerId: import("../../type/index").PlayerId) => boolean;
    readonly getPlayerId: (playerName: string) => null | import("../../type/index").PlayerId;
    readonly getPlayerDbId: (playerId: import("../../type/index").PlayerId) => import("../../type/index").PlayerDbId;
    readonly getPlayerIdFromDbId: (dbId: import("../../type/index").PlayerDbId) => null | import("../../type/index").PlayerId;
    readonly kickPlayer: (playerId: import("../../type/index").PlayerId, reason: string) => void;
    readonly isMobile: (playerId: import("../../type/index").PlayerId) => boolean;
    readonly broadcastMessage: (message: string | import("../../type/index").CustomTextStyling, style?: {
        fontWeight?: number | string;
        color?: string;
    }) => void;
    readonly sendMessage: {
        (playerId: import("../../type/index").PlayerId, message: string, style: {
            fontWeight?: number | string;
            color?: string;
        }): void;
        (playerId: import("../../type/index").PlayerId, message: import("../../type/index").CustomTextStyling): void;
    };
    readonly sendFlyingMiddleMessage: (playerId: import("../../type/index").PlayerId, message: string | import("../../type/index").CustomTextStyling, distanceFromAction?: number, lifetimeMs?: number) => void;
    readonly sendTopRightHelper: (playerId: import("../../type/index").PlayerId, icon: string, text: string, opts: {
        duration?: number;
        width?: number;
        height?: number;
        color?: import("../../type/index").StringColor;
        iconSizeMult?: number;
        textAndIconColor?: string;
        fontSize?: string;
    }) => void;
    readonly getCurrentKillstreak: (playerId: import("../../type/index").PlayerId) => number;
    readonly clearKillstreak: (playerId: import("../../type/index").PlayerId) => void;
    readonly createItemDrop: (x: number, y: number, z: number, itemName: import("../../type/index").ItemName, amount?: number | null, margeItems?: boolean, attributes?: import("../../type/index").ItemAttributes, timeTillDespawn?: number, dropperId?: import("../../type/index").LifeformId | null, options?: never) => null | import("../../type/index").ItemEntityId;
    readonly setCantPickUpItem: (playerId: import("../../type/index").PlayerId, itemId: import("../../type/index").ItemEntityId) => void;
    readonly deleteItemDrop: (itemId: import("../../type/index").ItemEntityId) => void;
    readonly getHealth: (entityId: import("../../type/index").EntityId) => import("../../type/index").Health;
    readonly setHealth: (entityId: import("../../type/index").EntityId, newHealth: import("../../type/index").Health | null, whoDidDamage?: Readonly<import("../../type/index").WhoDidDamage>, increaseMaxHealthIfNeeded?: boolean) => boolean;
    readonly attemptApplyDamage: (options: Readonly<import("../../type/index").PlayerAttemptDamageOtherPlayerOpts>) => boolean;
    readonly applyMeleeHit: (hittingEId: import("../../type/index").LifeformId, hitEId: import("../../type/index").LifeformId, dirFacing: Readonly<import("../../type/index").Direcrion>, bodyPartHit?: import("../../type/index").LifeformBodyPart | null, overrides?: Readonly<import("../../type/index").applyMeleeHitOverrides>) => boolean;
    readonly applyHealthChange: (lifeformId: import("../../type/index").LifeformId, changeAmount: number, whoDidDamage?: Readonly<import("../../type/index").WhoDidDamage>, broadcastLifeformHurt?: boolean) => boolean;
    readonly killLifeform: (lifeformId: import("../../type/index").LifeformId, whoKilled?: import("../../type/index").WhoKilled) => void;
    readonly isAlive: (lifeformId: import("../../type/index").LifeformId) => boolean;
    readonly getBlockCoordinatesPlayerStandingOn: (playerId: import("../../type/index").PlayerId) => import("../../type/index").Coordinate[];
    readonly getBlockTypesPlayerStandingOn: (playerId: import("../../type/index").PlayerId) => import("../../type/index").BlockName[];
    readonly getPosition: (entityId: import("../../type/index").EntityId) => import("../../type/index").Coordinate;
    readonly setPosition: {
        (entityId: import("../../type/index").EntityId, x: number, y: number, z: number): void;
        (entityId: import("../../type/index").EntityId, position: Readonly<import("../../type/index").Coordinate>): void;
    };
    readonly getShieldAmount: (entityId: import("../../type/index").EntityId) => import("../../type/index").ShieldAmount;
    readonly setShieldAmount: (lifeformId: import("../../type/index").LifeformId, newShieldAmount: import("../../type/index").ShieldAmount) => void;
    readonly showShopTutorial: (playerId: import("../../type/index").PlayerId) => void;
    readonly createShopItem: (categoryKey: import("../../type/index").ShopCategoryKey, itemKey: import("../../type/index").ShopItemKey, item: import("../../type/index").ShopItem) => void;
    readonly updateShopItem: (categoryKey: import("../../type/index").ShopCategoryKey, itemKey: import("../../type/index").ShopItemKey, changes: Partial<import("../../type/index").ShopItem>) => void;
    readonly deleteShopItem: (categoryKey: import("../../type/index").ShopCategoryKey, itemKey: import("../../type/index").ShopItemKey) => void;
    readonly configureShopCategory: (categoryKey: import("../../type/index").ShopCategoryKey, config: import("../../type/index").ShopCategoryConfig) => void;
    readonly createShopItemForPlayer: (playerId: import("../../type/index").PlayerId, categoryKey: import("../../type/index").ShopCategoryKey, itemKey: import("../../type/index").ShopItemKey, item: import("../../type/index").ShopItem) => void;
    readonly updateShopItemForPlayer: (playerId: import("../../type/index").PlayerId, categoryKey: import("../../type/index").ShopCategoryKey, itemKey: import("../../type/index").ShopItemKey, changes: Partial<import("../../type/index").ShopItem>) => void;
    readonly resetShopItemForPlayer: (playerId: import("../../type/index").PlayerId, categoryKey: import("../../type/index").ShopCategoryKey, itemKey: import("../../type/index").ShopItemKey) => void;
    readonly configureShopCategoryForPlayer: (playerId: import("../../type/index").PlayerId, categoryKey: import("../../type/index").ShopCategoryKey, config: import("../../type/index").ShopCategoryConfig) => void;
    readonly getUnitCoordinatesLifeformWithin: (lifeformId: import("../../type/index").LifeformId) => import("../../type/index").Coordinate[];
    readonly playParticleEffect: (opts: import("../../type/index").TempParticleSystemOpts, clientPredictedBy?: import("../../type/index").PlayerId) => void;
};
