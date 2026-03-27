import { Api } from "./api-type-def";
import { Coordinate, PlayerId } from "./type";

declare global {
  var api: Api;
  var myId: PlayerId | null;
  var thisPos: Coordinate | undefined;
}

export * from "./type";

export * from "./api-type-def";
