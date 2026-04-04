import { MeshEntityVehicleOpts } from "../index";
export type MeshEntityPhysicsOpts = {
    doPhysics: boolean;
    onCollideTerrain?: () => void;
    collidesEntities?: boolean;
    collideBits?: number;
    collideMask?: number;
    heightExpandAmt?: number;
    widthExpandAmt?: number;
    vehicleOpts?: MeshEntityVehicleOpts;
};
//# sourceMappingURL=MeshEntityPhysicsOpts.d.ts.map