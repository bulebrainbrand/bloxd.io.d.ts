import GetHealthInterface from "./getHealth";
import SetHealthinterface from "./setHealth";
import AttemptApplyDamageInterface from "./attemptApplyDamage";
import ApplyMeleeHitInterface from "./applyMeleeHit";
import ApplyHealthChangeInterface from "./applyHealthChange";

export type HealthApis = GetHealthInterface &
  SetHealthinterface &
  AttemptApplyDamageInterface &
  ApplyMeleeHitInterface &
  ApplyHealthChangeInterface;
