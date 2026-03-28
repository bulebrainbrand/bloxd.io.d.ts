import { EntityId, ShieldAmount } from "@type";
interface GetShieldAmountInterface {
    /**
     * Get the current shield of an entity.
     *
     * returns value is marking `ShiendAmount`.which is `number` alias
     *
     * @param {EntityId} entityId
     * @returns {number}
     */
    getShieldAmount(entityId: EntityId): ShieldAmount;
}
export default GetShieldAmountInterface;
