export declare const CameraApis: {
    getPlayerFacingInfo: (playerId: import("../../..").PlayerId) => {
        camPos: import("../../..").Coordinate;
        dir: import("../../..").Direcrion;
        angleDir: import("../../..").AngleDir;
        moveHeading: number;
    };
    getPlayerTargetInfo: (playerId: import("../../..").PlayerId) => {
        position: import("../../..").Coordinate;
        normal: import("../../..").Coordinate;
        adjacent: import("../../..").Coordinate;
    };
    setCameraDirection: (playerId: import("../../..").PlayerId, direction: import("../../..").Direcrion) => void;
    setCameraZoom: (playerId: import("../../..").PlayerId, zoom: number) => void;
};
