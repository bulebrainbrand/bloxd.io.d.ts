import { PlayerId, PosSettings, SoundName } from "@type";

/**
 * @param {PlayerId} playerId - hears the sound
 * @param {string} soundName - Can also be a prefix. If so, a random sound with that prefix will be played
 * @param {number} volume - 0-1. If it's too quiet and volume is 1, normalise your sound in audacity
 * @param {number} rate - The speed of playback. Also affects pitch. 0.5-4. Lower playback = lower pitch
 * Good for varying the sound. E.g. item pickup sound has a random rate between 1 and 1.5.
 * @param { PosSettings } [posSettings] -
 * {playerIdOrPos: PlayerId | number[], maxHearDist: number, refDistance: number}
 * playerIdOrPos: The player the sound originates from, or the position of the sound
 * maxHearDist: sound is not played if player is further than this. Default 15
 * refDistance: higher means the sound decreases less in volume with distance. Default 3. Hitting is 4. Guns are 10
 * @returns {void}
 *
 * playSound(playerId, soundName, volume, rate, posSettings);
 */
declare const playSound: (
  playerId: PlayerId,
  soundName: SoundName | string,
  volume: number,
  rate: number,
  posSettings?: PosSettings,
) => void;

export { playSound };

/**
 * @param {PlayerId} playerId - hears the sound
 * @param {string} soundName - Can also be a prefix. If so, a random sound with that prefix will be played
 * @param {number} volume - 0-1. If it's too quiet and volume is 1, normalise your sound in audacity
 * @param {number} rate - The speed of playback. Also affects pitch. 0.5-4. Lower playback = lower pitch
 * Good for varying the sound. E.g. item pickup sound has a random rate between 1 and 1.5.
 * @param { {
 *     playerIdOrPos: PlayerId | number[]
 *     maxHearDist?: number
 *     refDistance?: number
 * } } [posSettings] -
 * {playerIdOrPos: PlayerId | number[], maxHearDist: number, refDistance: number}
 * playerIdOrPos: The player the sound originates from, or the position of the sound
 * maxHearDist: sound is not played if player is further than this. Default 15
 * refDistance: higher means the sound decreases less in volume with distance. Default 3. Hitting is 4. Guns are 10
 * @returns {void}
 *
 * playSound(playerId, soundName, volume, rate, posSettings);
 */
