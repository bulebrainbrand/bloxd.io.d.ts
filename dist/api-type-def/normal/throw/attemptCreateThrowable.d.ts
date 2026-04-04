import { Coordinate, Direcrion, EntityId, ItemAttributes, ThrowableItem } from "../../../type/index";
/**
 * Try to create a throwable entity.
 * Similar to creating a mesh entity and uses the same rate limiting.
 * However, this uses the predefined throwables system and physics used by throwable items with the game
 * Each throwable item has its own behaviour already, including default velocity, damage and gravity multipliers.
 *
 * @param {EntityId} throwerEId
 * @param {ThrowableItem} itemName - Must be an Item that is usually throwable in-engine
 * @param {Coordinate} position - Starting position
 * @param {Direcrion} direction
 * @param {number} [velocityMult] - Multiplier for the default velocity of the throwable item
 * @param {number} [damageMult] - Multiplier for the default damage of the throwable item
 * @param {number} [gravityMult] - Multiplier for the default gravity of the throwable item
 * @param {ItemAttributes} [attributes] - item attributes (currently used only for the "Boomerag" item)
 * @returns {EntityId | null} - null if throwable creation failed, otherwise the entity ID.
 */
declare const attemptCreateThrowable: (throwerEId: EntityId, itemName: ThrowableItem, position: Coordinate, direction: Direcrion, velocityMult?: number, damageMult?: number, gravityMult?: number, attributes?: ItemAttributes) => EntityId | null;
export { attemptCreateThrowable };
/**
 * Try to create a throwable entity.
 * Similar to creating a mesh entity and uses the same rate limiting.
 * However, this uses the predefined throwables system and physics used by throwable items with the game
 * Each throwable item has its own behaviour already, including default velocity, damage and gravity multipliers.
 *
 * @param {EntityId} throwerEId
 * @param {ThrowableItem} itemName - Must be an Item that is usually throwable in-engine
 * @param {[number, number, number]} position - Starting position
 * @param {[number, number, number]} direction
 * @param {number} [velocityMult] - Multiplier for the default velocity of the throwable item
 * @param {number} [damageMult] - Multiplier for the default damage of the throwable item
 * @param {number} [gravityMult] - Multiplier for the default gravity of the throwable item
 * @param {ItemAttributes} [attributes] - item attributes (currently used only for the "Boomerag" item)
 * @returns {string} - null if throwable creation failed, otherwise the entity ID.
 *
 * attemptCreateThrowable(
 *   throwerEId,
 *   itemName,
 *   position,
 *   direction,
 *   velocityMult,
 *   damageMult,
 *   gravityMult,
 *   attributes,
 * );
 */
//# sourceMappingURL=attemptCreateThrowable.d.ts.map