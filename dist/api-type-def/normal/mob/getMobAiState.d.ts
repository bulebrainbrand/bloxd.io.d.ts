import { MobAiState, MobAiStateParams, MobId } from "../../../type/index";
/**
 * Gets the current AI state for the given mob.
 *
 * @param {MobId} mobId
 * @returns { { state: MobAiState; params: MobAiStateParams<MobAiState> } }
 *
 * getMobAiState(mobId);
 */
declare const getMobAiState: (mobId: MobId) => {
    state: MobAiState;
    params: MobAiStateParams<MobAiState>;
};
export { getMobAiState };
/**
 * Gets the current AI state for the given mob.
 *
 * @param {MobId} mobId
 * @returns { { state: MobAiState; params: MobAiStateParams<MobAiState> } }
 *
 * getMobAiState(mobId);
 */
//# sourceMappingURL=getMobAiState.d.ts.map