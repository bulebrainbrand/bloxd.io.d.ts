import { EntityId, MeshEntityOpts, MeshType } from "../../../type/index";
/**
 * Update a mesh entity. If used on a non-mesh entity, will do nothing.
 *
 * @param {EntityId} eId
 * @param {MeshType} type
 * @param {MeshEntityOpts[MeshType]} opts
 * @returns {void}
 */
declare const updateMeshEntity: <TMeshType extends MeshType>(eId: EntityId, type: TMeshType, opts: MeshEntityOpts[TMeshType]) => void;
export { updateMeshEntity };
/**
 * Update a mesh entity. If used on a non-mesh entity, will do nothing.
 *
 * @param {EntityId} eId
 * @param {MeshType} type
 * @param {MeshEntityOpts[MeshType]} opts
 * @returns {void}
 *
 * updateMeshEntity(eId, type, opts);
 */
