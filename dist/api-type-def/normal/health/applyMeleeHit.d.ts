import { applyMeleeHitOverrides, Direcrion, LifeformBodyPart, LifeformId } from "@type";
interface ApplyMeleeHitInterface {
    /**
     * Make it as if hittingEId hit hitEId
     *
     * @param {LifeformId} hittingEId
     * @param {LifeformId} hitEId
     * @param {number[]} dirFacing
     * @param {PNull<LifeformBodyPart>} [bodyPartHit]
     * @param { {
     *     damage?: PNull<number>
     *     heldItemName?: PNull<string>
     *     horizontalKbMultiplier?: number
     *     verticalKbMultiplier?: number
     * } } [overrides]
     * @returns {boolean} - hitEId was died by this calling
     */
    applyMeleeHit(hittingEId: LifeformId, hitEId: LifeformId, dirFacing: Readonly<Direcrion>, bodyPartHit?: LifeformBodyPart | null, overrides?: Readonly<applyMeleeHitOverrides>): boolean;
}
export default ApplyMeleeHitInterface;
