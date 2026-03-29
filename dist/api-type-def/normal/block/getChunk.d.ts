import { Coordinate } from "../../../type/index";
/**
 * Only use this instead of getBlock if you REALLY need the performance (i.e. you are iterating over tens of thousands of blocks)
 * ReturnedObject.blockData is a 32x32x32 ndarray of block ids
 * (see https://www.npmjs.com/package/ndarray)
 * Each block id is a 16-bit number
 * The ndarray should only be read from, writing to it will result in desync between the server and client
 *
 * @param {number[]} pos - The returned chunk contains pos
 * @returns {PNull<GameChunk>} - null if the chunk is not loaded in a persisted world. ReturnedObject.blockData is an ndarray that can be accessed
 *
 * @throws allways happen error
 */
declare const getChunk: (pos: Coordinate) => never;
export { getChunk };
