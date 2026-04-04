import { MobType, PlayerDbId } from "../../../type/index";
type OwnerDbIdDictionary = Record<MobType, PlayerDbId | null>;
export type OwnerDbId<K extends MobType> = OwnerDbIdDictionary[K];
export {};
//# sourceMappingURL=ownerDbId.d.ts.map