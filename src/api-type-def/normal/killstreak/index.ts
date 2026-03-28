import GetCurrentKillsreakInterface from "./getCurrentKillstreak";
import ClearKillstreakInterface from "./clearKillstreak";

export type KillstreakApis = GetCurrentKillsreakInterface &
  ClearKillstreakInterface;
