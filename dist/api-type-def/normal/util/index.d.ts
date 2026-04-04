export declare const UtilApis: {
    calcExplosionForce: (eId: import("../../..").EntityId, explosionType: import("../../..").ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: import("../../..").Coordinate, ignoreProjectiles: boolean) => {
        force: import("../../..").Coordinate;
        forceFrac: number;
    };
    isInsideRect: (coordsToCheck: import("../../..").Coordinate, pos1: import("../../..").Coordinate, pos2: import("../../..").Coordinate, addOneToMax?: boolean) => boolean;
    now: () => number;
    raycastForBlock: (fromPos: import("../../..").Coordinate, dirVec: import("../../..").Direcrion) => import("../../..").BlockRaycastResult;
};
//# sourceMappingURL=index.d.ts.map