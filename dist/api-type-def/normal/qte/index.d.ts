export declare const QTEApis: {
    addQTE: (playerId: import("../../..").PlayerId, qteParameters: import("../../..").QTEClientParameters) => import("../../..").QTERequestId;
    deleteQTE: (playerId: import("../../..").PlayerId, id: import("../../..").QTERequestId) => void;
    hasActiveQTE: (playerId: import("../../..").PlayerId) => boolean;
};
