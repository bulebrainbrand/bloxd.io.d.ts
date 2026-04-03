import {
  EntityId,
  ParticleSystemBlendMode,
  RandomColorGradient,
  Texture,
  TimeColorGradient,
  VelocityGradient,
} from "@type";

export type ParticleEmitterOpts = {
  texture: Texture;
  minLifeTime: number;
  maxLifeTime: number;
  minEmitPower: number;
  maxEmitPower: number;
  minSize: number;
  maxSize: number;
  gravity: number[];
  velocityGradients: VelocityGradient[];
  colorGradients: TimeColorGradient[] | RandomColorGradient[];
  blendMode: ParticleSystemBlendMode;
  hideDist?: number;
  meshOffset?: number[];
  autoRotate?: boolean;
  lineToEId?: EntityId; // EntityId to connect to using a line
  height: number;
  width: number;
  depth: number;
  emitRate: number;
  dir1?: number[];
  dir2?: number[];
};
