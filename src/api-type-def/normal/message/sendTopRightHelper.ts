import { PlayerId, StringColor } from "@type";

interface SendTopRightHelper {
  /**
   * @deprecated - prefer using other UI elements
   * (this UI element hasn't been properly thought through in combination with other elements like killfeed, uirequests, etc)
   *
   * Send a player an icon in the top right corner
   *
   * @param {PlayerId} playerId
   * @param {string} icon - Can be any icon from font-awesome.
   * @param {string} text - The text to send.
   * @param { {
   *     duration?: number
   *     width?: number
   *     height?: number
   *     color?: string
   *     iconSizeMult?: number
   *     textAndIconColor?: string
   *     fontSize?: string
   * } } opts - Can include keys duration, width, height, color, iconSizeMult.
   * @returns {void}
   */
  sendTopRightHelper(
    playerId: PlayerId,
    icon: string,
    text: string,
    opts: {
      duration?: number;
      width?: number;
      height?: number;
      color?: StringColor;
      iconSizeMult?: number;
      textAndIconColor?: string;
      fontSize?: string;
    },
  ): void;
}

export default SendTopRightHelper;
