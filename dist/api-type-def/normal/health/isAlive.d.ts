import { LifeformId } from "@type";
interface IsAliveInterface {
    /**
     * Whether a lifeform is alive or dead (or on the respawn screen, in a player's case).
     *
     * @param {LifeformId} lifeformId
     * @returns {boolean}
     */
    isAlive(lifeformId: LifeformId): boolean;
}
export default IsAliveInterface;
