import { LifeformId, WhoKilled } from "@type";

/**
 * Kill a lifeform.
 *
 * @param {LifeformId} lifeformId
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoKilled] - Optional
 * @returns {void}
 */
declare const killLifeform: (
  lifeformId: LifeformId,
  whoKilled?: WhoKilled,
) => void;

export { killLifeform };
