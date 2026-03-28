import { PlayerAttemptDamageOtherPlayerOpts } from "@type";
interface AttemptApplyDamageInterface {
    /**
     * Apply damage to a lifeform.
     * eId is the player initiating the damage, hitEId is the lifeform being hit.
     *
     * It is recommended to self-inflict damage when the game code wants to apply damage to a lifeform.
     *
     * @param {PlayerAttemptDamageOtherPlayerOpts} {
     *     eId,
     *     hitEId,
     *     attemptedDmgAmt,
     *     withItem,
     *     bodyPartHit = undefined,
     *     attackDir = undefined,
     *     showCritParticles = false,
     *     reduceVerticalKbVelocity = true,
     *     horizontalKbMultiplier = 1,
     *     verticalKbMultiplier = 1,
     *     broadcastEntityHurt = true,
     *     attackCooldownSettings = null,
     *     hittingSoundOverride = null,
     *     ignoreOtherEntitySettingCanAttack = false,
     *     isTrueDamage = false,
     *     damagerDbId = null,
     * }
     * @returns {boolean} - whether the attack damaged the lifeform
     */
    attemptApplyDamage(options: Readonly<PlayerAttemptDamageOtherPlayerOpts>): boolean;
}
export default AttemptApplyDamageInterface;
