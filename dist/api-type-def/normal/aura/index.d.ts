export declare const AuraApis: {
    applyAuraChange: (playerId: import("../../..").PlayerId, auraDiff: number) => number;
    getAuraInfo: (player: import("../../..").PlayerId) => {
        level: number;
        totalAura: number;
        auraPerLevel: number;
    };
    setTotalAura: (playerId: import("../../..").PlayerId, totalAura: number) => void;
};
