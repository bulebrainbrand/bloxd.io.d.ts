import { Coordinate } from "../Coordinate";
import { LifeformId } from "../id/LifeFormId";
export type AllMobAiState = {
    idle: null;
    disabled: null;
    idleBeforeTurning: null;
    turning: null;
    idleBeforeWalking: null;
    walking: null;
    runningAway: {
        targetId: LifeformId;
    };
    chasing: {
        targetId: LifeformId;
    };
    following: {
        targetId: LifeformId;
    };
    watching: {
        targetId: LifeformId;
    };
    walkingToPosition: {
        pos: Coordinate;
    };
    runningToPosition: {
        pos: Coordinate;
    };
};
export type MobAiState = keyof AllMobAiState;
export type MobAiStateParams<TState extends MobAiState> = AllMobAiState[TState];
//# sourceMappingURL=MobAiState.d.ts.map