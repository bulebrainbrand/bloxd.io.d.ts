import BroadcastMessageInterface from "./broadcastMessage";
import SendMessageInterface from "./sendMessage";
import SendFlyingMiddleMessage from "./sendFlyingMiddleMessage";
import SendTopRightHelper from "./sendTopRightHelper";
export type MessageApis = BroadcastMessageInterface &
  SendMessageInterface &
  SendFlyingMiddleMessage &
  SendTopRightHelper;
