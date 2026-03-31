```js
/**
 * Store data about a block in a performant manner. Data is cleared when block changes.
 * E.g. chest
 * Works well with blocks marked tickable (e.g. wheat)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {object} data
 * @returns {void}
 */
setBlockData(x, y, z, data);

/**
 * Get stored data about a block in a performant manner. Data is cleared when block changes.
 * E.g. chest
 * Works well with blocks marked tickable (e.g. wheat)
 *
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {any}
 */
getBlockData(x, y, z);

/**
 * Get the name of the lobby this game is running in.
 *
 * @returns {PNull<string>}
 */
getLobbyName();

/**
 * Integer lobby names are public
 *
 * @returns {boolean} - boolean
 */
isPublicLobby();

/**
 * Returns if the current lobby the game is running in is special - e.g. a discord guild or dm, or simply a standard lobby
 *
 * @returns {LobbyType}
 */
getLobbyType();

/**
 * Update the progress bar in the bottom right corner.
 * Can be queued.
 *
 * @param {PlayerId} playerId
 * @param {number} toFraction - The fraction of the progress bar you want to be filled up.
 * @param {number} [toDuration] - The time it takes for the bar to reach the given toFraction in ms.
 * If this is too low and you queue multiple updates, this toFraction could be skipped. Treat 200ms as a minimum.
 * @returns {void}
 */
progressBarUpdate(playerId, toFraction, toDuration);

/**
 * This will initiate the MiddleScreenBar, starting at empty and filling up to full over the given duration.
 * Good to represent cooldowns (eg gun reload) or charged items (eg crossbow)
 *
 * @param {PlayerId} playerId
 * @param {number} duration - ms over which the MiddleScreenBar fills up
 * @param {boolean} [chargeExpiresAutomatically] - Defaults to true. If true, the bar will disappear upon reaching full. If false, the bar will remain at full until hidden with removeMiddleScreenBar
 * @param {number} [horizontalBarRemOffset] - Offset the bar left or right (in css unit - rem)
 * @returns {void}
 */
initiateMiddleScreenBar(
  playerId,
  duration,
  chargeExpiresAutomatically,
  horizontalBarRemOffset,
);

/**
 * If there is any current middle screen bar running, this will hide it
 *
 * @param {PlayerId} playerId
 * @returns {void}
 */
removeMiddleScreenBar(playerId);

/**
 * Show a hitmarker on the player's screen (the X-shaped crosshair flash indicating a successful hit).
 * Useful for custom weapons or things that need visual hit feedback.
 *
 * @param {PlayerId} playerId - The player to show the hitmarker to
 * @param {boolean} [isCrit] - If true, shows an enhanced critical-hit hitmarker with a longer, more dramatic animation
 * @param {PNull<number[]>} [directionVector] - Optional [x, y, z] direction vector. When provided, the hitmarker appears
 * at the projected screen position of that direction rather than at the centre of the screen.
 * Same flow as mobile melee attacks where the tap point differs from screen centre.
 * @returns {void}
 */
sendHitmarker(playerId, isCrit, directionVector);

/**
 * Show a directional arrow indicator on the player's screen pointing toward a world position.
 * When the position is off-screen the indicator is a rotating chevron at the screen edge.
 * When the position is on-screen it becomes a small marker dot.
 *
 * The arrow persists until explicitly cleared via `clearDirectionArrow`.
 * Calling again with the same `id` updates the existing arrow in-place.
 *
 * @param {PlayerId} playerId - The player to show the arrow to
 * @param {string} id - Unique identifier for this arrow (allows multiple concurrent arrows)
 * @param {number[]} position - [x, y, z] world position the arrow should point toward
 * @param {PNull<string | CustomTextStyling>} [text] - Optional label rendered below the indicator. Supports CustomTextStyling for rich text with icons/colours.
 * @param {boolean} [showDistance] - If true, displays the distance (in blocks) from the player to the arrow position.
 * @param {PNull<TextStyle>} [style] - Optional style object (same format as CustomTextStyling's StyledText `style`). Controls chevron/marker colour, label typography, and opacity.
 * @returns {void}
 */
setDirectionArrow(playerId, id, position, text, showDistance, style);

/**
 * Clear a directional arrow from the player's screen.
 *
 * @param {PlayerId} playerId - The player to clear the arrow for
 * @param {PNull<string>} [id] - The arrow identifier to clear. If null, clears all arrows for this player.
 * @returns {void}
 */
clearDirectionArrow(playerId, id);

/**
 * Edit the crafting recipes for a player
 *
 * @param {PlayerId} playerId
 * @param {ItemName} itemName
 * @param {RecipesForItem} recipesForItem
 * @returns {void}
 */
editItemCraftingRecipes(playerId, itemName, recipesForItem);

/**
 * Reset the crafting recipes for a given back to its original bloxd state
 *
 * @param {PlayerId} playerId
 * @param {PNull<string>} itemName - Resets all crafting recipes for the given player if null, otherwise resets the crafting recipes for the given item.
 * @returns {void}
 */
resetItemCraftingRecipes(playerId, itemName);

/**
 * Removes crafting recipes
 *
 * @param {PlayerId} playerId
 * @param {PNull<string>} itemName - Removes all crafting recipes for the given player if null, otherwise removes the crafting recipes for the given item.
 * @returns {void}
 */
removeItemCraftingRecipes(playerId, itemName);

/**
 * Check if a position is within a cubic rectangle
 *
 * @param {number[]} coordsToCheck
 * @param {number[]} pos1 - position of one corner
 * @param {number[]} pos2 - position of opposite corner
 * @param {boolean} [addOneToMax]
 * @returns {boolean}
 */
isInsideRect(coordsToCheck, pos1, pos2, addOneToMax);

/**
 * Get the entities in the rect between [minX, minY, minZ] and [maxX, maxY, maxZ]
 *
 * @param {number[]} minCoords
 * @param {number[]} maxCoords
 * @returns {EntityId[]}
 */
getEntitiesInRect(minCoords, maxCoords);

/**
 * @param {EntityId} entityId
 * @returns {EntityType}
 */
getEntityType(entityId);

/**
 * Create a mob herd. A mob herd represents a collection of mobs that move together.
 *
 * @returns {MobHerdId}
 */
createMobHerd();

/**
 * Try to spawn a mob into the world at a given position. Returns null on failure.
 * WARNING: Either the "onPlayerAttemptSpawnMob" or the "onWorldAttemptSpawnMob" game callback will be called
 * depending on whether "spawnerId" is provided. Calling this function inside those callbacks risks infinite recursion.
 *
 * @param {TMobType} mobType
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @param {MobSpawnOpts<TMobType>} [opts] - Includes:
 * - mobHerdId The ID of this mob's herd. (A mob herd represents a collection of mobs that move together.)
 * - spawnerId The ID of the player who tried to spawn this mob.
 * - mobDbId A persistent ID for the mob. This can be useful when loading mob data from the database. If the DB ID is already taken, null will be returned.
 * - name If set, gives the mob a name that will be displayed as a nametag above their head.
 * - playSoundOnSpawn
 * - variation
 * - physicsOpts { width: number; height: number; collidesEntities: boolean }
 * @returns {PNull<MobId>} - null if the mob could not be spawned.
 * This can happen when there are too many mobs in the world for the current number
 * of players in the lobby, or if the area is protected e.g. by spawn area protection.
 */
attemptSpawnMob(mobType, x, y, z, opts);

/**
 * Dispose of a mob's state and remove them from the world without triggering "on death" flows.
 * Always succeeds.
 *
 * @param {MobId} mobId
 * @returns {void}
 */
despawnMob(mobId);

/**
 * Returns the current default value for a mob setting.
 *
 * @param {TMobType} mobType
 * @param {TMobSetting} setting
 * @returns {MobSettings<TMobType>[TMobSetting]}
 */
getDefaultMobSetting(mobType, setting);

/**
 * Set the default value for a mob setting.
 *
 * @param {TMobType} mobType
 * @param {TMobSetting} setting
 * @param {MobSettings<TMobType>[TMobSetting]} value
 * @returns {void}
 */
setDefaultMobSetting(mobType, setting, value);

/**
 * Get the current value of a mob setting for a specific mob.
 *
 * @param {MobId} mobId
 * @param {TMobSetting} setting
 * @param {boolean} [returnDefaultIfNotOverridden] - If true, return the default setting if not overridden.
 * @returns {MobSettings<MobType>[TMobSetting]}
 */
getMobSetting(mobId, setting, returnDefaultIfNotOverridden);

/**
 * Set the current value of a mob setting for a specific mob.
 *
 * @param {MobId} mobId
 * @param {TMobSetting} setting
 * @param {MobSettings<MobType>[TMobSetting]} value
 * @returns {void}
 */
setMobSetting(mobId, setting, value);

/**
 * Get the number of mobs in the world.
 *
 * @returns {number}
 */
getNumMobs();

/**
 * Get the mob IDs of all mobs in the world.
 *
 * @returns {MobId[]}
 */
getMobIds();

/**
 * Gets the current AI state for the given mob.
 *
 * @param {MobId} mobId
 * @returns { { state: MobAiState; params: MobAiStateParams<MobAiState> } }
 */
getMobAiState(mobId);

/**
 * Sets the current AI state for the given mob.
 * Some AI states will require context such as the ID of the lifeform being chased.
 *
 * @param {MobId} mobId
 * @param {TState} state
 * @param {MobAiStateParams<TState>} params
 * @returns {void}
 */
setMobAiState(mobId, state, params);

/**
 * Try to create a throwable entity.
 * Similar to creating a mesh entity and uses the same rate limiting.
 * However, this uses the predefined throwables system and physics used by throwable items with the game
 * Each throwable item has its own behaviour already, including default velocity, damage and gravity multipliers.
 *
 * @param {EntityId} throwerEId
 * @param {ThrowableItem} itemName - Must be an Item that is usually throwable in-engine
 * @param {[number, number, number]} position - Starting position
 * @param {[number, number, number]} direction
 * @param {number} [velocityMult] - Multiplier for the default velocity of the throwable item
 * @param {number} [damageMult] - Multiplier for the default damage of the throwable item
 * @param {number} [gravityMult] - Multiplier for the default gravity of the throwable item
 * @param {ItemAttributes} [attributes] - item attributes (currently used only for the "Boomerag" item)
 * @returns {string} - null if throwable creation failed, otherwise the entity ID.
 */
attemptCreateThrowable(
  throwerEId,
  itemName,
  position,
  direction,
  velocityMult,
  damageMult,
  gravityMult,
  attributes,
);

/**
 * Delete a throwable entity before it automatically removes itself.
 *
 * @param {EntityId} eId
 * @returns {boolean} - true if the entity was deleted, false if it was not a throwable entity
 */
deleteThrowable(eId);

/**
 * Try to create a mesh entity. This creates an entity whose mesh position is synced with clients.
 * Set entity position using setPosition
 * There is a limit to the number of mesh entities and throwables that can be created, with an even smaller limit for mesh entities with physics.
 *
 * @param {MeshType} type
 * @param {MeshEntityOpts[MeshType]} opts
 * @param {string} [name] - The default name for the nametag
 * @param {MeshEntityPhysicsOpts} [physicsOptions] - Physics Options
 * @param {EntityId} [initiatorId] - The entity that initiated the creation of the mesh entity.
 * @returns {EntityId | null} - null if the entity creation failed, otherwise the entity ID.
 */
attemptCreateMeshEntity(type, opts, name, physicsOptions, initiatorId);

/**
 * Update a mesh entity. If used on a non-mesh entity, will do nothing.
 *
 * @param {EntityId} eId
 * @param {MeshType} type
 * @param {MeshEntityOpts[MeshType]} opts
 * @returns {void}
 */
updateMeshEntity(eId, type, opts);

/**
 * Delete a mesh entity
 *
 * @param {EntityId} eId
 * @returns {boolean}
 */
deleteMeshEntity(eId);

/**
 * Apply an impulse to an entity
 *
 * @param {EntityId} eId
 * @param {number} xImpulse
 * @param {number} yImpulse
 * @param {number} zImpulse
 * @returns {void}
 */
applyImpulse(eId, xImpulse, yImpulse, zImpulse);

/**
 * Get the velocity of an entity
 * Will return [0, 0, 0] if the entity doesn't have a physics body
 *
 * @param {EntityId} eId
 * @returns {[number, number, number]}
 */
getVelocity(eId);

/**
 * Set the velocity of an entity
 *
 * @param {EntityId} eId
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @returns {void}
 */
setVelocity(eId, x, y, z);

/**
 * @deprecated use setEntityRotation
 * Set the heading for a server-auth entity.
 *
 * @param {EntityId} entityId
 * @param {number} newHeading
 * @returns {void}
 */
setEntityHeading(entityId, newHeading);

/**
 * @deprecated use getEntityRotation
 * Get the heading for a server-auth entity.
 *
 * @param {EntityId} entityId
 * @returns {number}
 */
getEntityHeading(entityId);

/**
 * Get the rotation for a server-auth entity.
 *
 * @param {EntityId} entityId
 * @returns {[number, number, number]}
 */
getEntityRotation(entityId);

/**
 * Set the rotation for a server-auth entity.
 *
 * @param {EntityId} entityId
 * @param {number} xRotation
 * @param {number} yRotation
 * @param {number} zRotation
 * @returns {void}
 */
setEntityRotation(entityId, xRotation, yRotation, zRotation);

/**
 * Set the amount of an item in an item entity
 *
 * @param {EntityId} itemId
 * @param {number} newAmount
 * @returns {void}
 */
setItemAmount(itemId, newAmount);

/**
 * Update the max players and soft max players matchmaking will use
 *
 * softMaxPlayers is the number of players that matchmaking will route to using "Quick Play".
 * Once the softMaxPlayers limit is reached, this lobby can only be joined by requesting the lobby name or joining a friend.
 *
 * maxPlayers is the absolute maximum: a lobby will not have more players than this.
 * Tip: softMaxPlayers should be around 90% of maxPlayers
 *
 * WARNING: This change is not immediate, as it takes a while for matchmaking to find out.
 * Also, this will not kick players out of the lobby if set to a lower value than the current player count.
 *
 * @param {number} softMaxPlayers
 * @param {number} maxPlayers
 * @returns {void}
 */
setMaxPlayers(softMaxPlayers, maxPlayers);

/**
 * Create and register the UI for the requested quicktime event (QTE) to the screen.
 * Handle the result via the onPlayerFinishQTE engine callback.
 *
 * @param {PlayerId} playerId
 * @param {QTEClientParameters<T>} qteParameters - includes type and parameters
 * @returns {QTERequestId} - an id that can be passed to deleteQTE
 */
addQTE(playerId, qteParameters);

/**
 * Delete a quicktime event from the screen
 *
 * @param {PlayerId} playerId
 * @param {QTERequestId} id - Returned from the addQTE request you want to cancel
 * @returns {void}
 */
deleteQTE(playerId, id);

/**
 * Returns whether the player has any qteRequests
 *
 * @param {PlayerId} playerId
 * @returns {boolean}
 */
hasActiveQTE(playerId);

/**
 * Show a message over the shop in the same place that a shop item's onBoughtMessage is shown.
 * Displays for a couple seconds before disappearing
 * Use case is to show a dynamic message when player buys an item
 *
 * @param {PlayerId} playerId
 * @param {string | CustomTextStyling} info
 * @returns {void}
 */
sendOverShopInfo(playerId, info);

/**
 * Open the shop UI for a player
 *
 * @param {PlayerId} playerId
 * @param {boolean} [toggle] - Whether to close the shop if it's already open
 * @param {PNull<ShopCategoryKey>} [forceCategoryKey] - If set, will change the shop to this category
 * @param {boolean} [onlyIfNonEmpty] - If true, will only open the shop if the category (or shop, if no category is provided) is non-empty
 * @returns {void}
 */
openShop(playerId, toggle, forceCategoryKey, onlyIfNonEmpty);

/**
 * Apply an effect to a lifeform.
 * Can be an inbuilt effect E.g. "Speed" (speed boost), "Damage" (damage boost).
 * For inbuilt just pass the name of the effect and the functionality is handled in-engine.
 * For custom effect, you pass customEffectInfo. The icon can be an icon from "IngameIcons.ts" or a bloxd item name.
 * The custom effect onEndCb is an optional helper within which you can undo the effect you applied.
 * Note that onEndCb will not work for press to code boards, code blocks or world code.
 *
 * @param {LifeformId} lifeformId
 * @param {string} effectName
 * @param {number | null} duration
 * @param { { icon?: IngameIconName | ItemName; onEndCb?: () => void; displayName?: string | TranslatedText } & Partial<InbuiltEffectInfo> } customEffectInfo
 * @returns {void}
 */
applyEffect(lifeformId, effectName, duration, customEffectInfo);

/**
 * Get all the effects currently applied to a lifeform.
 *
 * @param {LifeformId} lifeformId
 * @returns {string[]}
 */
getEffects(lifeformId);

/**
 * Remove an effect from a lifeform.
 *
 * @param {LifeformId} lifeformId
 * @param {string} name
 * @returns {void}
 */
removeEffect(lifeformId, name);

/**
 * Change a part of a player's skin
 *
 * @param {PlayerId} playerId - Player to change
 * @param {CosmeticType} cosmeticType - Type of cosmetic
 * @param {CosmeticName} cosmeticName - Chosen cosmetic, will be made lowercase automatically
 * @returns {void}
 */
changePlayerIntoSkin(playerId, cosmeticType, cosmeticName);

/**
 * Remove gamemode-applied skin from a player
 *
 * @param {PlayerId} playerId
 * @returns {void}
 */
removeAppliedSkin(playerId);

/**
 * Get a single equipped cosmetic for a player.
 *
 * @param {PlayerId} playerId
 * @param {CosmeticType} cosmeticType - Type of cosmetic
 * @returns {CosmeticName}
 */
getPlayerCosmetic(playerId, cosmeticType);

/**
 * Scale node of a player's mesh by 3d vector.
 * State from prior calls to this api is lost so if you want to have multiple nodes scaled, pass in all the scales at once.
 *
 * @param {PlayerId} playerId
 * @param {EntityMeshScalingMap} nodeScales
 * @returns {void}
 */
scalePlayerMeshNodes(playerId, nodeScales);

/**
 * Attach/detach mesh instances to/from an entity
 *
 * @param {EntityId} eId
 * @param {EntityNamedNode} node - node to attach to
 * @param {PNull<MeshType>} type - if null, detaches mesh from this node
 * @param {MeshEntityOpts[MeshType]} [opts]
 * @param {[number, number, number]} [offset]
 * @param {[number, number, number]} [rotation]
 * @returns {void}
 */
updateEntityNodeMeshAttachment(eId, node, type, opts, offset, rotation);

/**
 * Set the pose of the player
 *
 * @param {PlayerId} playerId
 * @param {PlayerPose} pose
 * @param {[number, number, number]} [poseOffset]
 * @returns {void}
 */
setPlayerPose(playerId, pose, poseOffset);

/**
 * Set physics state of player (vehicle type and tier)
 *
 * @param {PlayerId} playerId
 * @param {PlayerPhysicsStateData} physicsState
 * @param {[number, number, number]} [positionOffset] - Optional offset to adjust the player's collision box
 * @returns {void}
 */
setPlayerPhysicsState(playerId, physicsState, positionOffset);

/**
 * Get physics state for player
 *
 * @param {PlayerId} playerId
 * @returns {PlayerPhysicsStateData}
 */
getPlayerPhysicsState(playerId);

/**
 * Add following entity to player
 *
 * @param {PlayerId} playerId
 * @param {EntityId} eId
 * @param {number[]} [offset]
 * @param {boolean} [followsPlayerRotation]
 * @returns {void}
 */
addFollowingEntityToPlayer(playerId, eId, offset, followsPlayerRotation);

/**
 * Remove following entity from player
 *
 * @param {PlayerId} playerId
 * @param {EntityId} entityEId
 * @returns {void}
 */
removeFollowingEntityFromPlayer(playerId, entityEId);

/**
 * Set camera zoom for a player
 *
 * @param {PlayerId} playerId
 * @param {number} zoom
 * @returns {void}
 */
setCameraZoom(playerId, zoom);

/**
 * @param {PlayerId} playerId - hears the sound
 * @param {string} soundName - Can also be a prefix. If so, a random sound with that prefix will be played
 * @param {number} volume - 0-1. If it's too quiet and volume is 1, normalise your sound in audacity
 * @param {number} rate - The speed of playback. Also affects pitch. 0.5-4. Lower playback = lower pitch
 * Good for varying the sound. E.g. item pickup sound has a random rate between 1 and 1.5.
 * @param { {
 *     playerIdOrPos: PlayerId | number[]
 *     maxHearDist?: number
 *     refDistance?: number
 * } } [posSettings] -
 * {playerIdOrPos: PlayerId | number[], maxHearDist: number, refDistance: number}
 * playerIdOrPos: The player the sound originates from, or the position of the sound
 * maxHearDist: sound is not played if player is further than this. Default 15
 * refDistance: higher means the sound decreases less in volume with distance. Default 3. Hitting is 4. Guns are 10
 * @returns {void}
 */
playSound(playerId, soundName, volume, rate, posSettings);

/**
 * See documentation for api.playSound
 *
 * @param {string} soundName
 * @param {number} volume
 * @param {number} rate
 * @param { {
 *     playerIdOrPos: PlayerId | number[]
 *     maxHearDist?: number
 *     refDistance?: number
 * } } [posSettings]
 * @param {PlayerId} [exceptPlayerId]
 * @returns {void}
 */
broadcastSound(soundName, volume, rate, posSettings, exceptPlayerId);

/**
 * See documentation for api.playSound
 *
 * @param {string} soundName
 * @param {number} volume
 * @param {number} rate
 * @param { {
 *     playerIdOrPos: PlayerId | number[]
 *     maxHearDist?: number
 *     refDistance?: number
 * } } [posSettings]
 * @param {PlayerId} [predictedBy]
 * @returns {void}
 */
playClientPredictedSound(soundName, volume, rate, posSettings, predictedBy);

/**
 * @param {EntityId} eId
 * @param {ExplosionType} explosionType
 * @param {number} knockbackFactor
 * @param {number} explosionRadius
 * @param {number[]} explosionPos
 * @param {boolean} ignoreProjectiles
 * @returns { { force: [number, number, number]; forceFrac: number; } }
 */
calcExplosionForce(
  eId,
  explosionType,
  knockbackFactor,
  explosionRadius,
  explosionPos,
  ignoreProjectiles,
);

/**
 * Get the position of a player's target block and the block adjacent to it (e.g. where a block would be placed)
 *
 * Note: This position is a tick ahead of the client's block target info (noa.targetedBlock),
 * since the client updates the blocktarget before the entities tick (and since it uses the renderposition of the camera)
 *
 * This normally doesn't matter but if you are client predicting something based on noa.targetedBlock
 * (currently only applicable to in-engine code), you should not verify using this
 *
 * @param {PlayerId} playerId
 * @returns { { position: [number, number, number]; normal: [number, number, number]; adjacent: [number, number, number] } }
 */
getPlayerTargetInfo(playerId);

/**
 * Get the position of a player's camera and the direction (both in Euclidean and spherical coordinates) they are attempting to use an item.
 * The camPos has the same limitations described in getPlayerTargetInfo
 *
 * @param {PlayerId} playerId
 * @returns { { camPos: [number, number, number]; dir: [number, number, number]; angleDir: AngleDir; moveHeading: number } }
 */
getPlayerFacingInfo(playerId);

/**
 * Raycast for a block in the world.
 * Given a position and a direction, find the first block that the "ray" hits.
 *
 * @param {number[]} fromPos
 * @param {number[]} dirVec
 * @returns {BlockRaycastResult}
 */
raycastForBlock(fromPos, dirVec);

/**
 * Check whether a player is crouching
 *
 * @param {PlayerId} playerId
 * @returns {boolean}
 */
isPlayerCrouching(playerId);

/**
 * Get the aura info for a player
 *
 * @param {PlayerId} playerId
 * @returns { { level: number; totalAura: number; auraPerLevel: number } }
 */
getAuraInfo(playerId);

/**
 * Sets the total aura for a player. Will not go over max level or under 0
 *
 * @param {PlayerId} playerId
 * @param {number} totalAura
 * @returns {void}
 */
setTotalAura(playerId, totalAura);

/**
 * Set the aura level for a player - shortcut for setTotalAura(level * auraPerLevel)
 *
 * @param {PlayerId} playerId
 * @param {number} level
 * @returns {void}
 */
setAuraLevel(playerId, level);

/**
 * Add (or remove if negative) aura to a player. Will not go over max level or under 0
 *
 * @param {PlayerId} playerId
 * @param {number} auraDiff
 * @returns {number} - The actual change in aura
 */
applyAuraChange(playerId, auraDiff);

/**
 * Set a default value to be returned by your callback code if it throws an error.
 *
 * @param {string} callbackName
 * @param {any} defaultValue
 */
setCallbackValueFallback(callbackName, defaultValue);
```

## Glossary of Referenced Types

These 'types' can't be referenced by your code, but they help explain some of the parameters in the API.

```js
type CustomTextStyling = (string | EntityName | TranslatedText | StyledIcon | StyledText)[]

type EntityMeshScalingMap = {
    [key in "TorsoNode" | "HeadMesh" | "ArmRightMesh" | "ArmLeftMesh" | "LegLeftMesh" | "LegRightMesh"]?: number[]
}

type EntityName = {
    entityName: string
    style?: {
        color?: string
        colour?: string
    }
}

type IngameIconName = "Damage" | "Damage Reduction" | "Speed" | "VoidJump" | "Fist" | "Frozen" | "Hydrated" | "Invisible" | "Jump Boost" | "Poisoned" | "Slowness" | "Weakness" | "Health Regen" | "Haste" | "Double Jump" | "Heat Resistance" | "Gliding" | "Boating" | "Obsidian Boating" | "Riding" | "Bunny Hop" | "FallDamage" | "Feather Falling" | "Thief" | "X-Ray Vision" | "Mining Yield" | "Brain Rot" | "Rested Damage" | "Rested Haste" | "Rested Speed" | "Rested Farming Yield" | "Rested Aura" | "Blindness" | "Pickpocketer" | "Lifesteal" | "Bounciness" | "Air Walk" | "Wall Climbing" | "Thorns" | "Poopy" | "Draugr Knight Head" | "Draugr Warper Head" | "Magma Golem Head" | "Mystery Fish" | "Damage Enchantment" | "Critical Damage Enchantment" | "Attack Speed Enchantment" | "Protection Enchantment" | "Health Enchantment" | "Health Regen Enchantment" | "Stomp Damage Enchantment" | "Knockback Resist Enchantment" | "Arrow Speed Enchantment" | "Arrow Damage Enchantment" | "Quick Charge Enchantment" | "Break Speed Enchantment" | "Momentum Enchantment" | "Mining Yield Enchantment" | "Farming Yield Enchantment" | "Mining Aura Enchantment" | "Digging Aura Enchantment" | "Lumber Aura Enchantment" | "Farming Aura Enchantment" | "Vertical Knockback Enchantment" | "Horizontal Knockback Enchantment" | "Self Yield" | "Friends" | "Riding Speed" | "Feed Aura" | "Double Poop" | "Mob Slayer" | "Rainbow Wool" | "Pack Leader" | "Max Health" | "Poison Claws" | "Mob Yield" | "Antlers Bonus" | "Health" | "HealthShield" | "Cross" | "Friendship" | "Dotted Friendship" | "Hunger" | "Empty Hunger" | "Pixelated Heart" | "Question Mark" | "Trader Black" | "Trader Blue" | "Trader Piggy"

enum ParticleSystemBlendMode {
    // Source color is added to the destination color without alpha affecting the result
    OneOne = 0,
    // Blend current color and particle color using particle's alpha
    Standard = 1,
    // Add current color and particle color multiplied by particle's alpha
    Add,
    // Multiply current color with particle color
    Multiply,
    // Multiply current color with particle color then add current color and particle color multiplied by particle's alpha
    MultiplyAdd,
}

type RecipesForItem =
    {
        requires: { items: ItemName[]; amt: number }[]
        produces: number
        station?: string | string[]
        onCraftedAura?: number
        isStarterRecipe?: boolean
    }[]

type StyledIcon = {
    icon: string
    style?: {
        color?: string
        colour?: string
        fontSize?: string
        opacity?: number
    }
}

type StyledText = {
    str: string | EntityName | TranslatedText
    style?: TextStyle
    clickableUrl?: string
}

type TempParticleSystemOpts = {
    texture: string
    minLifeTime: number
    maxLifeTime: number
    minEmitPower: number
    maxEmitPower: number
    minSize: number
    maxSize: number
    gravity: number[]
    velocityGradients: {
        timeFraction: number
        factor: number
        factor2: number
    }[]
    colorGradients: {
        timeFraction: number
        minColor: [number, number, number, number]
        maxColor?: [number, number, number, number]
    }[] | {
        color: [number, number, number]
    }[]
    blendMode: ParticleSystemBlendMode
    dir1: number[]
    dir2: number[]
    pos1: number[]
    pos2: number[]
    manualEmitCount: number
    hideDist: number
}

type TranslatedText = {
    translationKey: string
    params?: Record<string, string | number | boolean | EntityName>
}

type ItemAttributes = { customDisplayName?: string; customDescription?: string; customAttributes?: Record<string, any> }

enum WalkThroughType {
    CANT_WALK_THROUGH = 0,
    CAN_WALK_THROUGH = 1,
    DEFAULT_WALK_THROUGH = 2,
}

type WorldBlockChangedInfo = {
    cause: PNull<"Paintball" | "FloorCreator" | "Sapling" | "StemFruit" | "MeltingIce" | "Explosion">
}

type EarthSkyBox = {
    type: "earth"
    inclination?: number
    turbidity?: number
    infiniteDistance?: boolean
    luminance?: number
    yCameraOffset?: number
    azimuth?: number
    // Not part of sky model by default; heavily tint to a vertex color
    vertexTint?: [number, number, number]
}

type ShopItem = {
    image: string
    cost?: number
    currency?: string
    amount?: number // Display amount shown on the shop tile image (0 and 1 are not displayed)
    imageColour?: string
    canBuy?: boolean
    isSelected?: boolean
    buyButtonText?: string | CustomTextStyling
    customTitle?: string | CustomTextStyling
    description?: string | CustomTextStyling
    onBoughtMessage?: string | CustomTextStyling
    redDot?: boolean
    forceRemoveRedDot?: boolean
    badge?: { text: string | CustomTextStyling; type: ShopItemBadgeType }
    userInput?: ShopItemUserInput
    sell?: boolean // Optional, defaults to false. If true, the sign of "cost" is flipped. So a "cost" of -25 would give the player 25 currency AND be displayed as "25" (instead of -25)
    sortPriority?: number // Descending, bigger number means closer to the top
    hidden?: boolean
}

type ShopItemUserInput =
    | { type: "text"; placeholderText?: string; wordCharsOnly?: boolean; initialValue?: string } // wordCharsOnly defaults to false. If true, only allows \w character (alphanumeric and _). initialValue always takes precedence as the text input value when set.
    | { type: "number"; placeholderText?: string; initialValue?: string }
    | {
            type: "dropdown"
            dropdownOptions: readonly (string | { option: string; cost: number })[]
            shouldResetSelectionOnOptionsChange?: boolean // Defaults to false. If true, the selection will reset to the first option when dropdownOptions changes.
            initialValue?: string
      }
    | { type: "player"; excludedPlayers?: PlayerId[] } // Defaults to excluding the current player
    | { type: "color"; initialValue?: string }

type ShopCategoryConfig = Partial<{
    autoSelectCategory: boolean
    customTitle: string // Supports translation keys and ordinary text
    redDot: boolean
    forceRemoveRedDot: boolean
    sortPriority: number
    description: string | CustomTextStyling
}>

type MobSpawnOpts<TMobType extends MobType> = Partial<{
    mobHerdId: MobHerdId
    spawnerId: PlayerId
    mobDbId: MobDbId
    name: string
    playSoundOnSpawn: boolean
    variation: MobVariation<TMobType>
    physicsOpts: Partial<{
        width: number
        height: number
        collidesEntities: boolean
    }>
}>

type MeshEntityOpts = {
    Box: CommonMeshEntityOpts & {
        width: number
        height: number
        depth: number
        diffuseColor?: number[]
        emissiveColor?: number[]
        backFaceCulling?: boolean // Default true
        texture?: string // Can be a blockname. Wraps every one block
        faceUV?: number[][]
    }
    BloxdBlock: CommonMeshEntityOpts & {
        blockName: BlockNameOrId
        size: number | [number, number, number]
    }
    Person: CommonMeshEntityOpts & {
        size?: number
        textures?: Partial<Cosmetics>
        pose?: PlayerPose
    }
    ParticleEmitter: MeshParticleSystemOpts
}

type CommonMeshEntityOpts = {
    hideDist?: number
    meshOffset?: number[]
    autoRotate?: boolean
    lineToEId?: EntityId // EntityId to connect to using a line
}

type MeshEntityPhysicsOpts = {
    doPhysics: boolean
    onCollideTerrain?: () => void // Unsupported for custom code
    collidesEntities?: boolean
    collideBits?: number // bitmask category of this entity
    collideMask?: number // bitmask category of entities this entity collides with
    heightExpandAmt?: number // expand hitbox height by this amount
    widthExpandAmt?: number // expand hitbox width by this amount
    vehicleOpts?: MeshEntityVehicleOpts // Unsupported for custom code
}
```
