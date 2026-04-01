export declare const EntityApis: {
    getEntityName: (entityId: import("../../..").EntityId) => string;
    checkValid: (entityId: import("../../..").EntityId | null) => boolean;
    getUnitCoordinatesLifeformWithin: (lifeformId: import("../../..").LifeformId) => import("../../..").Coordinate[];
};
