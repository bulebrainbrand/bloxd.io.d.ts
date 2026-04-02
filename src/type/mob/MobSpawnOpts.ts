import { MobDbId, mobHerdId, MobType, PlayerId, SoundName } from "@type";
import { Variation } from "@index";

export type MobSpawnOpts<TMobType extends MobType> = Record<
  MobType,
  {
    mobHerdId?: mobHerdId;
    spawnerId?: PlayerId;
    mobDbId: MobDbId;
    name: string;
    playSoundOnSpawn?: SoundName | string;
    variation?: Variation<TMobType>;
    physicsOpts?: { width: number; height: number; collidesEntities?: boolean };
  }
>;
