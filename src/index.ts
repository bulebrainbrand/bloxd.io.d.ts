import { Apis } from "./api-type-def/index";
import { Coordinate, PlayerId } from "./type/index";

declare global {
  var api: typeof Apis;
  var myId: PlayerId | null;
  var thisPos: Coordinate | undefined;
}

export * from "./type/index";

export * from "./api-type-def/index";
