import {
  EntityId,
  MeshEntityOpts,
  MeshEntityPhysicsOpts,
  MeshType,
} from "@type";

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
declare const attemptCreateMeshEntity: <TMeshType extends MeshType>(
  type: TMeshType,
  opts: MeshEntityOpts[TMeshType],
  name?: string,
  physicsOptions?: MeshEntityPhysicsOpts,
  initiatorId?: EntityId | null,
) => EntityId | null;
export { attemptCreateMeshEntity };
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
 *
 * attemptCreateMeshEntity(type, opts, name, physicsOptions, initiatorId);
 */
