import BroadcastMessageInterface from "./broadcastMessage";
import SendMessageInterface from "./sendMessage";
import SendFlyingMiddleMessage from "./sendFlyingMiddleMessage";
export type MessageApis = BroadcastMessageInterface & SendMessageInterface & SendFlyingMiddleMessage;
