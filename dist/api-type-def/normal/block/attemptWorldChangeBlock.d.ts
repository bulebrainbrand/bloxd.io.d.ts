import { BlockName, PlayerDbId, WorldBlockChangedInfo } from "@type";
/**
 * Initiate a block change "by the world".
 * This ends up calling the onWorldChangeBlock and only makes the change if not prevented by game/plugins.
 * initiatorDbId is null if the change was initiated by the game code.
 *
 * @param {PNull<PlayerDbId>} initiatorDbId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {BlockName} blockName
 * @param {WorldBlockChangedInfo} [extraInfo]
 * @returns {"preventChange" | "preventDrop" | void} - "preventChange" if the change was prevented, "preventDrop" if the change was allowed but without dropping any items, and undefined if the change was allowed with an item drop
 */
declare const attemptWorldChangeBlock: (initiatorDbId: null | PlayerDbId, x: number, y: number, z: number, blockName: BlockName, extraInfo?: WorldBlockChangedInfo) => "preventChange" | "preventDrop" | void;
export { attemptWorldChangeBlock };
/**
 * Initiate a block change "by the world".
 * This ends up calling the onWorldChangeBlock and only makes the change if not prevented by game/plugins.
 * initiatorDbId is null if the change was initiated by the game code.
 *
 * @param {PNull<PlayerDbId>} initiatorDbId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {BlockName} blockName
 * @param {WorldBlockChangedInfo} [extraInfo]
 * @returns {"preventChange" | "preventDrop" | void} - "preventChange" if the change was prevented, "preventDrop" if the change was allowed but without dropping any items, and undefined if the change was allowed with an item drop
 *
 * attemptWorldChangeBlock(initiatorDbId, x, y, z, blockName, extraInfo)
 */
//# sourceMappingURL=attemptWorldChangeBlock.d.ts.map