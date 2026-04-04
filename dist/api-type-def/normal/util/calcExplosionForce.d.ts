import { Coordinate, EntityId, ExplosionType } from "../../../type/index";
/**
 * @param {EntityId} eId
 * @param {ExplosionType} explosionType
 * @param {number} knockbackFactor
 * @param {number} explosionRadius
 * @param {Coordinate} explosionPos
 * @param {boolean} ignoreProjectiles
 * @returns { { force: Coordinate; forceFrac: number; } }
 */
declare const calcExplosionForce: (eId: EntityId, explosionType: ExplosionType, knockbackFactor: number, explosionRadius: number, explosionPos: Coordinate, ignoreProjectiles: boolean) => {
    force: Coordinate;
    forceFrac: number;
};
export { calcExplosionForce };
/**
 * @param {EntityId} eId
 * @param {ExplosionType} explosionType
 * @param {number} knockbackFactor
 * @param {number} explosionRadius
 * @param {number[]} explosionPos
 * @param {boolean} ignoreProjectiles
 * @returns { { force: [number, number, number]; forceFrac: number; } }
 *
 * calcExplosionForce(
 *   eId,
 *   explosionType,
 *   knockbackFactor,
 *   explosionRadius,
 *   explosionPos,
 *   ignoreProjectiles,
 * );
 */
//# sourceMappingURL=calcExplosionForce.d.ts.map