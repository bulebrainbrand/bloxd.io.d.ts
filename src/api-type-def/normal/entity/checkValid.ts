import { EntityId } from "@type";
/**
 * Check your game (and, optionally, a entity) is still valid and executing.
 * Useful if you're using async functions and await within your game.
 * If you use await/async or promises and do not check this, your game could have closed and then the rest of your
 * async code executes.
 *
 * if input `null`,return `true`. it's maybe bloxd.io bug.
 *
 * @param {null | EntityId} [entityId]
 * @returns {boolean}
 */
declare const checkValid: (entityId: EntityId | null) => boolean;

export { checkValid };

/**
 * Check your game (and, optionally, a entity) is still valid and executing.
 * Useful if you're using async functions and await within your game.
 * If you use await/async or promises and do not check this, your game could have closed and then the rest of your
 * async code executes.
 *
 * @param {PNull<EntityId>} [entityId]
 * @returns {boolean}
 *
 * checkValid(entityId)
 */
