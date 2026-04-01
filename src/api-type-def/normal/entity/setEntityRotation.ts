import { EntityId, Radian } from "@type";

/**
 * Set the rotation for a server-auth entity.
 *
 * @param {EntityId} entityId
 * @param {number} xRotation
 * @param {number} yRotation
 * @param {number} zRotation
 * @returns {void}
 */
declare const setEntityRotation: (
  entityId: EntityId,
  xRotation: Radian,
  yRotation: Radian,
  zRotation: Radian,
) => void;

export { setEntityRotation };

/**
 * Set the rotation for a server-auth entity.
 *
 * @param {EntityId} entityId
 * @param {number} xRotation
 * @param {number} yRotation
 * @param {number} zRotation
 * @returns {void}
 *
 * setEntityRotation(entityId, xRotation, yRotation, zRotation);
 */
