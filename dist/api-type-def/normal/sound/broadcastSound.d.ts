import { PlayerId, PosSettings, SoundName } from "../../../type/index";
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
 * @param {PlayerId} [exceptPlayerId]
 * @returns {void}
 */
declare const broadcastSound: (soundName: SoundName | string, volume: number, rate: number, posSettings?: PosSettings, exceptPlayerId?: PlayerId) => void;
export { broadcastSound };
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
 * @param {PlayerId} [exceptPlayerId]
 * @returns {void}
 *
 * broadcastSound(soundName, volume, rate, posSettings, exceptPlayerId);
 */
//# sourceMappingURL=broadcastSound.d.ts.map