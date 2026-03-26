import { EntityId } from "./EntityId";

declare const PlayerIdSymbol: unique symbol;
export type PlayerId = EntityId & { readonly [PlayerIdSymbol]: unknown };
