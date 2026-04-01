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
 *
 * attemptSpawnMob(mobType, x, y, z, opts);
 */
