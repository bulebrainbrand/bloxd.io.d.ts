import { MobType, SoundName } from "../../../type/index";
type HurtSoundDictionary = Record<MobType, SoundName | string | null>;
export type HurtSound<K extends MobType> = HurtSoundDictionary[K];
export {};
//# sourceMappingURL=hurtSound.d.ts.map