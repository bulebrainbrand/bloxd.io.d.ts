import { CustomTextStyling, PlayerId } from "../../../type/index";
/**
 * Send a flying middle message to a specific player
 *
 * @param {PlayerId} playerId - Id of the player
 * @param {string | CustomTextStyling} message - The text contained within the message. Can be either a string or use `Custom Text Styling`.
 * @param {number} distanceFromAction - The distance from the action that has caused this message to be displayed,
 * this value will be used to determine how the message flies across the screen.
 * @param {number} [lifetimeMs] - How long the message will be visible in milliseconds. Defaults to 1000ms.
 * @returns {void}
 */
declare const sendFlyingMiddleMessage: (playerId: PlayerId, message: string | CustomTextStyling, distanceFromAction?: number, lifetimeMs?: number) => void;
export { sendFlyingMiddleMessage };
/**
 * Send a flying middle message to a specific player
 *
 * @param {PlayerId} playerId - Id of the player
 * @param {string | CustomTextStyling} message - The text contained within the message. Can be either a string or use `Custom Text Styling`.
 * @param {number} distanceFromAction - The distance from the action that has caused this message to be displayed,
 * this value will be used to determine how the message flies across the screen.
 * @param {number} [lifetimeMs] - How long the message will be visible in milliseconds. Defaults to 1000ms.
 * @returns {void}
 *
 * sendFlyingMiddleMessage(playerId, message, distanceFromAction, lifetimeMs)
 */
