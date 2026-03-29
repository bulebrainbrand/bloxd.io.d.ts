import { PlayerId, TempParticleSystemOpts } from "../../type/index";
interface PlayParticleEffectInterface {
    /**
     * Play particle effect on all clients, or only on some clients if clientPredictedBy is specified
     *
     * @param {TempParticleSystemOpts | ParticlePresetOpts} opts
     * @param {PlayerId} [clientPredictedBy] - Play only on clients where client with playerId clientPredictedBy
     * is not invisible, transparent, or themselves
     * @returns {void}
     */
    playParticleEffect(opts: TempParticleSystemOpts, clientPredictedBy?: PlayerId): void;
}
export default PlayParticleEffectInterface;
