import { CustomTextStyling } from "@type";

interface BroadcastMessageInterface {
  /**
   * Send a message to everyone
   *
   * @param {string | CustomTextStyling} message - The text contained within the message. Can use `Custom Text Styling`.
   * @param { { fontWeight?: number | string; color?: string } } [style] - An optional style argument. Can contain values for fontWeight and color of the message.
   * style is ignored if message uses custom text styling (i.e. is not a string).
   * @returns {void}
   */
  broadcastMessage(
    message: string | CustomTextStyling,
    style?: { fontWeight?: number | string; color?: string },
  ): void;
}

export default BroadcastMessageInterface;
