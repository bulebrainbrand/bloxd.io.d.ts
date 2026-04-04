import { CustomTextStyling, PlayerId } from "../../../type/index";
/**
 * Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.
 * Displays for a couple seconds before disappearing
 * Use case is to show a dynamic message when player buys an item
 *
 * @param {PlayerId} playerId
 * @param {string | CustomTextStyling} info
 * @returns {void}
 *
 * sendOverShopInfo(playerId, info);
 */
declare const sendOverShopInfo: (playerId: PlayerId, info: string | CustomTextStyling) => void;
export { sendOverShopInfo };
/**
 * Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.
 * Displays for a couple seconds before disappearing
 * Use case is to show a dynamic message when player buys an item
 *
 * @param {PlayerId} playerId
 * @param {string | CustomTextStyling} info
 * @returns {void}
 *
 * sendOverShopInfo(playerId, info);
 */
//# sourceMappingURL=sendOverShopInfo.d.ts.map