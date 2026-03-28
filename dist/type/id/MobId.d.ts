import { EntityId } from "./EntityId";
declare const MobIdSymbol: unique symbol;
export type MobId = EntityId & {
    readonly [MobIdSymbol]: unknown;
};
export {};
