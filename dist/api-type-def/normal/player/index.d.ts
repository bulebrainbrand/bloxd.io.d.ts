export declare const PlayerApis: {
    getPlayerIds: () => import("../../..").PlayerId[];
    getNumPlayers: () => number;
    getPlayerPartyWhenJoined: (playerId: import("../../..").PlayerId) => import("../../..").Party | null;
    playerIsInGame: (playerId: import("../../..").PlayerId) => boolean;
    playerIsLoggedIn: (playerId: import("../../..").PlayerId) => boolean;
    getPlayerId: (playerName: string) => null | import("../../..").PlayerId;
    getPlayerDbId: (playerId: import("../../..").PlayerId) => import("../../..").PlayerDbId;
    getPlayerIdFromDbId: (dbId: import("../../..").PlayerDbId) => null | import("../../..").PlayerId;
    kickPlayer: (playerId: import("../../..").PlayerId, reason: string) => void;
    isMobile: (playerId: import("../../..").PlayerId) => boolean;
    setCameraDirection: (playerId: import("../../..").PlayerId, direction: import("../../..").Direcrion) => void;
    setPlayerOpacity: (playerId: import("../../..").PlayerId, opacity: number) => void;
    setPlayerOpacityForOnePlayer: (playerIdWhoViewsOpacityPlayer: import("../../..").PlayerId, playerIdOfOpacityPlayer: import("../../..").PlayerId, opacity: number) => void;
    forceRespawn: (playerId: import("../../..").PlayerId, respawnPos?: Readonly<import("../../..").Coordinate>) => void;
};
