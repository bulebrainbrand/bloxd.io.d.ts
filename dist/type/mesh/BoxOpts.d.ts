import { BlockName, EntityId } from "@type";
export type BoxOpts = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId;
    width: number;
    height: number;
    depth: number;
    diffuseColor?: number[];
    emissiveColor?: number[];
    backFaceCulling?: boolean;
    texture?: BlockName;
    faceUV?: number[][];
};
//# sourceMappingURL=BoxOpts.d.ts.map