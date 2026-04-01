import { PlayerId, CustomTextStyling } from "@type";

/**
 * Allows player to select a channel that is passed as argument to onPlayerChat. See engineGameplayTypes.ts for expected format
 * @type { { channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[] }
 */
type ValueType = {
  channelName: string;
  elementContent: string | CustomTextStyling;
  elementBgColor: string;
}[];

interface SetClientOption {
  /**
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"chatChannels"} option
   * @param {{ channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[]} value
   * @returns {void}
   */
  setClientOption(
    playerId: PlayerId,
    option: "chatChannels",
    value: {
      channelName: string;
      elementContent: string | CustomTextStyling;
      elementBgColor: string;
    }[],
  ): void;
}

interface GetClientOption {
  /**
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"chatChannels"} option
   * @returns {{ channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[]}
   */
  getClientOption(
    playerId: PlayerId,
    option: "chatChannels",
  ): {
    channelName: string;
    elementContent: string | CustomTextStyling;
    elementBgColor: string;
  }[];
}

interface SetClientOptionToDefault {
  /**
   * set chatChannels option to default
   * chatChannels default is `null`
   *
   * option document:
   * Allows player to select a channel that is passed as argument to onPlayerChat. See engineGameplayTypes.ts for expected format
   *
   * @overload
   *
   * @param {PlayerId} playerId
   * @param {"chatChannels"} option
   * @returns {void}
   */
  setClientOptionToDefault(playerId: PlayerId, option: "chatChannels"): void;
}
type ExportTypes = {
  SetClientOption: SetClientOption;
  SetClientOptionToDefault: SetClientOptionToDefault;
  GetClientOption: GetClientOption;
  name: "chatChannels";
  ValueType: ValueType;
};
export default ExportTypes;
