export declare const EffectApis: {
    applyEffect: {
        (lifeformId: import("../../..").LifeformId, effectName: import("../../..").InGameEffectName, duration: number | null, customEffectInfo: {
            icon?: import("../../..").IngameIconName | import("../../..").ItemName | string;
            onEndCb?: () => void;
            displayName?: string | import("../../..").TranslatedText;
            inbuildLevel?: number;
        }): void;
        (lifeformId: import("../../..").LifeformId, effectName: string, duration: number | null, customEffectInfo: {
            icon?: import("../../..").IngameIconName | import("../../..").ItemName | string;
            onEndCb?: () => void;
            displayName?: string | import("../../..").TranslatedText;
            inbuildLevel: number;
        }): void;
    };
    removeEffect: (lifeformId: import("../../..").LifeformId, name: string) => void;
    getEffects: (lifeformId: import("../../..").LifeformId) => string[];
};
//# sourceMappingURL=index.d.ts.map