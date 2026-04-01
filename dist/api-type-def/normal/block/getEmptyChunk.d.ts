/**
 * Only use chunk helpers if you REALLY need the performance (i.e. you are iterating over tens of thousands of blocks)
 * ReturnedObject.blockData is a 32x32x32 ndarray of air.
 * (see https://www.npmjs.com/package/ndarray)
 * Each block id is a 16-bit number
 *
 * @throws alwavs happen error
 *
 * @returns {GameChunk}
 */
declare const getEmptyChunk: () => never;
export { getEmptyChunk };
/**
 * Only use chunk helpers if you REALLY need the performance (i.e. you are iterating over tens of thousands of blocks)
 * ReturnedObject.blockData is a 32x32x32 ndarray of air.
 * (see https://www.npmjs.com/package/ndarray)
 * Each block id is a 16-bit number
 *
 * @returns {GameChunk}
 *
 * getEmptyChunk()
 */
