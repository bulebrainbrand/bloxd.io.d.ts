import { Texture, ParticleSystemBlendMode } from ".";
import { Array255Color, Array255ColorWithA, Coordinate, Direcrion } from "..";
export type TempParticleSystemOpts = {
    texture: Texture;
    minLifeTime: number;
    maxLifeTime: number;
    minEmitPower: number;
    maxEmitPower: number;
    minSize: number;
    maxSize: number;
    gravity: [number, number, number];
    velocityGradients: {
        timeFraction: number;
        factor: number;
        factor2: number;
    }[];
    colorGradients: {
        timeFraction: number;
        minColor: Array255ColorWithA;
        maxColor?: Array255ColorWithA;
    }[] | {
        color: Array255Color;
    }[];
    blendMode: ParticleSystemBlendMode;
    dir1: Direcrion;
    dir2: Direcrion;
    pos1: Coordinate;
    pos2: Coordinate;
    manualEmitCount: number;
    hideDist: number;
};
