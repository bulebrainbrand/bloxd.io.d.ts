import { PlayerId } from "../index";
import { Coordinate } from "../Coordinate";
export type PosSettings = {
    playerIdOrPos: PlayerId | Coordinate;
    maxHearDist?: number;
    refDistance?: number;
};
