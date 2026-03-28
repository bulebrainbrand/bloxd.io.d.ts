import ShowShopTutorialInterface from "./showShopTutorial";
import CreateShopItemInterface from "./createShopItem";
import UpdateShopItemInterface from "./updateShopItem";
import DeleteShopItemInterface from "./deleteShopItem";
export type ShopApis = ShowShopTutorialInterface &
  CreateShopItemInterface &
  UpdateShopItemInterface &
  DeleteShopItemInterface;
