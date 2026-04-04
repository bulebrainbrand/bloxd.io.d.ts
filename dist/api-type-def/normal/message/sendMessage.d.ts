import { PlayerId, CustomTextStyling } from "@type";
interface SendMessageInterface {
    /**
     * Send a message to a specific player
     *
     * @param {PlayerId} playerId - Id of the player
     * @param {string} message - The text contained within the message.
     * @param { { fontWeight?: number | string; color?: string } } [style] - An optional style argument. Can contain values for fontWeight and color of the message.
     * @returns {void}
     */
    sendMessage(playerId: PlayerId, message: string, style: {
        fontWeight?: number | string;
        color?: string;
    }): void;
    /**
     * Send a message to a specific player
     *
     * @param {PlayerId} playerId - Id of the player
     * @param {CustomTextStyling} message - The text contained within the message.
     *
     * @returns {void}
     */
    sendMessage(playerId: PlayerId, message: CustomTextStyling): void;
}
declare const sendMessage: SendMessageInterface["sendMessage"];
export { sendMessage };
/**
 * Send a message to a specific player
 *
 * @param {PlayerId} playerId - Id of the player
 * @param {string | CustomTextStyling} message - The text contained within the message. Can use `Custom Text Styling`.
 * @param { { fontWeight?: number | string; color?: string } } [style] - An optional style argument. Can contain values for fontWeight and color of the message.
 * style is ignored if message uses custom text styling (i.e. is not a string).
 * @returns {void}
 *
 * sendMessage(playerId, message, style)
 */
//# sourceMappingURL=sendMessage.d.ts.map