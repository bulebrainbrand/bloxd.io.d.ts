import { CosmeticType } from "./CosmeticType";
import { HatCosmetic } from "./HatCosmetic";
import { HeadCosmetic } from "./HeadCosmetic";
import { BodyCosmetic } from "./BodyCosmetic";
import { LegsCosmetic } from "./LegsCosmetic";
import { ShoesCosmetic } from "./ShoesCosmetic";
import { EyebrowsCosmetic } from "./EyebrowsCosmetic";
import { EyesCosmetic } from "./EyesCosmetic";
import { SkinCosmetic } from "./SkinCosmetic";
import { CommonCosmetic } from "./CommonCosmetic";
export type CosmeticName<TCosmeticType extends CosmeticType> =
  | {
      hat: HatCosmetic;
      head: HeadCosmetic;
      body: BodyCosmetic;
      legs: LegsCosmetic;
      shoes: ShoesCosmetic;
      eyebrows: EyebrowsCosmetic;
      eyes: EyesCosmetic;
      skin: SkinCosmetic;
    }[TCosmeticType]
  | CommonCosmetic;
