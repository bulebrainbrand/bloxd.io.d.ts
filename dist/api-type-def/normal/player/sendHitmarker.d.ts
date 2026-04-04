import { Direcrion, PlayerId } from "../../../type/index";
/**
 * Show a hitmarker on the player's screen (the X-shaped crosshair flash indicating a successful hit).
 * Useful for custom weapons or things that need visual hit feedback.
 *
 * @param {PlayerId} playerId - The player to show the hitmarker to
 * @param {boolean} [isCrit] - If true, shows an enhanced critical-hit hitmarker with a longer, more dramatic animation
 * @param {Direcrion | null} [directionVector] - Optional [x, y, z] direction vector. When provided, the hitmarker appears
 * at the projected screen position of that direction rather than at the centre of the screen.
 * Same flow as mobile melee attacks where the tap point differs from screen centre.
 * @returns {void}
 */
declare const sendHitmarker: (playerId: PlayerId, isCrit?: boolean, directionVector?: Direcrion | null) => void;
export { sendHitmarker };
/**
 * Show a hitmarker on the player's screen (the X-shaped crosshair flash indicating a successful hit).
 * Useful for custom weapons or things that need visual hit feedback.
 *
 * @param {PlayerId} playerId - The player to show the hitmarker to
 * @param {boolean} [isCrit] - If true, shows an enhanced critical-hit hitmarker with a longer, more dramatic animation
 * @param {PNull<number[]>} [directionVector] - Optional [x, y, z] direction vector. When provided, the hitmarker appears
 * at the projected screen position of that direction rather than at the centre of the screen.
 * Same flow as mobile melee attacks where the tap point differs from screen centre.
 * @returns {void}
 *
 * sendHitmarker(playerId, isCrit, directionVector);
 */
//# sourceMappingURL=sendHitmarker.d.ts.map