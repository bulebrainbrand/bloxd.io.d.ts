import { MobAiState, MobAiStateParams, MobId } from "@type";

/**
 * Sets the current AI state for the given mob.
 * Some AI states will require context such as the ID of the lifeform being chased.
 *
 * @param {MobId} mobId
 * @param {TState} state
 * @param {MobAiStateParams<TState>} params
 * @returns {void}
 *
 * setMobAiState(mobId, state, params);
 */
declare const setMobAiState: <TState extends MobAiState>(
  mobId: MobId,
  state: TState,
  params: MobAiStateParams<TState>,
) => void;
export { setMobAiState };
/**
 * Sets the current AI state for the given mob.
 * Some AI states will require context such as the ID of the lifeform being chased.
 *
 * @param {MobId} mobId
 * @param {TState} state
 * @param {MobAiStateParams<TState>} params
 * @returns {void}
 *
 * setMobAiState(mobId, state, params);
 */
