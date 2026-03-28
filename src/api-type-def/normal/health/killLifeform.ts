import { LifeformId, WhoKilled } from "../../../type";

interface killLifeformInterface {
  /**
   * Kill a lifeform.
   *
   * @param {LifeformId} lifeformId
   * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoKilled] - Optional
   * @returns {void}
   */
  killLifeform(lifeformId: LifeformId, whoKilled?: WhoKilled): void;
}

export default killLifeformInterface;
