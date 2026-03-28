import ShowShopTutorialInterface from "./showShopTutorial";
import CreateShopItemInterface from "./createShopItem";
import UpdateShopItemInterface from "./updateShopItem";
import DeleteShopItemInterface from "./deleteShopItem";
import ConfigureShopCategory from "./configureShopCategory";
export type ShopApis = ShowShopTutorialInterface &
  CreateShopItemInterface &
  UpdateShopItemInterface &
  DeleteShopItemInterface &
  ConfigureShopCategory;
