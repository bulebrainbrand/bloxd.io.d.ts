export declare const MeshApis: {
    attemptCreateMeshEntity: <TMeshType extends import("../../..").MeshType>(type: TMeshType, opts: import("../../..").MeshEntityOpts[TMeshType], name?: string, physicsOptions?: import("../../..").MeshEntityPhysicsOpts, initiatorId?: import("../../..").EntityId | null) => import("../../..").EntityId | null;
    deleteMeshEntity: (eId: import("../../..").EntityId) => boolean;
    updateMeshEntity: <TMeshType extends import("../../..").MeshType>(eId: import("../../..").EntityId, type: TMeshType, opts: import("../../..").MeshEntityOpts[TMeshType]) => void;
};
//# sourceMappingURL=index.d.ts.map