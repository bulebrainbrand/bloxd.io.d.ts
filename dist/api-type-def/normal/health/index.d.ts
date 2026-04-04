export declare const HealthApis: {
    getHealth: (entityId: import("../../..").EntityId) => import("../../..").Health;
    setHealth: (entityId: import("../../..").EntityId, newHealth: import("../../..").Health | null, whoDidDamage?: Readonly<import("../../..").WhoDidDamage>, increaseMaxHealthIfNeeded?: boolean) => boolean;
    attemptApplyDamage: (options: Readonly<import("../../..").PlayerAttemptDamageOtherPlayerOpts>) => boolean;
    applyMeleeHit: (hittingEId: import("../../..").LifeformId, hitEId: import("../../..").LifeformId, dirFacing: Readonly<import("../../..").Direcrion>, bodyPartHit?: import("../../..").LifeformBodyPart | null, overrides?: Readonly<import("../../..").applyMeleeHitOverrides>) => boolean;
    applyHealthChange: (lifeformId: import("../../..").LifeformId, changeAmount: number, whoDidDamage?: Readonly<import("../../..").WhoDidDamage>, broadcastLifeformHurt?: boolean) => boolean;
    killLifeform: (lifeformId: import("../../..").LifeformId, whoKilled?: import("../../..").WhoKilled) => void;
    isAlive: (lifeformId: import("../../..").LifeformId) => boolean;
};
//# sourceMappingURL=index.d.ts.map