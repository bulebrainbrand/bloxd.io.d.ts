import { BlockId } from "@type";
/**
 * Used to get the block id at a specific position.
 * Intended only for use in hot code paths - default to getBlock for most use cases
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {BlockId}
 */
declare const getBlockId: (x: number, y: number, z: number) => BlockId;

export { getBlockId };
