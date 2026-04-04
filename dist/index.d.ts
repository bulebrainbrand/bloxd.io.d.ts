import { AngleDir as AngleDir_3 } from '../..';
import { AnyMetadataItem as AnyMetadataItem_3 } from '../..';
import { applyMeleeHitOverrides as applyMeleeHitOverrides_3 } from '../..';
import { BlockMetadataItem as BlockMetadataItem_3 } from '../..';
import { BlockName as BlockName_3 } from '../..';
import { BlockNameOrId as BlockNameOrId_3 } from '../..';
import { BlockRaycastResult as BlockRaycastResult_3 } from '../..';
import { CallbackName as CallbackName_3 } from '../..';
import { ClientOptions as ClientOptions_2 } from '.';
import { Coordinate as Coordinate_3 } from '../..';
import { CosmeticName as CosmeticName_3 } from '../..';
import { CosmeticType as CosmeticType_3 } from '../..';
import { CustomTextStyling as CustomTextStyling_3 } from '../..';
import { Direcrion as Direcrion_3 } from '../..';
import { EntityId as EntityId_3 } from '../..';
import { EntitySettings as EntitySettings_2 } from '.';
import { EntityType as EntityType_3 } from '../..';
import { ExplosionType as ExplosionType_3 } from '../..';
import { Health as Health_3 } from '../..';
import { InGameEffectName as InGameEffectName_3 } from '../..';
import { IngameIconName as IngameIconName_3 } from '../..';
import { Item as Item_3 } from '../..';
import { ItemAttributes as ItemAttributes_3 } from '../..';
import { ItemEntityId as ItemEntityId_3 } from '../..';
import { ItemId as ItemId_3 } from '../..';
import { ItemName as ItemName_3 } from '../..';
import { ItemObject as ItemObject_3 } from '../..';
import { LifeformBodyPart as LifeformBodyPart_3 } from '../..';
import { LifeformId as LifeformId_3 } from '../..';
import { LobbyType as LobbyType_3 } from '../..';
import { MeshEntityOpts as MeshEntityOpts_3 } from '../..';
import { MeshEntityPhysicsOpts as MeshEntityPhysicsOpts_3 } from '../..';
import { MeshType as MeshType_3 } from '../..';
import { MobAiState as MobAiState_3 } from '../..';
import { MobAiStateParams as MobAiStateParams_3 } from '../..';
import { MobHerdId as MobHerdId_3 } from '../..';
import { MobId as MobId_3 } from '../..';
import { MobSettings as MobSettings_2 } from '.';
import { MobSpawnOpts as MobSpawnOpts_3 } from '../..';
import { MobType as MobType_3 } from '../..';
import { NonBlockMetadataItem as NonBlockMetadataItem_3 } from '../..';
import { ParticlePresetOpts as ParticlePresetOpts_3 } from '../..';
import { Party as Party_3 } from '../..';
import { PlayerAttemptDamageOtherPlayerOpts as PlayerAttemptDamageOtherPlayerOpts_3 } from '../..';
import { PlayerDbId as PlayerDbId_3 } from '../..';
import { PlayerId as PlayerId_3 } from '../..';
import { PlayerPhysicsStateData as PlayerPhysicsStateData_3 } from '../..';
import { PlayerPose as PlayerPose_3 } from '../..';
import { PosSettings as PosSettings_3 } from '../..';
import { QTEClientParameters as QTEClientParameters_3 } from '../..';
import { QTERequestId as QTERequestId_3 } from '../..';
import { Radian as Radian_3 } from '../..';
import { RecipesForItem as RecipesForItem_3 } from '../..';
import { Rotation as Rotation_3 } from '../..';
import { ShieldAmount as ShieldAmount_3 } from '../..';
import { ShopCategoryConfig as ShopCategoryConfig_3 } from '../..';
import { ShopCategoryKey as ShopCategoryKey_3 } from '../..';
import { ShopItem as ShopItem_3 } from '../..';
import { ShopItemKey as ShopItemKey_3 } from '../..';
import { SoundName as SoundName_3 } from '../..';
import { StringColor as StringColor_3 } from '../..';
import { TempParticleSystemOpts as TempParticleSystemOpts_3 } from '../..';
import { TextStyle as TextStyle_3 } from '../..';
import { ThrowableItem as ThrowableItem_3 } from '../..';
import { TranslatedText as TranslatedText_3 } from '../..';
import { WalkThroughType as WalkThroughType_3 } from '../..';
import { WhoDidDamage as WhoDidDamage_3 } from '../..';
import { WhoKilled as WhoKilled_3 } from '../..';

export declare type AllBlockID = string;

declare type AllBlockID_2 = string;

export declare type AllBlockName = string;

declare type AllBlockName_2 = string;

declare type AllClientOptionUnion = ExportTypes | ExportTypes_2 | ExportTypes_3 | ExportTypes_4 | ExportTypes_5 | ExportTypes_6 | ExportTypes_7 | ExportTypes_8 | ExportTypes_9 | ExportTypes_10 | ExportTypes_11 | ExportTypes_12 | ExportTypes_13 | ExportTypes_14 | ExportTypes_15 | ExportTypes_16 | ExportTypes_17 | ExportTypes_18 | ExportTypes_19 | ExportTypes_20 | ExportTypes_21 | ExportTypes_22 | ExportTypes_23 | ExportTypes_24 | ExportTypes_25 | ExportTypes_26 | ExportTypes_27 | ExportTypes_28 | ExportTypes_29 | ExportTypes_30 | ExportTypes_31 | ExportTypes_32 | ExportTypes_33 | ExportTypes_34 | ExportTypes_35 | ExportTypes_36 | ExportTypes_37 | ExportTypes_38 | ExportTypes_39 | ExportTypes_40 | ExportTypes_41 | ExportTypes_42 | ExportTypes_43 | ExportTypes_44 | ExportTypes_45 | ExportTypes_46 | ExportTypes_47 | ExportTypes_48 | ExportTypes_49 | ExportTypes_50 | ExportTypes_51 | ExportTypes_52 | ExportTypes_53 | ExportTypes_54 | ExportTypes_55 | ExportTypes_56 | ExportTypes_57 | ExportTypes_58 | ExportTypes_59 | ExportTypes_60 | ExportTypes_61 | ExportTypes_62 | ExportTypes_63 | ExportTypes_64 | ExportTypes_65 | ExportTypes_66 | ExportTypes_67 | ExportTypes_68 | ExportTypes_69 | ExportTypes_70 | ExportTypes_71 | ExportTypes_72 | ExportTypes_73 | ExportTypes_74 | ExportTypes_75 | ExportTypes_76 | ExportTypes_77 | ExportTypes_78 | ExportTypes_79;

declare type AllEntitySettingUnion = ExportTypes_80 | ExportTypes_81 | ExportTypes_82 | ExportTypes_83 | ExportTypes_84 | ExportTypes_85 | ExportTypes_86 | ExportTypes_87 | ExportTypes_88 | ExportTypes_89 | ExportTypes_90 | ExportTypes_91 | ExportTypes_92;

/**
 * i give up union this :|
 */
export declare type AllItemId = string;

/**
 * i give up union this :|
 */
declare type AllItemId_2 = string;

export declare type AllItemName = "Wood Pickaxe" | "Stone Pickaxe" | "Iron Pickaxe" | "Gold Pickaxe" | "Diamond Pickaxe" | "Moonstone Pickaxe" | "Golem Pickaxe" | "Wood Axe" | "Stone Axe" | "Iron Axe" | "Gold Axe" | "Diamond Axe" | "Moonstone Axe" | "Artisan Axe" | "Wood Spade" | "Stone Spade" | "Iron Spade" | "Gold Spade" | "Diamond Spade" | "Wood Sword" | "Stone Sword" | "Iron Sword" | "Gold Sword" | "Diamond Sword" | "Knight Sword" | "Wood Hoe" | "Stone Hoe" | "Iron Hoe" | "Gold Hoe" | "Diamond Hoe" | "Wood Helmet" | "Iron Helmet" | "Gold Helmet" | "Diamond Helmet" | "Wood Chestplate" | "Iron Chestplate" | "Gold Chestplate" | "Diamond Chestplate" | "Fur Chestplate" | "Wood Leggings" | "Iron Leggings" | "Gold Leggings" | "Diamond Leggings" | "Wood Boots" | "Iron Boots" | "Gold Boots" | "Diamond Boots" | "Spiked Boots" | "Wood Gauntlets" | "Iron Gauntlets" | "Gold Gauntlets" | "Diamond Gauntlets" | "White Wood Helmet" | "White Wood Chestplate" | "White Wood Leggings" | "White Wood Boots" | "White Wood Gauntlets" | "Orange Wood Helmet" | "Orange Wood Chestplate" | "Orange Wood Leggings" | "Orange Wood Boots" | "Orange Wood Gauntlets" | "Magenta Wood Helmet" | "Magenta Wood Chestplate" | "Magenta Wood Leggings" | "Magenta Wood Boots" | "Magenta Wood Gauntlets" | "Light Blue Wood Helmet" | "Light Blue Wood Chestplate" | "Light Blue Wood Leggings" | "Light Blue Wood Boots" | "Light Blue Wood Gauntlets" | "Yellow Wood Helmet" | "Yellow Wood Chestplate" | "Yellow Wood Leggings" | "Yellow Wood Boots" | "Yellow Wood Gauntlets" | "Lime Wood Helmet" | "Lime Wood Chestplate" | "Lime Wood Leggings" | "Lime Wood Boots" | "Lime Wood Gauntlets" | "Pink Wood Helmet" | "Pink Wood Chestplate" | "Pink Wood Leggings" | "Pink Wood Boots" | "Pink Wood Gauntlets" | "Gray Wood Helmet" | "Gray Wood Chestplate" | "Gray Wood Leggings" | "Gray Wood Boots" | "Gray Wood Gauntlets" | "Light Gray Wood Helmet" | "Light Gray Wood Chestplate" | "Light Gray Wood Leggings" | "Light Gray Wood Boots" | "Light Gray Wood Gauntlets" | "Cyan Wood Helmet" | "Cyan Wood Chestplate" | "Cyan Wood Leggings" | "Cyan Wood Boots" | "Cyan Wood Gauntlets" | "Purple Wood Helmet" | "Purple Wood Chestplate" | "Purple Wood Leggings" | "Purple Wood Boots" | "Purple Wood Gauntlets" | "Blue Wood Helmet" | "Blue Wood Chestplate" | "Blue Wood Leggings" | "Blue Wood Boots" | "Blue Wood Gauntlets" | "Brown Wood Helmet" | "Brown Wood Chestplate" | "Brown Wood Leggings" | "Brown Wood Boots" | "Brown Wood Gauntlets" | "Green Wood Helmet" | "Green Wood Chestplate" | "Green Wood Leggings" | "Green Wood Boots" | "Green Wood Gauntlets" | "Red Wood Helmet" | "Red Wood Chestplate" | "Red Wood Leggings" | "Red Wood Boots" | "Red Wood Gauntlets" | "Black Wood Helmet" | "Black Wood Chestplate" | "Black Wood Leggings" | "Black Wood Boots" | "Black Wood Gauntlets" | "Shears" | "Artisan Shears" | "Stick" | "Coal" | "Raw Iron" | "Iron Bar" | "Iron Fragment" | "Raw Gold" | "Gold Bar" | "Gold Fragment" | "Diamond" | "Diamond Fragment" | "Moonstone" | "Moonstone Fragment" | "Bowl" | "Partially Full Bowl of Cranberries" | "Half Full Bowl of Cranberries" | "Nearly Full Bowl of Cranberries" | "Bowl of Cranberries" | "Mushroom Soup" | "Cotton" | "Bucket" | "Water Bucket" | "Lava Bucket" | "Boat" | "INTERNAL_MESH_Boat" | "Obsidian Boat" | "INTERNAL_MESH_Obsidian Boat" | "Wood Hang Glider" | "INTERNAL_MESH_Wood Hang Glider" | "Iron Hang Glider" | "INTERNAL_MESH_Iron Hang Glider" | "Gold Hang Glider" | "INTERNAL_MESH_Gold Hang Glider" | "Diamond Hang Glider" | "INTERNAL_MESH_Diamond Hang Glider" | "INTERNAL_MESH_Kart" | "Snowball" | "Snowball Launcher" | "Pebble" | "Reinforced Pebble" | "Ball" | "Reinforced Ball" | "Moonstone Orb" | "Fireball" | "Bouncy Bomb" | "RPG" | "Obby RPG" | "Super RPG" | "Grenade Launcher" | "Iceball" | "Wood Bow" | "Wood Bow|meta|charging2" | "Wood Bow|meta|charging3" | "Wood Bow|meta|charging4" | "Stone Bow" | "Stone Bow|meta|charging2" | "Stone Bow|meta|charging3" | "Stone Bow|meta|charging4" | "Iron Bow" | "Iron Bow|meta|charging2" | "Iron Bow|meta|charging3" | "Iron Bow|meta|charging4" | "Gold Bow" | "Gold Bow|meta|charging2" | "Gold Bow|meta|charging3" | "Gold Bow|meta|charging4" | "Diamond Bow" | "Diamond Bow|meta|charging2" | "Diamond Bow|meta|charging3" | "Diamond Bow|meta|charging4" | "Wood Crossbow" | "Wood Crossbow|meta|charging2" | "Wood Crossbow|meta|charging3" | "Wood Crossbow|meta|charging4" | "Stone Crossbow" | "Stone Crossbow|meta|charging2" | "Stone Crossbow|meta|charging3" | "Stone Crossbow|meta|charging4" | "Iron Crossbow" | "Iron Crossbow|meta|charging2" | "Iron Crossbow|meta|charging3" | "Iron Crossbow|meta|charging4" | "Gold Crossbow" | "Gold Crossbow|meta|charging2" | "Gold Crossbow|meta|charging3" | "Gold Crossbow|meta|charging4" | "Diamond Crossbow" | "Diamond Crossbow|meta|charging2" | "Diamond Crossbow|meta|charging3" | "Diamond Crossbow|meta|charging4" | "Wood Crossbow Charged" | "Stone Crossbow Charged" | "Iron Crossbow Charged" | "Gold Crossbow Charged" | "Diamond Crossbow Charged" | "Arrow" | "Compass" | "Compass|meta|dir2" | "Compass|meta|dir3" | "Compass|meta|dir4" | "Compass|meta|dir5" | "Compass|meta|dir6" | "Compass|meta|dir7" | "Compass|meta|dir8" | "Compass|meta|dir9" | "Compass|meta|dir10" | "Compass|meta|dir11" | "Compass|meta|dir12" | "Bread" | "Bowl of Rice" | "Apple" | "Plum" | "Coconut" | "Cracked Coconut" | "Pear" | "Cherry" | "Banana" | "Watermelon Slice" | "Gold Watermelon Slice" | "Melon Slice" | "Gold Melon Slice" | "Pumpkin Pie" | "Corn" | "Cornbread" | "Chili Pepper" | "Mango" | "Carrot" | "Raw Potato" | "Baked Potato" | "Beetroot" | "Raw Porkchop" | "Cooked Porkchop" | "Raw Beef" | "Steak" | "Raw Mutton" | "Cooked Mutton" | "Raw Venison" | "Cooked Venison" | "Rotten Flesh" | "Rotten Brain" | "Bone" | "Bone Meal" | "Leather" | "Saddle" | "Spirit Saddle" | "Fur" | "Golem Eye" | "Knight Heart" | "Name Tag" | "Book" | "Empty Bottle" | "Water Bottle" | "Slowness Potion" | "Slowness Potion II" | "Splash Slowness Potion" | "Splash Slowness Potion II" | "Arrow of Slowness" | "Poison Potion" | "Poison Potion II" | "Splash Poison Potion" | "Splash Poison Potion II" | "Arrow of Poison" | "Weakness Potion" | "Weakness Potion II" | "Splash Weakness Potion" | "Splash Weakness Potion II" | "Arrow of Weakness" | "Instant Damage Potion" | "Instant Damage Potion II" | "Splash Instant Damage Potion" | "Splash Instant Damage Potion II" | "Arrow of Instant Damage" | "Milk Potion" | "Splash Milk Potion" | "Arrow of Milk" | "Speed Potion" | "Speed Potion II" | "Splash Speed Potion" | "Splash Speed Potion II" | "Arrow of Speed" | "Defense Potion" | "Defense Potion II" | "Splash Defense Potion" | "Splash Defense Potion II" | "Arrow of Defense" | "Strength Potion" | "Strength Potion II" | "Splash Strength Potion" | "Splash Strength Potion II" | "Arrow of Strength" | "Invisibility Potion" | "Splash Invisibility Potion" | "Arrow of Invisibility" | "Jump Potion" | "Jump Potion II" | "Splash Jump Potion" | "Splash Jump Potion II" | "Arrow of Jumping" | "Knockback Potion" | "Splash Knockback Potion" | "Splash Knockback Potion II" | "Arrow of Knockback" | "Regeneration Potion" | "Regeneration Potion II" | "Splash Regeneration Potion" | "Splash Regeneration Potion II" | "Arrow of Regeneration" | "Instant Healing Potion" | "Instant Healing Potion II" | "Splash Instant Healing Potion" | "Splash Instant Healing Potion II" | "Arrow of Instant Healing" | "Haste Potion" | "Haste Potion II" | "Splash Haste Potion" | "Splash Haste Potion II" | "Arrow of Haste" | "Shield Potion" | "Shield Potion II" | "Splash Shield Potion" | "Splash Shield Potion II" | "Arrow of Shield" | "Double Jump Potion" | "Splash Double Jump Potion" | "Arrow of Double Jump" | "Heat Resistance Potion" | "Splash Heat Resistance Potion" | "Arrow of Heat Resistance" | "X-Ray Vision Potion" | "Splash X-Ray Vision Potion" | "Arrow of X-Ray Vision" | "Mining Yield Potion" | "Mining Yield Potion II" | "Splash Mining Yield Potion" | "Splash Mining Yield Potion II" | "Arrow of Mining Yield" | "Brain Rot Potion" | "Splash Brain Rot Potion" | "Arrow of Brain Rot" | "Chaos Potion" | "Ammo" | "AK-47" | "AK-47|RequiresAmmo" | "M16" | "M16|RequiresAmmo" | "MP40" | "MP40|RequiresAmmo" | "TAR-21" | "TAR-21|RequiresAmmo" | "M1911" | "M1911|RequiresAmmo" | "One Shot Pistol" | "One Shot Pistol|RequiresAmmo" | "Double Barrel" | "Double Barrel|RequiresAmmo" | "AWP" | "AWP|RequiresAmmo" | "Minigun" | "Minigun|RequiresAmmo" | "Gold Coin" | "Updraft" | "Snowdash" | "Floor Creator" | "Moonstone Remote Explosive" | "Moonstone Remote" | "Ice Bridge" | "Yellow Balloon" | "White Balloon" | "Red Balloon" | "Purple Balloon" | "Pink Balloon" | "Orange Balloon" | "Magenta Balloon" | "Lime Balloon" | "Light Gray Balloon" | "Light Blue Balloon" | "Green Balloon" | "Gray Balloon" | "Cyan Balloon" | "Brown Balloon" | "Blue Balloon" | "Black Balloon" | "INTERNAL_MESH_Yellow Balloon" | "INTERNAL_MESH_White Balloon" | "INTERNAL_MESH_Red Balloon" | "INTERNAL_MESH_Purple Balloon" | "INTERNAL_MESH_Pink Balloon" | "INTERNAL_MESH_Orange Balloon" | "INTERNAL_MESH_Magenta Balloon" | "INTERNAL_MESH_Lime Balloon" | "INTERNAL_MESH_Light Gray Balloon" | "INTERNAL_MESH_Light Blue Balloon" | "INTERNAL_MESH_Green Balloon" | "INTERNAL_MESH_Gray Balloon" | "INTERNAL_MESH_Cyan Balloon" | "INTERNAL_MESH_Brown Balloon" | "INTERNAL_MESH_Blue Balloon" | "INTERNAL_MESH_Black Balloon" | "Yellow Popup Tower" | "White Popup Tower" | "Red Popup Tower" | "Purple Popup Tower" | "Pink Popup Tower" | "Orange Popup Tower" | "Magenta Popup Tower" | "Lime Popup Tower" | "Light Gray Popup Tower" | "Light Blue Popup Tower" | "Green Popup Tower" | "Gray Popup Tower" | "Cyan Popup Tower" | "Brown Popup Tower" | "Blue Popup Tower" | "Black Popup Tower" | "Yellow Paintball Gun" | "White Paintball Gun" | "Red Paintball Gun" | "Purple Paintball Gun" | "Pink Paintball Gun" | "Orange Paintball Gun" | "Magenta Paintball Gun" | "Lime Paintball Gun" | "Light Gray Paintball Gun" | "Light Blue Paintball Gun" | "Green Paintball Gun" | "Gray Paintball Gun" | "Cyan Paintball Gun" | "Brown Paintball Gun" | "Blue Paintball Gun" | "Black Paintball Gun" | "Yellow Paintball" | "White Paintball" | "Red Paintball" | "Purple Paintball" | "Pink Paintball" | "Orange Paintball" | "Magenta Paintball" | "Lime Paintball" | "Light Gray Paintball" | "Light Blue Paintball" | "Green Paintball" | "Gray Paintball" | "Cyan Paintball" | "Brown Paintball" | "Blue Paintball" | "Black Paintball" | "Yellow Heavy Paintball Gun" | "White Heavy Paintball Gun" | "Red Heavy Paintball Gun" | "Purple Heavy Paintball Gun" | "Pink Heavy Paintball Gun" | "Orange Heavy Paintball Gun" | "Magenta Heavy Paintball Gun" | "Lime Heavy Paintball Gun" | "Light Gray Heavy Paintball Gun" | "Light Blue Heavy Paintball Gun" | "Green Heavy Paintball Gun" | "Gray Heavy Paintball Gun" | "Cyan Heavy Paintball Gun" | "Brown Heavy Paintball Gun" | "Blue Heavy Paintball Gun" | "Black Heavy Paintball Gun" | "Yellow Paintball Explosive Item" | "White Paintball Explosive Item" | "Red Paintball Explosive Item" | "Purple Paintball Explosive Item" | "Pink Paintball Explosive Item" | "Orange Paintball Explosive Item" | "Magenta Paintball Explosive Item" | "Lime Paintball Explosive Item" | "Light Gray Paintball Explosive Item" | "Light Blue Paintball Explosive Item" | "Green Paintball Explosive Item" | "Gray Paintball Explosive Item" | "Cyan Paintball Explosive Item" | "Brown Paintball Explosive Item" | "Blue Paintball Explosive Item" | "Black Paintball Explosive Item" | "Yellow Sticky Paintball Explosive Item" | "White Sticky Paintball Explosive Item" | "Red Sticky Paintball Explosive Item" | "Purple Sticky Paintball Explosive Item" | "Pink Sticky Paintball Explosive Item" | "Orange Sticky Paintball Explosive Item" | "Magenta Sticky Paintball Explosive Item" | "Lime Sticky Paintball Explosive Item" | "Light Gray Sticky Paintball Explosive Item" | "Light Blue Sticky Paintball Explosive Item" | "Green Sticky Paintball Explosive Item" | "Gray Sticky Paintball Explosive Item" | "Cyan Sticky Paintball Explosive Item" | "Brown Sticky Paintball Explosive Item" | "Blue Sticky Paintball Explosive Item" | "Black Sticky Paintball Explosive Item" | "Yellow Seeking Paintball Explosive Item" | "White Seeking Paintball Explosive Item" | "Red Seeking Paintball Explosive Item" | "Purple Seeking Paintball Explosive Item" | "Pink Seeking Paintball Explosive Item" | "Orange Seeking Paintball Explosive Item" | "Magenta Seeking Paintball Explosive Item" | "Lime Seeking Paintball Explosive Item" | "Light Gray Seeking Paintball Explosive Item" | "Light Blue Seeking Paintball Explosive Item" | "Green Seeking Paintball Explosive Item" | "Gray Seeking Paintball Explosive Item" | "Cyan Seeking Paintball Explosive Item" | "Brown Seeking Paintball Explosive Item" | "Blue Seeking Paintball Explosive Item" | "Black Seeking Paintball Explosive Item" | "Yellow Quick Paintball Explosive Item" | "White Quick Paintball Explosive Item" | "Red Quick Paintball Explosive Item" | "Purple Quick Paintball Explosive Item" | "Pink Quick Paintball Explosive Item" | "Orange Quick Paintball Explosive Item" | "Magenta Quick Paintball Explosive Item" | "Lime Quick Paintball Explosive Item" | "Light Gray Quick Paintball Explosive Item" | "Light Blue Quick Paintball Explosive Item" | "Green Quick Paintball Explosive Item" | "Gray Quick Paintball Explosive Item" | "Cyan Quick Paintball Explosive Item" | "Brown Quick Paintball Explosive Item" | "Blue Quick Paintball Explosive Item" | "Black Quick Paintball Explosive Item" | "Yellow Paint Bow" | "Yellow Paint Bow|meta|charging2" | "Yellow Paint Bow|meta|charging3" | "Yellow Paint Bow|meta|charging4" | "White Paint Bow" | "White Paint Bow|meta|charging2" | "White Paint Bow|meta|charging3" | "White Paint Bow|meta|charging4" | "Red Paint Bow" | "Red Paint Bow|meta|charging2" | "Red Paint Bow|meta|charging3" | "Red Paint Bow|meta|charging4" | "Purple Paint Bow" | "Purple Paint Bow|meta|charging2" | "Purple Paint Bow|meta|charging3" | "Purple Paint Bow|meta|charging4" | "Pink Paint Bow" | "Pink Paint Bow|meta|charging2" | "Pink Paint Bow|meta|charging3" | "Pink Paint Bow|meta|charging4" | "Orange Paint Bow" | "Orange Paint Bow|meta|charging2" | "Orange Paint Bow|meta|charging3" | "Orange Paint Bow|meta|charging4" | "Magenta Paint Bow" | "Magenta Paint Bow|meta|charging2" | "Magenta Paint Bow|meta|charging3" | "Magenta Paint Bow|meta|charging4" | "Lime Paint Bow" | "Lime Paint Bow|meta|charging2" | "Lime Paint Bow|meta|charging3" | "Lime Paint Bow|meta|charging4" | "Light Gray Paint Bow" | "Light Gray Paint Bow|meta|charging2" | "Light Gray Paint Bow|meta|charging3" | "Light Gray Paint Bow|meta|charging4" | "Light Blue Paint Bow" | "Light Blue Paint Bow|meta|charging2" | "Light Blue Paint Bow|meta|charging3" | "Light Blue Paint Bow|meta|charging4" | "Green Paint Bow" | "Green Paint Bow|meta|charging2" | "Green Paint Bow|meta|charging3" | "Green Paint Bow|meta|charging4" | "Gray Paint Bow" | "Gray Paint Bow|meta|charging2" | "Gray Paint Bow|meta|charging3" | "Gray Paint Bow|meta|charging4" | "Cyan Paint Bow" | "Cyan Paint Bow|meta|charging2" | "Cyan Paint Bow|meta|charging3" | "Cyan Paint Bow|meta|charging4" | "Brown Paint Bow" | "Brown Paint Bow|meta|charging2" | "Brown Paint Bow|meta|charging3" | "Brown Paint Bow|meta|charging4" | "Blue Paint Bow" | "Blue Paint Bow|meta|charging2" | "Blue Paint Bow|meta|charging3" | "Blue Paint Bow|meta|charging4" | "Black Paint Bow" | "Black Paint Bow|meta|charging2" | "Black Paint Bow|meta|charging3" | "Black Paint Bow|meta|charging4" | "Pig Spawn Orb" | "Cow Spawn Orb" | "Sheep Spawn Orb" | "Horse Spawn Orb" | "Deer Spawn Orb" | "Wolf Spawn Orb" | "Wildcat Spawn Orb" | "Spirit Golem Spawn Orb" | "Spirit Wolf Spawn Orb" | "Spirit Bear Spawn Orb" | "Spirit Stag Spawn Orb" | "Spirit Gorilla Spawn Orb" | "Bear Spawn Orb" | "Stag Spawn Orb" | "Gold Watermelon Stag Spawn Orb" | "Gorilla Spawn Orb" | "Cave Golem Spawn Orb" | "Draugr Zombie Spawn Orb" | "Draugr Skeleton Spawn Orb" | "Frost Golem Spawn Orb" | "Frost Zombie Spawn Orb" | "Frost Skeleton Spawn Orb" | "Draugr Knight Spawn Orb" | "Draugr Huntress Spawn Orb" | "Magma Golem Spawn Orb" | "Draugr Warper Spawn Orb" | "Frost Wraith Spawn Orb" | "Draugr Reaver Spawn Orb" | "Mob Catcher" | "Caught Mob Pig Default" | "Caught Mob Cow Default" | "Caught Mob Cow Cream" | "Caught Mob Sheep Default" | "Caught Mob Sheep Black" | "Caught Mob Sheep Red" | "Caught Mob Sheep Orange" | "Caught Mob Sheep Pink" | "Caught Mob Sheep Purple" | "Caught Mob Sheep Yellow" | "Caught Mob Sheep Blue" | "Caught Mob Sheep Brown" | "Caught Mob Sheep Cyan" | "Caught Mob Sheep Gray" | "Caught Mob Sheep Green" | "Caught Mob Sheep Lightblue" | "Caught Mob Sheep Lightgray" | "Caught Mob Sheep Lime" | "Caught Mob Sheep Magenta" | "Caught Mob Horse Default" | "Caught Mob Horse Black" | "Caught Mob Horse Brown" | "Caught Mob Horse Cream" | "Caught Mob Deer Default" | "Caught Mob Wolf Default" | "Caught Mob Wolf White" | "Caught Mob Wolf Brown" | "Caught Mob Wolf Grey" | "Caught Mob Wolf Spectral" | "Caught Mob Wildcat Default" | "Caught Mob Wildcat Tabby" | "Caught Mob Wildcat Grey" | "Caught Mob Wildcat Black" | "Caught Mob Wildcat Calico" | "Caught Mob Wildcat Siamese" | "Caught Mob Wildcat Leopard" | "Caught Mob Spirit_Golem Default" | "Caught Mob Spirit_Wolf Default" | "Caught Mob Spirit_Bear Default" | "Caught Mob Spirit_Stag Default" | "Caught Mob Spirit_Gorilla Default" | "Caught Mob Bear Default" | "Caught Mob Stag Default" | "Caught Mob Gold_Watermelon_Stag Default" | "Caught Mob Gorilla Default" | "Caught Mob Cave_Golem Default" | "Caught Mob Cave_Golem Iron" | "Caught Mob Draugr_Zombie Default" | "Caught Mob Draugr_Zombie Longhairchestplate" | "Caught Mob Draugr_Zombie Longhairclothed" | "Caught Mob Draugr_Zombie Shorthairclothed" | "Caught Mob Draugr_Skeleton Default" | "Caught Mob Frost_Golem Default" | "Caught Mob Frost_Zombie Default" | "Caught Mob Frost_Zombie Longhairchestplate" | "Caught Mob Frost_Zombie Shorthairclothed" | "Caught Mob Frost_Skeleton Default" | "Caught Mob Draugr_Knight Default" | "Caught Mob Draugr_Huntress Default" | "Caught Mob Draugr_Huntress Chainmail" | "Caught Mob Magma_Golem Default" | "Caught Mob Draugr_Warper Default" | "Caught Mob Frost_Wraith Default" | "Caught Mob Draugr_Reaver Default" | "Caught Mob NPC Default" | "Caught Mob NPC Emma" | "Caught Mob NPC Leo" | "Caught Mob NPC Isabel" | "Caught Mob NPC Sanjay" | "Caught Mob NPC Imara" | "Caught Mob NPC Enoch" | "Caught Mob NPC Sara" | "Caught Mob NPC Carmen" | "Timed Spike Bomb" | "Timed Spike Bomb|meta|charging2" | "Timed Spike Bomb|meta|charging3" | "Timed Spike Bomb|meta|charging4" | "Toxin Ball" | "Aura XP Fragment" | "Aura XP Orb" | "Aura XP Potion" | "Aura XP Potion II" | "Splash Aura XP Potion" | "Splash Aura XP Potion II" | "Arrow of Aura XP" | "Firecracker" | "Rainbow Firecracker" | "Yellow Firecracker" | "White Firecracker" | "Red Firecracker" | "Purple Firecracker" | "Pink Firecracker" | "Orange Firecracker" | "Magenta Firecracker" | "Lime Firecracker" | "Light Gray Firecracker" | "Light Blue Firecracker" | "Green Firecracker" | "Gray Firecracker" | "Cyan Firecracker" | "Brown Firecracker" | "Blue Firecracker" | "Black Firecracker" | "Firecracker Pebble" | "Rainbow Firecracker Pebble" | "Yellow Firecracker Pebble" | "White Firecracker Pebble" | "Red Firecracker Pebble" | "Purple Firecracker Pebble" | "Pink Firecracker Pebble" | "Orange Firecracker Pebble" | "Magenta Firecracker Pebble" | "Lime Firecracker Pebble" | "Light Gray Firecracker Pebble" | "Light Blue Firecracker Pebble" | "Green Firecracker Pebble" | "Gray Firecracker Pebble" | "Cyan Firecracker Pebble" | "Brown Firecracker Pebble" | "Blue Firecracker Pebble" | "Black Firecracker Pebble" | "WorldBuilder Wand" | "Red Strongfish" | "Green Strongfish" | "Moon Strongfish" | "Wheatfish" | "Moonfish" | "Bombfish" | "Boomerang Fish" | "Root Flounder" | "Abyss Carp" | "Boulder Bass" | "Barnaclejaw" | "Crystalized Wheatfish" | "Darter" | "Shadow Darter" | "Electric Eel" | "Grass Snapper" | "Jungle Spinefish" | "Mangler Catfish" | "Mossback Arapaima" | "Sandbelly Piranha" | "Shadeback Ray" | "Mudbelly Tilapia" | "Mireback Carp" | "Rotslab Eel" | "Aether Minnow" | "Murkborne Ray" | "Eldertide Leviathan" | "Oarfish" | "Alpha Moon Strongfish" | "Bamboo Catfish" | "Blackwater Bream" | "Blackwater Leviathan" | "Boned Sturgeon" | "Bull Shark" | "Channel Sawfish" | "Coastal Mullet" | "Coelacanth" | "Driftwood Catfish" | "Eagle Ray" | "Giant Grouper" | "Giant Moray" | "Giant Stingray" | "Golden Mahseer" | "Greenfin Loach" | "Mangrove Herring" | "Moonlit Boomerang Fish" | "Moonstone Pupfish" | "Mudline Perch" | "Murk Stingray" | "Needlefish" | "Nomai Moray" | "Pearlescent Moonfish" | "Rainbow Guppy" | "Red Snapper" | "Reedglass Minnow" | "Reef Sardine" | "Root Perch" | "Rust Scad" | "Seahorse" | "Snakehead" | "Spined Stickleback" | "Stone Grouper" | "Sumpback Carp" | "Sunset Minnow" | "Tarpon" | "Threadfin Bream" | "Tri-Pointed Needlefish" | "Game Dev Fish" | "Armoured Searobin" | "Ash Lionfish" | "Barefrost Toothfish" | "Blackfin Icefish" | "Basalt Pipefish" | "Brimstone Spikefish" | "Cinder Leviathan" | "Crowned Flame Angelfish" | "Deepwater Lanternfish" | "Driftice Capelin" | "Ember Chub" | "Embermark Wrasse" | "Eviota Vader" | "Frost Herring" | "Frost Wolf Eel" | "Frostpaint Notie" | "Frozen Grenadier" | "Giant Trevally" | "Glacial Lanternfish" | "Glacial Silverfish" | "Heatwarp Flounder" | "Hatchetfish" | "Ice Spined Notothenia" | "Iceshelf Skate" | "Icy Sculpin" | "Lavaflow Trout" | "Lavawake Slopefish" | "Magma Sardinella" | "Magma Trout" | "Marbled Moray Cod" | "Molten Lotella Cod" | "Northern Wolffish" | "Paleice Rockcod" | "Permafrost Halibut" | "Pithead" | "Polarflash Electron" | "Pyroclast Eel" | "Pyroscale Grouper" | "Red Pyreside" | "Rimesnouted Lancetfish" | "Scorched Sunfish" | "Scored Dace" | "Silver Dragonfish" | "Snow Haddock" | "Volcanic Catfish" | "Volcanic Semperi" | "Rusty Rod" | "Lucky Rod" | "Sturdy Rod" | "Jungle Rod" | "Draugr Rod" | "Cursed Rod" | "Tangle Resistant Rod" | "Speed Rod" | "Carbon Rod" | "Deep Sea Rod" | "Master Rod" | "Obsidian Rod" | "Molten Magma Rod" | "Frost Rod" | "Black Ice Rod" | "Mythic Rod" | "Acorn" | "Acorn Jelly" | "Cow's Milk" | "Cheese" | "Caught Fish" | "Fish Fillet" | "Meaty Bone" | "Blinding Pebble" | "Sheep's Milk" | "Yoghurt Pot" | "Truffle" | "Truffle Oil" | "Oats" | "Porridge" | "Poop" | "Fertiliser" | "Medkit" | "Wood Spear" | "Stone Spear" | "Iron Spear" | "Gold Spear" | "Diamond Spear" | "Moonstone Spear" | "Wood Dagger" | "Stone Dagger" | "Iron Dagger" | "Gold Dagger" | "Diamond Dagger" | "Moonstone Dagger" | "Wood Boomerang" | "Stone Boomerang" | "Iron Boomerang" | "Gold Boomerang" | "Diamond Boomerang" | "Moonstone Boomerang" | "Wood Club" | "Stone Club" | "Iron Club" | "Gold Club" | "Diamond Club" | "Moonstone Club" | "Wood Mace" | "Stone Mace" | "Iron Mace" | "Gold Mace" | "Diamond Mace" | "Moonstone Mace" | "Wood Whip" | "Stone Whip" | "Iron Whip" | "Gold Whip" | "Diamond Whip" | "Moonstone Whip" | "Beef Stew" | "Chicken" | "Coleslaw" | "Egg" | "Fish N Chips" | "Fried Rice" | "Lettuce" | "Omelette" | "Onion" | "Red Cabbage" | "Roast Dinner" | "Salad" | "Stuffed Pepper" | "Sushi" | "Tomato" | "Vegetable Soup";

declare type AllItemName_2 =
| "Wood Pickaxe"
| "Stone Pickaxe"
| "Iron Pickaxe"
| "Gold Pickaxe"
| "Diamond Pickaxe"
| "Moonstone Pickaxe"
| "Golem Pickaxe"
| "Wood Axe"
| "Stone Axe"
| "Iron Axe"
| "Gold Axe"
| "Diamond Axe"
| "Moonstone Axe"
| "Artisan Axe"
| "Wood Spade"
| "Stone Spade"
| "Iron Spade"
| "Gold Spade"
| "Diamond Spade"
| "Wood Sword"
| "Stone Sword"
| "Iron Sword"
| "Gold Sword"
| "Diamond Sword"
| "Knight Sword"
| "Wood Hoe"
| "Stone Hoe"
| "Iron Hoe"
| "Gold Hoe"
| "Diamond Hoe"
| "Wood Helmet"
| "Iron Helmet"
| "Gold Helmet"
| "Diamond Helmet"
| "Wood Chestplate"
| "Iron Chestplate"
| "Gold Chestplate"
| "Diamond Chestplate"
| "Fur Chestplate"
| "Wood Leggings"
| "Iron Leggings"
| "Gold Leggings"
| "Diamond Leggings"
| "Wood Boots"
| "Iron Boots"
| "Gold Boots"
| "Diamond Boots"
| "Spiked Boots"
| "Wood Gauntlets"
| "Iron Gauntlets"
| "Gold Gauntlets"
| "Diamond Gauntlets"
| "White Wood Helmet"
| "White Wood Chestplate"
| "White Wood Leggings"
| "White Wood Boots"
| "White Wood Gauntlets"
| "Orange Wood Helmet"
| "Orange Wood Chestplate"
| "Orange Wood Leggings"
| "Orange Wood Boots"
| "Orange Wood Gauntlets"
| "Magenta Wood Helmet"
| "Magenta Wood Chestplate"
| "Magenta Wood Leggings"
| "Magenta Wood Boots"
| "Magenta Wood Gauntlets"
| "Light Blue Wood Helmet"
| "Light Blue Wood Chestplate"
| "Light Blue Wood Leggings"
| "Light Blue Wood Boots"
| "Light Blue Wood Gauntlets"
| "Yellow Wood Helmet"
| "Yellow Wood Chestplate"
| "Yellow Wood Leggings"
| "Yellow Wood Boots"
| "Yellow Wood Gauntlets"
| "Lime Wood Helmet"
| "Lime Wood Chestplate"
| "Lime Wood Leggings"
| "Lime Wood Boots"
| "Lime Wood Gauntlets"
| "Pink Wood Helmet"
| "Pink Wood Chestplate"
| "Pink Wood Leggings"
| "Pink Wood Boots"
| "Pink Wood Gauntlets"
| "Gray Wood Helmet"
| "Gray Wood Chestplate"
| "Gray Wood Leggings"
| "Gray Wood Boots"
| "Gray Wood Gauntlets"
| "Light Gray Wood Helmet"
| "Light Gray Wood Chestplate"
| "Light Gray Wood Leggings"
| "Light Gray Wood Boots"
| "Light Gray Wood Gauntlets"
| "Cyan Wood Helmet"
| "Cyan Wood Chestplate"
| "Cyan Wood Leggings"
| "Cyan Wood Boots"
| "Cyan Wood Gauntlets"
| "Purple Wood Helmet"
| "Purple Wood Chestplate"
| "Purple Wood Leggings"
| "Purple Wood Boots"
| "Purple Wood Gauntlets"
| "Blue Wood Helmet"
| "Blue Wood Chestplate"
| "Blue Wood Leggings"
| "Blue Wood Boots"
| "Blue Wood Gauntlets"
| "Brown Wood Helmet"
| "Brown Wood Chestplate"
| "Brown Wood Leggings"
| "Brown Wood Boots"
| "Brown Wood Gauntlets"
| "Green Wood Helmet"
| "Green Wood Chestplate"
| "Green Wood Leggings"
| "Green Wood Boots"
| "Green Wood Gauntlets"
| "Red Wood Helmet"
| "Red Wood Chestplate"
| "Red Wood Leggings"
| "Red Wood Boots"
| "Red Wood Gauntlets"
| "Black Wood Helmet"
| "Black Wood Chestplate"
| "Black Wood Leggings"
| "Black Wood Boots"
| "Black Wood Gauntlets"
| "Shears"
| "Artisan Shears"
| "Stick"
| "Coal"
| "Raw Iron"
| "Iron Bar"
| "Iron Fragment"
| "Raw Gold"
| "Gold Bar"
| "Gold Fragment"
| "Diamond"
| "Diamond Fragment"
| "Moonstone"
| "Moonstone Fragment"
| "Bowl"
| "Partially Full Bowl of Cranberries"
| "Half Full Bowl of Cranberries"
| "Nearly Full Bowl of Cranberries"
| "Bowl of Cranberries"
| "Mushroom Soup"
| "Cotton"
| "Bucket"
| "Water Bucket"
| "Lava Bucket"
| "Boat"
| "INTERNAL_MESH_Boat"
| "Obsidian Boat"
| "INTERNAL_MESH_Obsidian Boat"
| "Wood Hang Glider"
| "INTERNAL_MESH_Wood Hang Glider"
| "Iron Hang Glider"
| "INTERNAL_MESH_Iron Hang Glider"
| "Gold Hang Glider"
| "INTERNAL_MESH_Gold Hang Glider"
| "Diamond Hang Glider"
| "INTERNAL_MESH_Diamond Hang Glider"
| "INTERNAL_MESH_Kart"
| "Snowball"
| "Snowball Launcher"
| "Pebble"
| "Reinforced Pebble"
| "Ball"
| "Reinforced Ball"
| "Moonstone Orb"
| "Fireball"
| "Bouncy Bomb"
| "RPG"
| "Obby RPG"
| "Super RPG"
| "Grenade Launcher"
| "Iceball"
| "Wood Bow"
| "Wood Bow|meta|charging2"
| "Wood Bow|meta|charging3"
| "Wood Bow|meta|charging4"
| "Stone Bow"
| "Stone Bow|meta|charging2"
| "Stone Bow|meta|charging3"
| "Stone Bow|meta|charging4"
| "Iron Bow"
| "Iron Bow|meta|charging2"
| "Iron Bow|meta|charging3"
| "Iron Bow|meta|charging4"
| "Gold Bow"
| "Gold Bow|meta|charging2"
| "Gold Bow|meta|charging3"
| "Gold Bow|meta|charging4"
| "Diamond Bow"
| "Diamond Bow|meta|charging2"
| "Diamond Bow|meta|charging3"
| "Diamond Bow|meta|charging4"
| "Wood Crossbow"
| "Wood Crossbow|meta|charging2"
| "Wood Crossbow|meta|charging3"
| "Wood Crossbow|meta|charging4"
| "Stone Crossbow"
| "Stone Crossbow|meta|charging2"
| "Stone Crossbow|meta|charging3"
| "Stone Crossbow|meta|charging4"
| "Iron Crossbow"
| "Iron Crossbow|meta|charging2"
| "Iron Crossbow|meta|charging3"
| "Iron Crossbow|meta|charging4"
| "Gold Crossbow"
| "Gold Crossbow|meta|charging2"
| "Gold Crossbow|meta|charging3"
| "Gold Crossbow|meta|charging4"
| "Diamond Crossbow"
| "Diamond Crossbow|meta|charging2"
| "Diamond Crossbow|meta|charging3"
| "Diamond Crossbow|meta|charging4"
| "Wood Crossbow Charged"
| "Stone Crossbow Charged"
| "Iron Crossbow Charged"
| "Gold Crossbow Charged"
| "Diamond Crossbow Charged"
| "Arrow"
| "Compass"
| "Compass|meta|dir2"
| "Compass|meta|dir3"
| "Compass|meta|dir4"
| "Compass|meta|dir5"
| "Compass|meta|dir6"
| "Compass|meta|dir7"
| "Compass|meta|dir8"
| "Compass|meta|dir9"
| "Compass|meta|dir10"
| "Compass|meta|dir11"
| "Compass|meta|dir12"
| "Bread"
| "Bowl of Rice"
| "Apple"
| "Plum"
| "Coconut"
| "Cracked Coconut"
| "Pear"
| "Cherry"
| "Banana"
| "Watermelon Slice"
| "Gold Watermelon Slice"
| "Melon Slice"
| "Gold Melon Slice"
| "Pumpkin Pie"
| "Corn"
| "Cornbread"
| "Chili Pepper"
| "Mango"
| "Carrot"
| "Raw Potato"
| "Baked Potato"
| "Beetroot"
| "Raw Porkchop"
| "Cooked Porkchop"
| "Raw Beef"
| "Steak"
| "Raw Mutton"
| "Cooked Mutton"
| "Raw Venison"
| "Cooked Venison"
| "Rotten Flesh"
| "Rotten Brain"
| "Bone"
| "Bone Meal"
| "Leather"
| "Saddle"
| "Spirit Saddle"
| "Fur"
| "Golem Eye"
| "Knight Heart"
| "Name Tag"
| "Book"
| "Empty Bottle"
| "Water Bottle"
| "Slowness Potion"
| "Slowness Potion II"
| "Splash Slowness Potion"
| "Splash Slowness Potion II"
| "Arrow of Slowness"
| "Poison Potion"
| "Poison Potion II"
| "Splash Poison Potion"
| "Splash Poison Potion II"
| "Arrow of Poison"
| "Weakness Potion"
| "Weakness Potion II"
| "Splash Weakness Potion"
| "Splash Weakness Potion II"
| "Arrow of Weakness"
| "Instant Damage Potion"
| "Instant Damage Potion II"
| "Splash Instant Damage Potion"
| "Splash Instant Damage Potion II"
| "Arrow of Instant Damage"
| "Milk Potion"
| "Splash Milk Potion"
| "Arrow of Milk"
| "Speed Potion"
| "Speed Potion II"
| "Splash Speed Potion"
| "Splash Speed Potion II"
| "Arrow of Speed"
| "Defense Potion"
| "Defense Potion II"
| "Splash Defense Potion"
| "Splash Defense Potion II"
| "Arrow of Defense"
| "Strength Potion"
| "Strength Potion II"
| "Splash Strength Potion"
| "Splash Strength Potion II"
| "Arrow of Strength"
| "Invisibility Potion"
| "Splash Invisibility Potion"
| "Arrow of Invisibility"
| "Jump Potion"
| "Jump Potion II"
| "Splash Jump Potion"
| "Splash Jump Potion II"
| "Arrow of Jumping"
| "Knockback Potion"
| "Splash Knockback Potion"
| "Splash Knockback Potion II"
| "Arrow of Knockback"
| "Regeneration Potion"
| "Regeneration Potion II"
| "Splash Regeneration Potion"
| "Splash Regeneration Potion II"
| "Arrow of Regeneration"
| "Instant Healing Potion"
| "Instant Healing Potion II"
| "Splash Instant Healing Potion"
| "Splash Instant Healing Potion II"
| "Arrow of Instant Healing"
| "Haste Potion"
| "Haste Potion II"
| "Splash Haste Potion"
| "Splash Haste Potion II"
| "Arrow of Haste"
| "Shield Potion"
| "Shield Potion II"
| "Splash Shield Potion"
| "Splash Shield Potion II"
| "Arrow of Shield"
| "Double Jump Potion"
| "Splash Double Jump Potion"
| "Arrow of Double Jump"
| "Heat Resistance Potion"
| "Splash Heat Resistance Potion"
| "Arrow of Heat Resistance"
| "X-Ray Vision Potion"
| "Splash X-Ray Vision Potion"
| "Arrow of X-Ray Vision"
| "Mining Yield Potion"
| "Mining Yield Potion II"
| "Splash Mining Yield Potion"
| "Splash Mining Yield Potion II"
| "Arrow of Mining Yield"
| "Brain Rot Potion"
| "Splash Brain Rot Potion"
| "Arrow of Brain Rot"
| "Chaos Potion"
| "Ammo"
| "AK-47"
| "AK-47|RequiresAmmo"
| "M16"
| "M16|RequiresAmmo"
| "MP40"
| "MP40|RequiresAmmo"
| "TAR-21"
| "TAR-21|RequiresAmmo"
| "M1911"
| "M1911|RequiresAmmo"
| "One Shot Pistol"
| "One Shot Pistol|RequiresAmmo"
| "Double Barrel"
| "Double Barrel|RequiresAmmo"
| "AWP"
| "AWP|RequiresAmmo"
| "Minigun"
| "Minigun|RequiresAmmo"
| "Gold Coin"
| "Updraft"
| "Snowdash"
| "Floor Creator"
| "Moonstone Remote Explosive"
| "Moonstone Remote"
| "Ice Bridge"
| "Yellow Balloon"
| "White Balloon"
| "Red Balloon"
| "Purple Balloon"
| "Pink Balloon"
| "Orange Balloon"
| "Magenta Balloon"
| "Lime Balloon"
| "Light Gray Balloon"
| "Light Blue Balloon"
| "Green Balloon"
| "Gray Balloon"
| "Cyan Balloon"
| "Brown Balloon"
| "Blue Balloon"
| "Black Balloon"
| "INTERNAL_MESH_Yellow Balloon"
| "INTERNAL_MESH_White Balloon"
| "INTERNAL_MESH_Red Balloon"
| "INTERNAL_MESH_Purple Balloon"
| "INTERNAL_MESH_Pink Balloon"
| "INTERNAL_MESH_Orange Balloon"
| "INTERNAL_MESH_Magenta Balloon"
| "INTERNAL_MESH_Lime Balloon"
| "INTERNAL_MESH_Light Gray Balloon"
| "INTERNAL_MESH_Light Blue Balloon"
| "INTERNAL_MESH_Green Balloon"
| "INTERNAL_MESH_Gray Balloon"
| "INTERNAL_MESH_Cyan Balloon"
| "INTERNAL_MESH_Brown Balloon"
| "INTERNAL_MESH_Blue Balloon"
| "INTERNAL_MESH_Black Balloon"
| "Yellow Popup Tower"
| "White Popup Tower"
| "Red Popup Tower"
| "Purple Popup Tower"
| "Pink Popup Tower"
| "Orange Popup Tower"
| "Magenta Popup Tower"
| "Lime Popup Tower"
| "Light Gray Popup Tower"
| "Light Blue Popup Tower"
| "Green Popup Tower"
| "Gray Popup Tower"
| "Cyan Popup Tower"
| "Brown Popup Tower"
| "Blue Popup Tower"
| "Black Popup Tower"
| "Yellow Paintball Gun"
| "White Paintball Gun"
| "Red Paintball Gun"
| "Purple Paintball Gun"
| "Pink Paintball Gun"
| "Orange Paintball Gun"
| "Magenta Paintball Gun"
| "Lime Paintball Gun"
| "Light Gray Paintball Gun"
| "Light Blue Paintball Gun"
| "Green Paintball Gun"
| "Gray Paintball Gun"
| "Cyan Paintball Gun"
| "Brown Paintball Gun"
| "Blue Paintball Gun"
| "Black Paintball Gun"
| "Yellow Paintball"
| "White Paintball"
| "Red Paintball"
| "Purple Paintball"
| "Pink Paintball"
| "Orange Paintball"
| "Magenta Paintball"
| "Lime Paintball"
| "Light Gray Paintball"
| "Light Blue Paintball"
| "Green Paintball"
| "Gray Paintball"
| "Cyan Paintball"
| "Brown Paintball"
| "Blue Paintball"
| "Black Paintball"
| "Yellow Heavy Paintball Gun"
| "White Heavy Paintball Gun"
| "Red Heavy Paintball Gun"
| "Purple Heavy Paintball Gun"
| "Pink Heavy Paintball Gun"
| "Orange Heavy Paintball Gun"
| "Magenta Heavy Paintball Gun"
| "Lime Heavy Paintball Gun"
| "Light Gray Heavy Paintball Gun"
| "Light Blue Heavy Paintball Gun"
| "Green Heavy Paintball Gun"
| "Gray Heavy Paintball Gun"
| "Cyan Heavy Paintball Gun"
| "Brown Heavy Paintball Gun"
| "Blue Heavy Paintball Gun"
| "Black Heavy Paintball Gun"
| "Yellow Paintball Explosive Item"
| "White Paintball Explosive Item"
| "Red Paintball Explosive Item"
| "Purple Paintball Explosive Item"
| "Pink Paintball Explosive Item"
| "Orange Paintball Explosive Item"
| "Magenta Paintball Explosive Item"
| "Lime Paintball Explosive Item"
| "Light Gray Paintball Explosive Item"
| "Light Blue Paintball Explosive Item"
| "Green Paintball Explosive Item"
| "Gray Paintball Explosive Item"
| "Cyan Paintball Explosive Item"
| "Brown Paintball Explosive Item"
| "Blue Paintball Explosive Item"
| "Black Paintball Explosive Item"
| "Yellow Sticky Paintball Explosive Item"
| "White Sticky Paintball Explosive Item"
| "Red Sticky Paintball Explosive Item"
| "Purple Sticky Paintball Explosive Item"
| "Pink Sticky Paintball Explosive Item"
| "Orange Sticky Paintball Explosive Item"
| "Magenta Sticky Paintball Explosive Item"
| "Lime Sticky Paintball Explosive Item"
| "Light Gray Sticky Paintball Explosive Item"
| "Light Blue Sticky Paintball Explosive Item"
| "Green Sticky Paintball Explosive Item"
| "Gray Sticky Paintball Explosive Item"
| "Cyan Sticky Paintball Explosive Item"
| "Brown Sticky Paintball Explosive Item"
| "Blue Sticky Paintball Explosive Item"
| "Black Sticky Paintball Explosive Item"
| "Yellow Seeking Paintball Explosive Item"
| "White Seeking Paintball Explosive Item"
| "Red Seeking Paintball Explosive Item"
| "Purple Seeking Paintball Explosive Item"
| "Pink Seeking Paintball Explosive Item"
| "Orange Seeking Paintball Explosive Item"
| "Magenta Seeking Paintball Explosive Item"
| "Lime Seeking Paintball Explosive Item"
| "Light Gray Seeking Paintball Explosive Item"
| "Light Blue Seeking Paintball Explosive Item"
| "Green Seeking Paintball Explosive Item"
| "Gray Seeking Paintball Explosive Item"
| "Cyan Seeking Paintball Explosive Item"
| "Brown Seeking Paintball Explosive Item"
| "Blue Seeking Paintball Explosive Item"
| "Black Seeking Paintball Explosive Item"
| "Yellow Quick Paintball Explosive Item"
| "White Quick Paintball Explosive Item"
| "Red Quick Paintball Explosive Item"
| "Purple Quick Paintball Explosive Item"
| "Pink Quick Paintball Explosive Item"
| "Orange Quick Paintball Explosive Item"
| "Magenta Quick Paintball Explosive Item"
| "Lime Quick Paintball Explosive Item"
| "Light Gray Quick Paintball Explosive Item"
| "Light Blue Quick Paintball Explosive Item"
| "Green Quick Paintball Explosive Item"
| "Gray Quick Paintball Explosive Item"
| "Cyan Quick Paintball Explosive Item"
| "Brown Quick Paintball Explosive Item"
| "Blue Quick Paintball Explosive Item"
| "Black Quick Paintball Explosive Item"
| "Yellow Paint Bow"
| "Yellow Paint Bow|meta|charging2"
| "Yellow Paint Bow|meta|charging3"
| "Yellow Paint Bow|meta|charging4"
| "White Paint Bow"
| "White Paint Bow|meta|charging2"
| "White Paint Bow|meta|charging3"
| "White Paint Bow|meta|charging4"
| "Red Paint Bow"
| "Red Paint Bow|meta|charging2"
| "Red Paint Bow|meta|charging3"
| "Red Paint Bow|meta|charging4"
| "Purple Paint Bow"
| "Purple Paint Bow|meta|charging2"
| "Purple Paint Bow|meta|charging3"
| "Purple Paint Bow|meta|charging4"
| "Pink Paint Bow"
| "Pink Paint Bow|meta|charging2"
| "Pink Paint Bow|meta|charging3"
| "Pink Paint Bow|meta|charging4"
| "Orange Paint Bow"
| "Orange Paint Bow|meta|charging2"
| "Orange Paint Bow|meta|charging3"
| "Orange Paint Bow|meta|charging4"
| "Magenta Paint Bow"
| "Magenta Paint Bow|meta|charging2"
| "Magenta Paint Bow|meta|charging3"
| "Magenta Paint Bow|meta|charging4"
| "Lime Paint Bow"
| "Lime Paint Bow|meta|charging2"
| "Lime Paint Bow|meta|charging3"
| "Lime Paint Bow|meta|charging4"
| "Light Gray Paint Bow"
| "Light Gray Paint Bow|meta|charging2"
| "Light Gray Paint Bow|meta|charging3"
| "Light Gray Paint Bow|meta|charging4"
| "Light Blue Paint Bow"
| "Light Blue Paint Bow|meta|charging2"
| "Light Blue Paint Bow|meta|charging3"
| "Light Blue Paint Bow|meta|charging4"
| "Green Paint Bow"
| "Green Paint Bow|meta|charging2"
| "Green Paint Bow|meta|charging3"
| "Green Paint Bow|meta|charging4"
| "Gray Paint Bow"
| "Gray Paint Bow|meta|charging2"
| "Gray Paint Bow|meta|charging3"
| "Gray Paint Bow|meta|charging4"
| "Cyan Paint Bow"
| "Cyan Paint Bow|meta|charging2"
| "Cyan Paint Bow|meta|charging3"
| "Cyan Paint Bow|meta|charging4"
| "Brown Paint Bow"
| "Brown Paint Bow|meta|charging2"
| "Brown Paint Bow|meta|charging3"
| "Brown Paint Bow|meta|charging4"
| "Blue Paint Bow"
| "Blue Paint Bow|meta|charging2"
| "Blue Paint Bow|meta|charging3"
| "Blue Paint Bow|meta|charging4"
| "Black Paint Bow"
| "Black Paint Bow|meta|charging2"
| "Black Paint Bow|meta|charging3"
| "Black Paint Bow|meta|charging4"
| "Pig Spawn Orb"
| "Cow Spawn Orb"
| "Sheep Spawn Orb"
| "Horse Spawn Orb"
| "Deer Spawn Orb"
| "Wolf Spawn Orb"
| "Wildcat Spawn Orb"
| "Spirit Golem Spawn Orb"
| "Spirit Wolf Spawn Orb"
| "Spirit Bear Spawn Orb"
| "Spirit Stag Spawn Orb"
| "Spirit Gorilla Spawn Orb"
| "Bear Spawn Orb"
| "Stag Spawn Orb"
| "Gold Watermelon Stag Spawn Orb"
| "Gorilla Spawn Orb"
| "Cave Golem Spawn Orb"
| "Draugr Zombie Spawn Orb"
| "Draugr Skeleton Spawn Orb"
| "Frost Golem Spawn Orb"
| "Frost Zombie Spawn Orb"
| "Frost Skeleton Spawn Orb"
| "Draugr Knight Spawn Orb"
| "Draugr Huntress Spawn Orb"
| "Magma Golem Spawn Orb"
| "Draugr Warper Spawn Orb"
| "Frost Wraith Spawn Orb"
| "Draugr Reaver Spawn Orb"
| "Mob Catcher"
| "Caught Mob Pig Default"
| "Caught Mob Cow Default"
| "Caught Mob Cow Cream"
| "Caught Mob Sheep Default"
| "Caught Mob Sheep Black"
| "Caught Mob Sheep Red"
| "Caught Mob Sheep Orange"
| "Caught Mob Sheep Pink"
| "Caught Mob Sheep Purple"
| "Caught Mob Sheep Yellow"
| "Caught Mob Sheep Blue"
| "Caught Mob Sheep Brown"
| "Caught Mob Sheep Cyan"
| "Caught Mob Sheep Gray"
| "Caught Mob Sheep Green"
| "Caught Mob Sheep Lightblue"
| "Caught Mob Sheep Lightgray"
| "Caught Mob Sheep Lime"
| "Caught Mob Sheep Magenta"
| "Caught Mob Horse Default"
| "Caught Mob Horse Black"
| "Caught Mob Horse Brown"
| "Caught Mob Horse Cream"
| "Caught Mob Deer Default"
| "Caught Mob Wolf Default"
| "Caught Mob Wolf White"
| "Caught Mob Wolf Brown"
| "Caught Mob Wolf Grey"
| "Caught Mob Wolf Spectral"
| "Caught Mob Wildcat Default"
| "Caught Mob Wildcat Tabby"
| "Caught Mob Wildcat Grey"
| "Caught Mob Wildcat Black"
| "Caught Mob Wildcat Calico"
| "Caught Mob Wildcat Siamese"
| "Caught Mob Wildcat Leopard"
| "Caught Mob Spirit_Golem Default"
| "Caught Mob Spirit_Wolf Default"
| "Caught Mob Spirit_Bear Default"
| "Caught Mob Spirit_Stag Default"
| "Caught Mob Spirit_Gorilla Default"
| "Caught Mob Bear Default"
| "Caught Mob Stag Default"
| "Caught Mob Gold_Watermelon_Stag Default"
| "Caught Mob Gorilla Default"
| "Caught Mob Cave_Golem Default"
| "Caught Mob Cave_Golem Iron"
| "Caught Mob Draugr_Zombie Default"
| "Caught Mob Draugr_Zombie Longhairchestplate"
| "Caught Mob Draugr_Zombie Longhairclothed"
| "Caught Mob Draugr_Zombie Shorthairclothed"
| "Caught Mob Draugr_Skeleton Default"
| "Caught Mob Frost_Golem Default"
| "Caught Mob Frost_Zombie Default"
| "Caught Mob Frost_Zombie Longhairchestplate"
| "Caught Mob Frost_Zombie Shorthairclothed"
| "Caught Mob Frost_Skeleton Default"
| "Caught Mob Draugr_Knight Default"
| "Caught Mob Draugr_Huntress Default"
| "Caught Mob Draugr_Huntress Chainmail"
| "Caught Mob Magma_Golem Default"
| "Caught Mob Draugr_Warper Default"
| "Caught Mob Frost_Wraith Default"
| "Caught Mob Draugr_Reaver Default"
| "Caught Mob NPC Default"
| "Caught Mob NPC Emma"
| "Caught Mob NPC Leo"
| "Caught Mob NPC Isabel"
| "Caught Mob NPC Sanjay"
| "Caught Mob NPC Imara"
| "Caught Mob NPC Enoch"
| "Caught Mob NPC Sara"
| "Caught Mob NPC Carmen"
| "Timed Spike Bomb"
| "Timed Spike Bomb|meta|charging2"
| "Timed Spike Bomb|meta|charging3"
| "Timed Spike Bomb|meta|charging4"
| "Toxin Ball"
| "Aura XP Fragment"
| "Aura XP Orb"
| "Aura XP Potion"
| "Aura XP Potion II"
| "Splash Aura XP Potion"
| "Splash Aura XP Potion II"
| "Arrow of Aura XP"
| "Firecracker"
| "Rainbow Firecracker"
| "Yellow Firecracker"
| "White Firecracker"
| "Red Firecracker"
| "Purple Firecracker"
| "Pink Firecracker"
| "Orange Firecracker"
| "Magenta Firecracker"
| "Lime Firecracker"
| "Light Gray Firecracker"
| "Light Blue Firecracker"
| "Green Firecracker"
| "Gray Firecracker"
| "Cyan Firecracker"
| "Brown Firecracker"
| "Blue Firecracker"
| "Black Firecracker"
| "Firecracker Pebble"
| "Rainbow Firecracker Pebble"
| "Yellow Firecracker Pebble"
| "White Firecracker Pebble"
| "Red Firecracker Pebble"
| "Purple Firecracker Pebble"
| "Pink Firecracker Pebble"
| "Orange Firecracker Pebble"
| "Magenta Firecracker Pebble"
| "Lime Firecracker Pebble"
| "Light Gray Firecracker Pebble"
| "Light Blue Firecracker Pebble"
| "Green Firecracker Pebble"
| "Gray Firecracker Pebble"
| "Cyan Firecracker Pebble"
| "Brown Firecracker Pebble"
| "Blue Firecracker Pebble"
| "Black Firecracker Pebble"
| "WorldBuilder Wand"
| "Red Strongfish"
| "Green Strongfish"
| "Moon Strongfish"
| "Wheatfish"
| "Moonfish"
| "Bombfish"
| "Boomerang Fish"
| "Root Flounder"
| "Abyss Carp"
| "Boulder Bass"
| "Barnaclejaw"
| "Crystalized Wheatfish"
| "Darter"
| "Shadow Darter"
| "Electric Eel"
| "Grass Snapper"
| "Jungle Spinefish"
| "Mangler Catfish"
| "Mossback Arapaima"
| "Sandbelly Piranha"
| "Shadeback Ray"
| "Mudbelly Tilapia"
| "Mireback Carp"
| "Rotslab Eel"
| "Aether Minnow"
| "Murkborne Ray"
| "Eldertide Leviathan"
| "Oarfish"
| "Alpha Moon Strongfish"
| "Bamboo Catfish"
| "Blackwater Bream"
| "Blackwater Leviathan"
| "Boned Sturgeon"
| "Bull Shark"
| "Channel Sawfish"
| "Coastal Mullet"
| "Coelacanth"
| "Driftwood Catfish"
| "Eagle Ray"
| "Giant Grouper"
| "Giant Moray"
| "Giant Stingray"
| "Golden Mahseer"
| "Greenfin Loach"
| "Mangrove Herring"
| "Moonlit Boomerang Fish"
| "Moonstone Pupfish"
| "Mudline Perch"
| "Murk Stingray"
| "Needlefish"
| "Nomai Moray"
| "Pearlescent Moonfish"
| "Rainbow Guppy"
| "Red Snapper"
| "Reedglass Minnow"
| "Reef Sardine"
| "Root Perch"
| "Rust Scad"
| "Seahorse"
| "Snakehead"
| "Spined Stickleback"
| "Stone Grouper"
| "Sumpback Carp"
| "Sunset Minnow"
| "Tarpon"
| "Threadfin Bream"
| "Tri-Pointed Needlefish"
| "Game Dev Fish"
| "Armoured Searobin"
| "Ash Lionfish"
| "Barefrost Toothfish"
| "Blackfin Icefish"
| "Basalt Pipefish"
| "Brimstone Spikefish"
| "Cinder Leviathan"
| "Crowned Flame Angelfish"
| "Deepwater Lanternfish"
| "Driftice Capelin"
| "Ember Chub"
| "Embermark Wrasse"
| "Eviota Vader"
| "Frost Herring"
| "Frost Wolf Eel"
| "Frostpaint Notie"
| "Frozen Grenadier"
| "Giant Trevally"
| "Glacial Lanternfish"
| "Glacial Silverfish"
| "Heatwarp Flounder"
| "Hatchetfish"
| "Ice Spined Notothenia"
| "Iceshelf Skate"
| "Icy Sculpin"
| "Lavaflow Trout"
| "Lavawake Slopefish"
| "Magma Sardinella"
| "Magma Trout"
| "Marbled Moray Cod"
| "Molten Lotella Cod"
| "Northern Wolffish"
| "Paleice Rockcod"
| "Permafrost Halibut"
| "Pithead"
| "Polarflash Electron"
| "Pyroclast Eel"
| "Pyroscale Grouper"
| "Red Pyreside"
| "Rimesnouted Lancetfish"
| "Scorched Sunfish"
| "Scored Dace"
| "Silver Dragonfish"
| "Snow Haddock"
| "Volcanic Catfish"
| "Volcanic Semperi"
| "Rusty Rod"
| "Lucky Rod"
| "Sturdy Rod"
| "Jungle Rod"
| "Draugr Rod"
| "Cursed Rod"
| "Tangle Resistant Rod"
| "Speed Rod"
| "Carbon Rod"
| "Deep Sea Rod"
| "Master Rod"
| "Obsidian Rod"
| "Molten Magma Rod"
| "Frost Rod"
| "Black Ice Rod"
| "Mythic Rod"
| "Acorn"
| "Acorn Jelly"
| "Cow's Milk"
| "Cheese"
| "Caught Fish"
| "Fish Fillet"
| "Meaty Bone"
| "Blinding Pebble"
| "Sheep's Milk"
| "Yoghurt Pot"
| "Truffle"
| "Truffle Oil"
| "Oats"
| "Porridge"
| "Poop"
| "Fertiliser"
| "Medkit"
| "Wood Spear"
| "Stone Spear"
| "Iron Spear"
| "Gold Spear"
| "Diamond Spear"
| "Moonstone Spear"
| "Wood Dagger"
| "Stone Dagger"
| "Iron Dagger"
| "Gold Dagger"
| "Diamond Dagger"
| "Moonstone Dagger"
| "Wood Boomerang"
| "Stone Boomerang"
| "Iron Boomerang"
| "Gold Boomerang"
| "Diamond Boomerang"
| "Moonstone Boomerang"
| "Wood Club"
| "Stone Club"
| "Iron Club"
| "Gold Club"
| "Diamond Club"
| "Moonstone Club"
| "Wood Mace"
| "Stone Mace"
| "Iron Mace"
| "Gold Mace"
| "Diamond Mace"
| "Moonstone Mace"
| "Wood Whip"
| "Stone Whip"
| "Iron Whip"
| "Gold Whip"
| "Diamond Whip"
| "Moonstone Whip"
| "Beef Stew"
| "Chicken"
| "Coleslaw"
| "Egg"
| "Fish N Chips"
| "Fried Rice"
| "Lettuce"
| "Omelette"
| "Onion"
| "Red Cabbage"
| "Roast Dinner"
| "Salad"
| "Stuffed Pepper"
| "Sushi"
| "Tomato"
| "Vegetable Soup";

export declare type AllMobAiState = {
    idle: null;
    disabled: null;
    idleBeforeTurning: null;
    turning: null;
    idleBeforeWalking: null;
    walking: null;
    runningAway: {
        targetId: LifeformId;
    };
    chasing: {
        targetId: LifeformId;
    };
    following: {
        targetId: LifeformId;
    };
    watching: {
        targetId: LifeformId;
    };
    walkingToPosition: {
        pos: Coordinate;
    };
    runningToPosition: {
        pos: Coordinate;
    };
};

declare type AllMobAiState_2 = {
    idle: null;
    disabled: null;
    idleBeforeTurning: null;
    turning: null;
    idleBeforeWalking: null;
    walking: null;
    runningAway: { targetId: LifeformId_2 };
    chasing: { targetId: LifeformId_2 };
    following: { targetId: LifeformId_2 };
    watching: { targetId: LifeformId_2 };
    walkingToPosition: { pos: Coordinate_2 };
    runningToPosition: { pos: Coordinate_2 };
};

export declare type AllSoundName = "bass" | "bassattack" | "bd" | "bearRoar1" | "bearRoar2" | "bearRoar3" | "bearRoar4" | "bearRoar5" | "beep" | "bigDrumSwish1" | "bigDrumSwish2" | "bigDrumSwish3" | "bow" | "bucketEmpty1" | "bucketEmpty2" | "bucketEmpty3" | "bucketFill1" | "bucketFill2" | "bucketFill3" | "bullet_shell_bounce_general_07" | "bullet_shell_bounce_general_08" | "burp" | "cannonFire1" | "cannonFire2" | "cannonFire3" | "cashRegister" | "catHiss1" | "catHiss2" | "catHiss3" | "catHiss4" | "catHurt1" | "catHurt2" | "catHurt3" | "catMeow1" | "catMeow2" | "catMeow3" | "catMeow4" | "catMeow5" | "caughtFish" | "chestClose" | "chestOpen" | "cloth1" | "cloth2" | "cloth3" | "cloth4" | "cowHurt1" | "cowMoo1" | "cowMoo2" | "cowMoo3" | "deerGrunt1" | "deerHurt1" | "dogBark1" | "dogBark2" | "dogBark3" | "dogGrowl1" | "dogGrowl2" | "dogGrowl3" | "dogHurt1" | "dogHurt2" | "doorClose" | "doorClose2" | "doorKnock" | "doorOpen-bloxd1" | "doorOpen-bloxd2" | "drink" | "drumSwish1" | "drumSwish2" | "eat1" | "equip_leather1" | "exp_collect" | "exp_levelup" | "fallsmall" | "fireBurn" | "firecracker1" | "firecracker2" | "firecracker3" | "firecracker4" | "futureStrangePulse" | "game_start_countdown_01" | "game_start_countdown_02" | "game_start_countdown_03" | "game_start_countdown_final" | "glass1" | "glass2" | "glass3" | "golemGrunt1" | "golemGrunt2" | "gorillaIdle1" | "gorillaIdle2" | "gorillaIdle3" | "gorillaIdle4" | "gorillaRoar1" | "grass1" | "grass2" | "grass3" | "grass4" | "gravel1" | "gravel2" | "gravel3" | "gravel4" | "harp_pling" | "hat" | "hauntedHorrorImpact" | "headshot_04" | "headshot_06" | "headshot_08" | "headshot_11" | "hit1" | "hit2" | "hit3" | "hoeTill1" | "hoeTill2" | "hoeTill3" | "hoeTill4" | "horrorAccent1" | "horrorFright" | "horrorMaleDrone" | "horseHurt1" | "horseHurt2" | "horseIdle1" | "horseIdle2" | "horseIdle3" | "intensiveRainLoop" | "knightGrunt1" | "knightGrunt2" | "knightGrunt3" | "laugh1" | "laugh2" | "laugh3" | "levelup" | "lowDrum1" | "lowDrum2" | "lowDrum3" | "magicAccent1" | "magicAccent2" | "magicAccent3" | "magicAccent4" | "metalDoorKnock" | "ominousBellHit" | "pickUp" | "pigHurt1" | "pigHurt2" | "pigHurt3" | "pigOink1" | "pigOink2" | "pigOink3" | "pigOink4" | "pigOink5" | "pistol_cock_01" | "pistol_cock_02" | "pistol_cock_03" | "pistol_cock_06" | "pistol_magazine_load_01" | "pistol_magazine_load_02" | "pistol_magazine_load_03" | "pistol_magazine_unload_01" | "pistol_magazine_unload_02" | "pistol_magazine_unload_03" | "pistol_shot_01" | "pistol_shot_02" | "pistol_shot_03" | "pistol_shot_04" | "pistol_shot_05" | "pulseFromTheDark" | "reaverAttack1" | "reaverAttack2" | "reaverAttack3" | "reaverGrunt1" | "reaverGrunt2" | "reaverGrunt3" | "reel" | "rifle_cock_01" | "rifle_cock_02" | "rifle_magazine_load_01" | "rifle_magazine_load_02" | "rifle_magazine_load_03" | "rifle_magazine_unload_01" | "rifle_magazine_unload_02" | "rifle_magazine_unload_04" | "rifle_shot_01" | "rifle_shot_02" | "rifle_shot_03" | "rifle_shot_04" | "sand1" | "sand2" | "sand3" | "sand4" | "semiAuto_cock_01" | "semiAuto_cock_02" | "semiAuto_cock_03" | "semiAuto_cock_04" | "semiAuto_cock_05" | "semiAuto_first_shot_01" | "semiAuto_magazine_load_01" | "semiAuto_magazine_load_02" | "semiAuto_magazine_load_03" | "semiAuto_magazine_load_04" | "semiAuto_magazine_load_05" | "semiAuto_magazine_unload_01" | "semiAuto_magazine_unload_02" | "semiAuto_magazine_unload_03" | "semiAuto_magazine_unload_04" | "semiAuto_shot_01" | "semiAuto_shot_02" | "semiAuto_shot_03" | "semiAuto_shot_04" | "semiAuto_shot_05" | "semiAuto_shot_06" | "semiAuto_shot_07" | "semiAuto_shot_08" | "semiAuto_tail_only_shot_01" | "sheepBaa1" | "sheepBaa2" | "sheepBaa3" | "sheepBaa4" | "sheepHurt1" | "shotgun_cock_01" | "shotgun_cock_02" | "shotgun_cock_03" | "shotgun_cock_04" | "shotgun_cock_05" | "shotgun_load_bullet_01" | "shotgun_load_bullet_02" | "shotgun_load_bullet_03" | "shotgun_load_bullet_04" | "shotgun_load_bullet_05" | "shotgun_load_bullet_06" | "shotgun_load_bullet_07" | "shotgun_load_bullet_08" | "shotgun_shot_01" | "shotgun_shot_02" | "shotgun_shot_03" | "shotgun_shot_04" | "skeletonRattle1" | "skeletonRattle2" | "skeletonRattle3" | "skeletonRattle4" | "snare" | "snow1" | "snow2" | "snow3" | "snow4" | "sonarBeep" | "splash1" | "stagGrunt1" | "stagHurt1" | "step_cloth1" | "step_cloth2" | "step_cloth3" | "step_cloth4" | "step_grass1" | "step_grass2" | "step_grass3" | "step_grass4" | "step_grass5" | "step_gravel1" | "step_gravel2" | "step_gravel3" | "step_gravel4" | "step_sand2" | "step_sand3" | "step_sand4" | "step_sand5" | "step_snow1" | "step_snow2" | "step_snow3" | "step_snow4" | "step_stone1" | "step_stone2" | "step_stone3" | "step_stone4" | "step_stone5" | "step_stone6" | "step_wood1" | "step_wood2" | "step_wood3" | "step_wood4" | "step_wood5" | "step_wood6" | "stone1" | "stone2" | "stone3" | "stone4" | "submachine_cock_01" | "submachine_cock_02" | "submachine_cock_03" | "submachine_cock_04" | "submachine_first_shot_01" | "submachine_magazine_load_01" | "submachine_magazine_load_02" | "submachine_magazine_load_03" | "submachine_magazine_load_04" | "submachine_magazine_unload_01" | "submachine_magazine_unload_02" | "submachine_magazine_unload_03" | "submachine_shot_01" | "submachine_shot_02" | "submachine_shot_03" | "submachine_shot_04" | "submachine_shot_05" | "submachine_shot_06" | "submachine_shot_07" | "submachine_shot_08" | "submachine_shot_09" | "submachine_tail_only_shot_01" | "successfulBowHit" | "suspenseRiser" | "sweep6" | "thunderRain" | "trapdoorOpen" | "trumpetFlare" | "trumpetNote1" | "trumpetNote2" | "trumpetNote3" | "warperGrunt1" | "warperGrunt2" | "warperGrunt3" | "warperGrunt4" | "warperGrunt5" | "warperPhase1" | "warperPhase2" | "wood1" | "wood2" | "wood3" | "wood4" | "wraithGrunt1" | "wraithGrunt2" | "wraithHurt" | "zapAccent1" | "zapAccent2" | "ZombieGrunt1" | "ZombieGrunt2" | "ZombieGrunt3";

declare type AllSoundName_2 =
| "bass"
| "bassattack"
| "bd"
| "bearRoar1"
| "bearRoar2"
| "bearRoar3"
| "bearRoar4"
| "bearRoar5"
| "beep"
| "bigDrumSwish1"
| "bigDrumSwish2"
| "bigDrumSwish3"
| "bow"
| "bucketEmpty1"
| "bucketEmpty2"
| "bucketEmpty3"
| "bucketFill1"
| "bucketFill2"
| "bucketFill3"
| "bullet_shell_bounce_general_07"
| "bullet_shell_bounce_general_08"
| "burp"
| "cannonFire1"
| "cannonFire2"
| "cannonFire3"
| "cashRegister"
| "catHiss1"
| "catHiss2"
| "catHiss3"
| "catHiss4"
| "catHurt1"
| "catHurt2"
| "catHurt3"
| "catMeow1"
| "catMeow2"
| "catMeow3"
| "catMeow4"
| "catMeow5"
| "caughtFish"
| "chestClose"
| "chestOpen"
| "cloth1"
| "cloth2"
| "cloth3"
| "cloth4"
| "cowHurt1"
| "cowMoo1"
| "cowMoo2"
| "cowMoo3"
| "deerGrunt1"
| "deerHurt1"
| "dogBark1"
| "dogBark2"
| "dogBark3"
| "dogGrowl1"
| "dogGrowl2"
| "dogGrowl3"
| "dogHurt1"
| "dogHurt2"
| "doorClose"
| "doorClose2"
| "doorKnock"
| "doorOpen-bloxd1"
| "doorOpen-bloxd2"
| "drink"
| "drumSwish1"
| "drumSwish2"
| "eat1"
| "equip_leather1"
| "exp_collect"
| "exp_levelup"
| "fallsmall"
| "fireBurn"
| "firecracker1"
| "firecracker2"
| "firecracker3"
| "firecracker4"
| "futureStrangePulse"
| "game_start_countdown_01"
| "game_start_countdown_02"
| "game_start_countdown_03"
| "game_start_countdown_final"
| "glass1"
| "glass2"
| "glass3"
| "golemGrunt1"
| "golemGrunt2"
| "gorillaIdle1"
| "gorillaIdle2"
| "gorillaIdle3"
| "gorillaIdle4"
| "gorillaRoar1"
| "grass1"
| "grass2"
| "grass3"
| "grass4"
| "gravel1"
| "gravel2"
| "gravel3"
| "gravel4"
| "harp_pling"
| "hat"
| "hauntedHorrorImpact"
| "headshot_04"
| "headshot_06"
| "headshot_08"
| "headshot_11"
| "hit1"
| "hit2"
| "hit3"
| "hoeTill1"
| "hoeTill2"
| "hoeTill3"
| "hoeTill4"
| "horrorAccent1"
| "horrorFright"
| "horrorMaleDrone"
| "horseHurt1"
| "horseHurt2"
| "horseIdle1"
| "horseIdle2"
| "horseIdle3"
| "intensiveRainLoop"
| "knightGrunt1"
| "knightGrunt2"
| "knightGrunt3"
| "laugh1"
| "laugh2"
| "laugh3"
| "levelup"
| "lowDrum1"
| "lowDrum2"
| "lowDrum3"
| "magicAccent1"
| "magicAccent2"
| "magicAccent3"
| "magicAccent4"
| "metalDoorKnock"
| "ominousBellHit"
| "pickUp"
| "pigHurt1"
| "pigHurt2"
| "pigHurt3"
| "pigOink1"
| "pigOink2"
| "pigOink3"
| "pigOink4"
| "pigOink5"
| "pistol_cock_01"
| "pistol_cock_02"
| "pistol_cock_03"
| "pistol_cock_06"
| "pistol_magazine_load_01"
| "pistol_magazine_load_02"
| "pistol_magazine_load_03"
| "pistol_magazine_unload_01"
| "pistol_magazine_unload_02"
| "pistol_magazine_unload_03"
| "pistol_shot_01"
| "pistol_shot_02"
| "pistol_shot_03"
| "pistol_shot_04"
| "pistol_shot_05"
| "pulseFromTheDark"
| "reaverAttack1"
| "reaverAttack2"
| "reaverAttack3"
| "reaverGrunt1"
| "reaverGrunt2"
| "reaverGrunt3"
| "reel"
| "rifle_cock_01"
| "rifle_cock_02"
| "rifle_magazine_load_01"
| "rifle_magazine_load_02"
| "rifle_magazine_load_03"
| "rifle_magazine_unload_01"
| "rifle_magazine_unload_02"
| "rifle_magazine_unload_04"
| "rifle_shot_01"
| "rifle_shot_02"
| "rifle_shot_03"
| "rifle_shot_04"
| "sand1"
| "sand2"
| "sand3"
| "sand4"
| "semiAuto_cock_01"
| "semiAuto_cock_02"
| "semiAuto_cock_03"
| "semiAuto_cock_04"
| "semiAuto_cock_05"
| "semiAuto_first_shot_01"
| "semiAuto_magazine_load_01"
| "semiAuto_magazine_load_02"
| "semiAuto_magazine_load_03"
| "semiAuto_magazine_load_04"
| "semiAuto_magazine_load_05"
| "semiAuto_magazine_unload_01"
| "semiAuto_magazine_unload_02"
| "semiAuto_magazine_unload_03"
| "semiAuto_magazine_unload_04"
| "semiAuto_shot_01"
| "semiAuto_shot_02"
| "semiAuto_shot_03"
| "semiAuto_shot_04"
| "semiAuto_shot_05"
| "semiAuto_shot_06"
| "semiAuto_shot_07"
| "semiAuto_shot_08"
| "semiAuto_tail_only_shot_01"
| "sheepBaa1"
| "sheepBaa2"
| "sheepBaa3"
| "sheepBaa4"
| "sheepHurt1"
| "shotgun_cock_01"
| "shotgun_cock_02"
| "shotgun_cock_03"
| "shotgun_cock_04"
| "shotgun_cock_05"
| "shotgun_load_bullet_01"
| "shotgun_load_bullet_02"
| "shotgun_load_bullet_03"
| "shotgun_load_bullet_04"
| "shotgun_load_bullet_05"
| "shotgun_load_bullet_06"
| "shotgun_load_bullet_07"
| "shotgun_load_bullet_08"
| "shotgun_shot_01"
| "shotgun_shot_02"
| "shotgun_shot_03"
| "shotgun_shot_04"
| "skeletonRattle1"
| "skeletonRattle2"
| "skeletonRattle3"
| "skeletonRattle4"
| "snare"
| "snow1"
| "snow2"
| "snow3"
| "snow4"
| "sonarBeep"
| "splash1"
| "stagGrunt1"
| "stagHurt1"
| "step_cloth1"
| "step_cloth2"
| "step_cloth3"
| "step_cloth4"
| "step_grass1"
| "step_grass2"
| "step_grass3"
| "step_grass4"
| "step_grass5"
| "step_gravel1"
| "step_gravel2"
| "step_gravel3"
| "step_gravel4"
| "step_sand2"
| "step_sand3"
| "step_sand4"
| "step_sand5"
| "step_snow1"
| "step_snow2"
| "step_snow3"
| "step_snow4"
| "step_stone1"
| "step_stone2"
| "step_stone3"
| "step_stone4"
| "step_stone5"
| "step_stone6"
| "step_wood1"
| "step_wood2"
| "step_wood3"
| "step_wood4"
| "step_wood5"
| "step_wood6"
| "stone1"
| "stone2"
| "stone3"
| "stone4"
| "submachine_cock_01"
| "submachine_cock_02"
| "submachine_cock_03"
| "submachine_cock_04"
| "submachine_first_shot_01"
| "submachine_magazine_load_01"
| "submachine_magazine_load_02"
| "submachine_magazine_load_03"
| "submachine_magazine_load_04"
| "submachine_magazine_unload_01"
| "submachine_magazine_unload_02"
| "submachine_magazine_unload_03"
| "submachine_shot_01"
| "submachine_shot_02"
| "submachine_shot_03"
| "submachine_shot_04"
| "submachine_shot_05"
| "submachine_shot_06"
| "submachine_shot_07"
| "submachine_shot_08"
| "submachine_shot_09"
| "submachine_tail_only_shot_01"
| "successfulBowHit"
| "suspenseRiser"
| "sweep6"
| "thunderRain"
| "trapdoorOpen"
| "trumpetFlare"
| "trumpetNote1"
| "trumpetNote2"
| "trumpetNote3"
| "warperGrunt1"
| "warperGrunt2"
| "warperGrunt3"
| "warperGrunt4"
| "warperGrunt5"
| "warperPhase1"
| "warperPhase2"
| "wood1"
| "wood2"
| "wood3"
| "wood4"
| "wraithGrunt1"
| "wraithGrunt2"
| "wraithHurt"
| "zapAccent1"
| "zapAccent2"
| "ZombieGrunt1"
| "ZombieGrunt2"
| "ZombieGrunt3";

export declare type AngleDir = any;

declare type AngleDir_2 = any;

export declare type AnyMetadataItem = any;

declare type AnyMetadataItem_2 = any;

export declare const Apis: {
    readonly getDefaultMobSetting: <TMobType extends MobType_2, TMobSetting extends keyof MobSettings_2<TMobType>>(mobType: TMobType, setting: TMobSetting) => MobSettings_2<TMobType>[TMobSetting];
    readonly setDefaultMobSetting: <TMobType extends MobType_2, TMobSetting extends keyof MobSettings_2<TMobType>>(mobType: TMobType, setting: TMobSetting, value: MobSettings_2<TMobType>[TMobSetting]) => void;
    readonly getMobSetting: <TMobSetting extends keyof MobSettings_2<MobType_2>>(mobId: MobId_2, setting: TMobSetting, returnDefaultIfNotOverridden?: boolean) => MobSettings_2<MobType_2>[TMobSetting];
    readonly setMobSetting: <TMobSetting extends keyof MobSettings_2<MobType_2>>(mobId: MobId_2, setting: TMobSetting, value: MobSettings_2<MobType_2>[TMobSetting]) => void;
    readonly setEveryoneSettingForPlayer: (<Setting extends keyof EntitySettings_2>(playerId: PlayerId_2, settingName: Setting, settingValue: EntitySettings_2[Setting], includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "opacity", settingValue: number, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "zIndex", settingValue: 0 | 1, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "overlayColour", settingValue: string | null, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "canAttack", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "canSee", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "showDamageAmounts", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "killfeedColour", settingValue: string, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "hasPriorityNametag", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "nameColour", settingValue: "aqua" | "blue" | "cyan" | "green" | "lime" | "orange" | "pink" | "purple" | "red" | "yellow" | "default", includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "nameTagInfo", settingValue: NameTagInfo_2, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "meshScaling", settingValue: Partial<Record<LifeformBodyPart_2, [number, number, number]>>, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "lobbyLeaderboardValues", settingValue: LobbyLeaderboardValues_2, includeNewJoiners?: boolean) => void) & ((playerId: PlayerId_2, settingName: "colorInLobbyLeaderboard", settingValue: string, includeNewJoiners?: boolean) => void);
    readonly setTargetedPlayerSettingForEveryone: (<Setting extends keyof EntitySettings_2>(targetedPlayerId: PlayerId_2, settingName: Setting, settingValue: EntitySettings_2[Setting], includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "opacity", settingValue: number, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "zIndex", settingValue: 0 | 1, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "overlayColour", settingValue: string | null, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "canAttack", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "canSee", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "showDamageAmounts", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "killfeedColour", settingValue: string, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "hasPriorityNametag", settingValue: boolean, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "nameColour", settingValue: "aqua" | "blue" | "cyan" | "green" | "lime" | "orange" | "pink" | "purple" | "red" | "yellow" | "default", includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "nameTagInfo", settingValue: NameTagInfo_2, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "meshScaling", settingValue: Partial<Record<LifeformBodyPart_2, [number, number, number]>>, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "lobbyLeaderboardValues", settingValue: LobbyLeaderboardValues_2, includeNewJoiners?: boolean) => void) & ((targetedPlayerId: PlayerId_2, settingName: "colorInLobbyLeaderboard", settingValue: string, includeNewJoiners?: boolean) => void);
    readonly setOtherEntitySetting: (<Setting extends keyof EntitySettings_2>(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: Setting, settingValue: EntitySettings_2[Setting]) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "opacity", settingValue: number) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "zIndex", settingValue: 0 | 1) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "overlayColour", settingValue: string | null) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "canAttack", settingValue: boolean) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "canSee", settingValue: boolean) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "showDamageAmounts", settingValue: boolean) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "killfeedColour", settingValue: string) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "hasPriorityNametag", settingValue: boolean) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "nameColour", settingValue: "aqua" | "blue" | "cyan" | "green" | "lime" | "orange" | "pink" | "purple" | "red" | "yellow" | "default") => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "nameTagInfo", settingValue: NameTagInfo_2) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "meshScaling", settingValue: Partial<Record<LifeformBodyPart_2, [number, number, number]>>) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "lobbyLeaderboardValues", settingValue: LobbyLeaderboardValues_2) => void) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "colorInLobbyLeaderboard", settingValue: string) => void);
    readonly getOtherEntitySetting: (<Setting extends keyof EntitySettings_2>(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: Setting) => EntitySettings_2[Setting]) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "opacity") => number) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "zIndex") => 0 | 1) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "overlayColour") => string | null) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "canAttack") => boolean) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "canSee") => boolean) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "showDamageAmounts") => boolean) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "killfeedColour") => string) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "hasPriorityNametag") => boolean) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "nameColour") => "aqua" | "blue" | "cyan" | "green" | "lime" | "orange" | "pink" | "purple" | "red" | "yellow" | "default") & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "nameTagInfo") => NameTagInfo_2) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "meshScaling") => Partial<Record<LifeformBodyPart_2, [number, number, number]>>) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "lobbyLeaderboardValues") => LobbyLeaderboardValues_2) & ((relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "colorInLobbyLeaderboard") => string);
    readonly setClientOption: (<TOption extends keyof ClientOptions_2>(playerId: PlayerId_2, option: TOption, value: ClientOptions_2[TOption]) => void) & {
        (playerId: PlayerId_2, option: "canChange", value: true): void;
        (playerId: PlayerId_2, option: "canChange", value: false): void;
    } & ((playerId: PlayerId_2, option: "crouchingSpeed", value: number) => void) & ((playerId: PlayerId_2, option: "walkingSpeed", value: number) => void) & ((playerId: PlayerId_2, option: "runningSpeed", value: number) => void) & ((playerId: PlayerId_2, option: "speedMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "jumpAmount", value: number) => void) & ((playerId: PlayerId_2, option: "airJumpCount", value: number) => void) & ((playerId: PlayerId_2, option: "bunnyhopMaxMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "musicVolumeLevel", value: number) => void) & ((playerId: PlayerId_2, option: "showPlayersInUnloadedChunks", value: boolean) => void) & ((playerId: PlayerId_2, option: "useInventory", value: boolean) => void) & ((playerId: PlayerId_2, option: "useFullInventory", value: boolean) => void) & ((playerId: PlayerId_2, option: "canCraft", value: boolean) => void) & ((playerId: PlayerId_2, option: "canPickUpItems", value: boolean) => void) & ((playerId: PlayerId_2, option: "playerZoom", value: number) => void) & ((playerId: PlayerId_2, option: "zoomOutDistance", value: number) => void) & ((playerId: PlayerId_2, option: "maxPlayerZoom", value: number) => void) & ((playerId: PlayerId_2, option: "canCustomiseChar", value: boolean) => void) & ((playerId: PlayerId_2, option: "defaultBlock", value: string) => void) & ((playerId: PlayerId_2, option: "cantChangeError", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "cantBreakError", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "cantBuildError", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "touchscreenActionButton", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "strictFluidBuckets", value: boolean) => void) & ((playerId: PlayerId_2, option: "canUseZoomKey", value: boolean) => void) & ((playerId: PlayerId_2, option: "canAltAction", value: boolean) => void) & ((playerId: PlayerId_2, option: "canSeeNametagsThroughWalls", value: boolean) => void) & ((playerId: PlayerId_2, option: "showBasicMovementControls", value: boolean) => void) & ((playerId: PlayerId_2, option: "middleTextUpper", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "middleTextLower", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "crosshairText", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "RightInfoText", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "numClosestPlayersVisible", value: number) => void) & ((playerId: PlayerId_2, option: "showProgressBar", value: boolean) => void) & ((playerId: PlayerId_2, option: "showKillfeed", value: boolean) => void) & ((playerId: PlayerId_2, option: "chatChannels", value: {
        channelName: string;
        elementContent: string | CustomTextStyling_2;
        elementBgColor: string;
    }[]) => void) & ((playerId: PlayerId_2, option: "creative", value: boolean) => void) & ((playerId: PlayerId_2, option: "flySpeedMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "canPickBlocks", value: boolean) => void) & ((playerId: PlayerId_2, option: "compassTarget", value: string | number | number[]) => void) & ((playerId: PlayerId_2, option: "ttbMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "inventoryItemsMoveable", value: boolean) => void) & ((playerId: PlayerId_2, option: "invincible", value: boolean) => void) & ((playerId: PlayerId_2, option: "maxShield", value: number) => void) & ((playerId: PlayerId_2, option: "initialShield", value: number) => void) & ((playerId: PlayerId_2, option: "maxHealth", value: number) => void) & ((playerId: PlayerId_2, option: "initialHealth", value: number) => void) & ((playerId: PlayerId_2, option: "healthRegenAmount", value: number) => void) & ((playerId: PlayerId_2, option: "healthRegenInterval", value: number) => void) & ((playerId: PlayerId_2, option: "healthRegenStartAfter", value: number) => void) & ((playerId: PlayerId_2, option: "effectDamageDuration", value: number) => void) & ((playerId: PlayerId_2, option: "effectSpeedDuration", value: number) => void) & ((playerId: PlayerId_2, option: "effectDamageReductionDuration", value: number) => void) & ((playerId: PlayerId_2, option: "effectHealthRegenDuration", value: number) => void) & ((playerId: PlayerId_2, option: "potionEffectDuration", value: number) => void) & ((playerId: PlayerId_2, option: "splashPotionEffectDuration", value: number) => void) & ((playerId: PlayerId_2, option: "arrowPotionEffectDuration", value: number) => void) & ((playerId: PlayerId_2, option: "fogChunkDistanceOverride", value: number) => void) & ((playerId: PlayerId_2, option: "fogColourOverride", value: string) => void) & ((playerId: PlayerId_2, option: "airAccScale", value: number) => void) & ((playerId: PlayerId_2, option: "airFrictionScale", value: number) => void) & ((playerId: PlayerId_2, option: "airMomentumConservation", value: boolean) => void) & ((playerId: PlayerId_2, option: "auraPerLevel", value: number) => void) & ((playerId: PlayerId_2, option: "autoRespawn", value: boolean) => void) & ((playerId: PlayerId_2, option: "cameraTint", value: [number, number, number, number]) => void) & ((playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "dealingDamageHeadMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "dealingDamageLegMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "dealingDamageMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "droppedItemScale", value: number) => void) & ((playerId: PlayerId_2, option: "fallDamage", value: boolean) => void) & ((playerId: PlayerId_2, option: "groundFrictionScale", value: number) => void) & ((playerId: PlayerId_2, option: "killstreakDuration", value: number) => void) & ((playerId: PlayerId_2, option: "maxAuraLevel", value: number) => void) & ((playerId: PlayerId_2, option: "movementBasedFovScale", value: number) => void) & ((playerId: PlayerId_2, option: "receivingDamageMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "respawnButtonText", value: string) => void) & ((playerId: PlayerId_2, option: "secsToRespawn", value: number) => void) & ((playerId: PlayerId_2, option: "usePlayAgainButton", value: boolean) => void);
    readonly getClientOption: (<TOption extends keyof ClientOptions_2>(playerId: PlayerId_2, option: TOption) => ClientOptions_2[TOption]) & ((playerId: PlayerId_2, option: "canChange") => boolean) & ((playerId: PlayerId_2, option: "crouchingSpeed") => number) & ((playerId: PlayerId_2, option: "walkingSpeed") => number) & ((playerId: PlayerId_2, option: "runningSpeed") => number) & ((playerId: PlayerId_2, option: "speedMultiplier") => number) & ((playerId: PlayerId_2, option: "jumpAmount") => number) & ((playerId: PlayerId_2, option: "airJumpCount") => number) & ((playerId: PlayerId_2, option: "bunnyhopMaxMultiplier") => number) & ((playerId: PlayerId_2, option: "musicVolumeLevel") => number) & ((playerId: PlayerId_2, option: "showPlayersInUnloadedChunks") => boolean) & ((playerId: PlayerId_2, option: "useInventory") => boolean) & ((playerId: PlayerId_2, option: "useFullInventory") => boolean) & ((playerId: PlayerId_2, option: "canCraft") => boolean) & ((playerId: PlayerId_2, option: "canPickUpItems") => boolean) & ((playerId: PlayerId_2, option: "playerZoom") => number) & ((playerId: PlayerId_2, option: "zoomOutDistance") => number) & ((playerId: PlayerId_2, option: "maxPlayerZoom") => number) & ((playerId: PlayerId_2, option: "canCustomiseChar") => boolean) & ((playerId: PlayerId_2, option: "defaultBlock") => string) & ((playerId: PlayerId_2, option: "cantChangeError") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "cantBreakError") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "cantBuildError") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "touchscreenActionButton") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "strictFluidBuckets") => boolean) & ((playerId: PlayerId_2, option: "canUseZoomKey") => boolean) & ((playerId: PlayerId_2, option: "canAltAction") => boolean) & ((playerId: PlayerId_2, option: "canSeeNametagsThroughWalls") => boolean) & ((playerId: PlayerId_2, option: "showBasicMovementControls") => boolean) & ((playerId: PlayerId_2, option: "middleTextUpper") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "middleTextLower") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "crosshairText") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "RightInfoText") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "numClosestPlayersVisible") => number) & ((playerId: PlayerId_2, option: "showProgressBar") => boolean) & ((playerId: PlayerId_2, option: "showKillfeed") => boolean) & ((playerId: PlayerId_2, option: "chatChannels") => {
        channelName: string;
        elementContent: string | CustomTextStyling_2;
        elementBgColor: string;
    }[]) & ((playerId: PlayerId_2, option: "creative") => boolean) & ((playerId: PlayerId_2, option: "flySpeedMultiplier") => number) & ((playerId: PlayerId_2, option: "canPickBlocks") => boolean) & ((playerId: PlayerId_2, option: "compassTarget") => string | number | number[]) & ((playerId: PlayerId_2, option: "ttbMultiplier") => number) & ((playerId: PlayerId_2, option: "inventoryItemsMoveable") => boolean) & ((playerId: PlayerId_2, option: "invincible") => boolean) & ((playerId: PlayerId_2, option: "maxShield") => number) & ((playerId: PlayerId_2, option: "initialShield") => number) & ((playerId: PlayerId_2, option: "maxHealth") => number) & ((playerId: PlayerId_2, option: "initialHealth") => number) & ((playerId: PlayerId_2, option: "healthRegenAmount") => number) & ((playerId: PlayerId_2, option: "healthRegenInterval") => number) & ((playerId: PlayerId_2, option: "healthRegenStartAfter") => number) & ((playerId: PlayerId_2, option: "effectDamageDuration") => number) & ((playerId: PlayerId_2, option: "effectSpeedDuration") => number) & ((playerId: PlayerId_2, option: "effectDamageReductionDuration") => number) & ((playerId: PlayerId_2, option: "effectHealthRegenDuration") => number) & ((playerId: PlayerId_2, option: "potionEffectDuration") => number) & ((playerId: PlayerId_2, option: "splashPotionEffectDuration") => number) & ((playerId: PlayerId_2, option: "arrowPotionEffectDuration") => number) & ((playerId: PlayerId_2, option: "fogChunkDistanceOverride") => number) & ((playerId: PlayerId_2, option: "fogColourOverride") => string) & ((playerId: PlayerId_2, option: "airAccScale") => number) & ((playerId: PlayerId_2, option: "airFrictionScale") => number) & ((playerId: PlayerId_2, option: "airMomentumConservation") => boolean) & ((playerId: PlayerId_2, option: "auraPerLevel") => number) & ((playerId: PlayerId_2, option: "autoRespawn") => boolean) & ((playerId: PlayerId_2, option: "cameraTint") => [number, number, number, number]) & ((playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier") => number) & ((playerId: PlayerId_2, option: "dealingDamageHeadMultiplier") => number) & ((playerId: PlayerId_2, option: "dealingDamageLegMultiplier") => number) & ((playerId: PlayerId_2, option: "dealingDamageMultiplier") => number) & ((playerId: PlayerId_2, option: "droppedItemScale") => number) & ((playerId: PlayerId_2, option: "fallDamage") => boolean) & ((playerId: PlayerId_2, option: "groundFrictionScale") => number) & ((playerId: PlayerId_2, option: "killstreakDuration") => number) & ((playerId: PlayerId_2, option: "maxAuraLevel") => number) & ((playerId: PlayerId_2, option: "movementBasedFovScale") => number) & ((playerId: PlayerId_2, option: "receivingDamageMultiplier") => number) & ((playerId: PlayerId_2, option: "respawnButtonText") => string) & ((playerId: PlayerId_2, option: "secsToRespawn") => number) & ((playerId: PlayerId_2, option: "usePlayAgainButton") => boolean);
    readonly setClientOptionToDefault: (<TOption extends keyof ClientOptions_2>(playerId: PlayerId_2, option: TOption) => void) & ((playerId: PlayerId_2, option: "canChange") => void) & ((playerId: PlayerId_2, option: "crouchingSpeed") => void) & ((playerId: PlayerId_2, option: "walkingSpeed") => void) & ((playerId: PlayerId_2, option: "runningSpeed") => void) & ((playerId: PlayerId_2, option: "speedMultiplier") => void) & ((playerId: PlayerId_2, option: "jumpAmount") => void) & ((playerId: PlayerId_2, option: "airJumpCount") => void) & ((playerId: PlayerId_2, option: "bunnyhopMaxMultiplier") => void) & ((playerId: PlayerId_2, option: "musicVolumeLevel") => void) & ((playerId: PlayerId_2, option: "showPlayersInUnloadedChunks") => void) & ((playerId: PlayerId_2, option: "useInventory") => void) & ((playerId: PlayerId_2, option: "useFullInventory") => void) & ((playerId: PlayerId_2, option: "canCraft") => void) & ((playerId: PlayerId_2, option: "canPickUpItems") => void) & ((playerId: PlayerId_2, option: "playerZoom") => void) & ((playerId: PlayerId_2, option: "zoomOutDistance") => void) & ((playerId: PlayerId_2, option: "maxPlayerZoom") => void) & ((playerId: PlayerId_2, option: "canCustomiseChar") => void) & ((playerId: PlayerId_2, option: "defaultBlock") => void) & ((playerId: PlayerId_2, option: "cantChangeError") => void) & ((playerId: PlayerId_2, option: "cantBreakError") => void) & ((playerId: PlayerId_2, option: "cantBuildError") => void) & ((playerId: PlayerId_2, option: "touchscreenActionButton") => void) & ((playerId: PlayerId_2, option: "strictFluidBuckets") => void) & ((playerId: PlayerId_2, option: "canUseZoomKey") => void) & ((playerId: PlayerId_2, option: "canAltAction") => void) & ((playerId: PlayerId_2, option: "canSeeNametagsThroughWalls") => void) & ((playerId: PlayerId_2, option: "showBasicMovementControls") => void) & ((playerId: PlayerId_2, option: "middleTextUpper") => void) & ((playerId: PlayerId_2, option: "middleTextLower") => void) & ((playerId: PlayerId_2, option: "crosshairText") => void) & ((playerId: PlayerId_2, option: "RightInfoText") => void) & ((playerId: PlayerId_2, option: "numClosestPlayersVisible") => void) & ((playerId: PlayerId_2, option: "showProgressBar") => void) & ((playerId: PlayerId_2, option: "showKillfeed") => void) & ((playerId: PlayerId_2, option: "chatChannels") => void) & ((playerId: PlayerId_2, option: "creative") => void) & ((playerId: PlayerId_2, option: "flySpeedMultiplier") => void) & ((playerId: PlayerId_2, option: "canPickBlocks") => void) & ((playerId: PlayerId_2, option: "compassTarget") => void) & ((playerId: PlayerId_2, option: "ttbMultiplier") => void) & ((playerId: PlayerId_2, option: "inventoryItemsMoveable") => void) & ((playerId: PlayerId_2, option: "invincible") => void) & ((playerId: PlayerId_2, option: "maxShield") => void) & ((playerId: PlayerId_2, option: "initialShield") => void) & ((playerId: PlayerId_2, option: "maxHealth") => void) & ((playerId: PlayerId_2, option: "initialHealth") => void) & ((playerId: PlayerId_2, option: "healthRegenAmount") => void) & ((playerId: PlayerId_2, option: "healthRegenInterval") => void) & ((playerId: PlayerId_2, option: "healthRegenStartAfter") => void) & ((playerId: PlayerId_2, option: "effectDamageDuration") => void) & ((playerId: PlayerId_2, option: "effectSpeedDuration") => void) & ((playerId: PlayerId_2, option: "effectDamageReductionDuration") => void) & ((playerId: PlayerId_2, option: "effectHealthRegenDuration") => void) & ((playerId: PlayerId_2, option: "potionEffectDuration") => void) & ((playerId: PlayerId_2, option: "splashPotionEffectDuration") => void) & ((playerId: PlayerId_2, option: "arrowPotionEffectDuration") => void) & ((playerId: PlayerId_2, option: "fogChunkDistanceOverride") => void) & ((playerId: PlayerId_2, option: "fogColourOverride") => void) & ((playerId: PlayerId_2, option: "airAccScale") => void) & ((playerId: PlayerId_2, option: "airFrictionScale") => void) & ((playerId: PlayerId_2, option: "airMomentumConservation") => void) & ((playerId: PlayerId_2, option: "auraPerLevel") => void) & ((playerId: PlayerId_2, option: "autoRespawn") => void) & ((playerId: PlayerId_2, option: "cameraTint") => void) & ((playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier") => void) & ((playerId: PlayerId_2, option: "dealingDamageHeadMultiplier") => void) & ((playerId: PlayerId_2, option: "dealingDamageLegMultiplier") => void) & ((playerId: PlayerId_2, option: "dealingDamageMultiplier") => void) & ((playerId: PlayerId_2, option: "droppedItemScale") => void) & ((playerId: PlayerId_2, option: "fallDamage") => void) & ((playerId: PlayerId_2, option: "groundFrictionScale") => void) & ((playerId: PlayerId_2, option: "killstreakDuration") => void) & ((playerId: PlayerId_2, option: "maxAuraLevel") => void) & ((playerId: PlayerId_2, option: "movementBasedFovScale") => void) & ((playerId: PlayerId_2, option: "receivingDamageMultiplier") => void) & ((playerId: PlayerId_2, option: "respawnButtonText") => void) & ((playerId: PlayerId_2, option: "secsToRespawn") => void) & ((playerId: PlayerId_2, option: "usePlayAgainButton") => void);
    readonly setClientOptions: (playerId: PlayerId_2, options: Partial<ClientOptions_2>) => void;
    readonly getPlayerPhysicsState: (playerId: PlayerId_2) => PlayerPhysicsStateData_2;
    readonly setPlayerPhysicsState: (playerId: PlayerId_2, physicsState: PlayerPhysicsStateData_2, positionOffset?: [number, number, number]) => void;
    readonly attemptCreateMeshEntity: <TMeshType extends MeshType_2>(type: TMeshType, opts: MeshEntityOpts_2[TMeshType], name?: string, physicsOptions?: MeshEntityPhysicsOpts_2, initiatorId?: EntityId_2 | null) => EntityId_2 | null;
    readonly deleteMeshEntity: (eId: EntityId_2) => boolean;
    readonly updateMeshEntity: <TMeshType extends MeshType_2>(eId: EntityId_2, type: TMeshType, opts: MeshEntityOpts_2[TMeshType]) => void;
    readonly editItemCraftingRecipes: (playerId: PlayerId_2, itemName: ItemName_2, recipesForItem: RecipesForItem_2) => void;
    readonly removeItemCraftingRecipes: (playerId: PlayerId_2, itemName: null | ItemName_2) => void;
    readonly resetItemCraftingRecipes: (playerId: PlayerId_2, itemName: ItemName_2 | null) => void;
    readonly addQTE: (playerId: PlayerId_2, qteParameters: QTEClientParameters_2) => QTERequestId_2;
    readonly deleteQTE: (playerId: PlayerId_2, id: QTERequestId_2) => void;
    readonly hasActiveQTE: (playerId: PlayerId_2) => boolean;
    readonly attemptCreateThrowable: (throwerEId: EntityId_2, itemName: ThrowableItem_2, position: Coordinate_2, direction: Direcrion_2, velocityMult?: number, damageMult?: number, gravityMult?: number, attributes?: ItemAttributes_2) => EntityId_2 | null;
    readonly deleteThrowable: (eId: EntityId_2) => boolean;
    readonly setPlayerOpacity: (playerId: PlayerId_2, opacity: number) => void;
    readonly setPlayerOpacityForOnePlayer: (playerIdWhoViewsOpacityPlayer: PlayerId_2, playerIdOfOpacityPlayer: PlayerId_2, opacity: number) => void;
    readonly getPlayerFacingInfo: (playerId: PlayerId_2) => {
        camPos: Coordinate_2;
        dir: Direcrion_2;
        angleDir: AngleDir_2;
        moveHeading: number;
    };
    readonly getPlayerTargetInfo: (playerId: PlayerId_2) => {
        position: Coordinate_2;
        normal: Coordinate_2;
        adjacent: Coordinate_2;
    };
    readonly setCameraDirection: (playerId: PlayerId_2, direction: Direcrion_2) => void;
    readonly setCameraZoom: (playerId: PlayerId_2, zoom: number) => void;
    readonly initiateMiddleScreenBar: (playerId: PlayerId_2, duration: number, chargeExpiresAutomatically?: boolean, horizontalBarRemOffset?: number) => void;
    readonly removeMiddleScreenBar: (playerId: PlayerId_2) => void;
    readonly attemptSpawnMob: <TMobType extends MobType_2>(mobType: TMobType, x: number, y: number, z: number, opts: MobSpawnOpts_2<TMobType>) => MobId_2 | null;
    readonly createMobHerd: () => MobHerdId_2;
    readonly despawnMob: (mobId: MobId_2) => void;
    readonly getMobAiState: (mobId: MobId_2) => {
        state: MobAiState_2;
        params: MobAiStateParams_2<MobAiState_2>;
    };
    readonly getMobIds: () => MobId_2[];
    readonly getNumMobs: () => number;
    readonly setMobAiState: <TState extends MobAiState_2>(mobId: MobId_2, state: TState, params: MobAiStateParams_2<TState>) => void;
    readonly getLobbyName: () => null | string;
    readonly getLobbyType: () => LobbyType_2;
    readonly isPublicLobby: () => boolean;
    readonly broadcastSound: (soundName: SoundName_2 | string, volume: number, rate: number, posSettings?: PosSettings_2, exceptPlayerId?: PlayerId_2) => void;
    readonly playClientPredictedSound: (soundName: SoundName_2 | string, volume: number, rate: number, posSettings?: PosSettings_2, predictedBy?: PlayerId_2) => void;
    readonly playSound: (playerId: PlayerId_2, soundName: SoundName_2 | string, volume: number, rate: number, posSettings?: PosSettings_2) => void;
    readonly setVelocity: (eId: EntityId_2, x: number, y: number, z: number) => void;
    readonly getVelocity: (eId: EntityId_2) => [number, number, number];
    readonly applyImpulse: (eId: EntityId_2, xImpulse: number, yImpulse: number, zImpulse: number) => void;
    readonly applyEffect: {
        (lifeformId: LifeformId_2, effectName: InGameEffectName_2, duration: number | null, customEffectInfo: {
            icon?: IngameIconName_2 | ItemName_2 | string;
            onEndCb?: () => void;
            displayName?: string | TranslatedText_2;
            inbuildLevel?: number;
        }): void;
        (lifeformId: LifeformId_2, effectName: string, duration: number | null, customEffectInfo: {
            icon?: IngameIconName_2 | ItemName_2 | string;
            onEndCb?: () => void;
            displayName?: string | TranslatedText_2;
            inbuildLevel: number;
        }): void;
    };
    readonly removeEffect: (lifeformId: LifeformId_2, name: string) => void;
    readonly getEffects: (lifeformId: LifeformId_2) => string[];
    readonly clearDirectionArrow: (playerId: PlayerId_2, id?: string | null) => void;
    readonly setDirectionArrow: (playerId: PlayerId_2, id: string, position: Coordinate_2, text?: null | string | CustomTextStyling_2, showDistance?: boolean, style?: null | TextStyle_2) => void;
    readonly getBlockData: (x: number, y: number, z: number) => object | null | undefined;
    readonly setBlockData: (x: number, y: number, z: number, data: object) => void;
    readonly calcExplosionForce: (eId: EntityId_2, explosionType: ExplosionType_2, knockbackFactor: number, explosionRadius: number, explosionPos: Coordinate_2, ignoreProjectiles: boolean) => {
        force: Coordinate_2;
        forceFrac: number;
    };
    readonly isInsideRect: (coordsToCheck: Coordinate_2, pos1: Coordinate_2, pos2: Coordinate_2, addOneToMax?: boolean) => boolean;
    readonly now: () => number;
    readonly raycastForBlock: (fromPos: Coordinate_2, dirVec: Direcrion_2) => BlockRaycastResult_2;
    readonly applyAuraChange: (playerId: PlayerId_2, auraDiff: number) => number;
    readonly getAuraInfo: (player: PlayerId_2) => {
        level: number;
        totalAura: number;
        auraPerLevel: number;
    };
    readonly setTotalAura: (playerId: PlayerId_2, totalAura: number) => void;
    readonly getMoonstoneChestItemSlot: (playerId: number, idx: number) => ItemObject_2 | null;
    readonly getMoonstoneChestItems: (playerId: number) => (ItemObject_2 | null)[];
    readonly setMoonstoneChestItemSlot: (playerId: number, idx: number, itemName: string, itemAmount?: number, attributes?: ItemAttributes_2) => void;
    readonly canOpenStandardChest: (playerId: PlayerId_2, chestX: number, chestY: number, chestZ: number) => boolean | null;
    readonly openChestForPlayer: (playerId: PlayerId_2, x: number, y: number, z: number) => void;
    readonly closeChestForPlayer: (playerId: PlayerId_2) => void;
    readonly giveStandardChestItem: (chestPos: Coordinate_2, itemName: ItemName_2, itemAmount?: number, playerId?: PlayerId_2, attributes?: ItemAttributes_2) => number;
    readonly getStandardChestFreeSlotCount: (chestPos: Coordinate_2) => number | null;
    readonly getStandardChestItemAmount: (chestPos: Coordinate_2, itemName: ItemName_2) => number;
    readonly getStandardChestItemSlot: (chestPos: Coordinate_2, idx: number) => ItemObject_2 | null;
    readonly getStandardChestItems: (chestPos: Coordinate_2) => (ItemObject_2 | null)[];
    readonly setStandardChestItemSlot: (chestPos: Coordinate_2, idx: number, itemName: string, itemAmount?: number, playerId?: number, attributes?: any) => void;
    readonly setWalkThroughRect: (playerId: PlayerId_2, pos1: Coordinate_2, pos2: Coordinate_2, updateType: WalkThroughType_2) => void;
    readonly setWalkThroughType: (playerId: PlayerId_2, blockName: BlockName_2, disable?: boolean) => void;
    readonly setCanChangeBlock: (playerId: PlayerId_2, x: number, y: number, z: null) => void;
    readonly setCanChangeBlockRect: (playerId: PlayerId_2, pos1: Coordinate_2, pos2: Coordinate_2) => void;
    readonly setCanChangeBlockType: (playerId: PlayerId_2, blockName: BlockNameOrId_2) => void;
    readonly setCantChangeBlock: (playerId: PlayerId_2, x: number, y: number, z: number) => void;
    readonly setCantChangeBlockRect: (playerId: PlayerId_2, pos1: Coordinate_2, pos2: Coordinate_2) => void;
    readonly setCantChangeBlockType: (playerId: PlayerId_2, blockName: BlockNameOrId_2) => void;
    readonly resetCanChangeBlockType: (playerId: PlayerId_2, blockName: BlockNameOrId_2) => void;
    readonly resetCanChangeBlockRect: (playerId: PlayerId_2, pos1: Coordinate_2, pos2: Coordinate_2) => void;
    readonly getEntityName: (entityId: EntityId_2) => string;
    readonly checkValid: (entityId: EntityId_2 | null) => boolean;
    readonly getUnitCoordinatesLifeformWithin: (lifeformId: LifeformId_2) => Coordinate_2[];
    readonly getEntitiesInRect: (minCoords: Coordinate_2, maxCoords: Coordinate_2) => EntityId_2[];
    readonly getEntityHeading: (entityId: EntityId_2) => Radian_2;
    readonly getEntityRotation: (entityId: EntityId_2) => [Radian_2, Radian_2, Radian_2];
    readonly getEntityType: (entityId: EntityId_2) => EntityType_2;
    readonly setEntityHeading: (entityId: EntityId_2, newHeading: Radian_2) => void;
    readonly setEntityRotation: (entityId: EntityId_2, xRotation: Radian_2, yRotation: Radian_2, zRotation: Radian_2) => void;
    readonly updateEntityNodeMeshAttachment: {
        <TMeshType extends MeshType_2>(eId: EntityId_2, node: LifeformBodyPart_2, type: TMeshType, opts?: MeshEntityOpts_2[TMeshType], offset?: [number, number, number], rotation?: Rotation_2): void;
        (eId: EntityId_2, node: LifeformBodyPart_2, type: null): void;
    };
    readonly getPlayerIds: () => PlayerId_2[];
    readonly getNumPlayers: () => number;
    readonly getPlayerPartyWhenJoined: (playerId: PlayerId_2) => Party_2 | null;
    readonly playerIsInGame: (playerId: PlayerId_2) => boolean;
    readonly playerIsLoggedIn: (playerId: PlayerId_2) => boolean;
    readonly getPlayerId: (playerName: string) => null | PlayerId_2;
    readonly getPlayerDbId: (playerId: PlayerId_2) => PlayerDbId_2;
    readonly getPlayerIdFromDbId: (dbId: PlayerDbId_2) => null | PlayerId_2;
    readonly kickPlayer: (playerId: PlayerId_2, reason: string) => void;
    readonly isMobile: (playerId: PlayerId_2) => boolean;
    readonly forceRespawn: (playerId: PlayerId_2, respawnPos?: Readonly<Coordinate_2>) => void;
    readonly getPlayerCosmetic: <TCosmeticType extends CosmeticType_2>(playerId: PlayerId_2, cosmeticType: TCosmeticType) => CosmeticName_2<TCosmeticType>;
    readonly changePlayerIntoSkin: <TCosmeticType extends CosmeticType_2>(playerId: PlayerId_2, cosmeticType: TCosmeticType, cosmeticName: CosmeticName_2<TCosmeticType>) => void;
    readonly setPlayerPose: (playerId: PlayerId_2, pose: PlayerPose_2, poseOffset?: [number, number, number]) => void;
    readonly broadcastMessage: (message: string | CustomTextStyling_2, style?: {
        fontWeight?: number | string;
        color?: string;
    }) => void;
    readonly sendMessage: {
        (playerId: PlayerId_2, message: string, style: {
            fontWeight?: number | string;
            color?: string;
        }): void;
        (playerId: PlayerId_2, message: CustomTextStyling_2): void;
    };
    readonly sendFlyingMiddleMessage: (playerId: PlayerId_2, message: string | CustomTextStyling_2, distanceFromAction?: number, lifetimeMs?: number) => void;
    readonly sendTopRightHelper: (playerId: PlayerId_2, icon: string, text: string, opts: {
        duration?: number;
        width?: number;
        height?: number;
        color?: StringColor_2;
        iconSizeMult?: number;
        textAndIconColor?: string;
        fontSize?: string;
    }) => void;
    readonly getCurrentKillstreak: (playerId: PlayerId_2) => number;
    readonly clearKillstreak: (playerId: PlayerId_2) => void;
    readonly createItemDrop: (x: number, y: number, z: number, itemName: ItemName_2, amount?: number | null, margeItems?: boolean, attributes?: ItemAttributes_2, timeTillDespawn?: number, dropperId?: LifeformId_2 | null, options?: never) => null | ItemEntityId_2;
    readonly setCantPickUpItem: (playerId: PlayerId_2, itemId: ItemEntityId_2) => void;
    readonly deleteItemDrop: (itemId: ItemEntityId_2) => void;
    readonly giveItem: (playerId: PlayerId_2, itemName: ItemName_2, itemAmount: number, attributes: ItemAttributes_2) => void;
    readonly inventoryIsFull: (playerId: PlayerId_2) => boolean;
    readonly setItemSlot: (playerId: PlayerId_2, itemSlotIndex: number, itemName: ItemName_2, itemAmount: number, attributes: ItemAttributes_2, tellClient: boolean) => void;
    readonly removeItemName: (playerId: PlayerId_2, itemName: ItemName_2, amount: number) => void;
    readonly getItemSlot: (playerId: PlayerId_2, itemSlotIndex: number) => ItemObject_2 | null;
    readonly clearInventory: (playerId: PlayerId_2) => void;
    readonly hasItem: (playerId: PlayerId_2, itemName: Item_2) => boolean;
    readonly getInventoryItemAmount: (playerId: PlayerId_2, itemName: Item_2) => number;
    readonly getSelectedInventorySlotI: (playerId: PlayerId_2) => number;
    readonly getHeldItem: (playerId: PlayerId_2) => ItemObject_2 | null;
    readonly getInventoryFreeSlotCount: (playerId: PlayerId_2) => number;
    readonly getInitialItemMetadata: (itemName: Item_2) => Partial<BlockMetadataItem_2 & NonBlockMetadataItem_2>;
    readonly setItemAmount: (itemId: ItemId_2, newAmount: number) => void;
    readonly setSelectedInventorySlotI: (playerId: PlayerId_2, newI: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) => void;
    readonly getItemStat: (lifeformId: LifeformId_2 | null, itemName: ItemName_2, stat: string) => AnyMetadataItem_2;
    readonly getHealth: (entityId: EntityId_2) => Health_2;
    readonly setHealth: (entityId: EntityId_2, newHealth: Health_2 | null, whoDidDamage?: Readonly<WhoDidDamage_2>, increaseMaxHealthIfNeeded?: boolean) => boolean;
    readonly attemptApplyDamage: (options: Readonly<PlayerAttemptDamageOtherPlayerOpts_2>) => boolean;
    readonly applyMeleeHit: (hittingEId: LifeformId_2, hitEId: LifeformId_2, dirFacing: Readonly<Direcrion_2>, bodyPartHit?: LifeformBodyPart_2 | null, overrides?: Readonly<applyMeleeHitOverrides_2>) => boolean;
    readonly applyHealthChange: (lifeformId: LifeformId_2, changeAmount: number, whoDidDamage?: Readonly<WhoDidDamage_2>, broadcastLifeformHurt?: boolean) => boolean;
    readonly killLifeform: (lifeformId: LifeformId_2, whoKilled?: WhoKilled_2) => void;
    readonly isAlive: (lifeformId: LifeformId_2) => boolean;
    readonly getBlockCoordinatesPlayerStandingOn: (playerId: PlayerId_2) => Coordinate_2[];
    readonly getBlockTypesPlayerStandingOn: (playerId: PlayerId_2) => BlockName_2[];
    readonly getPosition: (entityId: EntityId_2) => Coordinate_2;
    readonly setPosition: {
        (entityId: EntityId_2, x: number, y: number, z: number): void;
        (entityId: EntityId_2, position: Readonly<Coordinate_2>): void;
    };
    readonly getShieldAmount: (entityId: EntityId_2) => ShieldAmount_2;
    readonly setShieldAmount: (lifeformId: LifeformId_2, newShieldAmount: ShieldAmount_2) => void;
    readonly showShopTutorial: (playerId: PlayerId_2) => void;
    readonly createShopItem: (categoryKey: ShopCategoryKey_2, itemKey: ShopItemKey_2, item: ShopItem_2) => void;
    readonly updateShopItem: (categoryKey: ShopCategoryKey_2, itemKey: ShopItemKey_2, changes: Partial<ShopItem_2>) => void;
    readonly deleteShopItem: (categoryKey: ShopCategoryKey_2, itemKey: ShopItemKey_2) => void;
    readonly configureShopCategory: (categoryKey: ShopCategoryKey_2, config: ShopCategoryConfig_2) => void;
    readonly createShopItemForPlayer: (playerId: PlayerId_2, categoryKey: ShopCategoryKey_2, itemKey: ShopItemKey_2, item: ShopItem_2) => void;
    readonly updateShopItemForPlayer: (playerId: PlayerId_2, categoryKey: ShopCategoryKey_2, itemKey: ShopItemKey_2, changes: Partial<ShopItem_2>) => void;
    readonly resetShopItemForPlayer: (playerId: PlayerId_2, categoryKey: ShopCategoryKey_2, itemKey: ShopItemKey_2) => void;
    readonly configureShopCategoryForPlayer: (playerId: PlayerId_2, categoryKey: ShopCategoryKey_2, config: ShopCategoryConfig_2) => void;
    readonly sendOverShopInfo: (playerId: PlayerId_2, info: string | CustomTextStyling_2) => void;
    readonly openShop: (playerId: PlayerId_2, toggle?: boolean, forceCategoryKey?: ShopCategoryKey_2 | null, onlyIfNonEmpty?: boolean) => void;
    readonly playParticleEffect: (opts: TempParticleSystemOpts_2 | ParticlePresetOpts_2, clientPredictedBy?: PlayerId_2) => void;
    readonly setCallbackValueFallback: (callbackName: CallbackName_2, defaultValue: any) => void;
};

export declare type applyMeleeHitOverrides = {
    damage?: number | null;
    heldItemName?: Item_2 | null;
    horizontalKbMultiplier?: number;
    verticalKbMultiplier?: number;
};

declare type applyMeleeHitOverrides_2 = {
    damage?: number | null;
    heldItemName?: Item_2 | null;
    horizontalKbMultiplier?: number;
    verticalKbMultiplier?: number;
};

/**
 * RGB array (0 - 255)
 * [0 - 255,0 - 255,0 - 255]
 * @example
 * red is [255,0,0]
 * green is [0,255,0]
 */
export declare type Array255Color = [number, number, number];

/**
 * RGB array (0 - 255)
 * [0 - 255,0 - 255,0 - 255]
 * @example
 * red is [255,0,0]
 * green is [0,255,0]
 */
declare type Array255Color_2 = [number, number, number];

/**
 * RGBA array (0 - 255)
 *
 * [0 - 255,0 - 255,0 - 255,0 - 1]
 * @example
 * red is [255,0,0,1]
 *
 * water is like [0,255,0,0.5]
 */
export declare type Array255ColorWithA = [number, number, number, number];

/**
 * RGBA array (0 - 255)
 *
 * [0 - 255,0 - 255,0 - 255,0 - 1]
 * @example
 * red is [255,0,0,1]
 *
 * water is like [0,255,0,0.5]
 */
declare type Array255ColorWithA_2 = [number, number, number, number];

export declare type AttackDamage<K extends MobType_2> = AttackDamageDictionary[K];

declare type AttackDamageDictionary = Record<MobType_2, number>;

export declare type AttackEffectDuration<K extends MobType_2> = AttackEffectDurationDictionary[K];

declare type AttackEffectDurationDictionary = Record<MobType_2, number>;

export declare type AttackEffectName<K extends MobType_2> = AttackEffectNameDictionary[K];

declare type AttackEffectNameDictionary = Record<MobType_2, string | null>;

export declare type AttackImpulse<K extends MobType_2> = AttackImpulseDictionary[K];

declare type AttackImpulseDictionary = Record<MobType_2, number>;

export declare type AttackInterval<K extends MobType_2> = AttackIntervalDictionary[K];

declare type AttackIntervalDictionary = Record<MobType_2, number>;

export declare type AttackItemName<K extends MobType_2> = AttackItemNameDictionary[K];

declare type AttackItemNameDictionary = Record<MobType_2, Item_2 | null>;

export declare type AttackRadius<K extends MobType_2> = AttackRadiusDictionary[K];

declare type AttackRadiusDictionary = Record<MobType_2, number>;

export declare type AttackSound<K extends MobType_2> = AttackSoundDictionary[K];

declare type AttackSoundDictionary = Record<MobType_2, SoundName_2 | null>;

export declare type BaseJumpImpulseXZ<K extends MobType_2> = BaseJumpImpulseXZDictionary[K];

declare type BaseJumpImpulseXZDictionary = Record<MobType_2, number>;

export declare type BaseJumpImpulseY<K extends MobType_2> = BaseJumpImpulseYDictionary[K];

declare type BaseJumpImpulseYDictionary = Record<MobType_2, number>;

export declare type BaseRunningSpeed<K extends MobType_2> = BaseRunningSpeedDictionary[K];

declare type BaseRunningSpeedDictionary = Record<MobType_2, number>;

export declare type BaseWalkingSpeed<K extends MobType_2> = BaseWalkingSpeedDictionary[K];

declare type BaseWalkingSpeedDictionary = Record<MobType_2, number>;

export declare type BlockId = AllBlockID;

declare type BlockId_2 = AllBlockID_2;

export declare type BlockMetadataItem = any;

declare type BlockMetadataItem_2 = any;

export declare type BlockName = AllBlockName;

declare type BlockName_2 = AllBlockName_2;

export declare type BlockNameOrId = BlockId | BlockName;

declare type BlockNameOrId_2 = BlockId_2 | BlockName_2;

export declare type BlockRaycastResult = any;

declare type BlockRaycastResult_2 = any;

export declare type BloxdBlockOpts = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2;
    blockName: BlockNameOrId_2;
    size: number | [number, number, number];
};

declare type BloxdBlockOpts_2 = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2; // EntityId to connect to using a line
    blockName: BlockNameOrId_2;
    size: number | [number, number, number];
};

export declare type BodyCosmetic = "body_0_0" | "body_0_1" | "body_0_2" | "body_0_3" | "body_0_4" | "body_0_5" | "body_0_6" | "body_0_7" | "body_1_0" | "body_1_1" | "body_1_2" | "body_1_3" | "body_1_4" | "body_1_5" | "body_1_6" | "body_1_7" | "body_2_0" | "body_2_1" | "body_2_2" | "body_2_3" | "body_2_4" | "body_2_5" | "body_2_6" | "body_2_7" | "body_3_0" | "body_3_1" | "body_3_2" | "body_3_3" | "body_3_4" | "body_3_5" | "body_3_6" | "body_3_7" | "body_4_0" | "body_4_1" | "body_4_2" | "body_4_3" | "body_4_4" | "body_4_5" | "body_4_6" | "body_4_7" | "body_5_0" | "body_5_1" | "body_5_2" | "body_5_3" | "body_5_4" | "body_5_5" | "body_5_6" | "body_5_7" | "body_6_0" | "body_6_1" | "body_6_2" | "body_6_3" | "body_6_4" | "body_6_5" | "body_6_6" | "body_6_7";

declare type BodyCosmetic_2 =
| "body_0_0"
| "body_0_1"
| "body_0_2"
| "body_0_3"
| "body_0_4"
| "body_0_5"
| "body_0_6"
| "body_0_7"
| "body_1_0"
| "body_1_1"
| "body_1_2"
| "body_1_3"
| "body_1_4"
| "body_1_5"
| "body_1_6"
| "body_1_7"
| "body_2_0"
| "body_2_1"
| "body_2_2"
| "body_2_3"
| "body_2_4"
| "body_2_5"
| "body_2_6"
| "body_2_7"
| "body_3_0"
| "body_3_1"
| "body_3_2"
| "body_3_3"
| "body_3_4"
| "body_3_5"
| "body_3_6"
| "body_3_7"
| "body_4_0"
| "body_4_1"
| "body_4_2"
| "body_4_3"
| "body_4_4"
| "body_4_5"
| "body_4_6"
| "body_4_7"
| "body_5_0"
| "body_5_1"
| "body_5_2"
| "body_5_3"
| "body_5_4"
| "body_5_5"
| "body_5_6"
| "body_5_7"
| "body_6_0"
| "body_6_1"
| "body_6_2"
| "body_6_3"
| "body_6_4"
| "body_6_5"
| "body_6_6"
| "body_6_7";

export declare type BoxOpts = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2;
    width: number;
    height: number;
    depth: number;
    diffuseColor?: number[];
    emissiveColor?: number[];
    backFaceCulling?: boolean;
    texture?: BlockName_2;
    faceUV?: number[][];
};

declare type BoxOpts_2 = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2; // EntityId to connect to using a line
    width: number;
    height: number;
    depth: number;
    diffuseColor?: number[];
    emissiveColor?: number[];
    backFaceCulling?: boolean; // Default true
    texture?: BlockName_2; // Can be a blockname. Wraps every one block
    faceUV?: number[][];
};

export declare type BurstAttackInfo<K extends MobType_2> = BurstAttackInfoDictionary[K];

declare type BurstAttackInfoDictionary = Record<MobType_2, {
    burstAttackIntervals: readonly number[];
} | null>;

export declare type CallbackName = "tick" | "onClose" | "onPlayerJoin" | "onPlayerLeave" | "onPlayerJump" | "onRespawnRequest" | "playerCommand" | "onPlayerChat" | "onPlayerChangeBlock" | "onPlayerDropItem" | "onPlayerPickedUpItem" | "onPlayerSelectInventorySlot" | "onBlockStand" | "onPlayerAttemptCraft" | "onPlayerCraft" | "onPlayerAttemptOpenChest" | "onPlayerOpenedChest" | "onPlayerMoveItemOutOfInventory" | "onPlayerMoveInvenItem" | "onPlayerMoveItemIntoIdxs" | "onPlayerSwapInvenSlots" | "onPlayerMoveInvenItemWithAmt" | "onPlayerAttemptAltAction" | "onPlayerAltAction" | "onPlayerClick" | "onClientOptionUpdated" | "onMobSettingUpdated" | "onInventoryUpdated" | "onChestUpdated" | "onWorldChangeBlock" | "onCreateBloxdMeshEntity" | "onEntityCollision" | "onPlayerAttemptSpawnMob" | "onWorldAttemptSpawnMob" | "onPlayerSpawnMob" | "onWorldSpawnMob" | "onWorldAttemptDespawnMob" | "onMobDespawned" | "onPlayerAttack" | "onPlayerDamagingOtherPlayer" | "onPlayerDamagingMob" | "onMobDamagingPlayer" | "onMobDamagingOtherMob" | "onAttemptKillPlayer" | "onPlayerKilledOtherPlayer" | "onMobKilledPlayer" | "onPlayerKilledMob" | "onMobKilledOtherMob" | "onPlayerPotionEffect" | "onPlayerDamagingMeshEntity" | "onPlayerBreakMeshEntity" | "onPlayerUsedThrowable" | "onPlayerThrowableHitTerrain" | "onTouchscreenActionButton" | "onTaskClaimed" | "onChunkLoaded" | "onPlayerRequestChunk" | "onItemDropCreated" | "onPlayerStartChargingItem" | "onPlayerFinishChargingItem" | "onPlayerFinishQTE" | "onPlayerBoughtShopItem" | "doPeriodicSave";

declare type CallbackName_2 =
| "tick"
| "onClose"
| "onPlayerJoin"
| "onPlayerLeave"
| "onPlayerJump"
| "onRespawnRequest"
| "playerCommand"
| "onPlayerChat"
| "onPlayerChangeBlock"
| "onPlayerDropItem"
| "onPlayerPickedUpItem"
| "onPlayerSelectInventorySlot"
| "onBlockStand"
| "onPlayerAttemptCraft"
| "onPlayerCraft"
| "onPlayerAttemptOpenChest"
| "onPlayerOpenedChest"
| "onPlayerMoveItemOutOfInventory"
| "onPlayerMoveInvenItem"
| "onPlayerMoveItemIntoIdxs"
| "onPlayerSwapInvenSlots"
| "onPlayerMoveInvenItemWithAmt"
| "onPlayerAttemptAltAction"
| "onPlayerAltAction"
| "onPlayerClick"
| "onClientOptionUpdated"
| "onMobSettingUpdated"
| "onInventoryUpdated"
| "onChestUpdated"
| "onWorldChangeBlock"
| "onCreateBloxdMeshEntity"
| "onEntityCollision"
| "onPlayerAttemptSpawnMob"
| "onWorldAttemptSpawnMob"
| "onPlayerSpawnMob"
| "onWorldSpawnMob"
| "onWorldAttemptDespawnMob"
| "onMobDespawned"
| "onPlayerAttack"
| "onPlayerDamagingOtherPlayer"
| "onPlayerDamagingMob"
| "onMobDamagingPlayer"
| "onMobDamagingOtherMob"
| "onAttemptKillPlayer"
| "onPlayerKilledOtherPlayer"
| "onMobKilledPlayer"
| "onPlayerKilledMob"
| "onMobKilledOtherMob"
| "onPlayerPotionEffect"
| "onPlayerDamagingMeshEntity"
| "onPlayerBreakMeshEntity"
| "onPlayerUsedThrowable"
| "onPlayerThrowableHitTerrain"
| "onTouchscreenActionButton"
| "onTaskClaimed"
| "onChunkLoaded"
| "onPlayerRequestChunk"
| "onItemDropCreated"
| "onPlayerStartChargingItem"
| "onPlayerFinishChargingItem"
| "onPlayerFinishQTE"
| "onPlayerBoughtShopItem"
| "doPeriodicSave";

export declare type ChaseRadius<K extends MobType_2> = ChaseRadiusDictionary[K];

declare type ChaseRadiusDictionary = Record<MobType_2, number>;

export declare type ChunkId = `${number}|${number}|${number}`;

export declare const ClientOptionApis: {
    setClientOption: (<TOption extends keyof ClientOptions>(playerId: PlayerId_2, option: TOption, value: ClientOptions[TOption]) => void) & {
        (playerId: PlayerId_2, option: "canChange", value: true): void;
        (playerId: PlayerId_2, option: "canChange", value: false): void;
    } & ((playerId: PlayerId_2, option: "crouchingSpeed", value: number) => void) & ((playerId: PlayerId_2, option: "walkingSpeed", value: number) => void) & ((playerId: PlayerId_2, option: "runningSpeed", value: number) => void) & ((playerId: PlayerId_2, option: "speedMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "jumpAmount", value: number) => void) & ((playerId: PlayerId_2, option: "airJumpCount", value: number) => void) & ((playerId: PlayerId_2, option: "bunnyhopMaxMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "musicVolumeLevel", value: number) => void) & ((playerId: PlayerId_2, option: "showPlayersInUnloadedChunks", value: boolean) => void) & ((playerId: PlayerId_2, option: "useInventory", value: boolean) => void) & ((playerId: PlayerId_2, option: "useFullInventory", value: boolean) => void) & ((playerId: PlayerId_2, option: "canCraft", value: boolean) => void) & ((playerId: PlayerId_2, option: "canPickUpItems", value: boolean) => void) & ((playerId: PlayerId_2, option: "playerZoom", value: number) => void) & ((playerId: PlayerId_2, option: "zoomOutDistance", value: number) => void) & ((playerId: PlayerId_2, option: "maxPlayerZoom", value: number) => void) & ((playerId: PlayerId_2, option: "canCustomiseChar", value: boolean) => void) & ((playerId: PlayerId_2, option: "defaultBlock", value: string) => void) & ((playerId: PlayerId_2, option: "cantChangeError", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "cantBreakError", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "cantBuildError", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "touchscreenActionButton", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "strictFluidBuckets", value: boolean) => void) & ((playerId: PlayerId_2, option: "canUseZoomKey", value: boolean) => void) & ((playerId: PlayerId_2, option: "canAltAction", value: boolean) => void) & ((playerId: PlayerId_2, option: "canSeeNametagsThroughWalls", value: boolean) => void) & ((playerId: PlayerId_2, option: "showBasicMovementControls", value: boolean) => void) & ((playerId: PlayerId_2, option: "middleTextUpper", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "middleTextLower", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "crosshairText", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "RightInfoText", value: string | CustomTextStyling_2) => void) & ((playerId: PlayerId_2, option: "numClosestPlayersVisible", value: number) => void) & ((playerId: PlayerId_2, option: "showProgressBar", value: boolean) => void) & ((playerId: PlayerId_2, option: "showKillfeed", value: boolean) => void) & ((playerId: PlayerId_2, option: "chatChannels", value: {
        channelName: string;
        elementContent: string | CustomTextStyling_2;
        elementBgColor: string;
    }[]) => void) & ((playerId: PlayerId_2, option: "creative", value: boolean) => void) & ((playerId: PlayerId_2, option: "flySpeedMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "canPickBlocks", value: boolean) => void) & ((playerId: PlayerId_2, option: "compassTarget", value: string | number | number[]) => void) & ((playerId: PlayerId_2, option: "ttbMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "inventoryItemsMoveable", value: boolean) => void) & ((playerId: PlayerId_2, option: "invincible", value: boolean) => void) & ((playerId: PlayerId_2, option: "maxShield", value: number) => void) & ((playerId: PlayerId_2, option: "initialShield", value: number) => void) & ((playerId: PlayerId_2, option: "maxHealth", value: number) => void) & ((playerId: PlayerId_2, option: "initialHealth", value: number) => void) & ((playerId: PlayerId_2, option: "healthRegenAmount", value: number) => void) & ((playerId: PlayerId_2, option: "healthRegenInterval", value: number) => void) & ((playerId: PlayerId_2, option: "healthRegenStartAfter", value: number) => void) & ((playerId: PlayerId_2, option: "effectDamageDuration", value: number) => void) & ((playerId: PlayerId_2, option: "effectSpeedDuration", value: number) => void) & ((playerId: PlayerId_2, option: "effectDamageReductionDuration", value: number) => void) & ((playerId: PlayerId_2, option: "effectHealthRegenDuration", value: number) => void) & ((playerId: PlayerId_2, option: "potionEffectDuration", value: number) => void) & ((playerId: PlayerId_2, option: "splashPotionEffectDuration", value: number) => void) & ((playerId: PlayerId_2, option: "arrowPotionEffectDuration", value: number) => void) & ((playerId: PlayerId_2, option: "fogChunkDistanceOverride", value: number) => void) & ((playerId: PlayerId_2, option: "fogColourOverride", value: string) => void) & ((playerId: PlayerId_2, option: "airAccScale", value: number) => void) & ((playerId: PlayerId_2, option: "airFrictionScale", value: number) => void) & ((playerId: PlayerId_2, option: "airMomentumConservation", value: boolean) => void) & ((playerId: PlayerId_2, option: "auraPerLevel", value: number) => void) & ((playerId: PlayerId_2, option: "autoRespawn", value: boolean) => void) & ((playerId: PlayerId_2, option: "cameraTint", value: [number, number, number, number]) => void) & ((playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "dealingDamageHeadMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "dealingDamageLegMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "dealingDamageMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "droppedItemScale", value: number) => void) & ((playerId: PlayerId_2, option: "fallDamage", value: boolean) => void) & ((playerId: PlayerId_2, option: "groundFrictionScale", value: number) => void) & ((playerId: PlayerId_2, option: "killstreakDuration", value: number) => void) & ((playerId: PlayerId_2, option: "maxAuraLevel", value: number) => void) & ((playerId: PlayerId_2, option: "movementBasedFovScale", value: number) => void) & ((playerId: PlayerId_2, option: "receivingDamageMultiplier", value: number) => void) & ((playerId: PlayerId_2, option: "respawnButtonText", value: string) => void) & ((playerId: PlayerId_2, option: "secsToRespawn", value: number) => void) & ((playerId: PlayerId_2, option: "usePlayAgainButton", value: boolean) => void);
    getClientOption: (<TOption extends keyof ClientOptions>(playerId: PlayerId_2, option: TOption) => ClientOptions[TOption]) & ((playerId: PlayerId_2, option: "canChange") => boolean) & ((playerId: PlayerId_2, option: "crouchingSpeed") => number) & ((playerId: PlayerId_2, option: "walkingSpeed") => number) & ((playerId: PlayerId_2, option: "runningSpeed") => number) & ((playerId: PlayerId_2, option: "speedMultiplier") => number) & ((playerId: PlayerId_2, option: "jumpAmount") => number) & ((playerId: PlayerId_2, option: "airJumpCount") => number) & ((playerId: PlayerId_2, option: "bunnyhopMaxMultiplier") => number) & ((playerId: PlayerId_2, option: "musicVolumeLevel") => number) & ((playerId: PlayerId_2, option: "showPlayersInUnloadedChunks") => boolean) & ((playerId: PlayerId_2, option: "useInventory") => boolean) & ((playerId: PlayerId_2, option: "useFullInventory") => boolean) & ((playerId: PlayerId_2, option: "canCraft") => boolean) & ((playerId: PlayerId_2, option: "canPickUpItems") => boolean) & ((playerId: PlayerId_2, option: "playerZoom") => number) & ((playerId: PlayerId_2, option: "zoomOutDistance") => number) & ((playerId: PlayerId_2, option: "maxPlayerZoom") => number) & ((playerId: PlayerId_2, option: "canCustomiseChar") => boolean) & ((playerId: PlayerId_2, option: "defaultBlock") => string) & ((playerId: PlayerId_2, option: "cantChangeError") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "cantBreakError") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "cantBuildError") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "touchscreenActionButton") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "strictFluidBuckets") => boolean) & ((playerId: PlayerId_2, option: "canUseZoomKey") => boolean) & ((playerId: PlayerId_2, option: "canAltAction") => boolean) & ((playerId: PlayerId_2, option: "canSeeNametagsThroughWalls") => boolean) & ((playerId: PlayerId_2, option: "showBasicMovementControls") => boolean) & ((playerId: PlayerId_2, option: "middleTextUpper") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "middleTextLower") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "crosshairText") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "RightInfoText") => string | CustomTextStyling_2) & ((playerId: PlayerId_2, option: "numClosestPlayersVisible") => number) & ((playerId: PlayerId_2, option: "showProgressBar") => boolean) & ((playerId: PlayerId_2, option: "showKillfeed") => boolean) & ((playerId: PlayerId_2, option: "chatChannels") => {
        channelName: string;
        elementContent: string | CustomTextStyling_2;
        elementBgColor: string;
    }[]) & ((playerId: PlayerId_2, option: "creative") => boolean) & ((playerId: PlayerId_2, option: "flySpeedMultiplier") => number) & ((playerId: PlayerId_2, option: "canPickBlocks") => boolean) & ((playerId: PlayerId_2, option: "compassTarget") => string | number | number[]) & ((playerId: PlayerId_2, option: "ttbMultiplier") => number) & ((playerId: PlayerId_2, option: "inventoryItemsMoveable") => boolean) & ((playerId: PlayerId_2, option: "invincible") => boolean) & ((playerId: PlayerId_2, option: "maxShield") => number) & ((playerId: PlayerId_2, option: "initialShield") => number) & ((playerId: PlayerId_2, option: "maxHealth") => number) & ((playerId: PlayerId_2, option: "initialHealth") => number) & ((playerId: PlayerId_2, option: "healthRegenAmount") => number) & ((playerId: PlayerId_2, option: "healthRegenInterval") => number) & ((playerId: PlayerId_2, option: "healthRegenStartAfter") => number) & ((playerId: PlayerId_2, option: "effectDamageDuration") => number) & ((playerId: PlayerId_2, option: "effectSpeedDuration") => number) & ((playerId: PlayerId_2, option: "effectDamageReductionDuration") => number) & ((playerId: PlayerId_2, option: "effectHealthRegenDuration") => number) & ((playerId: PlayerId_2, option: "potionEffectDuration") => number) & ((playerId: PlayerId_2, option: "splashPotionEffectDuration") => number) & ((playerId: PlayerId_2, option: "arrowPotionEffectDuration") => number) & ((playerId: PlayerId_2, option: "fogChunkDistanceOverride") => number) & ((playerId: PlayerId_2, option: "fogColourOverride") => string) & ((playerId: PlayerId_2, option: "airAccScale") => number) & ((playerId: PlayerId_2, option: "airFrictionScale") => number) & ((playerId: PlayerId_2, option: "airMomentumConservation") => boolean) & ((playerId: PlayerId_2, option: "auraPerLevel") => number) & ((playerId: PlayerId_2, option: "autoRespawn") => boolean) & ((playerId: PlayerId_2, option: "cameraTint") => [number, number, number, number]) & ((playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier") => number) & ((playerId: PlayerId_2, option: "dealingDamageHeadMultiplier") => number) & ((playerId: PlayerId_2, option: "dealingDamageLegMultiplier") => number) & ((playerId: PlayerId_2, option: "dealingDamageMultiplier") => number) & ((playerId: PlayerId_2, option: "droppedItemScale") => number) & ((playerId: PlayerId_2, option: "fallDamage") => boolean) & ((playerId: PlayerId_2, option: "groundFrictionScale") => number) & ((playerId: PlayerId_2, option: "killstreakDuration") => number) & ((playerId: PlayerId_2, option: "maxAuraLevel") => number) & ((playerId: PlayerId_2, option: "movementBasedFovScale") => number) & ((playerId: PlayerId_2, option: "receivingDamageMultiplier") => number) & ((playerId: PlayerId_2, option: "respawnButtonText") => string) & ((playerId: PlayerId_2, option: "secsToRespawn") => number) & ((playerId: PlayerId_2, option: "usePlayAgainButton") => boolean);
    setClientOptionToDefault: (<TOption extends keyof ClientOptions>(playerId: PlayerId_2, option: TOption) => void) & ((playerId: PlayerId_2, option: "canChange") => void) & ((playerId: PlayerId_2, option: "crouchingSpeed") => void) & ((playerId: PlayerId_2, option: "walkingSpeed") => void) & ((playerId: PlayerId_2, option: "runningSpeed") => void) & ((playerId: PlayerId_2, option: "speedMultiplier") => void) & ((playerId: PlayerId_2, option: "jumpAmount") => void) & ((playerId: PlayerId_2, option: "airJumpCount") => void) & ((playerId: PlayerId_2, option: "bunnyhopMaxMultiplier") => void) & ((playerId: PlayerId_2, option: "musicVolumeLevel") => void) & ((playerId: PlayerId_2, option: "showPlayersInUnloadedChunks") => void) & ((playerId: PlayerId_2, option: "useInventory") => void) & ((playerId: PlayerId_2, option: "useFullInventory") => void) & ((playerId: PlayerId_2, option: "canCraft") => void) & ((playerId: PlayerId_2, option: "canPickUpItems") => void) & ((playerId: PlayerId_2, option: "playerZoom") => void) & ((playerId: PlayerId_2, option: "zoomOutDistance") => void) & ((playerId: PlayerId_2, option: "maxPlayerZoom") => void) & ((playerId: PlayerId_2, option: "canCustomiseChar") => void) & ((playerId: PlayerId_2, option: "defaultBlock") => void) & ((playerId: PlayerId_2, option: "cantChangeError") => void) & ((playerId: PlayerId_2, option: "cantBreakError") => void) & ((playerId: PlayerId_2, option: "cantBuildError") => void) & ((playerId: PlayerId_2, option: "touchscreenActionButton") => void) & ((playerId: PlayerId_2, option: "strictFluidBuckets") => void) & ((playerId: PlayerId_2, option: "canUseZoomKey") => void) & ((playerId: PlayerId_2, option: "canAltAction") => void) & ((playerId: PlayerId_2, option: "canSeeNametagsThroughWalls") => void) & ((playerId: PlayerId_2, option: "showBasicMovementControls") => void) & ((playerId: PlayerId_2, option: "middleTextUpper") => void) & ((playerId: PlayerId_2, option: "middleTextLower") => void) & ((playerId: PlayerId_2, option: "crosshairText") => void) & ((playerId: PlayerId_2, option: "RightInfoText") => void) & ((playerId: PlayerId_2, option: "numClosestPlayersVisible") => void) & ((playerId: PlayerId_2, option: "showProgressBar") => void) & ((playerId: PlayerId_2, option: "showKillfeed") => void) & ((playerId: PlayerId_2, option: "chatChannels") => void) & ((playerId: PlayerId_2, option: "creative") => void) & ((playerId: PlayerId_2, option: "flySpeedMultiplier") => void) & ((playerId: PlayerId_2, option: "canPickBlocks") => void) & ((playerId: PlayerId_2, option: "compassTarget") => void) & ((playerId: PlayerId_2, option: "ttbMultiplier") => void) & ((playerId: PlayerId_2, option: "inventoryItemsMoveable") => void) & ((playerId: PlayerId_2, option: "invincible") => void) & ((playerId: PlayerId_2, option: "maxShield") => void) & ((playerId: PlayerId_2, option: "initialShield") => void) & ((playerId: PlayerId_2, option: "maxHealth") => void) & ((playerId: PlayerId_2, option: "initialHealth") => void) & ((playerId: PlayerId_2, option: "healthRegenAmount") => void) & ((playerId: PlayerId_2, option: "healthRegenInterval") => void) & ((playerId: PlayerId_2, option: "healthRegenStartAfter") => void) & ((playerId: PlayerId_2, option: "effectDamageDuration") => void) & ((playerId: PlayerId_2, option: "effectSpeedDuration") => void) & ((playerId: PlayerId_2, option: "effectDamageReductionDuration") => void) & ((playerId: PlayerId_2, option: "effectHealthRegenDuration") => void) & ((playerId: PlayerId_2, option: "potionEffectDuration") => void) & ((playerId: PlayerId_2, option: "splashPotionEffectDuration") => void) & ((playerId: PlayerId_2, option: "arrowPotionEffectDuration") => void) & ((playerId: PlayerId_2, option: "fogChunkDistanceOverride") => void) & ((playerId: PlayerId_2, option: "fogColourOverride") => void) & ((playerId: PlayerId_2, option: "airAccScale") => void) & ((playerId: PlayerId_2, option: "airFrictionScale") => void) & ((playerId: PlayerId_2, option: "airMomentumConservation") => void) & ((playerId: PlayerId_2, option: "auraPerLevel") => void) & ((playerId: PlayerId_2, option: "autoRespawn") => void) & ((playerId: PlayerId_2, option: "cameraTint") => void) & ((playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier") => void) & ((playerId: PlayerId_2, option: "dealingDamageHeadMultiplier") => void) & ((playerId: PlayerId_2, option: "dealingDamageLegMultiplier") => void) & ((playerId: PlayerId_2, option: "dealingDamageMultiplier") => void) & ((playerId: PlayerId_2, option: "droppedItemScale") => void) & ((playerId: PlayerId_2, option: "fallDamage") => void) & ((playerId: PlayerId_2, option: "groundFrictionScale") => void) & ((playerId: PlayerId_2, option: "killstreakDuration") => void) & ((playerId: PlayerId_2, option: "maxAuraLevel") => void) & ((playerId: PlayerId_2, option: "movementBasedFovScale") => void) & ((playerId: PlayerId_2, option: "receivingDamageMultiplier") => void) & ((playerId: PlayerId_2, option: "respawnButtonText") => void) & ((playerId: PlayerId_2, option: "secsToRespawn") => void) & ((playerId: PlayerId_2, option: "usePlayAgainButton") => void);
    setClientOptions: (playerId: PlayerId_2, options: Partial<ClientOptions>) => void;
};

declare type ClientOptionExportFormat = {
    name: string;
    ValueType: any;
    SetClientOption: {
        setClientOption: (playerId: never, option: never, value: never) => void;
    };
    SetClientOptionToDefault: {
        setClientOptionToDefault: (playerId: never, option: never) => void;
    };
    GetClientOption: {
        getClientOption: (playerId: never, option: never) => any;
    };
};

export declare type ClientOptions = GenerateClientOptions<AllClientOptionUnion>;

export declare type CommonCosmetic = "chef" | "farmer" | "piggy_banker" | "portal_mage" | "trader" | "trader_black" | "trader_blue" | "wizard" | "zombie";

declare type CommonCosmetic_2 =
| "chef"
| "farmer"
| "piggy_banker"
| "portal_mage"
| "trader"
| "trader_black"
| "trader_blue"
| "wizard"
| "zombie";

export declare type CommonMeshEntityOpts = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2;
};

export declare type Coordinate = [number, number, number];

declare type Coordinate_2 = [number, number, number];

export declare type CosmeticName<TCosmeticType extends CosmeticType> = {
    hat: HatCosmetic;
    head: HeadCosmetic;
    body: BodyCosmetic;
    legs: LegsCosmetic;
    shoes: ShoesCosmetic;
    eyebrows: EyebrowsCosmetic;
    eyes: EyesCosmetic;
    skin: SkinCosmetic;
}[TCosmeticType] | CommonCosmetic;

declare type CosmeticName_2<TCosmeticType extends CosmeticType_2> =
| {
    hat: HatCosmetic_2;
    head: HeadCosmetic_2;
    body: BodyCosmetic_2;
    legs: LegsCosmetic_2;
    shoes: ShoesCosmetic_2;
    eyebrows: EyebrowsCosmetic_2;
    eyes: EyesCosmetic_2;
    skin: SkinCosmetic_2;
}[TCosmeticType]
| CommonCosmetic_2;

export declare type CosmeticType = "hat" | "head" | "body" | "legs" | "shoes" | "eyebrows" | "eyes" | "skin";

declare type CosmeticType_2 =
| "hat"
| "head"
| "body"
| "legs"
| "shoes"
| "eyebrows"
| "eyes"
| "skin";

export declare type CustomTextStyling = (string | EntityName | TranslatedText | StyledIcon | StyledText)[];

declare type CustomTextStyling_2 = (
| string
| EntityName_2
| TranslatedText_2
| StyledIcon_2
| StyledText_2
)[];

export declare type Direcrion = [number, number, number];

declare type Direcrion_2 = [number, number, number];

export declare type EntityId = Id;

declare type EntityId_2 = Id_2;

export declare type EntityMeshScalingMap = Partial<Record<LifeformBodyPart, [number, number, number]>>;

declare type EntityMeshScalingMap_2 = Partial<
Record<LifeformBodyPart_2, [number, number, number]>
>;

export declare type EntityName = {
    entityName: string;
    style?: {
        color?: StringColor_2;
        colour?: StringColor_2;
    };
};

declare type EntityName_2 = {
    entityName: string;
    style?: {
        color?: StringColor_2;
        colour?: StringColor_2;
    };
};

export declare const EntitySettingApis: {
    setEveryoneSettingForPlayer: SetEveryoneSettingForPlayerType;
    setTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryoneType;
    setOtherEntitySetting: SetOtherEntitySettingType;
    getOtherEntitySetting: GetOtherEntitySettingType;
};

declare type EntitySettingExportFormat = {
    name: string;
    ValueType: any;
    SetTargetedPlayerSettingForEveryone: {
        setTargetedPlayerSettingForEveryone: (targetedPlayerId: PlayerId_2, settingName: never, settingValue: never, includeNewJoiners?: boolean) => void;
    };
    SetEveryoneSettingForPlayer: {
        setEveryoneSettingForPlayer: (playerId: PlayerId_2, settingName: never, settingValue: never, includeNewJoiners?: boolean) => void;
    };
    SetOtherEntitySetting: {
        setOtherEntitySetting: (relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: never, settingValue: never) => void;
    };
    GetOtherEntitySetting: {
        getOtherEntitySetting: (relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: never) => any;
    };
};

export declare type EntitySettings = GenerateClientOptions_2<AllEntitySettingUnion>;

export declare type EntityType = [
"Item" | "Mesh" | "Player" | "Fireball" | "Iceball" | "Cow" | "Sheep" | "Horse" | "Cave Golem" | "Draugr Zombie" | "Draugr Skeleton" | "Frost Golem" | "Frost Zombie" | "Frost Skeleton" | "Draugr Knight" | "Wolf" | "Bear" | "Deer" | "Stag" | "Gold Watermelon Stag" | "Gorilla" | "Wildcat" | "Magma Golem" | "Draugr Huntress" | "Spirit Golem" | "Spirit Wolf" | "Spirit Bear" | "Spirit Stag" | "Spirit Gorilla" | "Draugr Warper" | "Frost Wraith" | "Draugr Reaver" | "NPC" | string
];

declare type EntityType_2 = [
| "Item"
| "Mesh"
| "Player"
| "Fireball"
| "Iceball"
| "Cow"
| "Sheep"
| "Horse"
| "Cave Golem"
| "Draugr Zombie"
| "Draugr Skeleton"
| "Frost Golem"
| "Frost Zombie"
| "Frost Skeleton"
| "Draugr Knight"
| "Wolf"
| "Bear"
| "Deer"
| "Stag"
| "Gold Watermelon Stag"
| "Gorilla"
| "Wildcat"
| "Magma Golem"
| "Draugr Huntress"
| "Spirit Golem"
| "Spirit Wolf"
| "Spirit Bear"
| "Spirit Stag"
| "Spirit Gorilla"
| "Draugr Warper"
| "Frost Wraith"
| "Draugr Reaver"
| "NPC"
| string,
];

export declare type ExplosionType = number;

declare type ExplosionType_2 = number;

declare type ExportTypes = {
    SetClientOption: SetClientOption_2;
    SetClientOptionToDefault: SetClientOptionToDefault_2;
    GetClientOption: GetClientOption_2;
    name: "canChange";
    ValueType: ValueType;
};

declare type ExportTypes_10 = {
    SetClientOption: SetClientOption_11;
    SetClientOptionToDefault: SetClientOptionToDefault_11;
    GetClientOption: GetClientOption_11;
    name: "showPlayersInUnloadedChunks";
    ValueType: ValueType_10;
};

declare type ExportTypes_11 = {
    SetClientOption: SetClientOption_12;
    SetClientOptionToDefault: SetClientOptionToDefault_12;
    GetClientOption: GetClientOption_12;
    name: "useInventory";
    ValueType: ValueType_11;
};

declare type ExportTypes_12 = {
    SetClientOption: SetClientOption_13;
    SetClientOptionToDefault: SetClientOptionToDefault_13;
    GetClientOption: GetClientOption_13;
    name: "useFullInventory";
    ValueType: ValueType_12;
};

declare type ExportTypes_13 = {
    SetClientOption: SetClientOption_14;
    SetClientOptionToDefault: SetClientOptionToDefault_14;
    GetClientOption: GetClientOption_14;
    name: "canCraft";
    ValueType: ValueType_13;
};

declare type ExportTypes_14 = {
    SetClientOption: SetClientOption_15;
    SetClientOptionToDefault: SetClientOptionToDefault_15;
    GetClientOption: GetClientOption_15;
    name: "canPickUpItems";
    ValueType: ValueType_14;
};

declare type ExportTypes_15 = {
    SetClientOption: SetClientOption_16;
    SetClientOptionToDefault: SetClientOptionToDefault_16;
    GetClientOption: GetClientOption_16;
    name: "playerZoom";
    ValueType: ValueType_15;
};

declare type ExportTypes_16 = {
    SetClientOption: SetClientOption_17;
    SetClientOptionToDefault: SetClientOptionToDefault_17;
    GetClientOption: GetClientOption_17;
    name: "zoomOutDistance";
    ValueType: ValueType_16;
};

declare type ExportTypes_17 = {
    SetClientOption: SetClientOption_18;
    SetClientOptionToDefault: SetClientOptionToDefault_18;
    GetClientOption: GetClientOption_18;
    name: "maxPlayerZoom";
    ValueType: ValueType_17;
};

declare type ExportTypes_18 = {
    SetClientOption: SetClientOption_19;
    SetClientOptionToDefault: SetClientOptionToDefault_19;
    GetClientOption: GetClientOption_19;
    name: "canCustomiseChar";
    ValueType: ValueType_18;
};

declare type ExportTypes_19 = {
    SetClientOption: SetClientOption_20;
    SetClientOptionToDefault: SetClientOptionToDefault_20;
    GetClientOption: GetClientOption_20;
    name: "defaultBlock";
    ValueType: ValueType_19;
};

declare type ExportTypes_2 = {
    SetClientOption: SetClientOption_3;
    SetClientOptionToDefault: SetClientOptionToDefault_3;
    GetClientOption: GetClientOption_3;
    name: "crouchingSpeed";
    ValueType: ValueType_2;
};

declare type ExportTypes_20 = {
    SetClientOption: SetClientOption_21;
    SetClientOptionToDefault: SetClientOptionToDefault_21;
    GetClientOption: GetClientOption_21;
    name: "cantChangeError";
    ValueType: ValueType_20;
};

declare type ExportTypes_21 = {
    SetClientOption: SetClientOption_22;
    SetClientOptionToDefault: SetClientOptionToDefault_22;
    GetClientOption: GetClientOption_22;
    name: "cantBreakError";
    ValueType: ValueType_21;
};

declare type ExportTypes_22 = {
    SetClientOption: SetClientOption_23;
    SetClientOptionToDefault: SetClientOptionToDefault_23;
    GetClientOption: GetClientOption_23;
    name: "cantBuildError";
    ValueType: ValueType_22;
};

declare type ExportTypes_23 = {
    SetClientOption: SetClientOption_24;
    SetClientOptionToDefault: SetClientOptionToDefault_24;
    GetClientOption: GetClientOption_24;
    name: "touchscreenActionButton";
    ValueType: ValueType_23;
};

declare type ExportTypes_24 = {
    SetClientOption: SetClientOption_25;
    SetClientOptionToDefault: SetClientOptionToDefault_25;
    GetClientOption: GetClientOption_25;
    name: "strictFluidBuckets";
    ValueType: ValueType_24;
};

declare type ExportTypes_25 = {
    SetClientOption: SetClientOption_26;
    SetClientOptionToDefault: SetClientOptionToDefault_26;
    GetClientOption: GetClientOption_26;
    name: "canUseZoomKey";
    ValueType: ValueType_25;
};

declare type ExportTypes_26 = {
    SetClientOption: SetClientOption_27;
    SetClientOptionToDefault: SetClientOptionToDefault_27;
    GetClientOption: GetClientOption_27;
    name: "canAltAction";
    ValueType: ValueType_26;
};

declare type ExportTypes_27 = {
    SetClientOption: SetClientOption_28;
    SetClientOptionToDefault: SetClientOptionToDefault_28;
    GetClientOption: GetClientOption_28;
    name: "canSeeNametagsThroughWalls";
    ValueType: ValueType_27;
};

declare type ExportTypes_28 = {
    SetClientOption: SetClientOption_29;
    SetClientOptionToDefault: SetClientOptionToDefault_29;
    GetClientOption: GetClientOption_29;
    name: "showBasicMovementControls";
    ValueType: ValueType_28;
};

declare type ExportTypes_29 = {
    SetClientOption: SetClientOption_30;
    SetClientOptionToDefault: SetClientOptionToDefault_30;
    GetClientOption: GetClientOption_30;
    name: "middleTextUpper";
    ValueType: ValueType_29;
};

declare type ExportTypes_3 = {
    SetClientOption: SetClientOption_4;
    SetClientOptionToDefault: SetClientOptionToDefault_4;
    GetClientOption: GetClientOption_4;
    name: "walkingSpeed";
    ValueType: ValueType_3;
};

declare type ExportTypes_30 = {
    SetClientOption: SetClientOption_31;
    SetClientOptionToDefault: SetClientOptionToDefault_31;
    GetClientOption: GetClientOption_31;
    name: "middleTextLower";
    ValueType: ValueType_30;
};

declare type ExportTypes_31 = {
    SetClientOption: SetClientOption_32;
    SetClientOptionToDefault: SetClientOptionToDefault_32;
    GetClientOption: GetClientOption_32;
    name: "crosshairText";
    ValueType: ValueType_31;
};

declare type ExportTypes_32 = {
    SetClientOption: SetClientOption_33;
    SetClientOptionToDefault: SetClientOptionToDefault_33;
    GetClientOption: GetClientOption_33;
    name: "RightInfoText";
    ValueType: ValueType_32;
};

declare type ExportTypes_33 = {
    SetClientOption: SetClientOption_34;
    SetClientOptionToDefault: SetClientOptionToDefault_34;
    GetClientOption: GetClientOption_34;
    name: "numClosestPlayersVisible";
    ValueType: ValueType_33;
};

declare type ExportTypes_34 = {
    SetClientOption: SetClientOption_35;
    SetClientOptionToDefault: SetClientOptionToDefault_35;
    GetClientOption: GetClientOption_35;
    name: "showProgressBar";
    ValueType: ValueType_34;
};

declare type ExportTypes_35 = {
    SetClientOption: SetClientOption_36;
    SetClientOptionToDefault: SetClientOptionToDefault_36;
    GetClientOption: GetClientOption_36;
    name: "showKillfeed";
    ValueType: ValueType_35;
};

declare type ExportTypes_36 = {
    SetClientOption: SetClientOption_37;
    SetClientOptionToDefault: SetClientOptionToDefault_37;
    GetClientOption: GetClientOption_37;
    name: "chatChannels";
    ValueType: ValueType_36;
};

declare type ExportTypes_37 = {
    SetClientOption: SetClientOption_38;
    SetClientOptionToDefault: SetClientOptionToDefault_38;
    GetClientOption: GetClientOption_38;
    name: "creative";
    ValueType: ValueType_37;
};

declare type ExportTypes_38 = {
    SetClientOption: SetClientOption_39;
    SetClientOptionToDefault: SetClientOptionToDefault_39;
    GetClientOption: GetClientOption_39;
    name: "flySpeedMultiplier";
    ValueType: ValueType_38;
};

declare type ExportTypes_39 = {
    SetClientOption: SetClientOption_40;
    SetClientOptionToDefault: SetClientOptionToDefault_40;
    GetClientOption: GetClientOption_40;
    name: "canPickBlocks";
    ValueType: ValueType_39;
};

declare type ExportTypes_4 = {
    SetClientOption: SetClientOption_5;
    SetClientOptionToDefault: SetClientOptionToDefault_5;
    GetClientOption: GetClientOption_5;
    name: "runningSpeed";
    ValueType: ValueType_4;
};

declare type ExportTypes_40 = {
    SetClientOption: SetClientOption_41;
    SetClientOptionToDefault: SetClientOptionToDefault_41;
    GetClientOption: GetClientOption_41;
    name: "compassTarget";
    ValueType: ValueType_40;
};

declare type ExportTypes_41 = {
    SetClientOption: SetClientOption_42;
    SetClientOptionToDefault: SetClientOptionToDefault_42;
    GetClientOption: GetClientOption_42;
    name: "ttbMultiplier";
    ValueType: ValueType_41;
};

declare type ExportTypes_42 = {
    SetClientOption: SetClientOption_43;
    SetClientOptionToDefault: SetClientOptionToDefault_43;
    GetClientOption: GetClientOption_43;
    name: "inventoryItemsMoveable";
    ValueType: ValueType_42;
};

declare type ExportTypes_43 = {
    SetClientOption: SetClientOption_44;
    SetClientOptionToDefault: SetClientOptionToDefault_44;
    GetClientOption: GetClientOption_44;
    name: "invincible";
    ValueType: ValueType_43;
};

declare type ExportTypes_44 = {
    SetClientOption: SetClientOption_45;
    SetClientOptionToDefault: SetClientOptionToDefault_45;
    GetClientOption: GetClientOption_45;
    name: "maxShield";
    ValueType: ValueType_44;
};

declare type ExportTypes_45 = {
    SetClientOption: SetClientOption_46;
    SetClientOptionToDefault: SetClientOptionToDefault_46;
    GetClientOption: GetClientOption_46;
    name: "initialShield";
    ValueType: ValueType_45;
};

declare type ExportTypes_46 = {
    SetClientOption: SetClientOption_47;
    SetClientOptionToDefault: SetClientOptionToDefault_47;
    GetClientOption: GetClientOption_47;
    name: "maxHealth";
    ValueType: ValueType_46;
};

declare type ExportTypes_47 = {
    SetClientOption: SetClientOption_48;
    SetClientOptionToDefault: SetClientOptionToDefault_48;
    GetClientOption: GetClientOption_48;
    name: "initialHealth";
    ValueType: ValueType_47;
};

declare type ExportTypes_48 = {
    SetClientOption: SetClientOption_49;
    SetClientOptionToDefault: SetClientOptionToDefault_49;
    GetClientOption: GetClientOption_49;
    name: "healthRegenAmount";
    ValueType: ValueType_48;
};

declare type ExportTypes_49 = {
    SetClientOption: SetClientOption_50;
    SetClientOptionToDefault: SetClientOptionToDefault_50;
    GetClientOption: GetClientOption_50;
    name: "healthRegenInterval";
    ValueType: ValueType_49;
};

declare type ExportTypes_5 = {
    SetClientOption: SetClientOption_6;
    SetClientOptionToDefault: SetClientOptionToDefault_6;
    GetClientOption: GetClientOption_6;
    name: "speedMultiplier";
    ValueType: ValueType_5;
};

declare type ExportTypes_50 = {
    SetClientOption: SetClientOption_51;
    SetClientOptionToDefault: SetClientOptionToDefault_51;
    GetClientOption: GetClientOption_51;
    name: "healthRegenStartAfter";
    ValueType: ValueType_50;
};

declare type ExportTypes_51 = {
    SetClientOption: SetClientOption_52;
    SetClientOptionToDefault: SetClientOptionToDefault_52;
    GetClientOption: GetClientOption_52;
    name: "effectDamageDuration";
    ValueType: ValueType_51;
};

declare type ExportTypes_52 = {
    SetClientOption: SetClientOption_53;
    SetClientOptionToDefault: SetClientOptionToDefault_53;
    GetClientOption: GetClientOption_53;
    name: "effectSpeedDuration";
    ValueType: ValueType_52;
};

declare type ExportTypes_53 = {
    SetClientOption: SetClientOption_54;
    SetClientOptionToDefault: SetClientOptionToDefault_54;
    GetClientOption: GetClientOption_54;
    name: "effectDamageReductionDuration";
    ValueType: ValueType_53;
};

declare type ExportTypes_54 = {
    SetClientOption: SetClientOption_55;
    SetClientOptionToDefault: SetClientOptionToDefault_55;
    GetClientOption: GetClientOption_55;
    name: "effectHealthRegenDuration";
    ValueType: ValueType_54;
};

declare type ExportTypes_55 = {
    SetClientOption: SetClientOption_56;
    SetClientOptionToDefault: SetClientOptionToDefault_56;
    GetClientOption: GetClientOption_56;
    name: "potionEffectDuration";
    ValueType: ValueType_55;
};

declare type ExportTypes_56 = {
    SetClientOption: SetClientOption_57;
    SetClientOptionToDefault: SetClientOptionToDefault_57;
    GetClientOption: GetClientOption_57;
    name: "splashPotionEffectDuration";
    ValueType: ValueType_56;
};

declare type ExportTypes_57 = {
    SetClientOption: SetClientOption_58;
    SetClientOptionToDefault: SetClientOptionToDefault_58;
    GetClientOption: GetClientOption_58;
    name: "arrowPotionEffectDuration";
    ValueType: ValueType_57;
};

declare type ExportTypes_58 = {
    SetClientOption: SetClientOption_59;
    SetClientOptionToDefault: SetClientOptionToDefault_59;
    GetClientOption: GetClientOption_59;
    name: "fogChunkDistanceOverride";
    ValueType: ValueType_58;
};

declare type ExportTypes_59 = {
    SetClientOption: SetClientOption_60;
    SetClientOptionToDefault: SetClientOptionToDefault_60;
    GetClientOption: GetClientOption_60;
    name: "fogColourOverride";
    ValueType: ValueType_59;
};

declare type ExportTypes_6 = {
    SetClientOption: SetClientOption_7;
    SetClientOptionToDefault: SetClientOptionToDefault_7;
    GetClientOption: GetClientOption_7;
    name: "jumpAmount";
    ValueType: ValueType_6;
};

declare type ExportTypes_60 = {
    SetClientOption: SetClientOption_61;
    SetClientOptionToDefault: SetClientOptionToDefault_61;
    GetClientOption: GetClientOption_61;
    name: "airAccScale";
    ValueType: ValueType_60;
};

declare type ExportTypes_61 = {
    SetClientOption: SetClientOption_62;
    SetClientOptionToDefault: SetClientOptionToDefault_62;
    GetClientOption: GetClientOption_62;
    name: "airFrictionScale";
    ValueType: ValueType_61;
};

declare type ExportTypes_62 = {
    SetClientOption: SetClientOption_63;
    SetClientOptionToDefault: SetClientOptionToDefault_63;
    GetClientOption: GetClientOption_63;
    name: "airMomentumConservation";
    ValueType: ValueType_62;
};

declare type ExportTypes_63 = {
    SetClientOption: SetClientOption_64;
    SetClientOptionToDefault: SetClientOptionToDefault_64;
    GetClientOption: GetClientOption_64;
    name: "auraPerLevel";
    ValueType: ValueType_63;
};

declare type ExportTypes_64 = {
    SetClientOption: SetClientOption_65;
    SetClientOptionToDefault: SetClientOptionToDefault_65;
    GetClientOption: GetClientOption_65;
    name: "autoRespawn";
    ValueType: ValueType_64;
};

declare type ExportTypes_65 = {
    SetClientOption: SetClientOption_66;
    SetClientOptionToDefault: SetClientOptionToDefault_66;
    GetClientOption: GetClientOption_66;
    name: "cameraTint";
    ValueType: ValueType_65;
};

declare type ExportTypes_66 = {
    SetClientOption: SetClientOption_67;
    SetClientOptionToDefault: SetClientOptionToDefault_67;
    GetClientOption: GetClientOption_67;
    name: "dealingDamageDefaultMultiplier";
    ValueType: ValueType_66;
};

declare type ExportTypes_67 = {
    SetClientOption: SetClientOption_68;
    SetClientOptionToDefault: SetClientOptionToDefault_68;
    GetClientOption: GetClientOption_68;
    name: "dealingDamageHeadMultiplier";
    ValueType: ValueType_67;
};

declare type ExportTypes_68 = {
    SetClientOption: SetClientOption_69;
    SetClientOptionToDefault: SetClientOptionToDefault_69;
    GetClientOption: GetClientOption_69;
    name: "dealingDamageLegMultiplier";
    ValueType: ValueType_68;
};

declare type ExportTypes_69 = {
    SetClientOption: SetClientOption_70;
    SetClientOptionToDefault: SetClientOptionToDefault_70;
    GetClientOption: GetClientOption_70;
    name: "dealingDamageMultiplier";
    ValueType: ValueType_69;
};

declare type ExportTypes_7 = {
    SetClientOption: SetClientOption_8;
    SetClientOptionToDefault: SetClientOptionToDefault_8;
    GetClientOption: GetClientOption_8;
    name: "airJumpCount";
    ValueType: ValueType_7;
};

declare type ExportTypes_70 = {
    SetClientOption: SetClientOption_71;
    SetClientOptionToDefault: SetClientOptionToDefault_71;
    GetClientOption: GetClientOption_71;
    name: "droppedItemScale";
    ValueType: ValueType_70;
};

declare type ExportTypes_71 = {
    SetClientOption: SetClientOption_72;
    SetClientOptionToDefault: SetClientOptionToDefault_72;
    GetClientOption: GetClientOption_72;
    name: "fallDamage";
    ValueType: ValueType_71;
};

declare type ExportTypes_72 = {
    SetClientOption: SetClientOption_73;
    SetClientOptionToDefault: SetClientOptionToDefault_73;
    GetClientOption: GetClientOption_73;
    name: "groundFrictionScale";
    ValueType: ValueType_72;
};

declare type ExportTypes_73 = {
    SetClientOption: SetClientOption_74;
    SetClientOptionToDefault: SetClientOptionToDefault_74;
    GetClientOption: GetClientOption_74;
    name: "killstreakDuration";
    ValueType: ValueType_73;
};

declare type ExportTypes_74 = {
    SetClientOption: SetClientOption_75;
    SetClientOptionToDefault: SetClientOptionToDefault_75;
    GetClientOption: GetClientOption_75;
    name: "maxAuraLevel";
    ValueType: ValueType_74;
};

declare type ExportTypes_75 = {
    SetClientOption: SetClientOption_76;
    SetClientOptionToDefault: SetClientOptionToDefault_76;
    GetClientOption: GetClientOption_76;
    name: "movementBasedFovScale";
    ValueType: ValueType_75;
};

declare type ExportTypes_76 = {
    SetClientOption: SetClientOption_77;
    SetClientOptionToDefault: SetClientOptionToDefault_77;
    GetClientOption: GetClientOption_77;
    name: "receivingDamageMultiplier";
    ValueType: ValueType_76;
};

declare type ExportTypes_77 = {
    SetClientOption: SetClientOption_78;
    SetClientOptionToDefault: SetClientOptionToDefault_78;
    GetClientOption: GetClientOption_78;
    name: "respawnButtonText";
    ValueType: ValueType_77;
};

declare type ExportTypes_78 = {
    SetClientOption: SetClientOption_79;
    SetClientOptionToDefault: SetClientOptionToDefault_79;
    GetClientOption: GetClientOption_79;
    name: "secsToRespawn";
    ValueType: ValueType_78;
};

declare type ExportTypes_79 = {
    SetClientOption: SetClientOption_80;
    SetClientOptionToDefault: SetClientOptionToDefault_80;
    GetClientOption: GetClientOption_80;
    name: "usePlayAgainButton";
    ValueType: ValueType_79;
};

declare type ExportTypes_8 = {
    SetClientOption: SetClientOption_9;
    SetClientOptionToDefault: SetClientOptionToDefault_9;
    GetClientOption: GetClientOption_9;
    name: "bunnyhopMaxMultiplier";
    ValueType: ValueType_8;
};

declare type ExportTypes_80 = {
    name: "opacity";
    ValueType: ValueType_80;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_2;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_2;
    SetOtherEntitySetting: SetOtherEntitySetting_2;
    GetOtherEntitySetting: GetOtherEntitySetting_2;
};

declare type ExportTypes_81 = {
    name: typeof name_2;
    ValueType: ValueType_81;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_3;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_3;
    SetOtherEntitySetting: SetOtherEntitySetting_3;
    GetOtherEntitySetting: GetOtherEntitySetting_3;
};

declare type ExportTypes_82 = {
    name: typeof name_3;
    ValueType: ValueType_82;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_4;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_4;
    SetOtherEntitySetting: SetOtherEntitySetting_4;
    GetOtherEntitySetting: GetOtherEntitySetting_4;
};

declare type ExportTypes_83 = {
    name: typeof name_4;
    ValueType: ValueType_83;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_5;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_5;
    SetOtherEntitySetting: SetOtherEntitySetting_5;
    GetOtherEntitySetting: GetOtherEntitySetting_5;
};

declare type ExportTypes_84 = {
    name: typeof name_5;
    ValueType: ValueType_84;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_6;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_6;
    SetOtherEntitySetting: SetOtherEntitySetting_6;
    GetOtherEntitySetting: GetOtherEntitySetting_6;
};

declare type ExportTypes_85 = {
    name: typeof name_6;
    ValueType: ValueType_85;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_7;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_7;
    SetOtherEntitySetting: SetOtherEntitySetting_7;
    GetOtherEntitySetting: GetOtherEntitySetting_7;
};

declare type ExportTypes_86 = {
    name: typeof name_7;
    ValueType: ValueType_86;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_8;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_8;
    SetOtherEntitySetting: SetOtherEntitySetting_8;
    GetOtherEntitySetting: GetOtherEntitySetting_8;
};

declare type ExportTypes_87 = {
    name: typeof name_8;
    ValueType: ValueType_87;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_9;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_9;
    SetOtherEntitySetting: SetOtherEntitySetting_9;
    GetOtherEntitySetting: GetOtherEntitySetting_9;
};

declare type ExportTypes_88 = {
    name: typeof name_9;
    ValueType: ValueType_88;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_10;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_10;
    SetOtherEntitySetting: SetOtherEntitySetting_10;
    GetOtherEntitySetting: GetOtherEntitySetting_10;
};

declare type ExportTypes_89 = {
    name: typeof name_10;
    ValueType: ValueType_89;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_11;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_11;
    SetOtherEntitySetting: SetOtherEntitySetting_11;
    GetOtherEntitySetting: GetOtherEntitySetting_11;
};

declare type ExportTypes_9 = {
    SetClientOption: SetClientOption_10;
    SetClientOptionToDefault: SetClientOptionToDefault_10;
    GetClientOption: GetClientOption_10;
    name: "musicVolumeLevel";
    ValueType: ValueType_9;
};

declare type ExportTypes_90 = {
    name: typeof name_11;
    ValueType: ValueType_90;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_12;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_12;
    SetOtherEntitySetting: SetOtherEntitySetting_12;
    GetOtherEntitySetting: GetOtherEntitySetting_12;
};

declare type ExportTypes_91 = {
    name: typeof name_12;
    ValueType: ValueType_91;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_13;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_13;
    SetOtherEntitySetting: SetOtherEntitySetting_13;
    GetOtherEntitySetting: GetOtherEntitySetting_13;
};

declare type ExportTypes_92 = {
    name: typeof name_13;
    ValueType: ValueType_92;
    SetTargetedPlayerSettingForEveryone: SetTargetedPlayerSettingForEveryone_14;
    SetEveryoneSettingForPlayer: SetEveryoneSettingForPlayer_14;
    SetOtherEntitySetting: SetOtherEntitySetting_14;
    GetOtherEntitySetting: GetOtherEntitySetting_14;
};

export declare type EyebrowsCosmetic = "eyebrows_0" | "eyebrows_1_0" | "eyebrows_1_1" | "eyebrows_1_2" | "eyebrows_1_3" | "eyebrows_1_4" | "eyebrows_2_0" | "eyebrows_2_1" | "eyebrows_2_2" | "eyebrows_2_3" | "eyebrows_2_4" | "eyebrows_3_0" | "eyebrows_3_1" | "eyebrows_3_2" | "eyebrows_3_3" | "eyebrows_3_4";

declare type EyebrowsCosmetic_2 =
| "eyebrows_0"
| "eyebrows_1_0"
| "eyebrows_1_1"
| "eyebrows_1_2"
| "eyebrows_1_3"
| "eyebrows_1_4"
| "eyebrows_2_0"
| "eyebrows_2_1"
| "eyebrows_2_2"
| "eyebrows_2_3"
| "eyebrows_2_4"
| "eyebrows_3_0"
| "eyebrows_3_1"
| "eyebrows_3_2"
| "eyebrows_3_3"
| "eyebrows_3_4";

export declare type EyesCosmetic = "eyes_0_0" | "eyes_0_1" | "eyes_0_2" | "eyes_0_3" | "eyes_0_4" | "eyes_1_0" | "eyes_1_1" | "eyes_1_2" | "eyes_1_3" | "eyes_1_4" | "eyes_2_0" | "eyes_2_1" | "eyes_2_2" | "eyes_2_3" | "eyes_2_4" | "eyes_3_0" | "eyes_3_1" | "eyes_3_2" | "eyes_3_3" | "eyes_3_4" | "eyes_4_0" | "eyes_4_1" | "eyes_4_2" | "eyes_4_3" | "eyes_4_4" | "eyes_5_0" | "eyes_5_1" | "eyes_5_2" | "eyes_5_3" | "eyes_5_4" | "eyes_6_0" | "eyes_6_1" | "eyes_6_2" | "eyes_6_3" | "eyes_6_4" | "eyes_7_0" | "eyes_7_1" | "eyes_7_2" | "eyes_7_3" | "eyes_7_4" | "eyes_8_0" | "eyes_8_1" | "eyes_8_2" | "eyes_8_3" | "eyes_8_4" | "eyes_9_0" | "eyes_9_1" | "eyes_9_2" | "eyes_9_3" | "eyes_9_4";

declare type EyesCosmetic_2 =
| "eyes_0_0"
| "eyes_0_1"
| "eyes_0_2"
| "eyes_0_3"
| "eyes_0_4"
| "eyes_1_0"
| "eyes_1_1"
| "eyes_1_2"
| "eyes_1_3"
| "eyes_1_4"
| "eyes_2_0"
| "eyes_2_1"
| "eyes_2_2"
| "eyes_2_3"
| "eyes_2_4"
| "eyes_3_0"
| "eyes_3_1"
| "eyes_3_2"
| "eyes_3_3"
| "eyes_3_4"
| "eyes_4_0"
| "eyes_4_1"
| "eyes_4_2"
| "eyes_4_3"
| "eyes_4_4"
| "eyes_5_0"
| "eyes_5_1"
| "eyes_5_2"
| "eyes_5_3"
| "eyes_5_4"
| "eyes_6_0"
| "eyes_6_1"
| "eyes_6_2"
| "eyes_6_3"
| "eyes_6_4"
| "eyes_7_0"
| "eyes_7_1"
| "eyes_7_2"
| "eyes_7_3"
| "eyes_7_4"
| "eyes_8_0"
| "eyes_8_1"
| "eyes_8_2"
| "eyes_8_3"
| "eyes_8_4"
| "eyes_9_0"
| "eyes_9_1"
| "eyes_9_2"
| "eyes_9_3"
| "eyes_9_4";

declare type GenerateClientOptionInterface<U extends ClientOptionExportFormat, K extends keyof any> = MargeObject_2<UnionToIntersection<U extends any ? (K extends keyof U ? U[K] : never) : never>>;

declare type GenerateClientOptions<U extends ClientOptionExportFormat> = {
    [K in U as K["name"]]: K["ValueType"];
};

declare type GenerateClientOptions_2<U extends EntitySettingExportFormat> = {
    [K in U as K["name"]]: K["ValueType"];
};

declare type GenerateEntitySettingInterface<U extends EntitySettingExportFormat, K extends keyof any> = MargeObject_2<UnionToIntersection_2<U extends any ? (K extends keyof U ? U[K] : never) : never>>;

export declare type GetClientOption = GenerateClientOptionInterface<AllClientOptionUnion, "GetClientOption">;

declare interface GetClientOption_10 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"musicVolumeLevel"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "musicVolumeLevel"): number;
}

declare interface GetClientOption_11 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showPlayersInUnloadedChunks"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "showPlayersInUnloadedChunks"): boolean;
}

declare interface GetClientOption_12 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"useInventory"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "useInventory"): boolean;
}

declare interface GetClientOption_13 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"useFullInventory"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "useFullInventory"): boolean;
}

declare interface GetClientOption_14 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canCraft"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canCraft"): boolean;
}

declare interface GetClientOption_15 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickUpItems"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canPickUpItems"): boolean;
}

declare interface GetClientOption_16 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"playerZoom"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "playerZoom"): number;
}

declare interface GetClientOption_17 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"zoomOutDistance"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "zoomOutDistance"): number;
}

declare interface GetClientOption_18 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxPlayerZoom"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "maxPlayerZoom"): number;
}

declare interface GetClientOption_19 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canCustomiseChar"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canCustomiseChar"): boolean;
}

declare interface GetClientOption_2 {
    /**
     * get player can change block
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canChange"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canChange"): boolean;
}

declare interface GetClientOption_20 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"defaultBlock"} option
     * @returns {string}
     */
    getClientOption(playerId: PlayerId_2, option: "defaultBlock"): string;
}

declare interface GetClientOption_21 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantChangeError"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "cantChangeError"): string | CustomTextStyling_2;
}

declare interface GetClientOption_22 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBreakError"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "cantBreakError"): string | CustomTextStyling_2;
}

declare interface GetClientOption_23 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBuildError"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "cantBuildError"): string | CustomTextStyling_2;
}

declare interface GetClientOption_24 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"touchscreenActionButton"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "touchscreenActionButton"): string | CustomTextStyling_2;
}

declare interface GetClientOption_25 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"strictFluidBuckets"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "strictFluidBuckets"): boolean;
}

declare interface GetClientOption_26 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canUseZoomKey"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canUseZoomKey"): boolean;
}

declare interface GetClientOption_27 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canAltAction"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canAltAction"): boolean;
}

declare interface GetClientOption_28 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canSeeNametagsThroughWalls"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canSeeNametagsThroughWalls"): boolean;
}

declare interface GetClientOption_29 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showBasicMovementControls"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "showBasicMovementControls"): boolean;
}

declare interface GetClientOption_3 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"crouchingSpeed"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "crouchingSpeed"): number;
}

declare interface GetClientOption_30 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextUpper"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "middleTextUpper"): string | CustomTextStyling_2;
}

declare interface GetClientOption_31 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextLower"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "middleTextLower"): string | CustomTextStyling_2;
}

declare interface GetClientOption_32 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"crosshairText"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "crosshairText"): string | CustomTextStyling_2;
}

declare interface GetClientOption_33 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"RightInfoText"} option
     * @returns {string | CustomTextStyling}
     */
    getClientOption(playerId: PlayerId_2, option: "RightInfoText"): string | CustomTextStyling_2;
}

declare interface GetClientOption_34 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"numClosestPlayersVisible"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "numClosestPlayersVisible"): number;
}

declare interface GetClientOption_35 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showProgressBar"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "showProgressBar"): boolean;
}

declare interface GetClientOption_36 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showKillfeed"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "showKillfeed"): boolean;
}

declare interface GetClientOption_37 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"chatChannels"} option
     * @returns {{ channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[]}
     */
    getClientOption(playerId: PlayerId_2, option: "chatChannels"): {
        channelName: string;
        elementContent: string | CustomTextStyling_2;
        elementBgColor: string;
    }[];
}

declare interface GetClientOption_38 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"creative"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "creative"): boolean;
}

declare interface GetClientOption_39 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"flySpeedMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "flySpeedMultiplier"): number;
}

declare interface GetClientOption_4 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"walkingSpeed"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "walkingSpeed"): number;
}

declare interface GetClientOption_40 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickBlocks"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "canPickBlocks"): boolean;
}

declare interface GetClientOption_41 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"compassTarget"} option
     * @returns {string | number | number[]}
     */
    getClientOption(playerId: PlayerId_2, option: "compassTarget"): string | number | number[];
}

declare interface GetClientOption_42 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"ttbMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "ttbMultiplier"): number;
}

declare interface GetClientOption_43 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"inventoryItemsMoveable"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "inventoryItemsMoveable"): boolean;
}

declare interface GetClientOption_44 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"invincible"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "invincible"): boolean;
}

declare interface GetClientOption_45 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxShield"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "maxShield"): number;
}

declare interface GetClientOption_46 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"initialShield"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "initialShield"): number;
}

declare interface GetClientOption_47 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxHealth"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "maxHealth"): number;
}

declare interface GetClientOption_48 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"initialHealth"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "initialHealth"): number;
}

declare interface GetClientOption_49 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenAmount"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "healthRegenAmount"): number;
}

declare interface GetClientOption_5 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"runningSpeed"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "runningSpeed"): number;
}

declare interface GetClientOption_50 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenInterval"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "healthRegenInterval"): number;
}

declare interface GetClientOption_51 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenStartAfter"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "healthRegenStartAfter"): number;
}

declare interface GetClientOption_52 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectDamageDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "effectDamageDuration"): number;
}

declare interface GetClientOption_53 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectSpeedDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "effectSpeedDuration"): number;
}

declare interface GetClientOption_54 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectDamageReductionDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "effectDamageReductionDuration"): number;
}

declare interface GetClientOption_55 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectHealthRegenDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "effectHealthRegenDuration"): number;
}

declare interface GetClientOption_56 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"potionEffectDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "potionEffectDuration"): number;
}

declare interface GetClientOption_57 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"splashPotionEffectDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "splashPotionEffectDuration"): number;
}

declare interface GetClientOption_58 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"arrowPotionEffectDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "arrowPotionEffectDuration"): number;
}

declare interface GetClientOption_59 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fogChunkDistanceOverride"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "fogChunkDistanceOverride"): number;
}

declare interface GetClientOption_6 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"speedMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "speedMultiplier"): number;
}

declare interface GetClientOption_60 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fogColourOverride"} option
     * @returns {string}
     */
    getClientOption(playerId: PlayerId_2, option: "fogColourOverride"): string;
}

declare interface GetClientOption_61 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airAccScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "airAccScale"): number;
}

declare interface GetClientOption_62 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airFrictionScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "airFrictionScale"): number;
}

declare interface GetClientOption_63 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airMomentumConservation"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "airMomentumConservation"): boolean;
}

declare interface GetClientOption_64 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"auraPerLevel"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "auraPerLevel"): number;
}

declare interface GetClientOption_65 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"autoRespawn"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "autoRespawn"): boolean;
}

declare interface GetClientOption_66 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cameraTint"} option
     * @returns {[number, number, number, number]}
     */
    getClientOption(playerId: PlayerId_2, option: "cameraTint"): [number, number, number, number];
}

declare interface GetClientOption_67 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageDefaultMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier"): number;
}

declare interface GetClientOption_68 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageHeadMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "dealingDamageHeadMultiplier"): number;
}

declare interface GetClientOption_69 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageLegMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "dealingDamageLegMultiplier"): number;
}

declare interface GetClientOption_7 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"jumpAmount"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "jumpAmount"): number;
}

declare interface GetClientOption_70 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "dealingDamageMultiplier"): number;
}

declare interface GetClientOption_71 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"droppedItemScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "droppedItemScale"): number;
}

declare interface GetClientOption_72 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fallDamage"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "fallDamage"): boolean;
}

declare interface GetClientOption_73 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"groundFrictionScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "groundFrictionScale"): number;
}

declare interface GetClientOption_74 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"killstreakDuration"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "killstreakDuration"): number;
}

declare interface GetClientOption_75 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxAuraLevel"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "maxAuraLevel"): number;
}

declare interface GetClientOption_76 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"movementBasedFovScale"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "movementBasedFovScale"): number;
}

declare interface GetClientOption_77 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"receivingDamageMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "receivingDamageMultiplier"): number;
}

declare interface GetClientOption_78 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"respawnButtonText"} option
     * @returns {string}
     */
    getClientOption(playerId: PlayerId_2, option: "respawnButtonText"): string;
}

declare interface GetClientOption_79 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"secsToRespawn"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "secsToRespawn"): number;
}

declare interface GetClientOption_8 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airJumpCount"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "airJumpCount"): number;
}

declare interface GetClientOption_80 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"usePlayAgainButton"} option
     * @returns {boolean}
     */
    getClientOption(playerId: PlayerId_2, option: "usePlayAgainButton"): boolean;
}

declare interface GetClientOption_9 {
    /**
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"bunnyhopMaxMultiplier"} option
     * @returns {number}
     */
    getClientOption(playerId: PlayerId_2, option: "bunnyhopMaxMultiplier"): number;
}

export declare type GetOtherEntitySetting = GenerateEntitySettingInterface<AllEntitySettingUnion, "GetOtherEntitySetting">;

declare interface GetOtherEntitySetting_10 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"nameColour"} settingName
     * @returns {ValueType}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_9): ValueType_88;
}

declare interface GetOtherEntitySetting_11 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"nameTagInfo"} settingName
     * @returns {NameTagInfo}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_10): ValueType_89;
}

declare interface GetOtherEntitySetting_12 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"meshScaling"} settingName
     * @returns {EntityMeshScalingMap}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_11): ValueType_90;
}

declare interface GetOtherEntitySetting_13 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"lobbyLeaderboardValues"} settingName
     * @returns {LobbyLeaderboardValues}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_12): ValueType_91;
}

declare interface GetOtherEntitySetting_14 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"colorInLobbyLeaderboard"} settingName
     * @returns {StringColor}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_13): ValueType_92;
}

declare interface GetOtherEntitySetting_2 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"opacity"} settingName
     * @returns {void}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "opacity"): ValueType_80;
}

declare interface GetOtherEntitySetting_3 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"zIndex"} settingName
     * @returns {0| 1}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_2): ValueType_81;
}

declare interface GetOtherEntitySetting_4 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"overlayColour"} settingName
     * @returns {string | null}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_3): ValueType_82;
}

declare interface GetOtherEntitySetting_5 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"canAttack"} settingName
     * @returns {boolean}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_4): ValueType_83;
}

declare interface GetOtherEntitySetting_6 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"canSee"} settingName
     * @returns {boolean}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_5): ValueType_84;
}

declare interface GetOtherEntitySetting_7 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"showDamageAmounts"} settingName
     * @returns {boolean}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_6): ValueType_85;
}

declare interface GetOtherEntitySetting_8 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"killfeedColour"} settingName
     * @returns {StringColor}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_7): ValueType_86;
}

declare interface GetOtherEntitySetting_9 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} relevantPlayerId
     * @param {EntityId} targetedEntityId
     * @param {"hasPriorityNametag"} settingName
     * @returns {boolean}
     */
    getOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_8): ValueType_87;
}

declare type GetOtherEntitySettingType = RootGetOtherEntitySetting & GetOtherEntitySetting["getOtherEntitySetting"];

export declare type GravityBarQteParams = {
    progressStartValue?: number;
    catchZoneSize: number;
    moverSpeed: number;
    moverErraticness: number;
    gravity: number;
    riseSpeed: number;
    progressGainPerSecond: number;
    progressDrainPerSecond: number;
    canFail: boolean;
    description: CustomTextStyling_2;
    icon?: Icon_2;
};

declare type GravityBarQteParams_2 = {
    progressStartValue?: number; // Starting progress value (0-100). default: 30
    catchZoneSize: number; // Size of the player's catch zone as a fraction of the bar (must be > 0, 0-1). default: 0.25
    moverSpeed: number; // Speed at which the mover travels along the bar (must be > 0). default: 3
    moverErraticness: number; // How erratically the mover changes direction (higher = more unpredictable). default: 0.8
    gravity: number; // Downward pull on the catch zone when the player isn't holding click. default: 1
    riseSpeed: number; // Upward force on the catch zone while the player holds click. default: 1.5
    progressGainPerSecond: number; // Progress gained per second while the mover is inside the catch zone. default: 8
    progressDrainPerSecond: number; // Progress lost per second while the mover is outside the catch zone. default: 4
    canFail: boolean; // If true, the QTE fails when progress reaches 0; otherwise progress clamps at 0. default: false
    description: CustomTextStyling_2; // Rich text shown as the QTE prompt. default: [{ str: "Hold to catch!" }]
    icon?: Icon_2; // Icon displayed on the mover. default: "Moonfish"
};

export declare type HatCosmetic = "hat_none";

declare type HatCosmetic_2 = "hat_none";

export declare type HeadCosmetic = "head_0" | "head_1_0" | "head_1_1" | "head_1_2" | "head_1_3" | "head_1_4" | "head_2_0" | "head_2_1" | "head_2_2" | "head_2_3" | "head_2_4" | "head_3_0" | "head_3_1" | "head_3_2" | "head_3_3" | "head_3_4" | "head_4_0" | "head_4_1" | "head_4_2" | "head_4_3" | "head_4_4" | "head_5_0" | "head_5_1" | "head_5_2" | "head_5_3" | "head_5_4" | "head_6_0" | "head_6_1" | "head_6_2" | "head_6_3" | "head_6_4" | "head_7_0" | "head_7_1" | "head_7_2" | "head_7_3" | "head_7_4" | "head_8_0" | "head_8_1" | "head_8_2" | "head_8_3" | "head_8_4" | "head_9_0" | "head_9_1" | "head_9_2" | "head_9_3" | "head_9_4";

declare type HeadCosmetic_2 =
| "head_0"
| "head_1_0"
| "head_1_1"
| "head_1_2"
| "head_1_3"
| "head_1_4"
| "head_2_0"
| "head_2_1"
| "head_2_2"
| "head_2_3"
| "head_2_4"
| "head_3_0"
| "head_3_1"
| "head_3_2"
| "head_3_3"
| "head_3_4"
| "head_4_0"
| "head_4_1"
| "head_4_2"
| "head_4_3"
| "head_4_4"
| "head_5_0"
| "head_5_1"
| "head_5_2"
| "head_5_3"
| "head_5_4"
| "head_6_0"
| "head_6_1"
| "head_6_2"
| "head_6_3"
| "head_6_4"
| "head_7_0"
| "head_7_1"
| "head_7_2"
| "head_7_3"
| "head_7_4"
| "head_8_0"
| "head_8_1"
| "head_8_2"
| "head_8_3"
| "head_8_4"
| "head_9_0"
| "head_9_1"
| "head_9_2"
| "head_9_3"
| "head_9_4";

export declare type Health = number;

declare type Health_2 = number;

export declare type HealthRegen<K extends MobType_2> = HealthRegenDictionary[K];

declare type HealthRegenDictionary = Record<MobType_2, {
    amount: number;
    interval: number;
    startAfter: number;
} | null>;

export declare type HeldItemName<K extends MobType_2> = HeldItemNameDictionary[K];

declare type HeldItemNameDictionary = Record<MobType_2, Item_2 | null>;

export declare type HostilityRadius<K extends MobType_2> = HostilityRadiusDictionary[K];

declare type HostilityRadiusDictionary = Record<MobType_2, number>;

export declare type HurtSound<K extends MobType_2> = HurtSoundDictionary[K];

declare type HurtSoundDictionary = Record<MobType_2, SoundName_2 | string | null>;

export declare type Icon = IngameIconName_2 | ItemName_2 | string;

declare type Icon_2 = IngameIconName_2 | ItemName_2 | string;

export declare type Id = `-${number}`;

declare type Id_2 = `-${number}`;

export declare type IdleSound<K extends MobType_2> = IdleSoundDictionary[K];

declare type IdleSoundDictionary = Record<MobType_2, SoundName_2 | string | null>;

export declare type InGameEffectName = "Damage" | "Damage Reduction" | "Speed" | "Jump Boost" | "Haste" | "Frozen" | "Hydrated" | "Invisible" | "Poisoned" | "Slowness" | "Weakness" | "Health Regen" | "Double Jump" | "Heat Resistance" | "Thief" | "X-Ray Vision" | "Mining Yield" | "Brain Rot" | "Feather Falling" | "Rested Damage" | "Rested Speed" | "Rested Haste" | "Rested Farming Yield" | "Rested Aura" | "Bounciness" | "Wall Climbing" | "Air Walk" | "Pickpocketer" | "Lifesteal" | "Blindness" | "Thorns" | "Poopy";

declare type InGameEffectName_2 =
| "Damage"
| "Damage Reduction"
| "Speed"
| "Jump Boost"
| "Haste"
| "Frozen"
| "Hydrated"
| "Invisible"
| "Poisoned"
| "Slowness"
| "Weakness"
| "Health Regen"
| "Double Jump"
| "Heat Resistance"
| "Thief"
| "X-Ray Vision"
| "Mining Yield"
| "Brain Rot"
| "Feather Falling"
| "Rested Damage"
| "Rested Speed"
| "Rested Haste"
| "Rested Farming Yield"
| "Rested Aura"
| "Bounciness"
| "Wall Climbing"
| "Air Walk"
| "Pickpocketer"
| "Lifesteal"
| "Blindness"
| "Thorns"
| "Poopy";

export declare type IngameIconName = "Damage" | "Damage Reduction" | "Speed" | "VoidJump" | "Fist" | "Frozen" | "Hydrated" | "Invisible" | "Jump Boost" | "Poisoned" | "Slowness" | "Weakness" | "Health Regen" | "Haste" | "Double Jump" | "Heat Resistance" | "Gliding" | "Boating" | "Obsidian Boating" | "Riding" | "Bunny Hop" | "FallDamage" | "Feather Falling" | "Thief" | "X-Ray Vision" | "Mining Yield" | "Brain Rot" | "Rested Damage" | "Rested Haste" | "Rested Speed" | "Rested Farming Yield" | "Rested Aura" | "Blindness" | "Pickpocketer" | "Lifesteal" | "Bounciness" | "Air Walk" | "Wall Climbing" | "Thorns" | "Poopy" | "Draugr Knight Head" | "Draugr Warper Head" | "Magma Golem Head" | "Mystery Fish" | "Damage Enchantment" | "Critical Damage Enchantment" | "Attack Speed Enchantment" | "Protection Enchantment" | "Health Enchantment" | "Health Regen Enchantment" | "Stomp Damage Enchantment" | "Knockback Resist Enchantment" | "Arrow Speed Enchantment" | "Arrow Damage Enchantment" | "Quick Charge Enchantment" | "Break Speed Enchantment" | "Momentum Enchantment" | "Mining Yield Enchantment" | "Farming Yield Enchantment" | "Mining Aura Enchantment" | "Digging Aura Enchantment" | "Lumber Aura Enchantment" | "Farming Aura Enchantment" | "Vertical Knockback Enchantment" | "Horizontal Knockback Enchantment" | "Self Yield" | "Friends" | "Riding Speed" | "Feed Aura" | "Double Poop" | "Mob Slayer" | "Rainbow Wool" | "Pack Leader" | "Max Health" | "Poison Claws" | "Mob Yield" | "Antlers Bonus" | "Health" | "HealthShield" | "Cross" | "Friendship" | "Dotted Friendship" | "Hunger" | "Empty Hunger" | "Pixelated Heart" | "Question Mark" | "Trader Black" | "Trader Blue" | "Trader Piggy";

declare type IngameIconName_2 =
| "Damage"
| "Damage Reduction"
| "Speed"
| "VoidJump"
| "Fist"
| "Frozen"
| "Hydrated"
| "Invisible"
| "Jump Boost"
| "Poisoned"
| "Slowness"
| "Weakness"
| "Health Regen"
| "Haste"
| "Double Jump"
| "Heat Resistance"
| "Gliding"
| "Boating"
| "Obsidian Boating"
| "Riding"
| "Bunny Hop"
| "FallDamage"
| "Feather Falling"
| "Thief"
| "X-Ray Vision"
| "Mining Yield"
| "Brain Rot"
| "Rested Damage"
| "Rested Haste"
| "Rested Speed"
| "Rested Farming Yield"
| "Rested Aura"
| "Blindness"
| "Pickpocketer"
| "Lifesteal"
| "Bounciness"
| "Air Walk"
| "Wall Climbing"
| "Thorns"
| "Poopy"
| "Draugr Knight Head"
| "Draugr Warper Head"
| "Magma Golem Head"
| "Mystery Fish"
| "Damage Enchantment"
| "Critical Damage Enchantment"
| "Attack Speed Enchantment"
| "Protection Enchantment"
| "Health Enchantment"
| "Health Regen Enchantment"
| "Stomp Damage Enchantment"
| "Knockback Resist Enchantment"
| "Arrow Speed Enchantment"
| "Arrow Damage Enchantment"
| "Quick Charge Enchantment"
| "Break Speed Enchantment"
| "Momentum Enchantment"
| "Mining Yield Enchantment"
| "Farming Yield Enchantment"
| "Mining Aura Enchantment"
| "Digging Aura Enchantment"
| "Lumber Aura Enchantment"
| "Farming Aura Enchantment"
| "Vertical Knockback Enchantment"
| "Horizontal Knockback Enchantment"
| "Self Yield"
| "Friends"
| "Riding Speed"
| "Feed Aura"
| "Double Poop"
| "Mob Slayer"
| "Rainbow Wool"
| "Pack Leader"
| "Max Health"
| "Poison Claws"
| "Mob Yield"
| "Antlers Bonus"
| "Health"
| "HealthShield"
| "Cross"
| "Friendship"
| "Dotted Friendship"
| "Hunger"
| "Empty Hunger"
| "Pixelated Heart"
| "Question Mark"
| "Trader Black"
| "Trader Blue"
| "Trader Piggy";

export declare type InitialHealth<K extends MobType_2> = InitialHealthDictionary[K];

declare type InitialHealthDictionary = Record<MobType_2, number>;

export declare type IsRideable<K extends MobType_2> = IsRideableDictionary[K];

declare type IsRideableDictionary = Record<MobType_2, boolean>;

export declare type Item = ItemName | ItemId;

declare type Item_2 = ItemName_2 | ItemId_2;

export declare type ItemAttributes = {
    customDisplayName?: string;
    customDescription?: string;
    customAttributes?: Record<string, any>;
};

declare type ItemAttributes_2 = {
    customDisplayName?: string;
    customDescription?: string;
    customAttributes?: Record<string, any>;
};

export declare type ItemEntityId = EntityId;

declare type ItemEntityId_2 = EntityId_2;

export declare type ItemId = AllItemId;

declare type ItemId_2 = AllItemId_2;

export declare type ItemMetaInfo = string;

export declare type ItemName = AllItemName;

declare type ItemName_2 = AllItemName_2;

export declare type ItemObject = {
    name: string;
    amount: number | null;
    attributes: ItemAttributes;
    typeObj: {
        stackable: boolean;
    };
};

declare type ItemObject_2 = {
    name: string;
    amount: number | null;
    attributes: ItemAttributes_2;
    typeObj: { stackable: boolean };
};

export declare type JumpCount<K extends MobType_2> = JumpCountDictionary[K];

declare type JumpCountDictionary = Record<MobType_2, number>;

export declare type JumpMultiplier<K extends MobType_2> = JumpMultiplierDictionary[K];

declare type JumpMultiplierDictionary = Record<MobType_2, number>;

export declare type LeaderboardKey = string;

declare type LeaderboardKey_2 = string;

export declare type LegsCosmetic = "legs_0_0" | "legs_0_1" | "legs_0_2" | "legs_0_3" | "legs_0_4" | "legs_1_0" | "legs_1_1" | "legs_1_2" | "legs_1_3" | "legs_1_4" | "legs_2_0" | "legs_2_1" | "legs_2_2" | "legs_2_3" | "legs_2_4";

declare type LegsCosmetic_2 =
| "legs_0_0"
| "legs_0_1"
| "legs_0_2"
| "legs_0_3"
| "legs_0_4"
| "legs_1_0"
| "legs_1_1"
| "legs_1_2"
| "legs_1_3"
| "legs_1_4"
| "legs_2_0"
| "legs_2_1"
| "legs_2_2"
| "legs_2_3"
| "legs_2_4";

export declare type LifeformBodyPart = "TorsoNode" | "HeadMesh" | "ArmRightMesh" | "ArmLeftMesh" | "LegLeftMesh" | "LegRightMesh";

declare type LifeformBodyPart_2 =
| "TorsoNode"
| "HeadMesh"
| "ArmRightMesh"
| "ArmLeftMesh"
| "LegLeftMesh"
| "LegRightMesh";

export declare type LifeformId = PlayerId | MobId;

declare type LifeformId_2 = PlayerId_2 | MobId_2;

export declare type LobbyLeaderboardValues = Record<LeaderboardKey, string | CustomTextStyling>;

declare type LobbyLeaderboardValues_2 = Record<
LeaderboardKey_2,
string | CustomTextStyling_2
>;

export declare type LobbyType = string;

declare type LobbyType_2 = string;

export declare type MargeObject<T> = {
    [K in keyof T]: T[K];
};

declare type MargeObject_2<T> = {
    [K in keyof T]: T[K];
};

export declare type MaxFollowingRadius<K extends MobType_2> = MaxFollowingRadiusDictionary[K];

declare type MaxFollowingRadiusDictionary = Record<MobType_2, number>;

declare type MaxHealth<K extends MobType_2> = MaxHealthDictionary[K];

declare type MaxHealthDictionary = Record<MobType_2, number>;

export declare type MeshEntityOpts = {
    Box: BoxOpts;
    BloxdBlock: BloxdBlockOpts;
    Person: PersonOpts;
    ParticleEmitter: MeshParticleSystemOpts;
};

declare type MeshEntityOpts_2 = {
    Box: BoxOpts_2;
    BloxdBlock: BloxdBlockOpts_2;
    Person: PersonOpts_2;
    ParticleEmitter: MeshParticleSystemOpts_2;
};

export declare type MeshEntityPhysicsOpts = {
    doPhysics: boolean;
    onCollideTerrain?: () => void;
    collidesEntities?: boolean;
    collideBits?: number;
    collideMask?: number;
    heightExpandAmt?: number;
    widthExpandAmt?: number;
    vehicleOpts?: MeshEntityVehicleOpts_2;
};

declare type MeshEntityPhysicsOpts_2 = {
    doPhysics: boolean;
    onCollideTerrain?: () => void; // Unsupported for custom code
    collidesEntities?: boolean;
    collideBits?: number; // bitmask category of this entity
    collideMask?: number; // bitmask category of entities this entity collides with
    heightExpandAmt?: number; // expand hitbox height by this amount
    widthExpandAmt?: number; // expand hitbox width by this amount
    vehicleOpts?: MeshEntityVehicleOpts_2; // Unsupported for custom code
};

export declare type MeshEntityVehicleOpts = object;

declare type MeshEntityVehicleOpts_2 = object;

export declare type MeshParticleSystemOpts = ParticleEmitterOpts;

declare type MeshParticleSystemOpts_2 = ParticleEmitterOpts_2;

export declare type MeshType = keyof MeshEntityOpts;

declare type MeshType_2 = keyof MeshEntityOpts_2;

export declare type MetaInfo<K extends MobType_2> = MetaInfoDictionary[K];

declare type MetaInfoDictionary = Record<MobType_2, string>;

export declare type MinFollowingRadius<K extends MobType_2> = MinFollowingRadiusDictionary[K];

declare type MinFollowingRadiusDictionary = Record<MobType_2, number>;

export declare type MobAiState = keyof AllMobAiState;

declare type MobAiState_2 = keyof AllMobAiState_2;

export declare type MobAiStateParams<TState extends MobAiState> = AllMobAiState[TState];

declare type MobAiStateParams_2<TState extends MobAiState_2> = AllMobAiState_2[TState];

export declare type MobDbId = string;

declare type MobDbId_2 = string;

export declare type MobHerdId = `-${number}`;

declare type MobHerdId_2 = `-${number}`;

export declare type MobId = EntityId;

declare type MobId_2 = EntityId_2;

export declare const MobSettingApis: {
    getDefaultMobSetting: RootGetDefaultMobSetting;
    setDefaultMobSetting: RootSetDefaultMobSetting;
    getMobSetting: RootGetMobSetting;
    setMobSetting: RootSetMobSetting;
};

export declare type MobSettings<K extends MobType_2> = {
    variation: Variation<K>;
    name: Name<K>;
    maxHealth: MaxHealth<K>;
    initialHealth: InitialHealth<K>;
    idleSound: IdleSound<K>;
    attackSound: AttackSound<K>;
    secondaryAttackSound: SecondaryAttackSound<K>;
    hurtSound: HurtSound<K>;
    onDeathAura: OnDeathAura<K>;
    baseWalkingSpeed: BaseWalkingSpeed<K>;
    baseRunningSpeed: BaseRunningSpeed<K>;
    walkingSpeedMultiplier: WalkingSpeedMultiplier<K>;
    runningSpeedMultiplier: RunningSpeedMultiplier<K>;
    jumpCount: JumpCount<K>;
    baseJumpImpulseXZ: BaseJumpImpulseXZ<K>;
    baseJumpImpulseY: BaseJumpImpulseY<K>;
    jumpMultiplier: JumpMultiplier<K>;
    runAwayRadius: RunAwayRadius<K>;
    chaseRadius: ChaseRadius<K>;
    territoryRadius: TerritoryRadius<K>;
    hostilityRadius: HostilityRadius<K>;
    stoppingRadius: StoppingRadius<K>;
    attackInterval: AttackInterval<K>;
    attackRadius: AttackRadius<K>;
    secondaryAttackRadius: SecondaryAttackRadius<K>;
    attackDamage: AttackDamage<K>;
    secondaryAttackDamage: SecondaryAttackDamage<K>;
    attackImpulse: AttackImpulse<K>;
    secondaryAttackImpulse: SecondaryAttackImpulse<K>;
    burstAttackInfo: BurstAttackInfo<K>;
    secondaryBurstAttackInfo: SecondaryBurstAttackInfo<K>;
    heldItemName: HeldItemName<K>;
    attackItemName: AttackItemName<K>;
    secondaryAttackItemName: SecondaryAttackItemName<K>;
    swingArmOnAttack: SwingArmOnAttack<K>;
    swingArmOnSecondaryAttack: SwingArmOnSecondaryAttack<K>;
    attackEffectName: AttackEffectName<K>;
    attackEffectDuration: AttackEffectDuration<K>;
    ownerDbId: OwnerDbId<K>;
    minFollowingRadius: MinFollowingRadius<K>;
    maxFollowingRadius: MaxFollowingRadius<K>;
    isRideable: IsRideable<K>;
    healthRegen: HealthRegen<K>;
    ridingSpeedMult: RidingSpeedMult<K>;
    metaInfo: MetaInfo<K>;
    onTamedHealthMultiplier: OnTamedHealthMultiplier<K>;
};

export declare type MobSpawnOpts<TMobType extends MobType_2> = Partial<{
    mobHerdId: MobHerdId_2;
    spawnerId: PlayerId_2;
    mobDbId: MobDbId_2;
    name: string;
    playSoundOnSpawn: boolean;
    variation: Variation_2<TMobType>;
    physicsOpts: Partial<{
        width: number;
        height: number;
        collidesEntities: boolean;
    }>;
}>;

declare type MobSpawnOpts_2<TMobType extends MobType_2> = Partial<{
    mobHerdId: MobHerdId_2;
    spawnerId: PlayerId_2;
    mobDbId: MobDbId_2;
    name: string;
    playSoundOnSpawn: boolean;
    variation: Variation_2<TMobType>;
    physicsOpts: Partial<{
        width: number;
        height: number;
        collidesEntities: boolean;
    }>;
}>;

export declare type MobType = "Pig" | "Cow" | "Sheep" | "Horse" | "Cave Golem" | "Draugr Zombie" | "Frost Golem" | "Frost Zombie" | "Frost Skeleton" | "Draugr Knight" | "Wolf" | "Bear" | "Deer" | "Stag" | "Gold Watermelon Stag" | "Gorilla" | "Wildcat" | "Magma Golem" | "Draugr Huntress" | "Spirit Golem" | "Spirit Wolf" | "Spirit Bear" | "Spirit Stag" | "Spirit Gorilla" | "Draugr Warper" | "Frost Wraith" | "Draugr Reaver" | "NPC";

declare type MobType_2 =
| "Pig"
| "Cow"
| "Sheep"
| "Horse"
| "Cave Golem"
| "Draugr Zombie"
| "Frost Golem"
| "Frost Zombie"
| "Frost Skeleton"
| "Draugr Knight"
| "Wolf"
| "Bear"
| "Deer"
| "Stag"
| "Gold Watermelon Stag"
| "Gorilla"
| "Wildcat"
| "Magma Golem"
| "Draugr Huntress"
| "Spirit Golem"
| "Spirit Wolf"
| "Spirit Bear"
| "Spirit Stag"
| "Spirit Gorilla"
| "Draugr Warper"
| "Frost Wraith"
| "Draugr Reaver"
| "NPC";

declare type Name<K extends MobType_2> = NameDictionary[K];

declare const name_10: "nameTagInfo";

declare const name_11: "meshScaling";

declare const name_12: "lobbyLeaderboardValues";

declare const name_13: "colorInLobbyLeaderboard";

declare const name_2: "zIndex";

declare const name_3: "overlayColour";

declare const name_4: "canAttack";

declare const name_5: "canSee";

declare const name_6: "showDamageAmounts";

declare const name_7: "killfeedColour";

declare const name_8: "hasPriorityNametag";

declare const name_9: "nameColour";

declare type NameDictionary = Record<MobType_2, string>;

export declare type NameTagInfo = {
    backgroundColor?: string;
    content?: StyledText_2[];
    subtitle?: StyledText_2[];
    subtitleBackgroundColor?: string;
};

declare type NameTagInfo_2 = {
    backgroundColor?: string;
    content?: StyledText_2[];
    subtitle?: StyledText_2[];
    subtitleBackgroundColor?: string;
};

export declare type NonBlockMetadataItem = any;

declare type NonBlockMetadataItem_2 = any;

export declare const NormalApis: {
    readonly getPlayerPhysicsState: (playerId: PlayerId_3) => PlayerPhysicsStateData_3;
    readonly setPlayerPhysicsState: (playerId: PlayerId_3, physicsState: PlayerPhysicsStateData_3, positionOffset?: [number, number, number]) => void;
    readonly attemptCreateMeshEntity: <TMeshType extends MeshType_3>(type: TMeshType, opts: MeshEntityOpts_3[TMeshType], name?: string, physicsOptions?: MeshEntityPhysicsOpts_3, initiatorId?: EntityId_3 | null) => EntityId_3 | null;
    readonly deleteMeshEntity: (eId: EntityId_3) => boolean;
    readonly updateMeshEntity: <TMeshType extends MeshType_3>(eId: EntityId_3, type: TMeshType, opts: MeshEntityOpts_3[TMeshType]) => void;
    readonly editItemCraftingRecipes: (playerId: PlayerId_3, itemName: ItemName_3, recipesForItem: RecipesForItem_3) => void;
    readonly removeItemCraftingRecipes: (playerId: PlayerId_3, itemName: null | ItemName_3) => void;
    readonly resetItemCraftingRecipes: (playerId: PlayerId_3, itemName: ItemName_3 | null) => void;
    readonly addQTE: (playerId: PlayerId_3, qteParameters: QTEClientParameters_3) => QTERequestId_3;
    readonly deleteQTE: (playerId: PlayerId_3, id: QTERequestId_3) => void;
    readonly hasActiveQTE: (playerId: PlayerId_3) => boolean;
    readonly attemptCreateThrowable: (throwerEId: EntityId_3, itemName: ThrowableItem_3, position: Coordinate_3, direction: Direcrion_3, velocityMult?: number, damageMult?: number, gravityMult?: number, attributes?: ItemAttributes_3) => EntityId_3 | null;
    readonly deleteThrowable: (eId: EntityId_3) => boolean;
    readonly setPlayerOpacity: (playerId: PlayerId_3, opacity: number) => void;
    readonly setPlayerOpacityForOnePlayer: (playerIdWhoViewsOpacityPlayer: PlayerId_3, playerIdOfOpacityPlayer: PlayerId_3, opacity: number) => void;
    readonly getPlayerFacingInfo: (playerId: PlayerId_3) => {
        camPos: Coordinate_3;
        dir: Direcrion_3;
        angleDir: AngleDir_3;
        moveHeading: number;
    };
    readonly getPlayerTargetInfo: (playerId: PlayerId_3) => {
        position: Coordinate_3;
        normal: Coordinate_3;
        adjacent: Coordinate_3;
    };
    readonly setCameraDirection: (playerId: PlayerId_3, direction: Direcrion_3) => void;
    readonly setCameraZoom: (playerId: PlayerId_3, zoom: number) => void;
    readonly initiateMiddleScreenBar: (playerId: PlayerId_3, duration: number, chargeExpiresAutomatically?: boolean, horizontalBarRemOffset?: number) => void;
    readonly removeMiddleScreenBar: (playerId: PlayerId_3) => void;
    readonly attemptSpawnMob: <TMobType extends MobType_3>(mobType: TMobType, x: number, y: number, z: number, opts: MobSpawnOpts_3<TMobType>) => MobId_3 | null;
    readonly createMobHerd: () => MobHerdId_3;
    readonly despawnMob: (mobId: MobId_3) => void;
    readonly getMobAiState: (mobId: MobId_3) => {
        state: MobAiState_3;
        params: MobAiStateParams_3<MobAiState_3>;
    };
    readonly getMobIds: () => MobId_3[];
    readonly getNumMobs: () => number;
    readonly setMobAiState: <TState extends MobAiState_3>(mobId: MobId_3, state: TState, params: MobAiStateParams_3<TState>) => void;
    readonly getLobbyName: () => null | string;
    readonly getLobbyType: () => LobbyType_3;
    readonly isPublicLobby: () => boolean;
    readonly broadcastSound: (soundName: SoundName_3 | string, volume: number, rate: number, posSettings?: PosSettings_3, exceptPlayerId?: PlayerId_3) => void;
    readonly playClientPredictedSound: (soundName: SoundName_3 | string, volume: number, rate: number, posSettings?: PosSettings_3, predictedBy?: PlayerId_3) => void;
    readonly playSound: (playerId: PlayerId_3, soundName: SoundName_3 | string, volume: number, rate: number, posSettings?: PosSettings_3) => void;
    readonly setVelocity: (eId: EntityId_3, x: number, y: number, z: number) => void;
    readonly getVelocity: (eId: EntityId_3) => [number, number, number];
    readonly applyImpulse: (eId: EntityId_3, xImpulse: number, yImpulse: number, zImpulse: number) => void;
    readonly applyEffect: {
        (lifeformId: LifeformId_3, effectName: InGameEffectName_3, duration: number | null, customEffectInfo: {
            icon?: IngameIconName_3 | ItemName_3 | string;
            onEndCb?: () => void;
            displayName?: string | TranslatedText_3;
            inbuildLevel?: number;
        }): void;
        (lifeformId: LifeformId_3, effectName: string, duration: number | null, customEffectInfo: {
            icon?: IngameIconName_3 | ItemName_3 | string;
            onEndCb?: () => void;
            displayName?: string | TranslatedText_3;
            inbuildLevel: number;
        }): void;
    };
    readonly removeEffect: (lifeformId: LifeformId_3, name: string) => void;
    readonly getEffects: (lifeformId: LifeformId_3) => string[];
    readonly clearDirectionArrow: (playerId: PlayerId_3, id?: string | null) => void;
    readonly setDirectionArrow: (playerId: PlayerId_3, id: string, position: Coordinate_3, text?: null | string | CustomTextStyling_3, showDistance?: boolean, style?: null | TextStyle_3) => void;
    readonly getBlockData: (x: number, y: number, z: number) => object | null | undefined;
    readonly setBlockData: (x: number, y: number, z: number, data: object) => void;
    readonly calcExplosionForce: (eId: EntityId_3, explosionType: ExplosionType_3, knockbackFactor: number, explosionRadius: number, explosionPos: Coordinate_3, ignoreProjectiles: boolean) => {
        force: Coordinate_3;
        forceFrac: number;
    };
    readonly isInsideRect: (coordsToCheck: Coordinate_3, pos1: Coordinate_3, pos2: Coordinate_3, addOneToMax?: boolean) => boolean;
    readonly now: () => number;
    readonly raycastForBlock: (fromPos: Coordinate_3, dirVec: Direcrion_3) => BlockRaycastResult_3;
    readonly applyAuraChange: (playerId: PlayerId_3, auraDiff: number) => number;
    readonly getAuraInfo: (player: PlayerId_3) => {
        level: number;
        totalAura: number;
        auraPerLevel: number;
    };
    readonly setTotalAura: (playerId: PlayerId_3, totalAura: number) => void;
    readonly getMoonstoneChestItemSlot: (playerId: number, idx: number) => ItemObject_3 | null;
    readonly getMoonstoneChestItems: (playerId: number) => (ItemObject_3 | null)[];
    readonly setMoonstoneChestItemSlot: (playerId: number, idx: number, itemName: string, itemAmount?: number, attributes?: ItemAttributes_3) => void;
    readonly canOpenStandardChest: (playerId: PlayerId_3, chestX: number, chestY: number, chestZ: number) => boolean | null;
    readonly openChestForPlayer: (playerId: PlayerId_3, x: number, y: number, z: number) => void;
    readonly closeChestForPlayer: (playerId: PlayerId_3) => void;
    readonly giveStandardChestItem: (chestPos: Coordinate_3, itemName: ItemName_3, itemAmount?: number, playerId?: PlayerId_3, attributes?: ItemAttributes_3) => number;
    readonly getStandardChestFreeSlotCount: (chestPos: Coordinate_3) => number | null;
    readonly getStandardChestItemAmount: (chestPos: Coordinate_3, itemName: ItemName_3) => number;
    readonly getStandardChestItemSlot: (chestPos: Coordinate_3, idx: number) => ItemObject_3 | null;
    readonly getStandardChestItems: (chestPos: Coordinate_3) => (ItemObject_3 | null)[];
    readonly setStandardChestItemSlot: (chestPos: Coordinate_3, idx: number, itemName: string, itemAmount?: number, playerId?: number, attributes?: any) => void;
    readonly setWalkThroughRect: (playerId: PlayerId_3, pos1: Coordinate_3, pos2: Coordinate_3, updateType: WalkThroughType_3) => void;
    readonly setWalkThroughType: (playerId: PlayerId_3, blockName: BlockName_3, disable?: boolean) => void;
    readonly setCanChangeBlock: (playerId: PlayerId_3, x: number, y: number, z: null) => void;
    readonly setCanChangeBlockRect: (playerId: PlayerId_3, pos1: Coordinate_3, pos2: Coordinate_3) => void;
    readonly setCanChangeBlockType: (playerId: PlayerId_3, blockName: BlockNameOrId_3) => void;
    readonly setCantChangeBlock: (playerId: PlayerId_3, x: number, y: number, z: number) => void;
    readonly setCantChangeBlockRect: (playerId: PlayerId_3, pos1: Coordinate_3, pos2: Coordinate_3) => void;
    readonly setCantChangeBlockType: (playerId: PlayerId_3, blockName: BlockNameOrId_3) => void;
    readonly resetCanChangeBlockType: (playerId: PlayerId_3, blockName: BlockNameOrId_3) => void;
    readonly resetCanChangeBlockRect: (playerId: PlayerId_3, pos1: Coordinate_3, pos2: Coordinate_3) => void;
    readonly getEntityName: (entityId: EntityId_3) => string;
    readonly checkValid: (entityId: EntityId_3 | null) => boolean;
    readonly getUnitCoordinatesLifeformWithin: (lifeformId: LifeformId_3) => Coordinate_3[];
    readonly getEntitiesInRect: (minCoords: Coordinate_3, maxCoords: Coordinate_3) => EntityId_3[];
    readonly getEntityHeading: (entityId: EntityId_3) => Radian_3;
    readonly getEntityRotation: (entityId: EntityId_3) => [Radian_3, Radian_3, Radian_3];
    readonly getEntityType: (entityId: EntityId_3) => EntityType_3;
    readonly setEntityHeading: (entityId: EntityId_3, newHeading: Radian_3) => void;
    readonly setEntityRotation: (entityId: EntityId_3, xRotation: Radian_3, yRotation: Radian_3, zRotation: Radian_3) => void;
    readonly updateEntityNodeMeshAttachment: {
        <TMeshType extends MeshType_3>(eId: EntityId_3, node: LifeformBodyPart_3, type: TMeshType, opts?: MeshEntityOpts_3[TMeshType], offset?: [number, number, number], rotation?: Rotation_3): void;
        (eId: EntityId_3, node: LifeformBodyPart_3, type: null): void;
    };
    readonly getPlayerIds: () => PlayerId_3[];
    readonly getNumPlayers: () => number;
    readonly getPlayerPartyWhenJoined: (playerId: PlayerId_3) => Party_3 | null;
    readonly playerIsInGame: (playerId: PlayerId_3) => boolean;
    readonly playerIsLoggedIn: (playerId: PlayerId_3) => boolean;
    readonly getPlayerId: (playerName: string) => null | PlayerId_3;
    readonly getPlayerDbId: (playerId: PlayerId_3) => PlayerDbId_3;
    readonly getPlayerIdFromDbId: (dbId: PlayerDbId_3) => null | PlayerId_3;
    readonly kickPlayer: (playerId: PlayerId_3, reason: string) => void;
    readonly isMobile: (playerId: PlayerId_3) => boolean;
    readonly forceRespawn: (playerId: PlayerId_3, respawnPos?: Readonly<Coordinate_3>) => void;
    readonly getPlayerCosmetic: <TCosmeticType extends CosmeticType_3>(playerId: PlayerId_3, cosmeticType: TCosmeticType) => CosmeticName_3<TCosmeticType>;
    readonly changePlayerIntoSkin: <TCosmeticType extends CosmeticType_3>(playerId: PlayerId_3, cosmeticType: TCosmeticType, cosmeticName: CosmeticName_3<TCosmeticType>) => void;
    readonly setPlayerPose: (playerId: PlayerId_3, pose: PlayerPose_3, poseOffset?: [number, number, number]) => void;
    readonly broadcastMessage: (message: string | CustomTextStyling_3, style?: {
        fontWeight?: number | string;
        color?: string;
    }) => void;
    readonly sendMessage: {
        (playerId: PlayerId_3, message: string, style: {
            fontWeight?: number | string;
            color?: string;
        }): void;
        (playerId: PlayerId_3, message: CustomTextStyling_3): void;
    };
    readonly sendFlyingMiddleMessage: (playerId: PlayerId_3, message: string | CustomTextStyling_3, distanceFromAction?: number, lifetimeMs?: number) => void;
    readonly sendTopRightHelper: (playerId: PlayerId_3, icon: string, text: string, opts: {
        duration?: number;
        width?: number;
        height?: number;
        color?: StringColor_3;
        iconSizeMult?: number;
        textAndIconColor?: string;
        fontSize?: string;
    }) => void;
    readonly getCurrentKillstreak: (playerId: PlayerId_3) => number;
    readonly clearKillstreak: (playerId: PlayerId_3) => void;
    readonly createItemDrop: (x: number, y: number, z: number, itemName: ItemName_3, amount?: number | null, margeItems?: boolean, attributes?: ItemAttributes_3, timeTillDespawn?: number, dropperId?: LifeformId_3 | null, options?: never) => null | ItemEntityId_3;
    readonly setCantPickUpItem: (playerId: PlayerId_3, itemId: ItemEntityId_3) => void;
    readonly deleteItemDrop: (itemId: ItemEntityId_3) => void;
    readonly giveItem: (playerId: PlayerId_3, itemName: ItemName_3, itemAmount: number, attributes: ItemAttributes_3) => void;
    readonly inventoryIsFull: (playerId: PlayerId_3) => boolean;
    readonly setItemSlot: (playerId: PlayerId_3, itemSlotIndex: number, itemName: ItemName_3, itemAmount: number, attributes: ItemAttributes_3, tellClient: boolean) => void;
    readonly removeItemName: (playerId: PlayerId_3, itemName: ItemName_3, amount: number) => void;
    readonly getItemSlot: (playerId: PlayerId_3, itemSlotIndex: number) => ItemObject_3 | null;
    readonly clearInventory: (playerId: PlayerId_3) => void;
    readonly hasItem: (playerId: PlayerId_3, itemName: Item_3) => boolean;
    readonly getInventoryItemAmount: (playerId: PlayerId_3, itemName: Item_3) => number;
    readonly getSelectedInventorySlotI: (playerId: PlayerId_3) => number;
    readonly getHeldItem: (playerId: PlayerId_3) => ItemObject_3 | null;
    readonly getInventoryFreeSlotCount: (playerId: PlayerId_3) => number;
    readonly getInitialItemMetadata: (itemName: Item_3) => Partial<BlockMetadataItem_3 & NonBlockMetadataItem_3>;
    readonly setItemAmount: (itemId: ItemId_3, newAmount: number) => void;
    readonly setSelectedInventorySlotI: (playerId: PlayerId_3, newI: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9) => void;
    readonly getItemStat: (lifeformId: LifeformId_3 | null, itemName: ItemName_3, stat: string) => AnyMetadataItem_3;
    readonly getHealth: (entityId: EntityId_3) => Health_3;
    readonly setHealth: (entityId: EntityId_3, newHealth: Health_3 | null, whoDidDamage?: Readonly<WhoDidDamage_3>, increaseMaxHealthIfNeeded?: boolean) => boolean;
    readonly attemptApplyDamage: (options: Readonly<PlayerAttemptDamageOtherPlayerOpts_3>) => boolean;
    readonly applyMeleeHit: (hittingEId: LifeformId_3, hitEId: LifeformId_3, dirFacing: Readonly<Direcrion_3>, bodyPartHit?: LifeformBodyPart_3 | null, overrides?: Readonly<applyMeleeHitOverrides_3>) => boolean;
    readonly applyHealthChange: (lifeformId: LifeformId_3, changeAmount: number, whoDidDamage?: Readonly<WhoDidDamage_3>, broadcastLifeformHurt?: boolean) => boolean;
    readonly killLifeform: (lifeformId: LifeformId_3, whoKilled?: WhoKilled_3) => void;
    readonly isAlive: (lifeformId: LifeformId_3) => boolean;
    readonly getBlockCoordinatesPlayerStandingOn: (playerId: PlayerId_3) => Coordinate_3[];
    readonly getBlockTypesPlayerStandingOn: (playerId: PlayerId_3) => BlockName_3[];
    readonly getPosition: (entityId: EntityId_3) => Coordinate_3;
    readonly setPosition: {
        (entityId: EntityId_3, x: number, y: number, z: number): void;
        (entityId: EntityId_3, position: Readonly<Coordinate_3>): void;
    };
    readonly getShieldAmount: (entityId: EntityId_3) => ShieldAmount_3;
    readonly setShieldAmount: (lifeformId: LifeformId_3, newShieldAmount: ShieldAmount_3) => void;
    readonly showShopTutorial: (playerId: PlayerId_3) => void;
    readonly createShopItem: (categoryKey: ShopCategoryKey_3, itemKey: ShopItemKey_3, item: ShopItem_3) => void;
    readonly updateShopItem: (categoryKey: ShopCategoryKey_3, itemKey: ShopItemKey_3, changes: Partial<ShopItem_3>) => void;
    readonly deleteShopItem: (categoryKey: ShopCategoryKey_3, itemKey: ShopItemKey_3) => void;
    readonly configureShopCategory: (categoryKey: ShopCategoryKey_3, config: ShopCategoryConfig_3) => void;
    readonly createShopItemForPlayer: (playerId: PlayerId_3, categoryKey: ShopCategoryKey_3, itemKey: ShopItemKey_3, item: ShopItem_3) => void;
    readonly updateShopItemForPlayer: (playerId: PlayerId_3, categoryKey: ShopCategoryKey_3, itemKey: ShopItemKey_3, changes: Partial<ShopItem_3>) => void;
    readonly resetShopItemForPlayer: (playerId: PlayerId_3, categoryKey: ShopCategoryKey_3, itemKey: ShopItemKey_3) => void;
    readonly configureShopCategoryForPlayer: (playerId: PlayerId_3, categoryKey: ShopCategoryKey_3, config: ShopCategoryConfig_3) => void;
    readonly sendOverShopInfo: (playerId: PlayerId_3, info: string | CustomTextStyling_3) => void;
    readonly openShop: (playerId: PlayerId_3, toggle?: boolean, forceCategoryKey?: ShopCategoryKey_3 | null, onlyIfNonEmpty?: boolean) => void;
    readonly playParticleEffect: (opts: TempParticleSystemOpts_3 | ParticlePresetOpts_3, clientPredictedBy?: PlayerId_3) => void;
    readonly setCallbackValueFallback: (callbackName: CallbackName_3, defaultValue: any) => void;
};

export declare type OnDeathAura<K extends MobType_2> = OnDeathAuraDictionary[K];

declare type OnDeathAuraDictionary = Record<MobType_2, number>;

export declare type OnTamedHealthMultiplier<K extends MobType_2> = OnTamedHealthMultiplierDictionary[K];

declare type OnTamedHealthMultiplierDictionary = Record<MobType_2, number>;

export declare type OwnerDbId<K extends MobType_2> = OwnerDbIdDictionary[K];

declare type OwnerDbIdDictionary = Record<MobType_2, PlayerDbId_2 | null>;

export declare type ParticleEmitterOpts = {
    texture: Texture_2;
    minLifeTime: number;
    maxLifeTime: number;
    minEmitPower: number;
    maxEmitPower: number;
    minSize: number;
    maxSize: number;
    gravity: number[];
    velocityGradients: VelocityGradient_2[];
    colorGradients: TimeColorGradient_2[] | RandomColorGradient_2[];
    blendMode: ParticleSystemBlendMode_2;
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2;
    height: number;
    width: number;
    depth: number;
    emitRate: number;
    dir1?: number[];
    dir2?: number[];
};

declare type ParticleEmitterOpts_2 = {
    texture: Texture_2;
    minLifeTime: number;
    maxLifeTime: number;
    minEmitPower: number;
    maxEmitPower: number;
    minSize: number;
    maxSize: number;
    gravity: number[];
    velocityGradients: VelocityGradient_2[];
    colorGradients: TimeColorGradient_2[] | RandomColorGradient_2[];
    blendMode: ParticleSystemBlendMode_2;
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2; // EntityId to connect to using a line
    height: number;
    width: number;
    depth: number;
    emitRate: number;
    dir1?: number[];
    dir2?: number[];
};

/**
 * You can also use a presetId instead to use a pre-defined particle effect, to replicate effects we use in-engine. Here is the code for an example of using a presetId
 * @example
 * ```js
 *  let [x, y, z] = thisPos
 *  y += 1
 *  api.playParticleEffect({
 *    presetId: "aura",
 *    pos1: [x, y, z],
 *    pos2: [x + 1, y + 1, z + 1],
 *  })
 *  ```
 */
export declare type ParticlePresetOpts = {
    presetId: PresetId;
    pos1: Coordinate_2;
    pos2: Coordinate_2;
};

/**
 * You can also use a presetId instead to use a pre-defined particle effect, to replicate effects we use in-engine. Here is the code for an example of using a presetId
 * @example
 * ```js
 *  let [x, y, z] = thisPos
 *  y += 1
 *  api.playParticleEffect({
 *    presetId: "aura",
 *    pos1: [x, y, z],
 *    pos2: [x + 1, y + 1, z + 1],
 *  })
 *  ```
 */
declare type ParticlePresetOpts_2 = {
    presetId: PresetId_2;
    pos1: Coordinate_2;
    pos2: Coordinate_2;
};

export declare type ParticleSystemBlendMode = 
/**
* Source color is added to the destination color without alpha affecting the result
*/
0
/**
* Blend current color and particle color using particle's alpha
*/
| 1
/**
* Add current color and particle color multiplied by particle's alpha
*/
| 2
/**
* Multiply current color with particle color
*/
| 3
/**
* Multiply current color with particle color then add current color and particle color multiplied by particle's alpha
*/
| 4;

declare type ParticleSystemBlendMode_2 =
/**
* Source color is added to the destination color without alpha affecting the result
*/
| 0
/**
* Blend current color and particle color using particle's alpha
*/
| 1
/**
* Add current color and particle color multiplied by particle's alpha
*/
| 2
/**
* Multiply current color with particle color
*/
| 3
/**
* Multiply current color with particle color then add current color and particle color multiplied by particle's alpha
*/
| 4;

export declare type Party = {
    partyCode: string;
    playerDbIds: PlayerDbId_2[];
};

declare type Party_2 = { partyCode: string; playerDbIds: PlayerDbId_2[] };

export declare type PersonOpts = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2;
    size?: number;
    textures?: Partial<object>;
    pose?: PlayerPose_2;
};

declare type PersonOpts_2 = {
    hideDist?: number;
    meshOffset?: number[];
    autoRotate?: boolean;
    lineToEId?: EntityId_2; // EntityId to connect to using a line
    size?: number;
    textures?: Partial<object>; // Cosmetics> このobjectは本来Cosmetics
    pose?: PlayerPose_2;
};

export declare interface PlayerAttemptDamageOtherPlayerOpts {
    eId: EntityId_2;
    hitEId: EntityId_2;
    attemptedDmgAmt: number;
    withItem: Item_2;
    bodyPartHit?: LifeformBodyPart_2;
    attackDir?: Direcrion_2;
    showCritParticles?: boolean;
    reduceVerticalKbVelocity?: boolean;
    horizontalKbMultiplier?: number;
    verticalKbMultiplier?: number;
    broadcastEntityHurt?: boolean;
    attackCooldownSettings?: any;
    hittingSoundOverride?: SoundName_2;
    ignoreOtherEntitySettingCanAttack?: boolean;
    isTrueDamage?: boolean;
    damagerDbId?: string;
}

declare interface PlayerAttemptDamageOtherPlayerOpts_2 {
    eId: EntityId_2;
    hitEId: EntityId_2;
    attemptedDmgAmt: number;
    withItem: Item_2;
    bodyPartHit?: LifeformBodyPart_2;
    attackDir?: Direcrion_2;
    showCritParticles?: boolean;
    reduceVerticalKbVelocity?: boolean;
    horizontalKbMultiplier?: number;
    verticalKbMultiplier?: number;
    broadcastEntityHurt?: boolean;
    attackCooldownSettings?: any; // what is this
    hittingSoundOverride?: SoundName_2;
    ignoreOtherEntitySettingCanAttack?: boolean;
    isTrueDamage?: boolean;
    damagerDbId?: string;
}

export declare type PlayerDbId = string;

declare type PlayerDbId_2 = string;

export declare type PlayerId = EntityId;

declare type PlayerId_2 = EntityId_2;

export declare type PlayerPhysicsStateData = {
    tier: number;
    vehicle: number;
};

declare type PlayerPhysicsStateData_2 = { tier: number; vehicle: number };

export declare type PlayerPose = "standing" | "sitting" | "zombie" | "gliding" | "driving" | "sleeping" | "riding";

declare type PlayerPose_2 =
| "standing"
| "sitting"
| "zombie"
| "gliding"
| "driving"
| "sleeping"
| "riding";

export declare type PosSettings = {
    playerIdOrPos: PlayerId_2 | Coordinate;
    maxHearDist?: number;
    refDistance?: number;
};

declare type PosSettings_2 = {
    playerIdOrPos: PlayerId_2 | Coordinate_2;
    maxHearDist?: number;
    refDistance?: number;
};

export declare type PrecisionBarQteParams = {
    speed: number;
    successZoneSize: number;
    label: CustomTextStyling_2;
    icon?: Icon_2;
    scale?: number;
    rotation?: number;
};

declare type PrecisionBarQteParams_2 = {
    speed: number; // Speed of the marker in full bar-widths per second (must be > 0, e.g. 1.0 = one full sweep per second). default: 0.5
    successZoneSize: number; // Fraction of the bar that counts as the success zone, centred in the middle (must be > 0, 0-1, e.g. 0.15 = 15%). default: 0.15
    label: CustomTextStyling_2; // Rich text shown as the QTE prompt. default: [{ str: "Click when the marker is within the green zone." }]
    icon?: Icon_2; // Icon displayed on the marker. default: ""
    scale?: number; // Scale multiplier for the icon (must be > 0). default: 1
    rotation?: number; // Rotation in degrees for the icon (must be ≥ 0). default: 0
};

export declare type PresetId = "brainRot" | "stomp" | "fertiliser" | "bonemeal" | "mobTameSuccess" | "mobTameFailure" | "mobCatch" | "spawnCaughtMob" | "mobFeedDefault" | "mobFeedSuperliked" | "mobFeedLike" | "mobFeedNeutral" | "mobFeedDisliked" | "mobDeath" | "mobDeathSoul" | "boardShopSuccess" | "mobSpawnerBlockFail" | "mobSpawnerBlockPassive" | "mobSpawnerBlockNeutral" | "mobSpawnerBlockHostile" | "mobSpawnOrb" | "aura" | "yellowFirecrackerSmall" | "yellowFirecrackerLarge" | "whiteFirecrackerSmall" | "whiteFirecrackerLarge" | "redFirecrackerSmall" | "redFirecrackerLarge" | "purpleFirecrackerSmall" | "purpleFirecrackerLarge" | "pinkFirecrackerSmall" | "pinkFirecrackerLarge" | "orangeFirecrackerSmall" | "orangeFirecrackerLarge" | "magentaFirecrackerSmall" | "magentaFirecrackerLarge" | "limeFirecrackerSmall" | "limeFirecrackerLarge" | "lightGrayFirecrackerSmall" | "lightGrayFirecrackerLarge" | "lightBlueFirecrackerSmall" | "lightBlueFirecrackerLarge" | "greenFirecrackerSmall" | "greenFirecrackerLarge" | "grayFirecrackerSmall" | "grayFirecrackerLarge" | "cyanFirecrackerSmall" | "cyanFirecrackerLarge" | "brownFirecrackerSmall" | "brownFirecrackerLarge" | "blueFirecrackerSmall" | "blueFirecrackerLarge" | "blackFirecrackerSmall" | "blackFirecrackerLarge" | "defaultFirecrackerSmall" | "defaultFirecrackerLarge" | "mango" | "speedInner" | "speedOuter" | "damageReductionInner" | "damageReductionOuter" | "damageInner" | "damageOuter" | "invisibleInner" | "invisibleOuter" | "jumpBoostInner" | "jumpBoostOuter" | "knockbackInner" | "knockbackOuter" | "poisonedInner" | "poisonedOuter" | "slownessInner" | "slownessOuter" | "weaknessInner" | "weaknessOuter" | "cleansedInner" | "cleansedOuter" | "instantDamageInner" | "instantDamageOuter" | "healthRegenInner" | "healthRegenOuter" | "instantHealthInner" | "instantHealthOuter" | "hasteInner" | "hasteOuter" | "shieldInner" | "shieldOuter" | "doubleJumpInner" | "doubleJumpOuter" | "heatResistanceInner" | "heatResistanceOuter" | "thiefInner" | "thiefOuter" | "xRayVisionInner" | "xRayVisionOuter" | "miningYieldInner" | "miningYieldOuter" | "brainRotInner" | "brainRotOuter" | "auraInner" | "auraOuter" | "wallClimbingInner" | "wallClimbingOuter" | "airWalkInner" | "airWalkOuter" | "pickpocketerInner" | "pickpocketerOuter" | "lifestealInner" | "lifestealOuter" | "bouncinessInner" | "bouncinessOuter" | "blindnessInner" | "blindnessOuter" | "poopyInner" | "poopyOuter";

declare type PresetId_2 =
| "brainRot"
| "stomp"
| "fertiliser"
| "bonemeal"
| "mobTameSuccess"
| "mobTameFailure"
| "mobCatch"
| "spawnCaughtMob"
| "mobFeedDefault"
| "mobFeedSuperliked"
| "mobFeedLike"
| "mobFeedNeutral"
| "mobFeedDisliked"
| "mobDeath"
| "mobDeathSoul"
| "boardShopSuccess"
| "mobSpawnerBlockFail"
| "mobSpawnerBlockPassive"
| "mobSpawnerBlockNeutral"
| "mobSpawnerBlockHostile"
| "mobSpawnOrb"
| "aura"
| "yellowFirecrackerSmall"
| "yellowFirecrackerLarge"
| "whiteFirecrackerSmall"
| "whiteFirecrackerLarge"
| "redFirecrackerSmall"
| "redFirecrackerLarge"
| "purpleFirecrackerSmall"
| "purpleFirecrackerLarge"
| "pinkFirecrackerSmall"
| "pinkFirecrackerLarge"
| "orangeFirecrackerSmall"
| "orangeFirecrackerLarge"
| "magentaFirecrackerSmall"
| "magentaFirecrackerLarge"
| "limeFirecrackerSmall"
| "limeFirecrackerLarge"
| "lightGrayFirecrackerSmall"
| "lightGrayFirecrackerLarge"
| "lightBlueFirecrackerSmall"
| "lightBlueFirecrackerLarge"
| "greenFirecrackerSmall"
| "greenFirecrackerLarge"
| "grayFirecrackerSmall"
| "grayFirecrackerLarge"
| "cyanFirecrackerSmall"
| "cyanFirecrackerLarge"
| "brownFirecrackerSmall"
| "brownFirecrackerLarge"
| "blueFirecrackerSmall"
| "blueFirecrackerLarge"
| "blackFirecrackerSmall"
| "blackFirecrackerLarge"
| "defaultFirecrackerSmall"
| "defaultFirecrackerLarge"
| "mango"
| "speedInner"
| "speedOuter"
| "damageReductionInner"
| "damageReductionOuter"
| "damageInner"
| "damageOuter"
| "invisibleInner"
| "invisibleOuter"
| "jumpBoostInner"
| "jumpBoostOuter"
| "knockbackInner"
| "knockbackOuter"
| "poisonedInner"
| "poisonedOuter"
| "slownessInner"
| "slownessOuter"
| "weaknessInner"
| "weaknessOuter"
| "cleansedInner"
| "cleansedOuter"
| "instantDamageInner"
| "instantDamageOuter"
| "healthRegenInner"
| "healthRegenOuter"
| "instantHealthInner"
| "instantHealthOuter"
| "hasteInner"
| "hasteOuter"
| "shieldInner"
| "shieldOuter"
| "doubleJumpInner"
| "doubleJumpOuter"
| "heatResistanceInner"
| "heatResistanceOuter"
| "thiefInner"
| "thiefOuter"
| "xRayVisionInner"
| "xRayVisionOuter"
| "miningYieldInner"
| "miningYieldOuter"
| "brainRotInner"
| "brainRotOuter"
| "auraInner"
| "auraOuter"
| "wallClimbingInner"
| "wallClimbingOuter"
| "airWalkInner"
| "airWalkOuter"
| "pickpocketerInner"
| "pickpocketerOuter"
| "lifestealInner"
| "lifestealOuter"
| "bouncinessInner"
| "bouncinessOuter"
| "blindnessInner"
| "blindnessOuter"
| "poopyInner"
| "poopyOuter";

export declare type ProgressBarQteParams = {
    progressStartValue?: number;
    progressDecreasePerTick: number;
    progressPerClick: number;
    canFail: boolean;
    description: CustomTextStyling_2;
    clickIcon: Icon_2;
    scale?: number;
    rotation?: number;
};

declare type ProgressBarQteParams_2 = {
    progressStartValue?: number; // Starting progress value (0-100). default: 30
    progressDecreasePerTick: number; // How much progress drains each tick while the player isn't clicking. default: 0.075
    progressPerClick: number; // How much progress is gained per click. default: 5
    canFail: boolean; // If true, the QTE fails when progress reaches 0; otherwise progress clamps at 0. default: false
    description: CustomTextStyling_2; // Rich text shown as the QTE prompt. default: [{ str: "Click repeatedly to complete!" }]
    clickIcon: Icon_2; // Icon displayed on the click target. default: "fa-solid fa-computer-mouse"
    scale?: number; // Scale multiplier for the click icon (must be > 0). default: 1
    rotation?: number; // Rotation in degrees for the click icon (must be ≥ 0). default: 15
};

export declare type QTEClientParameters = {
    type: "rhythmClick";
    parameters: RhythmClickQteParams_2;
} | {
    type: "percisionBar";
    parameters: PrecisionBarQteParams_2;
} | {
    type: "gravityBar";
    parameters: GravityBarQteParams_2;
} | {
    type: "timedClick";
    parameters: TimedClickQteParams_2;
} | {
    type: "progressBar";
    parameters: ProgressBarQteParams_2;
};

declare type QTEClientParameters_2 =
| {
    type: "rhythmClick";
    parameters: RhythmClickQteParams_2;
}
| {
    type: "percisionBar";
    parameters: PrecisionBarQteParams_2;
}
| {
    type: "gravityBar";
    parameters: GravityBarQteParams_2;
}
| {
    type: "timedClick";
    parameters: TimedClickQteParams_2;
}
| {
    type: "progressBar";
    parameters: ProgressBarQteParams_2;
};

export declare type QTERequestId = string;

declare type QTERequestId_2 = string;

export declare type Radian = number;

declare type Radian_2 = number;

export declare type RandomColorGradient = number;

declare type RandomColorGradient_2 = number;

export declare type RecipesForItem = {
    requires: {
        items: ItemName_2[];
        amt: number;
    }[];
    produces: number;
    station?: string | string[];
    onCraftedAura?: number;
    isStarterRecipe?: boolean;
}[];

declare type RecipesForItem_2 = {
    requires: { items: ItemName_2[]; amt: number }[];
    produces: number;
    station?: string | string[];
    onCraftedAura?: number;
    isStarterRecipe?: boolean;
}[];

export declare type RhythmClickQteParams = {
    requiredSuccesses: number;
    shrinkDurationMs: number;
    toleranceFraction: number;
    maxMisses?: number;
    label: CustomTextStyling_2;
    icon?: Icon_2;
};

declare type RhythmClickQteParams_2 = {
    requiredSuccesses: number; // Number of successful clicks needed to complete the QTE (must be a positive integer). default: 5
    shrinkDurationMs: number; // Duration in milliseconds for the outer circle to shrink from max size to centre (must be > 0). default: 1200
    toleranceFraction: number; // Fraction of the inner circle radius that counts as a successful overlap (must be > 0, 0-1, e.g. 0.15 = ±15%). default: 0.15
    maxMisses?: number; // Max misses allowed before failing. If omitted, unlimited misses are permitted (must be a non-negative integer). default: 3
    label: CustomTextStyling_2; // Rich text shown as the QTE prompt. default: [{ str: "Click when the circles align!" }]
    icon?: Icon_2; // Icon displayed in the centre of the circles. default: ""
};

export declare type RidingSpeedMult<K extends MobType_2> = RidingSpeedMultDictionary[K];

declare type RidingSpeedMultDictionary = Record<MobType_2, number>;

/**
 * Returns the current default value for a mob setting.
 *
 * @param {TMobType} mobType
 * @param {TMobSetting} setting
 * @returns {MobSettings<TMobType>[TMobSetting]}
 */
declare type RootGetDefaultMobSetting = <TMobType extends MobType_2, TMobSetting extends keyof MobSettings<TMobType>>(mobType: TMobType, setting: TMobSetting) => MobSettings<TMobType>[TMobSetting];

/**
 * Get the current value of a mob setting for a specific mob.
 *
 * @param {MobId} mobId
 * @param {TMobSetting} setting
 * @param {boolean} [returnDefaultIfNotOverridden] - If true, return the default setting if not overridden.
 * @returns {MobSettings<MobType>[TMobSetting]}
 */
declare type RootGetMobSetting = <TMobSetting extends keyof MobSettings<MobType_2>>(mobId: MobId_2, setting: TMobSetting, returnDefaultIfNotOverridden?: boolean) => MobSettings<MobType_2>[TMobSetting];

/**
 * Get the value of a player's other-entity setting for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Setting} settingName
 * @returns {EntitySettings[Setting]}
 */
declare type RootGetOtherEntitySetting = <Setting extends keyof EntitySettings>(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: Setting) => EntitySettings[Setting];

/**
 * Set the default value for a mob setting.
 *
 * @param {TMobType} mobType
 * @param {TMobSetting} setting
 * @param {MobSettings<TMobType>[TMobSetting]} value
 * @returns {void}
 */
declare type RootSetDefaultMobSetting = <TMobType extends MobType_2, TMobSetting extends keyof MobSettings<TMobType>>(mobType: TMobType, setting: TMobSetting, value: MobSettings<TMobType>[TMobSetting]) => void;

/**
 * Set a player's other-entity setting for every lifeform in the game.
 * includeNewJoiners=true means that the player will have the setting applied to new joiners.
 *
 * @param {PlayerId} playerId
 * @param {Setting} settingName
 * @param {EntitySettings[Setting]} settingValue
 * @param {boolean} [includeNewJoiners]
 * @returns {void}
 */
declare type RootSetEveryoneSettingForPlayer = <Setting extends keyof EntitySettings>(playerId: PlayerId_2, settingName: Setting, settingValue: EntitySettings[Setting], includeNewJoiners?: boolean) => void;

/**
 * Set the current value of a mob setting for a specific mob.
 *
 * @param {MobId} mobId
 * @param {TMobSetting} setting
 * @param {MobSettings<MobType>[TMobSetting]} value
 * @returns {void}
 */
declare type RootSetMobSetting = <TMobSetting extends keyof MobSettings<MobType_2>>(mobId: MobId_2, setting: TMobSetting, value: MobSettings<MobType_2>[TMobSetting]) => void;

/**
 * Set a player's other-entity setting for a specific entity.
 *
 * @param {PlayerId} relevantPlayerId
 * @param {EntityId} targetedEntityId
 * @param {Setting} settingName
 * @param {EntitySettings[Setting]} settingValue
 * @returns {void}
 */
declare type RootSetOtherEntitySetting = <Setting extends keyof EntitySettings>(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: Setting, settingValue: EntitySettings[Setting]) => void;

/**
 * Set every player's other-entity setting to a specific value for a particular player.
 * includeNewJoiners=true means that new players joining the game will also have this other player setting applied.
 *
 * @param {PlayerId} targetedPlayerId
 * @param {Setting} settingName
 * @param {EntitySettings[Setting]} settingValue
 * @param {boolean} [includeNewJoiners]
 * @returns {void}
 */
declare type RootSetTargetedPlayerSettingForEveryone = <Setting extends keyof EntitySettings>(targetedPlayerId: PlayerId_2, settingName: Setting, settingValue: EntitySettings[Setting], includeNewJoiners?: boolean) => void;

export declare type Rotation = [Radian_2, Radian_2, Radian_2];

declare type Rotation_2 = [Radian_2, Radian_2, Radian_2];

export declare type RunAwayRadius<K extends MobType_2> = RunAwayRadiusDictionary[K];

declare type RunAwayRadiusDictionary = Record<MobType_2, number>;

export declare type RunningSpeedMultiplier<K extends MobType_2> = RunningSpeedMultiplierDictionary[K];

declare type RunningSpeedMultiplierDictionary = Record<MobType_2, number>;

export declare type SecondaryAttackDamage<K extends MobType_2> = SecondaryAttackDamageDictionary[K];

declare type SecondaryAttackDamageDictionary = Record<MobType_2, number>;

export declare type SecondaryAttackImpulse<K extends MobType_2> = SecondaryAttackImpulseDictionary[K];

declare type SecondaryAttackImpulseDictionary = Record<MobType_2, number>;

export declare type SecondaryAttackItemName<K extends MobType_2> = SecondaryAttackItemNameDictionary[K];

declare type SecondaryAttackItemNameDictionary = Record<MobType_2, Item_2 | null>;

export declare type SecondaryAttackRadius<K extends MobType_2> = SecondaryAttackRadiusDictionary[K];

declare type SecondaryAttackRadiusDictionary = Record<MobType_2, number>;

export declare type SecondaryAttackSound<K extends MobType_2> = SecondaryAttackSoundDictionary[K];

declare type SecondaryAttackSoundDictionary = Record<MobType_2, SoundName_2 | string | null>;

export declare type SecondaryBurstAttackInfo<K extends MobType_2> = SecondaryBurstAttackInfoDictionary[K];

declare type SecondaryBurstAttackInfoDictionary = Record<MobType_2, {
    burstAttackIntervals: readonly number[];
} | null>;

export declare type SetClientOption = GenerateClientOptionInterface<AllClientOptionUnion, "SetClientOption">;

declare interface SetClientOption_10 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"musicVolumeLevel"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "musicVolumeLevel", value: number): void;
}

declare interface SetClientOption_11 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showPlayersInUnloadedChunks"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "showPlayersInUnloadedChunks", value: boolean): void;
}

declare interface SetClientOption_12 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"useInventory"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "useInventory", value: boolean): void;
}

declare interface SetClientOption_13 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"useFullInventory"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "useFullInventory", value: boolean): void;
}

declare interface SetClientOption_14 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canCraft"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canCraft", value: boolean): void;
}

declare interface SetClientOption_15 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickUpItems"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canPickUpItems", value: boolean): void;
}

declare interface SetClientOption_16 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"playerZoom"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "playerZoom", value: number): void;
}

declare interface SetClientOption_17 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"zoomOutDistance"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "zoomOutDistance", value: number): void;
}

declare interface SetClientOption_18 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxPlayerZoom"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "maxPlayerZoom", value: number): void;
}

declare interface SetClientOption_19 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canCustomiseChar"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canCustomiseChar", value: boolean): void;
}

declare interface SetClientOption_2 {
    /**
     * set status player who can changing block
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canchange"} option
     * @param {true} value
     */
    setClientOption(playerId: PlayerId_2, option: "canChange", value: true): void;
    /**
     * set status player who can not changing block
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canchange"} option
     * @param {false} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canChange", value: false): void;
}

declare interface SetClientOption_20 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"defaultBlock"} option
     * @param {string} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "defaultBlock", value: string): void;
}

declare interface SetClientOption_21 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantChangeError"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "cantChangeError", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_22 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBreakError"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "cantBreakError", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_23 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBuildError"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "cantBuildError", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_24 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"touchscreenActionButton"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "touchscreenActionButton", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_25 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"strictFluidBuckets"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "strictFluidBuckets", value: boolean): void;
}

declare interface SetClientOption_26 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canUseZoomKey"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canUseZoomKey", value: boolean): void;
}

declare interface SetClientOption_27 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canAltAction"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canAltAction", value: boolean): void;
}

declare interface SetClientOption_28 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canSeeNametagsThroughWalls"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canSeeNametagsThroughWalls", value: boolean): void;
}

declare interface SetClientOption_29 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showBasicMovementControls"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "showBasicMovementControls", value: boolean): void;
}

declare interface SetClientOption_3 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"crouchingSpeed"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "crouchingSpeed", value: number): void;
}

declare interface SetClientOption_30 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextUpper"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "middleTextUpper", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_31 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextLower"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "middleTextLower", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_32 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"crosshairText"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "crosshairText", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_33 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"RightInfoText"} option
     * @param {string | CustomTextStyling} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "RightInfoText", value: string | CustomTextStyling_2): void;
}

declare interface SetClientOption_34 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"numClosestPlayersVisible"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "numClosestPlayersVisible", value: number): void;
}

declare interface SetClientOption_35 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showProgressBar"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "showProgressBar", value: boolean): void;
}

declare interface SetClientOption_36 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showKillfeed"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "showKillfeed", value: boolean): void;
}

declare interface SetClientOption_37 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"chatChannels"} option
     * @param {{ channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[]} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "chatChannels", value: {
        channelName: string;
        elementContent: string | CustomTextStyling_2;
        elementBgColor: string;
    }[]): void;
}

declare interface SetClientOption_38 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"creative"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "creative", value: boolean): void;
}

declare interface SetClientOption_39 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"flySpeedMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "flySpeedMultiplier", value: number): void;
}

declare interface SetClientOption_4 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"walkingSpeed"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "walkingSpeed", value: number): void;
}

declare interface SetClientOption_40 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickBlocks"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "canPickBlocks", value: boolean): void;
}

declare interface SetClientOption_41 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"compassTarget"} option
     * @param {string | number | number[]} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "compassTarget", value: string | number | number[]): void;
}

declare interface SetClientOption_42 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"ttbMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "ttbMultiplier", value: number): void;
}

declare interface SetClientOption_43 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"inventoryItemsMoveable"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "inventoryItemsMoveable", value: boolean): void;
}

declare interface SetClientOption_44 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"invincible"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "invincible", value: boolean): void;
}

declare interface SetClientOption_45 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxShield"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "maxShield", value: number): void;
}

declare interface SetClientOption_46 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"initialShield"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "initialShield", value: number): void;
}

declare interface SetClientOption_47 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxHealth"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "maxHealth", value: number): void;
}

declare interface SetClientOption_48 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"initialHealth"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "initialHealth", value: number): void;
}

declare interface SetClientOption_49 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenAmount"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "healthRegenAmount", value: number): void;
}

declare interface SetClientOption_5 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"runningSpeed"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "runningSpeed", value: number): void;
}

declare interface SetClientOption_50 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenInterval"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "healthRegenInterval", value: number): void;
}

declare interface SetClientOption_51 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenStartAfter"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "healthRegenStartAfter", value: number): void;
}

declare interface SetClientOption_52 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectDamageDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "effectDamageDuration", value: number): void;
}

declare interface SetClientOption_53 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectSpeedDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "effectSpeedDuration", value: number): void;
}

declare interface SetClientOption_54 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectDamageReductionDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "effectDamageReductionDuration", value: number): void;
}

declare interface SetClientOption_55 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectHealthRegenDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "effectHealthRegenDuration", value: number): void;
}

declare interface SetClientOption_56 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"potionEffectDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "potionEffectDuration", value: number): void;
}

declare interface SetClientOption_57 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"splashPotionEffectDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "splashPotionEffectDuration", value: number): void;
}

declare interface SetClientOption_58 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"arrowPotionEffectDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "arrowPotionEffectDuration", value: number): void;
}

declare interface SetClientOption_59 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fogChunkDistanceOverride"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "fogChunkDistanceOverride", value: number): void;
}

declare interface SetClientOption_6 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"speedMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "speedMultiplier", value: number): void;
}

declare interface SetClientOption_60 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fogColourOverride"} option
     * @param {string} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "fogColourOverride", value: string): void;
}

declare interface SetClientOption_61 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airAccScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "airAccScale", value: number): void;
}

declare interface SetClientOption_62 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airFrictionScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "airFrictionScale", value: number): void;
}

declare interface SetClientOption_63 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airMomentumConservation"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "airMomentumConservation", value: boolean): void;
}

declare interface SetClientOption_64 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"auraPerLevel"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "auraPerLevel", value: number): void;
}

declare interface SetClientOption_65 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"autoRespawn"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "autoRespawn", value: boolean): void;
}

declare interface SetClientOption_66 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cameraTint"} option
     * @param {[number, number, number, number]} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "cameraTint", value: [number, number, number, number]): void;
}

declare interface SetClientOption_67 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageDefaultMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier", value: number): void;
}

declare interface SetClientOption_68 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageHeadMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "dealingDamageHeadMultiplier", value: number): void;
}

declare interface SetClientOption_69 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageLegMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "dealingDamageLegMultiplier", value: number): void;
}

declare interface SetClientOption_7 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"jumpAmount"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "jumpAmount", value: number): void;
}

declare interface SetClientOption_70 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "dealingDamageMultiplier", value: number): void;
}

declare interface SetClientOption_71 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"droppedItemScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "droppedItemScale", value: number): void;
}

declare interface SetClientOption_72 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fallDamage"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "fallDamage", value: boolean): void;
}

declare interface SetClientOption_73 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"groundFrictionScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "groundFrictionScale", value: number): void;
}

declare interface SetClientOption_74 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"killstreakDuration"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "killstreakDuration", value: number): void;
}

declare interface SetClientOption_75 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxAuraLevel"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "maxAuraLevel", value: number): void;
}

declare interface SetClientOption_76 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"movementBasedFovScale"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "movementBasedFovScale", value: number): void;
}

declare interface SetClientOption_77 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"receivingDamageMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "receivingDamageMultiplier", value: number): void;
}

declare interface SetClientOption_78 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"respawnButtonText"} option
     * @param {string} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "respawnButtonText", value: string): void;
}

declare interface SetClientOption_79 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"secsToRespawn"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "secsToRespawn", value: number): void;
}

declare interface SetClientOption_8 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airJumpCount"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "airJumpCount", value: number): void;
}

declare interface SetClientOption_80 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"usePlayAgainButton"} option
     * @param {boolean} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "usePlayAgainButton", value: boolean): void;
}

declare interface SetClientOption_9 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"bunnyhopMaxMultiplier"} option
     * @param {number} value
     * @returns {void}
     */
    setClientOption(playerId: PlayerId_2, option: "bunnyhopMaxMultiplier", value: number): void;
}

export declare type SetClientOptionToDefault = GenerateClientOptionInterface<AllClientOptionUnion, "SetClientOptionToDefault">;

declare interface SetClientOptionToDefault_10 {
    /**
     * set musicVolumeLevel option to default
     * musicVolumeLevel default is `0.6`
     *
     * option document:
     * Volume level for the music
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"musicVolumeLevel"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "musicVolumeLevel"): void;
}

declare interface SetClientOptionToDefault_11 {
    /**
     * set showPlayersInUnloadedChunks option to default
     * showPlayersInUnloadedChunks default is `false`
     *
     * option document:
     * Whether to show the player in unloaded chunks
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showPlayersInUnloadedChunks"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "showPlayersInUnloadedChunks"): void;
}

declare interface SetClientOptionToDefault_12 {
    /**
     * set useInventory option to default
     * useInventory default is `true`
     *
     * option document:
     * Whether to allow the player to use the inventory
     * Disabling this will also disable the hotbar
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"useInventory"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "useInventory"): void;
}

declare interface SetClientOptionToDefault_13 {
    /**
     * set useFullInventory option to default
     * useFullInventory default is `true`
     *
     * option document:
     * For now just enables the UI of the full inventory
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"useFullInventory"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "useFullInventory"): void;
}

declare interface SetClientOptionToDefault_14 {
    /**
     * set canCraft option to default
     * canCraft default is `true`
     *
     * option document:
     * Whether to allow the player to craft items
     * useFullInventory must be true for this to work
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canCraft"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canCraft"): void;
}

declare interface SetClientOptionToDefault_15 {
    /**
     * set canPickUpItems option to default
     * canPickUpItems default is `true`
     *
     * option document:
     * Whether to allow the player to pick up items
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickUpItems"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canPickUpItems"): void;
}

declare interface SetClientOptionToDefault_16 {
    /**
     * set playerZoom option to default
     * playerZoom default is `0`
     *
     * option document:
     * Default camera zoom level for the player
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"playerZoom"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "playerZoom"): void;
}

declare interface SetClientOptionToDefault_17 {
    /**
     * set zoomOutDistance option to default
     * zoomOutDistance default is `3`
     *
     * option document:
     * Distance to zoom the camera out to
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"zoomOutDistance"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "zoomOutDistance"): void;
}

declare interface SetClientOptionToDefault_18 {
    /**
     * set maxPlayerZoom option to default
     * maxPlayerZoom default is `15`
     *
     * option document:
     * Maximum camera zoom level for the player
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxPlayerZoom"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "maxPlayerZoom"): void;
}

declare interface SetClientOptionToDefault_19 {
    /**
     * set canCustomiseChar option to default
     * canCustomiseChar default is `true`
     *
     * option document:
     * Whether the player can customise their character
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canCustomiseChar"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canCustomiseChar"): void;
}

declare interface SetClientOptionToDefault_2 {
    /**
     * set canChange option to default
     * canChange default is `true`
     *
     * option docment:
     * Whether the player can change blocks
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canChange"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canChange"): void;
}

declare interface SetClientOptionToDefault_20 {
    /**
     * set defaultBlock option to default
     * defaultBlock default is `"Block of Gold"`
     *
     * option document:
     * The default block the player can change blocks to, used if canChange is true but useInventory is false
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"defaultBlock"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "defaultBlock"): void;
}

declare interface SetClientOptionToDefault_21 {
    /**
     * set cantChangeError option to default
     * cantChangeError default is `"You cannot modify this block"`
     *
     * option document:
     * Error message for when the player fails to change a block
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantChangeError"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "cantChangeError"): void;
}

declare interface SetClientOptionToDefault_22 {
    /**
     * set cantBreakError option to default
     * cantBreakError default is `null`
     *
     * option document:
     * Error message for when the player fails to break a block
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBreakError"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "cantBreakError"): void;
}

declare interface SetClientOptionToDefault_23 {
    /**
     * set cantBuildError option to default
     * cantBuildError default is `null`
     *
     * option document:
     * Error message for when the player fails to place a block
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cantBuildError"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "cantBuildError"): void;
}

declare interface SetClientOptionToDefault_24 {
    /**
     * set touchscreenActionButton option to default
     * touchscreenActionButton default is `null`
     *
     * option document:
     * The contents of the action button. Supports custom text styling. onTouchscreenActionButton will be called when button pressed.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"touchscreenActionButton"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "touchscreenActionButton"): void;
}

declare interface SetClientOptionToDefault_25 {
    /**
     * set strictFluidBuckets option to default
     * strictFluidBuckets default is `true`
     *
     * option document:
     * Whether a player can place fluid when canChange is false
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"strictFluidBuckets"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "strictFluidBuckets"): void;
}

declare interface SetClientOptionToDefault_26 {
    /**
     * set canUseZoomKey option to default
     * canUseZoomKey default is `true`
     *
     * option document:
     * Whether the player can use the zoom key
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canUseZoomKey"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canUseZoomKey"): void;
}

declare interface SetClientOptionToDefault_27 {
    /**
     * set canAltAction option to default
     * canAltAction default is `true`
     *
     * option document:
     * Whether the player can use the alt action key (right click on PC)
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canAltAction"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canAltAction"): void;
}

declare interface SetClientOptionToDefault_28 {
    /**
     * set canSeeNametagsThroughWalls option to default
     * canSeeNametagsThroughWalls default is `true`
     *
     * option document:
     * Whether the player can see name tags through walls
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canSeeNametagsThroughWalls"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canSeeNametagsThroughWalls"): void;
}

declare interface SetClientOptionToDefault_29 {
    /**
     * set showBasicMovementControls option to default
     * showBasicMovementControls default is `true`
     *
     * option document:
     * Whether to show basic movement controls
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showBasicMovementControls"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "showBasicMovementControls"): void;
}

declare interface SetClientOptionToDefault_3 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"crouchingSpeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "crouchingSpeed"): void;
}

declare interface SetClientOptionToDefault_30 {
    /**
     * set middleTextUpper option to default
     * middleTextUpper default is `""`
     *
     * option document:
     * Large text to display in the middle of the screen
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextUpper"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "middleTextUpper"): void;
}

declare interface SetClientOptionToDefault_31 {
    /**
     * set middleTextLower option to default
     * middleTextLower default is `""`
     *
     * option document:
     * Small text to display in the middle of the screen
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"middleTextLower"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "middleTextLower"): void;
}

declare interface SetClientOptionToDefault_32 {
    /**
     * set crosshairText option to default
     * crosshairText default is `""`
     *
     * option document:
     * Text to display by the crosshair
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"crosshairText"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "crosshairText"): void;
}

declare interface SetClientOptionToDefault_33 {
    /**
     * set RightInfoText option to default
     * RightInfoText default is `""`
     *
     * option document:
     * Text to display in the right info box
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"RightInfoText"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "RightInfoText"): void;
}

declare interface SetClientOptionToDefault_34 {
    /**
     * set numClosestPlayersVisible option to default
     * numClosestPlayersVisible default is `null`
     *
     * option document:
     * If set, clients will only be able to see the closest x players (good for client perf in games with many players)
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"numClosestPlayersVisible"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "numClosestPlayersVisible"): void;
}

declare interface SetClientOptionToDefault_35 {
    /**
     * set showProgressBar option to default
     * showProgressBar default is `false`
     *
     * option document:
     * Whether to show the progress bar
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showProgressBar"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "showProgressBar"): void;
}

declare interface SetClientOptionToDefault_36 {
    /**
     * set showKillfeed option to default
     * showKillfeed default is `true`
     *
     * option document:
     * Whether to show the killfeed
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showKillfeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "showKillfeed"): void;
}

declare interface SetClientOptionToDefault_37 {
    /**
     * set chatChannels option to default
     * chatChannels default is `null`
     *
     * option document:
     * Allows player to select a channel that is passed as argument to onPlayerChat. See engineGameplayTypes.ts for expected format
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"chatChannels"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "chatChannels"): void;
}

declare interface SetClientOptionToDefault_38 {
    /**
     * set creative option to default
     * creative default is `false`
     *
     * option document:
     * Whether the player is in creative mode
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"creative"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "creative"): void;
}

declare interface SetClientOptionToDefault_39 {
    /**
     * set flySpeedMultiplier option to default
     * flySpeedMultiplier default is `1.5`
     *
     * option document:
     * Multiplier for the flying speed in creative mode
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"flySpeedMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "flySpeedMultiplier"): void;
}

declare interface SetClientOptionToDefault_4 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"walkingSpeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "walkingSpeed"): void;
}

declare interface SetClientOptionToDefault_40 {
    /**
     * set canPickBlocks option to default
     * canPickBlocks default is `true`
     *
     * option document:
     * Whether the player can pick blocks (middle mouse click on PC), ignored if creative is false
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canPickBlocks"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "canPickBlocks"): void;
}

declare interface SetClientOptionToDefault_41 {
    /**
     * set compassTarget option to default
     * compassTarget default is `[0, 0, 0]`
     *
     * option document:
     * The target the compass will point towards
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"compassTarget"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "compassTarget"): void;
}

declare interface SetClientOptionToDefault_42 {
    /**
     * set ttbMultiplier option to default
     * ttbMultiplier default is `1`
     *
     * option document:
     * Multiplier for the time to break any block
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"ttbMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "ttbMultiplier"): void;
}

declare interface SetClientOptionToDefault_43 {
    /**
     * set inventoryItemsMoveable option to default
     * inventoryItemsMoveable default is `true`
     *
     * option document:
     * Whether the player can move items in their inventory, only applicable if useInventory is true
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"inventoryItemsMoveable"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "inventoryItemsMoveable"): void;
}

declare interface SetClientOptionToDefault_44 {
    /**
     * set invincible option to default
     * invincible default is `false`
     *
     * option document:
     * Whether the player is invincible
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"invincible"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "invincible"): void;
}

declare interface SetClientOptionToDefault_45 {
    /**
     * set maxShield option to default
     * maxShield default is `100`
     *
     * option document:
     * Maximum shield the player can have
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxShield"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "maxShield"): void;
}

declare interface SetClientOptionToDefault_46 {
    /**
     * set initialShield option to default
     * initialShield default is `0`
     *
     * option document:
     * Shield upon joining or respawning
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"initialShield"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "initialShield"): void;
}

declare interface SetClientOptionToDefault_47 {
    /**
     * set maxHealth option to default
     * maxHealth default is `100`
     *
     * option document:
     * Maximum health the player can have
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxHealth"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "maxHealth"): void;
}

declare interface SetClientOptionToDefault_48 {
    /**
     * set initialHealth option to default
     * initialHealth default is `100`
     *
     * option document:
     * Health upon joining or respawning. Can be null for the player to not have health
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"initialHealth"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "initialHealth"): void;
}

declare interface SetClientOptionToDefault_49 {
    /**
     * set healthRegenAmount option to default
     * healthRegenAmount default is `0.05`
     *
     * option document:
     * Fraction of max health that regens each regen tick
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenAmount"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "healthRegenAmount"): void;
}

declare interface SetClientOptionToDefault_5 {
    /**
     *
     * @param {PlayerId} playerId
     * @param {"runningSpeed"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "runningSpeed"): void;
}

declare interface SetClientOptionToDefault_50 {
    /**
     * set healthRegenInterval option to default
     * healthRegenInterval default is `4000`
     *
     * option document:
     * How often health regen is ticked
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenInterval"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "healthRegenInterval"): void;
}

declare interface SetClientOptionToDefault_51 {
    /**
     * set healthRegenStartAfter option to default
     * healthRegenStartAfter default is `5000`
     *
     * option document:
     * How long after a player receives damage to start regen again
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"healthRegenStartAfter"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "healthRegenStartAfter"): void;
}

declare interface SetClientOptionToDefault_52 {
    /**
     * set effectDamageDuration option to default
     * effectDamageDuration default is `8000`
     *
     * option document:
     * Duration of the +damage effect from plum
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectDamageDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "effectDamageDuration"): void;
}

declare interface SetClientOptionToDefault_53 {
    /**
     * set effectSpeedDuration option to default
     * effectSpeedDuration default is `8000`
     *
     * option document:
     * Duration of +speed effect from cracked coconut
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectSpeedDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "effectSpeedDuration"): void;
}

declare interface SetClientOptionToDefault_54 {
    /**
     * set effectDamageReductionDuration option to default
     * effectDamageReductionDuration default is `13000`
     *
     * option document:
     * Duration of +damage reduction effect from pear
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectDamageReductionDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "effectDamageReductionDuration"): void;
}

declare interface SetClientOptionToDefault_55 {
    /**
     * set effectHealthRegenDuration option to default
     * effectHealthRegenDuration default is `5000`
     *
     * option document:
     * Duration of +health regen effect from cherry
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"effectHealthRegenDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "effectHealthRegenDuration"): void;
}

declare interface SetClientOptionToDefault_56 {
    /**
     * set potionEffectDuration option to default
     * potionEffectDuration default is `12000`
     *
     * option document:
     * Duration of potion effects
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"potionEffectDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "potionEffectDuration"): void;
}

declare interface SetClientOptionToDefault_57 {
    /**
     * set splashPotionEffectDuration option to default
     * splashPotionEffectDuration default is `8000`
     *
     * option document:
     * Duration of splash potion effects
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"splashPotionEffectDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "splashPotionEffectDuration"): void;
}

declare interface SetClientOptionToDefault_58 {
    /**
     * set arrowPotionEffectDuration option to default
     * arrowPotionEffectDuration default is `6000`
     *
     * option document:
     * Duration of arrow potion effects
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"arrowPotionEffectDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "arrowPotionEffectDuration"): void;
}

declare interface SetClientOptionToDefault_59 {
    /**
     * set fogChunkDistanceOverride option to default
     * fogChunkDistanceOverride default is `null`
     *
     * option document:
     * Fog distance which overrides graphic settings. Uses graphic settings if null.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fogChunkDistanceOverride"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "fogChunkDistanceOverride"): void;
}

declare interface SetClientOptionToDefault_6 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"speedMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "speedMultiplier"): void;
}

declare interface SetClientOptionToDefault_60 {
    /**
     * set fogColourOverride option to default
     * fogColourOverride default is `null`
     *
     * option document:
     * RGB string for fog colour override. e.g. #ffffff
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fogColourOverride"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "fogColourOverride"): void;
}

declare interface SetClientOptionToDefault_61 {
    /**
     * set airAccScale option to default
     * airAccScale default is `1`
     *
     * option document:
     * Amount of acceleration to apply to airborne players.
     * Only change if absolutely necessary i.e. Rocket Obby uses 0.25.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airAccScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "airAccScale"): void;
}

declare interface SetClientOptionToDefault_62 {
    /**
     * set airFrictionScale option to default
     * airFrictionScale default is `1`
     *
     * option document:
     * Amount of friction to apply to airborne players.
     * Only change if absolutely necessary i.e. Rocket Obby uses 0.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airFrictionScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "airFrictionScale"): void;
}

declare interface SetClientOptionToDefault_63 {
    /**
     * set airMomentumConservation option to default
     * airMomentumConservation default is `false`
     *
     * option document:
     * Whether to allow the player to strafe and conserve momentum while airborne.
     * Only change if absolutely necessary i.e. only Rocket Obby uses true.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airMomentumConservation"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "airMomentumConservation"): void;
}

declare interface SetClientOptionToDefault_64 {
    /**
     * set auraPerLevel option to default
     * auraPerLevel default is `100`
     *
     * option document:
     * How much Aura XP is required per level.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"auraPerLevel"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "auraPerLevel"): void;
}

declare interface SetClientOptionToDefault_65 {
    /**
     * set autoRespawn option to default
     * autoRespawn default is `false`
     *
     * option document:
     * If true, player will respawn automatically after secsToRespawn seconds
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"autoRespawn"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "autoRespawn"): void;
}

declare interface SetClientOptionToDefault_66 {
    /**
     * set cameraTint option to default
     * cameraTint default is `null`
     *
     * option document:
     * RGBA array [r, g, b, a] for camera screen tint effect. Values fall between 0 and 1.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"cameraTint"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "cameraTint"): void;
}

declare interface SetClientOptionToDefault_67 {
    /**
     * set dealingDamageDefaultMultiplier option to default
     * dealingDamageDefaultMultiplier default is `1`
     *
     * option document:
     * Mult for when the player hits neither a leg or a head. Only applies to guns
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageDefaultMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "dealingDamageDefaultMultiplier"): void;
}

declare interface SetClientOptionToDefault_68 {
    /**
     * set dealingDamageHeadMultiplier option to default
     * dealingDamageHeadMultiplier default is `1.75`
     *
     * option document:
     * Damage multiplier for when the player hits a head. Only applies to guns
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageHeadMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "dealingDamageHeadMultiplier"): void;
}

declare interface SetClientOptionToDefault_69 {
    /**
     * set dealingDamageLegMultiplier option to default
     * dealingDamageLegMultiplier default is `1`
     *
     * option document:
     * Damage multiplier for when the player hits a leg. Only applies to guns
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageLegMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "dealingDamageLegMultiplier"): void;
}

declare interface SetClientOptionToDefault_7 {
    /**
     * set jumpAmount option to default
     * jumpAmount default is `8`
     *
     * option document:
     * Amount of jump power the player has
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"jumpAmount"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "jumpAmount"): void;
}

declare interface SetClientOptionToDefault_70 {
    /**
     * set dealingDamageMultiplier option to default
     * dealingDamageMultiplier default is `1`
     *
     * option document:
     * Damage multiplier for all types of damage
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"dealingDamageMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "dealingDamageMultiplier"): void;
}

declare interface SetClientOptionToDefault_71 {
    /**
     * set droppedItemScale option to default
     * droppedItemScale default is `1`
     *
     * option document:
     * Scale factor to use for dropped item meshes
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"droppedItemScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "droppedItemScale"): void;
}

declare interface SetClientOptionToDefault_72 {
    /**
     * set fallDamage option to default
     * fallDamage default is `false`
     *
     * option document:
     * Whether to deal damage to the player when they fall
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"fallDamage"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "fallDamage"): void;
}

declare interface SetClientOptionToDefault_73 {
    /**
     * set groundFrictionScale option to default
     * groundFrictionScale default is `1`
     *
     * option document:
     * Amount of friction to apply to grounded players.
     * Only change if absolutely necessary i.e. Rocket Obby uses 3.
     * Players are used to the default bloxd movement behaviour and speed,
     * and may be put off from your game if different muscle memory is required.
     * We suggest applying speed or slowness effects instead, using api.applyEffect.
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"groundFrictionScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "groundFrictionScale"): void;
}

declare interface SetClientOptionToDefault_74 {
    /**
     * set killstreakDuration option to default
     * killstreakDuration default is `200000000`
     *
     * option document:
     * Duration before a killstreak expires. (defaults to never expiring)
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"killstreakDuration"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "killstreakDuration"): void;
}

declare interface SetClientOptionToDefault_75 {
    /**
     * set maxAuraLevel option to default
     * maxAuraLevel default is `0`
     *
     * option document:
     * The maximum Aura Level attainable - Set to 0 to disable Aura XP
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"maxAuraLevel"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "maxAuraLevel"): void;
}

declare interface SetClientOptionToDefault_76 {
    /**
     * set movementBasedFovScale option to default
     * movementBasedFovScale default is `1`
     *
     * option document:
     * Amount that player camera is affected by movement based fov
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"movementBasedFovScale"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "movementBasedFovScale"): void;
}

declare interface SetClientOptionToDefault_77 {
    /**
     * set receivingDamageMultiplier option to default
     * receivingDamageMultiplier default is `1`
     *
     * option document:
     * Damage multiplier for all types of incoming damage
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"receivingDamageMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "receivingDamageMultiplier"): void;
}

declare interface SetClientOptionToDefault_78 {
    /**
     * set respawnButtonText option to default
     * respawnButtonText default is `"general:respawn"`
     *
     * option document:
     * Text to show on respawn button. (E.g. "Spectate")
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"respawnButtonText"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "respawnButtonText"): void;
}

declare interface SetClientOptionToDefault_79 {
    /**
     * set secsToRespawn option to default
     * secsToRespawn default is `5`
     *
     * option document:
     * After dying the player can respawn after this many seconds
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"secsToRespawn"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "secsToRespawn"): void;
}

declare interface SetClientOptionToDefault_8 {
    /**
     * set airJumpCount option to default
     * airJumpCount default is `0`
     *
     * option document:
     * Amount of air jumps the player has
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"airJumpCount"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "airJumpCount"): void;
}

declare interface SetClientOptionToDefault_80 {
    /**
     * set usePlayAgainButton option to default
     * usePlayAgainButton default is `false`
     *
     * option document:
     * When player is dead, also show a play again button to matchmake player into a new lobby. Mostly useful for sessionBased games
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"usePlayAgainButton"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "usePlayAgainButton"): void;
}

declare interface SetClientOptionToDefault_9 {
    /**
     * set bunnyhopMaxMultiplier option to default
     * bunnyhopMaxMultiplier default is `1.3`
     *
     * option document:
     * Maximum multiplier for jump height when bunnyhopping
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"bunnyhopMaxMultiplier"} option
     * @returns {void}
     */
    setClientOptionToDefault(playerId: PlayerId_2, option: "bunnyhopMaxMultiplier"): void;
}

export declare type SetEveryoneSettingForPlayer = GenerateEntitySettingInterface<AllEntitySettingUnion, "SetEveryoneSettingForPlayer">;

declare interface SetEveryoneSettingForPlayer_10 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"nameColour"} settingName
     * @param {ValueType} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_9, settingValue: ValueType_88, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_11 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"nameTagInfo"} settingName
     * @param {NameTagInfo} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_10, settingValue: ValueType_89, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_12 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"meshScaling"} settingName
     * @param {EntityMeshScalingMap} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_11, settingValue: ValueType_90, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_13 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"lobbyLeaderboardValues"} settingName
     * @param {LobbyLeaderboardValues} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_12, settingValue: ValueType_91, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_14 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"colorInLobbyLeaderboard"} settingName
     * @param {StringColor} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_13, settingValue: ValueType_92, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_2 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"opacity"} settingName
     * @param {Opacity} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: "opacity", settingValue: ValueType_80, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_3 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"zIndex"} settingName
     * @param {0| 1} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_2, settingValue: ValueType_81, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_4 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"overlayColour"} settingName
     * @param {string | null} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_3, settingValue: ValueType_82, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_5 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canAttack"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_4, settingValue: ValueType_83, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_6 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"canSee"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_5, settingValue: ValueType_84, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_7 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"showDamageAmounts"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_6, settingValue: ValueType_85, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_8 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"killfeedColour"} settingName
     * @param {StringColor} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_7, settingValue: ValueType_86, includeNewJoiners?: boolean): void;
}

declare interface SetEveryoneSettingForPlayer_9 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} playerId
     * @param {"hasPriorityNametag"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setEveryoneSettingForPlayer(playerId: PlayerId_2, settingName: typeof name_8, settingValue: ValueType_87, includeNewJoiners?: boolean): void;
}

declare type SetEveryoneSettingForPlayerType = RootSetEveryoneSettingForPlayer & SetEveryoneSettingForPlayer["setEveryoneSettingForPlayer"];

export declare type SetOtherEntitySetting = GenerateEntitySettingInterface<AllEntitySettingUnion, "SetOtherEntitySetting">;

declare interface SetOtherEntitySetting_10 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"nameColour"} settingName
     * @param {ValueType} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_9, settingValue: ValueType_88): void;
}

declare interface SetOtherEntitySetting_11 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"nameTagInfo"} settingName
     * @param {NameTagInfo} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_10, settingValue: ValueType_89): void;
}

declare interface SetOtherEntitySetting_12 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"meshScaling"} settingName
     * @param {EntityMeshScalingMap} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_11, settingValue: ValueType_90): void;
}

declare interface SetOtherEntitySetting_13 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"lobbyLeaderboardValues"} settingName
     * @param {LobbyLeaderboardValues} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_12, settingValue: ValueType_91): void;
}

declare interface SetOtherEntitySetting_14 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"colorInLobbyLeaderboard"} settingName
     * @param {StringColor} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_13, settingValue: ValueType_92): void;
}

declare interface SetOtherEntitySetting_2 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"opacity"} settingName
     * @param {Opacity} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: "opacity", settingValue: ValueType_80): void;
}

declare interface SetOtherEntitySetting_3 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"zIndex"} settingName
     * @param {0| 1} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_2, settingValue: ValueType_81): void;
}

declare interface SetOtherEntitySetting_4 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"overlayColour"} settingName
     * @param {string | null} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_3, settingValue: ValueType_82): void;
}

declare interface SetOtherEntitySetting_5 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"canAttack"} settingName
     * @param {boolean} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_4, settingValue: ValueType_83): void;
}

declare interface SetOtherEntitySetting_6 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"canSee"} settingName
     * @param {boolean} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_5, settingValue: ValueType_84): void;
}

declare interface SetOtherEntitySetting_7 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"showDamageAmounts"} settingName
     * @param {boolean} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_6, settingValue: ValueType_85): void;
}

declare interface SetOtherEntitySetting_8 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"killfeedColour"} settingName
     * @param {StringColor} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_7, settingValue: ValueType_86): void;
}

declare interface SetOtherEntitySetting_9 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId}
     * @param {"hasPriorityNametag"} settingName
     * @param {boolean} settingValue
     * @returns {void}
     */
    setOtherEntitySetting(relevantPlayerId: PlayerId_2, targetedEntityId: EntityId_2, settingName: typeof name_8, settingValue: ValueType_87): void;
}

declare type SetOtherEntitySettingType = RootSetOtherEntitySetting & SetOtherEntitySetting["setOtherEntitySetting"];

export declare type SetTargetedPlayerSettingForEveryone = GenerateEntitySettingInterface<AllEntitySettingUnion, "SetTargetedPlayerSettingForEveryone">;

declare interface SetTargetedPlayerSettingForEveryone_10 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"nameColour"} settingName
     * @param {ValueType} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_9, settingValue: ValueType_88, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_11 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"nameTagInfo"} settingName
     * @param {NameTagInfo} settingValue
     * @param {boolean} includeNewJoiners
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_10, settingValue: ValueType_89, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_12 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"meshScaling"} settingName
     * @param {EntityMeshScalingMap} settingValue
     * @param {boolean} includeNewJoiners
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_11, settingValue: ValueType_90, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_13 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"lobbyLeaderboardValues"} settingName
     * @param {LobbyLeaderboardValues} settingValue
     * @param {boolean} includeNewJoiners
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_12, settingValue: ValueType_91, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_14 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"colorInLobbyLeaderboard"} settingName
     * @param {StringColor} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_13, settingValue: ValueType_92, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_2 {
    /**
     *
     * @overload@overload
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"opacity"} settingName
     * @param {Opacity} settingValue
     * @param {boolean} [includeNewJoiners]
     * @returns {void}
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: "opacity", settingValue: ValueType_80, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_3 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"zIndex"} settingName
     * @param {0| 1} settingValue
     * @param {boolean} includeNewJoiners
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_2, settingValue: ValueType_81, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_4 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"overlayColour"} settingName
     * @param {string | null} settingValue
     * @param {boolean} includeNewJoiners
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_3, settingValue: ValueType_82, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_5 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"canAttack"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_4, settingValue: ValueType_83, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_6 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"canSee"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_5, settingValue: ValueType_84, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_7 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"showDamageAmounts"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_6, settingValue: ValueType_85, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_8 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"killfeedColour"} settingName
     * @param {StringColor} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_7, settingValue: ValueType_86, includeNewJoiners?: boolean): void;
}

declare interface SetTargetedPlayerSettingForEveryone_9 {
    /**
     *
     * @param {PlayerId} targetedPlayerId
     * @param {"hasPriorityNametag"} settingName
     * @param {boolean} settingValue
     * @param {boolean} [includeNewJoiners]
     */
    setTargetedPlayerSettingForEveryone(targetedPlayerId: PlayerId_2, settingName: typeof name_8, settingValue: ValueType_87, includeNewJoiners?: boolean): void;
}

declare type SetTargetedPlayerSettingForEveryoneType = RootSetTargetedPlayerSettingForEveryone & SetTargetedPlayerSettingForEveryone["setTargetedPlayerSettingForEveryone"];

export declare type ShieldAmount = number;

declare type ShieldAmount_2 = number;

export declare type ShoesCosmetic = "shoes_0_0" | "shoes_0_1" | "shoes_0_2" | "shoes_1_0" | "shoes_1_1" | "shoes_1_2" | "shoes_2_0" | "shoes_2_1" | "shoes_2_2";

declare type ShoesCosmetic_2 =
| "shoes_0_0"
| "shoes_0_1"
| "shoes_0_2"
| "shoes_1_0"
| "shoes_1_1"
| "shoes_1_2"
| "shoes_2_0"
| "shoes_2_1"
| "shoes_2_2";

export declare type ShopCategoryConfig = Partial<{
    autoSelectCategory: boolean;
    customTitle: string;
    redDot: boolean;
    forceRemoveRedDot: boolean;
    sortPriority: number;
    description: string | CustomTextStyling_2;
}>;

declare type ShopCategoryConfig_2 = Partial<{
    autoSelectCategory: boolean;
    customTitle: string; // Supports translation keys and ordinary text
    redDot: boolean;
    forceRemoveRedDot: boolean;
    sortPriority: number;
    description: string | CustomTextStyling_2;
}>;

export declare type ShopCategoryKey = string;

declare type ShopCategoryKey_2 = string;

export declare type ShopItem = {
    image: string;
    cost?: number;
    currency?: string;
    amount?: number;
    imageColour?: StringColor_2;
    canBuy?: boolean;
    isSelected?: boolean;
    buyButtonText?: string | CustomTextStyling_2;
    customTitle?: string | CustomTextStyling_2;
    description?: string | CustomTextStyling_2;
    onBoughtMessage?: string | CustomTextStyling_2;
    redDot?: boolean;
    forceRemoveRedDot?: boolean;
    badge?: {
        text: string | CustomTextStyling_2;
        type: ShopItemBadgeType_2;
    };
    userInput?: ShopItemUserInput_2;
    sell?: boolean;
    sortPriority?: number;
    hidden?: boolean;
};

declare type ShopItem_2 = {
    image: string;
    cost?: number;
    currency?: string;
    amount?: number; // Display amount shown on the shop tile image (0 and 1 are not displayed)
    imageColour?: StringColor_2;
    canBuy?: boolean;
    isSelected?: boolean;
    buyButtonText?: string | CustomTextStyling_2;
    customTitle?: string | CustomTextStyling_2;
    description?: string | CustomTextStyling_2;
    onBoughtMessage?: string | CustomTextStyling_2;
    redDot?: boolean;
    forceRemoveRedDot?: boolean;
    badge?: { text: string | CustomTextStyling_2; type: ShopItemBadgeType_2 };
    userInput?: ShopItemUserInput_2;
    sell?: boolean; // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
    sortPriority?: number; // Descending, bigger number means closer to the top
    hidden?: boolean;
};

export declare type ShopItemBadgeType = "new" | "lucky";

declare type ShopItemBadgeType_2 = "new" | "lucky";

export declare type ShopItemKey = string;

declare type ShopItemKey_2 = string;

export declare type ShopItemUserInput = {
    type: "text";
    placeholderText?: string;
    wordCharsOnly?: boolean;
    initialValue?: string;
} | {
    type: "number";
    placeholderText?: string;
    initialValue?: string;
} | {
    type: "dropdown";
    dropdownOptions: readonly (string | {
        option: string;
        cost: number;
    })[];
    shouldResetSelectionOnOptionsChange?: boolean;
    initialValue?: string;
} | {
    type: "player";
    excludedPlayers?: PlayerId_2[];
} | {
    type: "color";
    initialValue?: string;
};

declare type ShopItemUserInput_2 =
| {
    type: "text";
    placeholderText?: string;
    wordCharsOnly?: boolean;
    initialValue?: string;
} // wordCharsOnly defaults to false. If true, only allows \w character (alphanumeric and _). initialValue always takes precedence as the text input value when set.
| { type: "number"; placeholderText?: string; initialValue?: string }
| {
    type: "dropdown";
    dropdownOptions: readonly (string | { option: string; cost: number })[];
    shouldResetSelectionOnOptionsChange?: boolean; // Defaults to false. If true, the selection will reset to the first option when dropdownOptions changes.
    initialValue?: string;
}
| { type: "player"; excludedPlayers?: PlayerId_2[] } // Defaults to excluding the current player
| { type: "color"; initialValue?: string };

export declare type SkinCosmetic = "skin_0_0" | "skin_0_1" | "skin_0_2" | "skin_0_3" | "skin_0_4" | "skin_0_5" | "skin_0_6" | "skin_0_7" | "skin_0_8" | "skin_0_9" | "skin_0_10" | "skin_0_11" | "skin_0_12" | "skin_0_13" | "skin_0_14" | "skin_0_15" | "skin_0_16" | "skin_0_17" | "skin_0_18" | "skin_0_19" | "skin_0_20" | "skin_0_21" | "skin_0_22" | "skin_0_23";

declare type SkinCosmetic_2 =
| "skin_0_0"
| "skin_0_1"
| "skin_0_2"
| "skin_0_3"
| "skin_0_4"
| "skin_0_5"
| "skin_0_6"
| "skin_0_7"
| "skin_0_8"
| "skin_0_9"
| "skin_0_10"
| "skin_0_11"
| "skin_0_12"
| "skin_0_13"
| "skin_0_14"
| "skin_0_15"
| "skin_0_16"
| "skin_0_17"
| "skin_0_18"
| "skin_0_19"
| "skin_0_20"
| "skin_0_21"
| "skin_0_22"
| "skin_0_23";

export declare type SoundName = AllSoundName;

declare type SoundName_2 = AllSoundName_2;

export declare type StoppingRadius<K extends MobType_2> = StoppingRadiusDictionary[K];

declare type StoppingRadiusDictionary = Record<MobType_2, number>;

/**
 * this type is color.
 * allow all css color type.
 * @example
 * `#ff0000` | `rgb(255,0,0)` | `red` | `Red` | `#f00` | `rgba(255,0,0,1)` | `hsl(0,100%,50%)` | `hsla(0,100%,50%,1)` is all red
 */
export declare type StringColor = `#${string}` | `rgb(${string})` | `rgba(${string})` | `hsl(${string})` | `hsla(${string})` | `hwb(${string})` | `lab(${string})` | `lch(${string})` | `oklab(${string})` | `oklch(${string})` | `color(${string})` | "currentColor" | "transparent" | "aliceblue" | "antiquewhite" | "aqua" | "aquamarine" | "azure" | "beige" | "bisque" | "black" | "blanchedalmond" | "blue" | "blueviolet" | "brown" | "burlywood" | "cadetblue" | "chartreuse" | "chocolate" | "coral" | "cornflowerblue" | "cornsilk" | "crimson" | "cyan" | "darkblue" | "darkcyan" | "darkgoldenrod" | "darkgray" | "darkgreen" | "darkgrey" | "darkkhaki" | "darkmagenta" | "darkolivegreen" | "darkorange" | "darkorchid" | "darkred" | "darksalmon" | "darkseagreen" | "darkslateblue" | "darkslategray" | "darkslategrey" | "darkturquoise" | "darkviolet" | "deeppink" | "deepskyblue" | "dimgray" | "dimgrey" | "dodgerblue" | "firebrick" | "floralwhite" | "forestgreen" | "fuchsia" | "gainsboro" | "ghostwhite" | "gold" | "goldenrod" | "gray" | "green" | "greenyellow" | "grey" | "honeydew" | "hotpink" | "indianred" | "indigo" | "ivory" | "khaki" | "lavender" | "lavenderblush" | "lawngreen" | "lemonchiffon" | "lightblue" | "lightcoral" | "lightcyan" | "lightgoldenrodyellow" | "lightgray" | "lightgreen" | "lightgrey" | "lightpink" | "lightsalmon" | "lightseagreen" | "lightskyblue" | "lightslategray" | "lightslategrey" | "lightsteelblue" | "lightyellow" | "lime" | "limegreen" | "linen" | "magenta" | "maroon" | "mediumaquamarine" | "mediumblue" | "mediumorchid" | "mediumpurple" | "mediumseagreen" | "mediumslateblue" | "mediumspringgreen" | "mediumturquoise" | "mediumvioletred" | "midnightblue" | "mintcream" | "mistyrose" | "moccasin" | "navajowhite" | "navy" | "oldlace" | "olive" | "olivedrab" | "orange" | "orangered" | "orchid" | "palegoldenrod" | "palegreen" | "paleturquoise" | "palevioletred" | "papayawhip" | "peachpuff" | "peru" | "pink" | "plum" | "powderblue" | "purple" | "rebeccapurple" | "red" | "rosybrown" | "royalblue" | "saddlebrown" | "salmon" | "sandybrown" | "seagreen" | "seashell" | "sienna" | "silver" | "skyblue" | "slateblue" | "slategray" | "slategrey" | "snow" | "springgreen" | "steelblue" | "tan" | "teal" | "thistle" | "tomato" | "turquoise" | "violet" | "wheat" | "white" | "whitesmoke" | "yellow" | "yellowgreen" | string;

/**
 * this type is color.
 * allow all css color type.
 * @example
 * `#ff0000` | `rgb(255,0,0)` | `red` | `Red` | `#f00` | `rgba(255,0,0,1)` | `hsl(0,100%,50%)` | `hsla(0,100%,50%,1)` is all red
 */
declare type StringColor_2 =
// Hex colors
| `#${string}`
// RGB and RGBA
| `rgb(${string})`
| `rgba(${string})`
// HSL and HSLA
| `hsl(${string})`
| `hsla(${string})`
// HWB
| `hwb(${string})`
// LAB and LCH
| `lab(${string})`
| `lch(${string})`
// OKLAB and OKLCH
| `oklab(${string})`
| `oklch(${string})`
// color() function
| `color(${string})`
// Special values
| "currentColor"
| "transparent"
// CSS named colors (full list)
| "aliceblue"
| "antiquewhite"
| "aqua"
| "aquamarine"
| "azure"
| "beige"
| "bisque"
| "black"
| "blanchedalmond"
| "blue"
| "blueviolet"
| "brown"
| "burlywood"
| "cadetblue"
| "chartreuse"
| "chocolate"
| "coral"
| "cornflowerblue"
| "cornsilk"
| "crimson"
| "cyan"
| "darkblue"
| "darkcyan"
| "darkgoldenrod"
| "darkgray"
| "darkgreen"
| "darkgrey"
| "darkkhaki"
| "darkmagenta"
| "darkolivegreen"
| "darkorange"
| "darkorchid"
| "darkred"
| "darksalmon"
| "darkseagreen"
| "darkslateblue"
| "darkslategray"
| "darkslategrey"
| "darkturquoise"
| "darkviolet"
| "deeppink"
| "deepskyblue"
| "dimgray"
| "dimgrey"
| "dodgerblue"
| "firebrick"
| "floralwhite"
| "forestgreen"
| "fuchsia"
| "gainsboro"
| "ghostwhite"
| "gold"
| "goldenrod"
| "gray"
| "green"
| "greenyellow"
| "grey"
| "honeydew"
| "hotpink"
| "indianred"
| "indigo"
| "ivory"
| "khaki"
| "lavender"
| "lavenderblush"
| "lawngreen"
| "lemonchiffon"
| "lightblue"
| "lightcoral"
| "lightcyan"
| "lightgoldenrodyellow"
| "lightgray"
| "lightgreen"
| "lightgrey"
| "lightpink"
| "lightsalmon"
| "lightseagreen"
| "lightskyblue"
| "lightslategray"
| "lightslategrey"
| "lightsteelblue"
| "lightyellow"
| "lime"
| "limegreen"
| "linen"
| "magenta"
| "maroon"
| "mediumaquamarine"
| "mediumblue"
| "mediumorchid"
| "mediumpurple"
| "mediumseagreen"
| "mediumslateblue"
| "mediumspringgreen"
| "mediumturquoise"
| "mediumvioletred"
| "midnightblue"
| "mintcream"
| "mistyrose"
| "moccasin"
| "navajowhite"
| "navy"
| "oldlace"
| "olive"
| "olivedrab"
| "orange"
| "orangered"
| "orchid"
| "palegoldenrod"
| "palegreen"
| "paleturquoise"
| "palevioletred"
| "papayawhip"
| "peachpuff"
| "peru"
| "pink"
| "plum"
| "powderblue"
| "purple"
| "rebeccapurple"
| "red"
| "rosybrown"
| "royalblue"
| "saddlebrown"
| "salmon"
| "sandybrown"
| "seagreen"
| "seashell"
| "sienna"
| "silver"
| "skyblue"
| "slateblue"
| "slategray"
| "slategrey"
| "snow"
| "springgreen"
| "steelblue"
| "tan"
| "teal"
| "thistle"
| "tomato"
| "turquoise"
| "violet"
| "wheat"
| "white"
| "whitesmoke"
| "yellow"
| "yellowgreen"
// fallback allowance for any other valid CSS color syntaxes not listed above
| string;

export declare type StyledIcon = {
    icon: Icon_2;
    style?: {
        color?: StringColor_2;
        colour?: StringColor_2;
        fontSize?: string;
        opacity?: number;
    };
};

declare type StyledIcon_2 = {
    icon: Icon_2;
    style?: {
        color?: StringColor_2;
        colour?: StringColor_2;
        fontSize?: string;
        opacity?: number;
    };
};

export declare type StyledText = {
    str: string | EntityName | TranslatedText;
    style?: TextStyle;
    clickableUrl?: string;
};

declare type StyledText_2 = {
    str: string | EntityName_2 | TranslatedText_2;
    style?: TextStyle_2;
    clickableUrl?: string;
};

export declare type SwingArmOnAttack<K extends MobType_2> = SwingArmOnAttackDictionary[K];

declare type SwingArmOnAttackDictionary = Record<MobType_2, boolean>;

export declare type SwingArmOnSecondaryAttack<K extends MobType_2> = SwingArmOnSecondaryAttackDictionary[K];

declare type SwingArmOnSecondaryAttackDictionary = Record<MobType_2, boolean>;

export declare type TempParticleSystemOpts = {
    texture: Texture_2;
    minLifeTime: number;
    maxLifeTime: number;
    minEmitPower: number;
    maxEmitPower: number;
    minSize: number;
    maxSize: number;
    gravity: [number, number, number];
    velocityGradients: {
        timeFraction: number;
        factor: number;
        factor2: number;
    }[];
    colorGradients: {
        timeFraction: number;
        minColor: Array255ColorWithA_2;
        maxColor?: Array255ColorWithA_2;
    }[] | {
        color: Array255Color_2;
    }[];
    blendMode: ParticleSystemBlendMode_2;
    dir1: Direcrion_2;
    dir2: Direcrion_2;
    pos1: Coordinate_2;
    pos2: Coordinate_2;
    manualEmitCount: number;
    hideDist: number;
};

declare type TempParticleSystemOpts_2 = {
    texture: Texture_2;
    minLifeTime: number;
    maxLifeTime: number;
    minEmitPower: number;
    maxEmitPower: number;
    minSize: number;
    maxSize: number;
    gravity: [number, number, number];
    velocityGradients: {
        timeFraction: number;
        factor: number;
        factor2: number;
    }[];
    colorGradients:
    | {
        timeFraction: number;
        minColor: Array255ColorWithA_2;
        maxColor?: Array255ColorWithA_2;
    }[]
    | {
        color: Array255Color_2;
    }[];
    blendMode: ParticleSystemBlendMode_2;
    dir1: Direcrion_2;
    dir2: Direcrion_2;
    pos1: Coordinate_2;
    pos2: Coordinate_2;
    manualEmitCount: number;
    hideDist: number;
};

export declare type TerritoryRadius<K extends MobType_2> = TerritoryRadiusDictionary[K];

declare type TerritoryRadiusDictionary = Record<MobType_2, number>;

export declare type TextStyle = {
    color?: StringColor_2;
    colour?: StringColor_2;
    fontSize?: string;
    fontWeight?: number | string;
    opacity?: number;
};

declare type TextStyle_2 = {
    color?: StringColor_2;
    colour?: StringColor_2;
    fontSize?: string;
    fontWeight?: number | string;
    opacity?: number;
};

export declare type Texture = "bubble" | "critical_hit" | "drift" | "effect_5" | "generic_2" | "glint" | "heart" | "scary_face" | "soul_0" | "square_particle" | "z-particle";

declare type Texture_2 =
| "bubble"
| "critical_hit"
| "drift"
| "effect_5"
| "generic_2"
| "glint"
| "heart"
| "scary_face"
| "soul_0"
| "square_particle"
| "z-particle";

export declare type ThrowableItem = AllItemName;

declare type ThrowableItem_2 = AllItemName_2;

export declare type TimeColorGradient = number;

declare type TimeColorGradient_2 = number;

export declare type TimedClickQteParams = {
    timeWindow: number;
    icon: Icon_2;
    label: CustomTextStyling_2;
    showTimer: boolean;
    scale?: number;
    rotation?: number;
    breatheCenter?: boolean;
};

declare type TimedClickQteParams_2 = {
    timeWindow: number; // Duration in milliseconds the player has to click. default: 3000
    icon: Icon_2; // Icon displayed on the click target. default: "fa-solid fa-computer-mouse"
    label: CustomTextStyling_2; // Rich text shown as the QTE prompt. default: [{ str: "Click to complete the QTE!" }]
    showTimer: boolean; // Whether to display a countdown timer. default: true
    scale?: number; // Scale multiplier for the icon (must be > 0). default: 1
    rotation?: number; // Rotation in degrees for the icon (must be ≥ 0). default: 15
    breatheCenter?: boolean; // If true, the icon pulses with a breathing animation anchored to the centre. default: false
};

export declare type TranslatedText = {
    translationKey: string;
    params?: Record<string, string | number | boolean | EntityName>;
};

declare type TranslatedText_2 = {
    translationKey: string;
    params?: Record<string, string | number | boolean | EntityName_2>;
};

declare type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

declare type UnionToIntersection_2<U> = (U extends any ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

/**
 * Whether the player can change blocks
 * @type {boolean}
 * @default true
 */
declare type ValueType = boolean;

/**
 * Whether to show the player in unloaded chunks
 * @type {boolean}
 */
declare type ValueType_10 = boolean;

/**
 * Whether to allow the player to use the inventory
 * Disabling this will also disable the hotbar
 * @type {boolean}
 */
declare type ValueType_11 = boolean;

/**
 * For now just enables the UI of the full inventory
 * @type {boolean}
 */
declare type ValueType_12 = boolean;

/**
 * Whether to allow the player to craft items
 * useFullInventory must be true for this to work
 * @type {boolean}
 */
declare type ValueType_13 = boolean;

/**
 * Whether to allow the player to pick up items
 * @type {boolean}
 */
declare type ValueType_14 = boolean;

/**
 * Default camera zoom level for the player
 * @type {number}
 */
declare type ValueType_15 = number;

/**
 * Distance to zoom the camera out to
 * @type {number}
 */
declare type ValueType_16 = number;

/**
 * Maximum camera zoom level for the player
 * @type {number}
 */
declare type ValueType_17 = number;

/**
 * Whether the player can customise their character
 * @type {boolean}
 */
declare type ValueType_18 = boolean;

/**
 * The default block the player can change blocks to, used if canChange is true but useInventory is false
 * @type {string}
 */
declare type ValueType_19 = string;

/**
 * Speed multiplier for the player when crouching.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 * @default 2
 */
declare type ValueType_2 = number;

/**
 * Error message for when the player fails to change a block
 * @type {string | CustomTextStyling}
 */
declare type ValueType_20 = string | CustomTextStyling_2;

/**
 * Error message for when the player fails to break a block
 * @type {string | CustomTextStyling}
 */
declare type ValueType_21 = string | CustomTextStyling_2;

/**
 * Error message for when the player fails to place a block
 * @type {string | CustomTextStyling}
 */
declare type ValueType_22 = string | CustomTextStyling_2;

/**
 * The contents of the action button. Supports custom text styling. onTouchscreenActionButton will be called when button pressed.
 * @type {string | CustomTextStyling}
 */
declare type ValueType_23 = string | CustomTextStyling_2;

/**
 * Whether a player can place fluid when canChange is false
 * @type {boolean}
 */
declare type ValueType_24 = boolean;

/**
 * Whether the player can use the zoom key
 * @type {boolean}
 */
declare type ValueType_25 = boolean;

/**
 * Whether the player can use the alt action key (right click on PC)
 * @type {boolean}
 */
declare type ValueType_26 = boolean;

/**
 * Whether the player can see name tags through walls
 * @type {boolean}
 */
declare type ValueType_27 = boolean;

/**
 * Whether to show basic movement controls
 * @type {boolean}
 */
declare type ValueType_28 = boolean;

/**
 * Large text to display in the middle of the screen
 * @type {string | CustomTextStyling}
 */
declare type ValueType_29 = string | CustomTextStyling_2;

/**
 * Walking speed for the player.
 * STRONGLY recommend using `speedMultiplier` unless you have a specific use case for this, walkingSpeed doesn't make UX sense on mobile.
 * (Walking speed ignored for mobile players, mobile player speed is determined by joystick input and the max of runningSpeed & walkingSpeed).
 *
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * The only use case for walkingSpeed/runningSpeed over speedMultiplier or speed effects is to disable running or to inverse walking/running (so you run by default and e.g. hold shift to go slower).
 * @type {number}
 * @default 4
 */
declare type ValueType_3 = number;

/**
 * Small text to display in the middle of the screen
 * @type {string | CustomTextStyling}
 */
declare type ValueType_30 = string | CustomTextStyling_2;

/**
 * Text to display by the crosshair
 * @type {string | CustomTextStyling}
 */
declare type ValueType_31 = string | CustomTextStyling_2;

/**
 * Text to display in the right info box
 * @type {string | CustomTextStyling}
 */
declare type ValueType_32 = string | CustomTextStyling_2;

/**
 * If set, clients will only be able to see the closest x players (good for client perf in games with many players)
 * @type {number}
 */
declare type ValueType_33 = number;

/**
 * Whether to show the progress bar
 * @type {boolean}
 */
declare type ValueType_34 = boolean;

/**
 * Whether to show the killfeed
 * @type {boolean}
 */
declare type ValueType_35 = boolean;

/**
 * Allows player to select a channel that is passed as argument to onPlayerChat. See engineGameplayTypes.ts for expected format
 * @type { { channelName: string; elementContent: string | CustomTextStyling; elementBgColor: string; }[] }
 */
declare type ValueType_36 = {
    channelName: string;
    elementContent: string | CustomTextStyling_2;
    elementBgColor: string;
}[];

/**
 * Whether the player is in creative mode
 * @type {boolean}
 */
declare type ValueType_37 = boolean;

/**
 * Multiplier for the flying speed in creative mode
 * @type {number}
 */
declare type ValueType_38 = number;

/**
 * Whether the player can pick blocks (middle mouse click on PC), ignored if creative is false
 * @type {boolean}
 */
declare type ValueType_39 = boolean;

/**
 * Running speed for the player.
 * STRONGLY recommend using `speedMultiplier` unless you have a specific use case for this, runningSpeed doesn't make UX sense on mobile.
 * (Walking speed is ignored for mobile players, mobile player speed is determined by joystick input and the max of runningSpeed & walkingSpeed).
 *
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * The only use case for walkingSpeed/runningSpeed over speedMultiplier or speed effects is to disable running or to inverse walking/running (so you run by default and e.g. hold shift to go slower).
 * @type {number}
 * @default 7
 */
declare type ValueType_4 = number;

/**
 * The target the compass will point towards
 * @type {string | number | number[]}
 */
declare type ValueType_40 = string | number | number[];

/**
 * Multiplier for the time to break any block
 * @type {number}
 */
declare type ValueType_41 = number;

/**
 * Whether the player can move items in their inventory, only applicable if useInventory is true
 * @type {boolean}
 */
declare type ValueType_42 = boolean;

/**
 * Whether the player is invincible
 * @type {boolean}
 */
declare type ValueType_43 = boolean;

/**
 * Maximum shield the player can have
 * @type {number}
 */
declare type ValueType_44 = number;

/**
 * Shield upon joining or respawning
 * @type {number}
 */
declare type ValueType_45 = number;

/**
 * Maximum health the player can have
 * @type {number}
 */
declare type ValueType_46 = number;

/**
 * Health upon joining or respawning. Can be null for the player to not have health
 * @type {number}
 */
declare type ValueType_47 = number;

/**
 * Fraction of max health that regens each regen tick
 * @type {number}
 */
declare type ValueType_48 = number;

/**
 * How often health regen is ticked
 * @type {number}
 */
declare type ValueType_49 = number;

/**
 * Speed multiplier for the player.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 *
 * @type {number}
 * @default 1
 */
declare type ValueType_5 = number;

/**
 * How long after a player receives damage to start regen again
 * @type {number}
 */
declare type ValueType_50 = number;

/**
 * Duration of the +damage effect from plum
 * @type {number}
 */
declare type ValueType_51 = number;

/**
 * Duration of +speed effect from cracked coconut
 * @type {number}
 */
declare type ValueType_52 = number;

/**
 * Duration of +damage reduction effect from pear
 * @type {number}
 */
declare type ValueType_53 = number;

/**
 * Duration of +health regen effect from cherry
 * @type {number}
 */
declare type ValueType_54 = number;

/**
 * Duration of potion effects
 * @type {number}
 */
declare type ValueType_55 = number;

/**
 * Duration of splash potion effects
 * @type {number}
 */
declare type ValueType_56 = number;

/**
 * Duration of arrow potion effects
 * @type {number}
 */
declare type ValueType_57 = number;

/**
 * Fog distance which overrides graphic settings. Uses graphic settings if null.
 * @type {number}
 */
declare type ValueType_58 = number;

/**
 * RGB string for fog colour override. e.g. #ffffff
 * @type {string}
 */
declare type ValueType_59 = string;

/**
 * Amount of jump power the player has
 * @type {number}
 * @default true
 */
declare type ValueType_6 = number;

/**
 * Amount of acceleration to apply to airborne players.
 * Only change if absolutely necessary i.e. Rocket Obby uses 0.25.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 */
declare type ValueType_60 = number;

/**
 * Amount of friction to apply to airborne players.
 * Only change if absolutely necessary i.e. Rocket Obby uses 0.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 */
declare type ValueType_61 = number;

/**
 * Whether to allow the player to strafe and conserve momentum while airborne.
 * Only change if absolutely necessary i.e. only Rocket Obby uses true.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {boolean}
 */
declare type ValueType_62 = boolean;

/**
 * How much Aura XP is required per level.
 * @type {number}
 */
declare type ValueType_63 = number;

/**
 * If true, player will respawn automatically after secsToRespawn seconds
 * @type {boolean}
 */
declare type ValueType_64 = boolean;

/**
 * RGBA array [r, g, b, a] for camera screen tint effect. Values fall between 0 and 1.
 * @type {[number, number, number, number]}
 */
declare type ValueType_65 = [number, number, number, number];

/**
 * Mult for when the player hits neither a leg or a head. Only applies to guns
 * @type {number}
 */
declare type ValueType_66 = number;

/**
 * Damage multiplier for when the player hits a head. Only applies to guns
 * @type {number}
 */
declare type ValueType_67 = number;

/**
 * Damage multiplier for when the player hits a leg. Only applies to guns
 * @type {number}
 */
declare type ValueType_68 = number;

/**
 * Damage multiplier for all types of damage
 * @type {number}
 */
declare type ValueType_69 = number;

/**
 * Amount of air jumps the player has
 * @type {number}
 */
declare type ValueType_7 = number;

/**
 * Scale factor to use for dropped item meshes
 * @type {number}
 */
declare type ValueType_70 = number;

/**
 * Whether to deal damage to the player when they fall
 * @type {boolean}
 */
declare type ValueType_71 = boolean;

/**
 * Amount of friction to apply to grounded players.
 * Only change if absolutely necessary i.e. Rocket Obby uses 3.
 * Players are used to the default bloxd movement behaviour and speed,
 * and may be put off from your game if different muscle memory is required.
 * We suggest applying speed or slowness effects instead, using api.applyEffect.
 * @type {number}
 */
declare type ValueType_72 = number;

/**
 * Duration before a killstreak expires. (defaults to never expiring)
 * @type {number}
 */
declare type ValueType_73 = number;

/**
 * The maximum Aura Level attainable - Set to 0 to disable Aura XP
 * @type {number}
 */
declare type ValueType_74 = number;

/**
 * Amount that player camera is affected by movement based fov
 * @type {number}
 */
declare type ValueType_75 = number;

/**
 * Damage multiplier for all types of incoming damage
 * @type {number}
 */
declare type ValueType_76 = number;

/**
 * Text to show on respawn button. (E.g. "Spectate")
 * @type {string}
 */
declare type ValueType_77 = string;

/**
 * After dying the player can respawn after this many seconds
 * @type {number}
 */
declare type ValueType_78 = number;

/**
 * When player is dead, also show a play again button to matchmake player into a new lobby. Mostly useful for sessionBased games
 * @type {boolean}
 */
declare type ValueType_79 = boolean;

/**
 * Maximum multiplier for jump height when bunnyhopping
 * @type {number}
 */
declare type ValueType_8 = number;

/**
 * Opacity of the entity
 * Fractional values will use dithering
 * 0 opacity will hide the entity but not its name tag
 * @type {number}
 * @default 1
 */
declare type ValueType_80 = number;

/**
 * Rendering order of the entity, higher zIndex renders on top of lower ones.
 * @type {0 | 1}
 */
declare type ValueType_81 = 0 | 1;

/**
 * Applies a colour tint to the entity when set, like the red tint when an entity gets hurt.
 * @type {string | null}
 * @default null
 */
declare type ValueType_82 = string | null;

/**
 * Whether the entity can attack other entities, ignored if the targeted entity is invincible
 * @type {boolean}
 */
declare type ValueType_83 = boolean;

/**
 * Whether the entity can be seen by the relevant player
 * @type {boolean}
 */
declare type ValueType_84 = boolean;

/**
 * Whether you can see damage amounts when shooting the entity
 * @type {boolean}
 */
declare type ValueType_85 = boolean;

/**
 * The colour of kills in the killfeed. Defaults to blue for themselves and red for everyone else.
 * @type {StringColor}
 */
declare type ValueType_86 = StringColor_2;

/**
 * Whether the player has a priority name tag
 * @type {boolean}
 */
declare type ValueType_87 = boolean;

/**
 * The colour of the entity's name.
 * @type {"default" | "yellow" | "lime" | "green" | "aqua" | "cyan" | "blue" | "purple" | "pink" | "red" | "orange"}
 */
declare type ValueType_88 = "default" | "yellow" | "lime" | "green" | "aqua" | "cyan" | "blue" | "purple" | "pink" | "red" | "orange";

/**
 * The name tag info of the player:
 * {
 *     backgroundColor?: string
 *     content?: StyledText[]
 *     subtitle?: StyledText[]
 *     subtitleBackgroundColor?: string
 * }
 * @type {NameTagInfo}
 */
declare type ValueType_89 = NameTagInfo_2;

/**
 * Volume level for the music
 * @type {number}
 */
declare type ValueType_9 = number;

/**
 * Scaling of mesh nodes, see api.scalePlayerMeshNodes
 * @type {EntityMeshScalingMap}
 */
declare type ValueType_90 = EntityMeshScalingMap_2;

/**
 *
 */
declare type ValueType_91 = LobbyLeaderboardValues_2;

/**
 * The colour of the player in the lobby leaderboard.
 * @type {StringColor}
 */
declare type ValueType_92 = StringColor_2;

export declare type Variation<K extends MobType_2> = VariationDictionary_2[K];

declare type Variation_2<K extends MobType_2> = VariationDictionary[K];

declare type VariationDictionary = {
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

declare type VariationDictionary_2 = {
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
    Sheep: "default" | "black" | "red" | "orange" | "pink" | "purple" | "yellow" | "blue" | "brown" | "cyan" | "gray" | "green" | "lightBlue" | "lightGray" | "lime" | "magenta";
    /**
     * @default {"default"}
     */
    Horse: "default" | "black" | "brown" | "cream";
    "Cave Golem": "default" | "iron";
    /**
     * @default {"default"}
     */
    "Draugr Zombie": "default" | "longHairChestplate" | "longHairClothed" | "shortHairClothed";
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
    Wildcat: "default" | "tabby" | "grey" | "black" | "calico" | "siamese" | "leopard";
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
    NPC: "default" | "emma" | "leo" | "isabel" | "sanjay" | "imara" | "enoch" | "sara" | "carmen";
};

export declare type VelocityGradient = number;

declare type VelocityGradient_2 = number;

export declare type WalkingSpeedMultiplier<K extends MobType_2> = WalkingSpeedMultiplierDictionary[K];

declare type WalkingSpeedMultiplierDictionary = Record<MobType_2, number>;

export declare type WalkThroughType = 0 | 1 | 2;

declare type WalkThroughType_2 = 0 | 1 | 2;

export declare type WhoDidDamage = LifeformId_2 | {
    lifeformId: LifeformId_2;
    withItem: Item_2;
};

declare type WhoDidDamage_2 =
| LifeformId_2
| { lifeformId: LifeformId_2; withItem: Item_2 };

export declare type WhoKilled = WhoDidDamage_2;

declare type WhoKilled_2 = WhoDidDamage_2;

export declare type WorldBlockChangedInfo = {
    cause: "Paintball" | "FloorCreator" | "Sapling" | "StemFruit" | "MeltingIce" | "Explosion" | null;
};

export { }
