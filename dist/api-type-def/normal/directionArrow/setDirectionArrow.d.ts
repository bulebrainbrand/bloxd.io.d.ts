import { Coordinate, CustomTextStyling, PlayerId, TextStyle } from "@type";
/**
 * Show a directional arrow indicator on the player's screen pointing toward a world position.
 * When the position is off-screen the indicator is a rotating chevron at the screen edge.
 * When the position is on-screen it becomes a small marker dot.
 *
 * The arrow persists until explicitly cleared via `clearDirectionArrow`.
 * Calling again with the same `id` updates the existing arrow in-place.
 *
 * @param {PlayerId} playerId - The player to show the arrow to
 * @param {string} id - Unique identifier for this arrow (allows multiple concurrent arrows)
 * @param {Coordinate} position - [x, y, z] world position the arrow should point toward
 * @param {string | CustomTextStyling | null} [text] - Optional label rendered below the indicator. Supports CustomTextStyling for rich text with icons/colours.
 * @param {boolean} [showDistance] - If true, displays the distance (in blocks) from the player to the arrow position.
 * @param {TextStyle | null} [style] - Optional style object (same format as CustomTextStyling's StyledText `style`). Controls chevron/marker colour, label typography, and opacity.
 * @returns {void}
 */
declare const setDirectionArrow: (playerId: PlayerId, id: string, position: Coordinate, text?: null | string | CustomTextStyling, showDistance?: boolean, style?: null | TextStyle) => void;
export { setDirectionArrow };
/**
 * Show a directional arrow indicator on the player's screen pointing toward a world position.
 * When the position is off-screen the indicator is a rotating chevron at the screen edge.
 * When the position is on-screen it becomes a small marker dot.
 *
 * The arrow persists until explicitly cleared via `clearDirectionArrow`.
 * Calling again with the same `id` updates the existing arrow in-place.
 *
 * @param {PlayerId} playerId - The player to show the arrow to
 * @param {string} id - Unique identifier for this arrow (allows multiple concurrent arrows)
 * @param {number[]} position - [x, y, z] world position the arrow should point toward
 * @param {PNull<string | CustomTextStyling>} [text] - Optional label rendered below the indicator. Supports CustomTextStyling for rich text with icons/colours.
 * @param {boolean} [showDistance] - If true, displays the distance (in blocks) from the player to the arrow position.
 * @param {PNull<TextStyle>} [style] - Optional style object (same format as CustomTextStyling's StyledText `style`). Controls chevron/marker colour, label typography, and opacity.
 * @returns {void}
 *
 * setDirectionArrow(playerId, id, position, text, showDistance, style);
 */
//# sourceMappingURL=setDirectionArrow.d.ts.map