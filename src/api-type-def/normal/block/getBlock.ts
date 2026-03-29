import { BlockName, Coordinate } from "@type";

/**
 * Get the name of a block.
 *
 * Overload 1: getBlock(x: number, y: number, z: number): BlockName
 * Overload 2: getBlock(pos: Coordinate): BlockName
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {BlockName} - blockName - will be a name contained in blockMetadata.ts or 'Air'
 */
declare const getBlock: {
  (x: number, y: number, z: number): BlockName;
  (pos: Coordinate): BlockName;
};

export { getBlock };
