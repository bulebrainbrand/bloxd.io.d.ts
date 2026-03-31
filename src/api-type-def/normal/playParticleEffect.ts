import { ParticlePresetOpts, PlayerId, TempParticleSystemOpts } from "@type";

/**
 * Play particle effect on all clients, or only on some clients if clientPredictedBy is specified
 *
 * @param {TempParticleSystemOpts | ParticlePresetOpts} opts
 * @param {PlayerId} [clientPredictedBy] - Play only on clients where client with playerId clientPredictedBy
 * is not invisible, transparent, or themselves
 * @returns {void}
 */
declare const playParticleEffect: (
  opts: TempParticleSystemOpts | ParticlePresetOpts,
  clientPredictedBy?: PlayerId,
) => void;

export { playParticleEffect };
