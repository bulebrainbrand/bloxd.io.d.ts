import { BlockName, Coordinate } from "../../../type/index";
/**
 * Set a block. Valid names are those either contained in blockMetadata.ts or are 'Air'
 *
 * This function is optimised for setting broad swathes of blocks. For example, if you have a 50x50x50 area you need to turn to air, it will run performantly if you call this in double nested loops.
 *
 * overload1: setBlock(x: number, y: number, z: number, blockName: BlockName): void
 * overload2: setBlock(pos: Coordinate, blockName: BlockName): void
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {BlockName} blockName
 * @returns {void}
 */
declare const setBlock: {
    (x: number, y: number, z: number, blockName: BlockName): void;
    (pos: Coordinate, blockName: BlockName): void;
};
export { setBlock };
/**
 * Set a block. Valid names are those either contained in blockMetadata.ts or are 'Air'
 *
 * This function is optimised for setting broad swathes of blocks. For example, if you have a 50x50x50 area you need to turn to air, it will run performantly if you call this in double nested loops.
 *
 * @param {number | number[]} x - Can be an array
 * @param {number | BlockName} y - Should be blockname if first param is array
 * @param {number} [z]
 * @param {BlockName} [blockName]
 * @returns {void}
 *
 * setBlock(x, y, z, blockName)
 */
//# sourceMappingURL=setBlock.d.ts.map