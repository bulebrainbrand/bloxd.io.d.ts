import { Direcrion, EntityId, Item, LifeformBodyPart, SoundName } from ".";
export interface PlayerAttemptDamageOtherPlayerOpts {
    eId: EntityId;
    hitEId: EntityId;
    attemptedDmgAmt: number;
    withItem: Item;
    bodyPartHit?: LifeformBodyPart;
    attackDir?: Direcrion;
    showCritParticles?: boolean;
    reduceVerticalKbVelocity?: boolean;
    horizontalKbMultiplier?: number;
    verticalKbMultiplier?: number;
    broadcastEntityHurt?: boolean;
    attackCooldownSettings?: any;
    hittingSoundOverride?: SoundName;
    ignoreOtherEntitySettingCanAttack?: boolean;
    isTrueDamage?: boolean;
    damagerDbId?: string;
}
