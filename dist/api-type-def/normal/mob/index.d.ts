export declare const MobApis: {
    attemptSpawnMob: <TMobType extends import("../../..").MobType>(mobType: TMobType, x: number, y: number, z: number, opts: import("../../..").MobSpawnOpts<TMobType>) => import("../../..").MobId | null;
    createMobHerd: () => import("../../..").MobHerdId;
    despawnMob: (mobId: import("../../..").MobId) => void;
    getMobAiState: (mobId: import("../../..").MobId) => {
        state: import("../../..").MobAiState;
        params: import("../../..").MobAiStateParams<import("../../..").MobAiState>;
    };
    getMobIds: () => import("../../..").MobId[];
    getNumMobs: () => number;
    setMobAiState: <TState extends import("../../..").MobAiState>(mobId: import("../../..").MobId, state: TState, params: import("../../..").MobAiStateParams<TState>) => void;
};
//# sourceMappingURL=index.d.ts.map