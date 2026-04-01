import { LifeformId, WhoKilled } from "../../../type/index";
/**
 * Kill a lifeform.
 *
 * @param {LifeformId} lifeformId
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoKilled] - Optional
 * @returns {void}
 */
declare const killLifeform: (lifeformId: LifeformId, whoKilled?: WhoKilled) => void;
export { killLifeform };
/**
 * Kill a lifeform.
 *
 * @param {LifeformId} lifeformId
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoKilled] - Optional
 * @returns {void}
 *
 * killLifeform(lifeformId, whoKilled)
 */
