import { Direcrion, EntityId, Item, LifeformBodyPart, SoundName } from "@type";

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
  attackCooldownSettings?: any; // what is this
  hittingSoundOverride?: SoundName;
  ignoreOtherEntitySettingCanAttack?: boolean;
  isTrueDamage?: boolean;
  damagerDbId?: string;
}
