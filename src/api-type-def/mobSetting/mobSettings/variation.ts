import { MobType } from "../../../type";

type VariationDictionary = {
  /**
   * @default {"default"}
   */
  Pig: "default";
  /**
   * @default {"default"}
   */
  Cow: "default" | "cream";
  /**
   * @default {"default"}
   */
  Sheep:
    | "default"
    | "black"
    | "red"
    | "orange"
    | "pink"
    | "purple"
    | "yellow"
    | "blue"
    | "brown"
    | "cyan"
    | "gray"
    | "green"
    | "lightBlue"
    | "lightGray"
    | "lime"
    | "magenta";
  /**
   * @default {"default"}
   */
  Horse: "default" | "black" | "brown" | "cream";
  "Cave Golem": "default" | "iron";
  /**
   * @default {"default"}
   */
  "Draugr Zombie":
    | "default"
    | "longHairChestplate"
    | "longHairClothed"
    | "shortHairClothed";
  /**
   * @default {"default"}
   */
  "Draugr Skeleton": "default";
  /**
   * @default {"default"}
   */
  "Frost Golem": "default";
  /**
   * @default {"default"}
   */
  "Frost Zombie": "default" | "longHairChestplate" | "shortHairClothed";
  /**
   * @default {"default"}
   */
  "Frost Skeleton": "default";
  /**
   * @default {"default"}
   */
  "Draugr Knight": "default";
  /**
   * @default {"default"}
   */
  Wolf: "default" | "white" | "brown" | "grey" | "spectral";
  /**
   * @default {"default"}
   */
  Bear: "default";
  /**
   * @default {"default"}
   */
  Deer: "default";
  /**
   * @default {"default"}
   */
  Stag: "default";
  /**
   * @default {"default"}
   */
  "Gold Watermelon Stag": "default";
  /**
   * @default {"default"}
   */
  Gorilla: "default";
  /**
   * @default {"default"}
   */
  Wildcat:
    | "default"
    | "tabby"
    | "grey"
    | "black"
    | "calico"
    | "siamese"
    | "leopard";
  /**
   * @default {"default"}
   */
  "Magma Golem": "default";
  /**
   * @default {"default"}
   */
  "Draugr Huntress": "default" | "chainmail";
  /**
   * @default {"default"}
   */
  "Spirit Golem": "default";
  /**
   * @default {"default"}
   */
  "Spirit Wolf": "default";
  /**
   * @default {"default"}
   */
  "Spirit Bear": "default";
  /**
   * @default {"default"}
   */
  "Spirit Stag": "default";
  /**
   * @default {"default"}
   */
  "Spirit Gorilla": "default";
  /**
   * @default {"default"}
   */
  "Draugr Warper": "default";
  /**
   * @default {"default"}
   */
  "Frost Wraith": "default";
  /**
   * @default {"default"}
   */
  "Draugr Reaver": "default";
  /**
   * @default {"default"}
   */
  NPC:
    | "default"
    | "emma"
    | "leo"
    | "isabel"
    | "sanjay"
    | "imara"
    | "enoch"
    | "sara"
    | "carmen";
};

export type Variation<K extends MobType> = VariationDictionary[K];
