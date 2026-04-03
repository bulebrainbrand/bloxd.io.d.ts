import { EntityId, LifeformBodyPart, MeshEntityOpts, MeshType, Rotation } from "../../../type/index";
/**
 * Attach/detach mesh instances to/from an entity
 *
 * overloads:
 * - `updateEntityNodeMeshAttachment(eId, node, type, opts, offset, rotation)`;
 * - `updateEntityNodeMeshAttachment(eId, node, null)`;
 * @param {EntityId} eId
 * @param {EntityNamedNode} node - node to attach to
 * @param {PNull<MeshType>} type - if null, detaches mesh from this node
 * @param {MeshEntityOpts[MeshType]} [opts]
 * @param {[number, number, number]} [offset]
 * @param {[number, number, number]} [rotation]
 * @returns {void}
 */
declare const updateEntityNodeMeshAttachment: {
    <TMeshType extends MeshType>(eId: EntityId, node: LifeformBodyPart, type: TMeshType, opts?: MeshEntityOpts[TMeshType], offset?: [number, number, number], rotation?: Rotation): void;
    (eId: EntityId, node: LifeformBodyPart, type: null): void;
};
export { updateEntityNodeMeshAttachment };
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
 *
 * updateEntityNodeMeshAttachment(eId, node, type, opts, offset, rotation);
 */
