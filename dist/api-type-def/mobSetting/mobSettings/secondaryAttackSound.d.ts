import { MobType, SoundName } from "../../../type/index";
type SecondaryAttackSoundDictionary = Record<MobType, SoundName | string | null>;
export type SecondaryAttackSound<K extends MobType> = SecondaryAttackSoundDictionary[K];
export {};
//# sourceMappingURL=secondaryAttackSound.d.ts.map