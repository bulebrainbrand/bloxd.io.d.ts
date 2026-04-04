import { AngleDir, Coordinate, Direcrion, PlayerId } from "@type";
/**
 * Get the position of a player's camera and the direction (both in Euclidean and spherical coordinates) they are attempting to use an item.
 * The camPos has the same limitations described in getPlayerTargetInfo
 *
 * @param {PlayerId} playerId
 * @returns { { camPos: [number, number, number]; dir: [number, number, number]; angleDir: AngleDir; moveHeading: number } }
 */
declare const getPlayerFacingInfo: (playerId: PlayerId) => {
    camPos: Coordinate;
    dir: Direcrion;
    angleDir: AngleDir;
    moveHeading: number;
};
export { getPlayerFacingInfo };
/**
 * Get the position of a player's camera and the direction (both in Euclidean and spherical coordinates) they are attempting to use an item.
 * The camPos has the same limitations described in getPlayerTargetInfo
 *
 * @param {PlayerId} playerId
 * @returns { { camPos: [number, number, number]; dir: [number, number, number]; angleDir: AngleDir; moveHeading: number } }
 *
 * getPlayerFacingInfo(playerId);
 */
//# sourceMappingURL=getPlayerFacingInfo.d.ts.map