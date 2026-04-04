import { Coordinate, EntityId } from "../../../type/index";
interface SetPositionInterface {
    /**
     * Set position of a player / entity.
     *
     * @param {EntityId} entityId
     * @param {number} x
     * @param {number} y
     * @param {number} z
     * @returns {void}
     */
    setPosition(entityId: EntityId, x: number, y: number, z: number): void;
    /**
     * Set position of a player / entity.
     *
     * @param {EntityId} entityId
     * @param {Coordinate} position
     * @returns {void}
     */
    setPosition(entityId: EntityId, position: Readonly<Coordinate>): void;
}
declare const setPosition: SetPositionInterface["setPosition"];
export { setPosition };
/**
 * Set position of a player / entity.
 *
 * @param {EntityId} entityId
 * @param {number | number[]} x - Can also be an array, in which case y and z shouldn't be passed
 * @param {number} [y]
 * @param {number} [z]
 * @returns {void}
 * setPosition(entityId, x, y, z)
 */
//# sourceMappingURL=setPosition.d.ts.map