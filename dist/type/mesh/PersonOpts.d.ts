import { EntityId, PlayerPose } from "../index";
export type PersonOpts = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId;
    size?: number;
    textures?: Partial<object>;
    pose?: PlayerPose;
};
