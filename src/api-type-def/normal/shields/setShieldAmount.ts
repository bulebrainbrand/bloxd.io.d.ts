import { LifeformId, ShieldAmount } from "@type";

interface SetShieldAmountInterface {
  /**
   * Set the current shield of a lifeform.
   *
   * @param {LifeformId} lifeformId
   * @param {number} newShieldAmount - on d.ts,this arg type is marking `ShieldAmount` which is `number` alias
   * @returns {void}
   */
  setShieldAmount(lifeformId: LifeformId, newShieldAmount: ShieldAmount): void;
}

export default SetShieldAmountInterface;
