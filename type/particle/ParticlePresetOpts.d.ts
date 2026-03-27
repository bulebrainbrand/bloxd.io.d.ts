import { Coordinate } from "../Coordinate";
import { PresetId } from "./PresetId";
/**
 * You can also use a presetId instead to use a pre-defined particle effect, to replicate effects we use in-engine. Here is the code for an example of using a presetId
 * @example
 * ```js
 *  let [x, y, z] = thisPos
 *  y += 1
 *  api.playParticleEffect({
 *    presetId: "aura",
 *    pos1: [x, y, z],
 *    pos2: [x + 1, y + 1, z + 1],
 *  })
 *  ```
 */
export type ParticlePresetOpts = {
  presetId: PresetId;
  pos1: Coordinate;
  pos2: Coordinate;
};
