import { GetPosition } from "./getPosition";
import { SetPosition } from "./setPosition";
import { GetPlayerIds } from "./getPlayerIds";
export type NormalApi = {
  getPosition: GetPosition;
  setPosition: SetPosition;
  getPlayerIds: GetPlayerIds;
};
