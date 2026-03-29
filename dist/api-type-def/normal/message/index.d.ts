export declare const MessageApis: {
    broadcastMessage: (message: string | import("../../..").CustomTextStyling, style?: {
        fontWeight?: number | string;
        color?: string;
    }) => void;
    sendMessage: {
        (playerId: import("../../..").PlayerId, message: string, style: {
            fontWeight?: number | string;
            color?: string;
        }): void;
        (playerId: import("../../..").PlayerId, message: import("../../..").CustomTextStyling): void;
    };
    sendFlyingMiddleMessage: (playerId: import("../../..").PlayerId, message: string | import("../../..").CustomTextStyling, distanceFromAction?: number, lifetimeMs?: number) => void;
    sendTopRightHelper: (playerId: import("../../..").PlayerId, icon: string, text: string, opts: {
        duration?: number;
        width?: number;
        height?: number;
        color?: import("../../..").StringColor;
        iconSizeMult?: number;
        textAndIconColor?: string;
        fontSize?: string;
    }) => void;
};
