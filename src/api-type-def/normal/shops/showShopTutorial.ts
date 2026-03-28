import { PlayerId } from "@type";

interface ShowShopTutorialInterface {
  /**
   * Show the shop tutorial for a player. Will not be shown if they have ever seen the shop tutorial in your game before.
   *
   * @param {PlayerId} playerId
   * @returns {void}
   */
  showShopTutorial(playerId: PlayerId): void;
}

export default ShowShopTutorialInterface;
