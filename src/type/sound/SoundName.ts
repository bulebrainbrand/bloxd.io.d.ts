import { AllSoundName } from "./AllSoundName";
declare const SoundNameSymbol: unique symbol;
export type SoundName = AllSoundName & { readonly [SoundNameSymbol]: unknown };
