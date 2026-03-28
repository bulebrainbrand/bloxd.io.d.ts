import { PlayerId, CustomTextStyling } from "../../../type/index";
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
export default SendMessageInterface;
