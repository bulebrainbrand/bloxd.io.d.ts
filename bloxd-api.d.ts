type Id = string & { readonly __brand:"Id"}
type EntityId = string & { readonly __brand: "EntityId" };
type PlayerId = EntityId & { readonly __brand: "PlayerId" };
type MobId = EntityId & { readonly __brand: "MobId" };
type LifeformId = PlayerId | MobId
type Coordinate = [number,number,number]
type Name = string &  {readonly __brand:"Name"}
type DbId = string & { readonly __brand: "DbId" };
type PlayerDbId = DbId & { readonly __brand: "PlayerDbId"}
type Party = {partyCode:string,playerDbIds:PlayerDbId[]}
type ItemId = string & { readonly __brand: "ItemId" }
type ItemName = string & { readonly __brand: "ItemName"}
type Item = ItemId | ItemName
type BlockId = ItemId & { readonly __brand: "BlockId"}
type BlockName = ItemName & { readonly __brand: "BlockName"}
type ShieldAmount = number
type Health = number
type WhoDidDamage = LifeformId | {lifeformId: LifeformId,withItem: Item }
type Dir = [number,number,number]
type SoundName = string & { readonly __brand: "SoundName"}
type LifeformBodyPart = "TorsoNode" | "HeadMesh" | "ArmRightMesh" | "ArmLeftMesh" | "LegLeftMesh" | "LegRightMesh"
interface PlayerAttemptDamageOtherPlayerOpts {
    eId:EntityId;
    hitEId:EntityId;
    attemptedDmgAmt:number;
    withItem:Item;
    bodyPartHit?:LifeformBodyPart;
    attackDir?:Dir;
    showCritParticles?:boolean;
    reduceVerticalKbVelocity?:boolean;
    horizontalKbMultiplier?:number;
    verticalKbMultiplier?:number;
    broadcastEntityHurt?:boolean;
    attackCooldownSettings?:any; // what is this
    hittingSoundOverride?:SoundName;
    ignoreOtherEntitySettingCanAttack?:boolean;
    isTrueDamage?:boolean;
    damagerDbId?:string;
}


interface Api {
  ownerDbId?:DbId
/**
 * Get position of a player / entity.
 *
 * @param {EntityId} entityId
 * @returns {Coordinate}
 */
  getPosition(entityId:EntityId):Coordinate;
/**
 * Set position of a player / entity.
 *
 * @param {EntityId} entityId
 * @param {Coordinate} position
 * @returns {void}
 */
  setPosition(entityId:EntityId,position:Coordinate):void;
/**
 * Set position of a player / entity.
 * 
 * @param {EntityId} entityId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {void}
 */
  setPosition(entityId:EntityId,x:number,y:number,z:number):void;
/**
 * Get all the player ids.
 *
 * @returns {PlayerId[]}
 */
  getPlayerIds():PlayerId[];
/**
 * Whether a player is currently in the game
 *
 * @param {PlayerId} playerId
 * @returns {boolean}
 */
  playerIsInGame(playerId:PlayerId):boolean;
/**
 * @param {PlayerId} playerId
 * @returns {boolean}
 */
  playerIsLoggedIn(playerId:PlayerId):boolean;
/**
 * Returns the party that the player was in when they joined the game. The returned object contains the playerDbIds, as well
 * as the playerIds if available, of the party leader and members.
 *
 * @param {PlayerId} playerId
 * @returns {null | Party}
 */
  getPlayerPartyWhenJoined(playerId:PlayerId): null | Party;
/**
 * Get the number of players in the room
 *
 * @returns {number}
 */
  getNumPlayers(): number;
/**
 * Get the co-ordinates of the blocks the player is standing on as a list. For example, if the center of the player is at 0,0,0
 * this function will return [[0, -1, 0], [-1, -1, 0], [0, -1, -1], [-1, -1, -1]]
 * If the player is just standing on one block, the function would return e.g. [[0, 0, 0]]
 * If the player is middair then returns an empty list [].
 *
 * @param {PlayerId} playerId
 * @returns {Coordinate[]}
 */
  getBlockCoordinatesPlayerStandingOn(playerId:PlayerId):Coordinate[];
/**
 * Get the types of block the player is standing on
 * For example, if a player is standing on 4 dirt blocks, this will return ["Dirt", "Dirt", "Dirt", "Dirt"]
 *
 * @param {PlayerId} playerId
 * @returns {BlockName[]}
 */
  getBlockTypesPlayerStandingOn(playerId:PlayerId):BlockName[];
/**
 * Get the up to 12 unit co-ordinates the lifeform is located within
 * (A lifeform is modelled as having four corners and can be in up to 3 blocks vertically)
 *
 * @param {LifeformId} lifeformId
 * @returns {Coordinate[]} - List of x, y, z positions e.g. [[-1, 0, 0], [-1, 1, 0], [-1, 2, 0]]
 */
  getUnitCoordinatesLifeformWithin(lifeformId:LifeformId):Coordinate[];
/**
 * Show the shop tutorial for a player. Will not be shown if they have ever seen the shop tutorial in your game before.
 *
 * @param {PlayerId} playerId
 * @returns {void}
 */
  showShopTutorial(playerId:PlayerId):void;
/**
 * Get the current shield of an entity.
 *
 * @param {EntityId} entityId
 * @returns {ShieldAmount}
 */
  getShieldAmount(entityId:EntityId):ShieldAmount;
/**
 * Set the current shield of a lifeform.
 *
 * @param {EntityId} entityId
 * @param {ShieldAmount} newShieldAmount
 * @returns {void}
 */
  setShieldAmount(entityId:EntityId,newShieldAmount:ShieldAmount):void;
/**
 * Get the current health of an entity.
 * null mean is it entity don't have health.
 * 0 mean is it entity is died.
 *
 * @param {EntityId} entityId
 * @returns {Health | null}
 */
  getHealth(entityId:EntityId):Health | null;
/**
 * @param {LifeformId} lifeformId
 * @param {number} changeAmount - Must be an integer. A positive amount will increase the entity's health. A negative amount will decrease the entity's shield first, then their health.
 * @param { LifeformId | { lifeformId: LifeformId; withItem: Item } } [whoDidDamage] - Optional - If damage done by another player
 * @param {boolean} [broadcastLifeformHurt]
 * @returns {boolean} - Whether the entity was killed
 */
  applyHealthChange(lifeformId:LifeformId, changeAmount:number, whoDidDamage?:WhoDidDamage, broadcastLifeformHurt?:boolean):boolean
/**
 * Set the current health of an entity.
 * If you want to set their health to more than their current max health, the optional increaseMaxHealthIfNeeded must be true.
 *
 * @param {EntityId} entityId
 * @param {number | null} newHealth - Can be null to make the player not have health
 * @param { LifeformId | { lifeformId: LifeformId; withItem: Item } } [whoDidDamage] - Optional
 * @param {boolean} [increaseMaxHealthIfNeeded] - Optional
 * @returns {boolean} - Whether this change in health killed the player
 */
  setHealth(entityId:EntityId, newHealth:number | null, whoDidDamage?:WhoDidDamage, increaseMaxHealthIfNeeded?:boolean):boolean
/**
 * Make it as if hittingEId hit hitEId
 *
 * @param {LifeformId} hittingEId
 * @param {LifeformId} hitEId
 * @param {Dir} dirFacing
 * @param {LifeformBodyPart | null} [bodyPartHit]
 * @param { {
 *     damage?: number | null
 *     heldItemName?: Item | null
 *     horizontalKbMultiplier?: number
 *     verticalKbMultiplier?: number
 * } } [overrides]
 * @returns {boolean}
 */
  applyMeleeHit(hittingEId:LifeformId, hitEId:LifeformId, dirFacing:Dir, bodyPartHit:LifeformBodyPart | null, overrides:{damage?:number | null,heldItemName?:Item | null,horizontalKbMultiplier?:number,verticalKbMultiplier?:number})

/**
 * Apply damage to a lifeform.
 * eId is the player initiating the damage, hitEId is the lifeform being hit.
 *
 * It is recommended to self-inflict damage when the game code wants to apply damage to a lifeform.
 *
 * @param {PlayerAttemptDamageOtherPlayerOpts} {
 *     eId,
 *     hitEId,
 *     attemptedDmgAmt,
 *     withItem,
 *     bodyPartHit = undefined,
 *     attackDir = undefined,
 *     showCritParticles = false,
 *     reduceVerticalKbVelocity = true,
 *     horizontalKbMultiplier = 1,
 *     verticalKbMultiplier = 1,
 *     broadcastEntityHurt = true,
 *     attackCooldownSettings = null,
 *     hittingSoundOverride = null,
 *     ignoreOtherEntitySettingCanAttack = false,
 *     isTrueDamage = false,
 *     damagerDbId = null,
 * }
 * @returns {boolean} - whether the attack damaged the lifeform
 */
  attemptApplyDamage(option:PlayerAttemptDamageOtherPlayerOpts):Boolean
/**
 * Force respawn a player
 *
 * @param {PlayerId} playerId
 * @param {Coordinate} [respawnPos]
 * @returns {void}
 */
  forceRespawn(playerId:PlayerId, respawnPos:Coordinate):void

/**
 * Kill a lifeform.
 *
 * @param {LifeformId} lifeformId
 * @param { LifeformId | { lifeformId: LifeformId; withItem: string } } [whoKilled] - Optional
 * @returns {void}
 */
  killLifeform(lifeformId:LifeformId, whoKilled)



}

declare global{
  var api:Api
  var thisPos:Coordinate | null | undefined
  var myId:PlayerId | null | undefined
}
