/**
 * Get the position of a player's camera and the direction (both in Euclidean and spherical coordinates) they are attempting to use an item.
 * The camPos has the same limitations described in getPlayerTargetInfo
 *
 * @param {PlayerId} playerId
 * @returns { { camPos: [number, number, number]; dir: [number, number, number]; angleDir: AngleDir; moveHeading: number } }
 *
 * getPlayerFacingInfo(playerId);
 */
