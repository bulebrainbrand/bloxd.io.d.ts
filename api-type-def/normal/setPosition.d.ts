import { Coordinate, EntityId } from "../../type";

export type SetPosition =
  /**
   * Set position of a player / entity.
   *
   * @param {EntityId} entityId
   * @param {number} x
   * @param {number} y
   * @param {number} z
   * @returns {void}
   */
  ((entityId: EntityId, x: number, y: number, z: number) => void) &
    /**
     * Set position of a player / entity.
     *
     * @param {EntityId} entityId
     * @param {Coordinate} position
     * @returns {void}
     */
    ((entityId: EntityId, position: Coordinate) => void);
