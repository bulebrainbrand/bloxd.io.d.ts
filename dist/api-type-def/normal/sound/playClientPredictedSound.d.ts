import { PlayerId, PosSettings, SoundName } from "../../../type/index";
/**
 * See documentation for api.playSound
 *
 * @param {string} soundName
 * @param {number} volume
 * @param {number} rate
 * @param { PosSettings } [posSettings]
 * @param {PlayerId} [predictedBy]
 * @returns {void}
 */
declare const playClientPredictedSound: (soundName: SoundName | string, volume: number, rate: number, posSettings?: PosSettings, predictedBy?: PlayerId) => void;
export { playClientPredictedSound };
/**
 * See documentation for api.playSound
 *
 * @param {string} soundName
 * @param {number} volume
 * @param {number} rate
 * @param { {
 *     playerIdOrPos: PlayerId | number[]
 *     maxHearDist?: number
 *     refDistance?: number
 * } } [posSettings]
 * @param {PlayerId} [predictedBy]
 * @returns {void}
 *
 * playClientPredictedSound(soundName, volume, rate, posSettings, predictedBy);
 */
//# sourceMappingURL=playClientPredictedSound.d.ts.map