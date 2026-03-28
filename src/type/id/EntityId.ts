import { Id } from "./Id";

declare const EntityIdSymbol: unique symbol;
export type EntityId = Id & { readonly [EntityIdSymbol]: unknown };
