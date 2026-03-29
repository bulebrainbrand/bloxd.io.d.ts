import { getHealth } from "./getHealth";
import { setHealth } from "./setHealth";
import { attemptApplyDamage } from "./attemptApplyDamage";
import { applyMeleeHit } from "./applyMeleeHit";
import { applyHealthChange } from "./applyHealthChange";
import { killLifeform } from "./killLifeform";
import { isAlive } from "./isAlive";

export const HealthApis = {
  getHealth,
  setHealth,
  attemptApplyDamage,
  applyMeleeHit,
  applyHealthChange,
  killLifeform,
  isAlive,
};
