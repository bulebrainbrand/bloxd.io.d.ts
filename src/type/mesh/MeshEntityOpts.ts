import {
  BloxdBlockOpts,
  BoxOpts,
  MeshParticleSystemOpts,
  PersonOpts,
} from "./index";

export type MeshEntityOpts = {
  Box: BoxOpts;
  BloxdBlock: BloxdBlockOpts;
  Person: PersonOpts;
  ParticleEmitter: MeshParticleSystemOpts;
};
