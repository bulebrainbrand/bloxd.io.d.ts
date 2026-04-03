import { EntityId } from "../../../type/index";
/**
 * Delete a throwable entity before it automatically removes itself.
 *
 * @param {EntityId} eId
 * @returns {boolean} - true if the entity was deleted, false if it was not a throwable entity
 */
declare const deleteThrowable: (eId: EntityId) => boolean;
export { deleteThrowable };
/**
 * Delete a throwable entity before it automatically removes itself.
 *
 * @param {EntityId} eId
 * @returns {boolean} - true if the entity was deleted, false if it was not a throwable entity
 *
 * deleteThrowable(eId);
 */
