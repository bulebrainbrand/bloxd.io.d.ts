import { MobType, SoundName } from "../../../type/index";
type AttackSoundDictionary = Record<MobType, SoundName | null>;
export type AttackSound<K extends MobType> = AttackSoundDictionary[K];
export {};
//# sourceMappingURL=attackSound.d.ts.map