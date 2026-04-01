// TODO: make this api

/**
 * Apply an effect to a lifeform.
 * Can be an inbuilt effect E.g. "Speed" (speed boost), "Damage" (damage boost).
 * For inbuilt just pass the name of the effect and the functionality is handled in-engine.
 * For custom effect, you pass customEffectInfo. The icon can be an icon from "IngameIcons.ts" or a bloxd item name.
 * The custom effect onEndCb is an optional helper within which you can undo the effect you applied.
 * Note that onEndCb will not work for press to code boards, code blocks or world code.
 *
 * @param {LifeformId} lifeformId
 * @param {string} effectName
 * @param {number | null} duration
 * @param { { icon?: IngameIconName | ItemName; onEndCb?: () => void; displayName?: string | TranslatedText } & Partial<InbuiltEffectInfo> } customEffectInfo
 * @returns {void}
 *
 * applyEffect(lifeformId, effectName, duration, customEffectInfo);
 */
