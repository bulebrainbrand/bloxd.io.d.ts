import { BlockName, PlayerDbId, WorldBlockChangedInfo } from "../../../type/index";
declare const attemptWorldChangeBlock: (initatorDbId: null | PlayerDbId, x: number, y: number, z: number, blockName: BlockName, extraInfo?: WorldBlockChangedInfo) => "preventChange" | "preventDrop" | void;
export { attemptWorldChangeBlock };
