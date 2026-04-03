export declare const EntityApis: {
    getEntityName: (entityId: import("../../..").EntityId) => string;
    checkValid: (entityId: import("../../..").EntityId | null) => boolean;
    getUnitCoordinatesLifeformWithin: (lifeformId: import("../../..").LifeformId) => import("../../..").Coordinate[];
    getEntitiesInRect: (minCoords: import("../../..").Coordinate, maxCoords: import("../../..").Coordinate) => import("../../..").EntityId[];
    getEntityHeading: (entityId: import("../../..").EntityId) => import("../../..").Radian;
    getEntityRotation: (entityId: import("../../..").EntityId) => [import("../../..").Radian, import("../../..").Radian, import("../../..").Radian];
    getEntityType: (entityId: import("../../..").EntityId) => import("../../..").EntityType;
    setEntityHeading: (entityId: import("../../..").EntityId, newHeading: import("../../..").Radian) => void;
    setEntityRotation: (entityId: import("../../..").EntityId, xRotation: import("../../..").Radian, yRotation: import("../../..").Radian, zRotation: import("../../..").Radian) => void;
    updateEntityNodeMeshAttachment: {
        <TMeshType extends import("../../..").MeshType>(eId: import("../../..").EntityId, node: import("../../..").LifeformBodyPart, type: TMeshType, opts?: import("../../..").MeshEntityOpts[TMeshType], offset?: [number, number, number], rotation?: import("../../..").Rotation): void;
        (eId: import("../../..").EntityId, node: import("../../..").LifeformBodyPart, type: null): void;
    };
};
