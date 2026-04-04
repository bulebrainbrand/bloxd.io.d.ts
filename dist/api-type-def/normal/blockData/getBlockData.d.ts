/**
 * Get stored data about a block in a performant manner. Data is cleared when block changes.
 * E.g. chest
 * Works well with blocks marked tickable (e.g. wheat)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {unknown}
 */
declare const getBlockData: (x: number, y: number, z: number) => object | null | undefined;
export { getBlockData };
/**
 * Get stored data about a block in a performant manner. Data is cleared when block changes.
 * E.g. chest
 * Works well with blocks marked tickable (e.g. wheat)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {any}
 *
 * getBlockData(x, y, z);
 */
//# sourceMappingURL=getBlockData.d.ts.map