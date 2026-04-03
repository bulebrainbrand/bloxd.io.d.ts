import { MobDbId, MobHerdId, MobType, PlayerId } from "../index";
import { Variation } from "../../index";
export type MobSpawnOpts<TMobType extends MobType> = Partial<{
    mobHerdId: MobHerdId;
    spawnerId: PlayerId;
    mobDbId: MobDbId;
    name: string;
    playSoundOnSpawn: boolean;
    variation: Variation<TMobType>;
    physicsOpts: Partial<{
        width: number;
        height: number;
        collidesEntities: boolean;
    }>;
}>;
