import {
  Message,
  MessageTypeEnum,
  TranscriptMessage,
} from "@/lib/types/conversation.type";
import { ConversationMessage } from "./ConversationMessage";

interface MessageListProps {
  messages: Message[];
  activeTranscript?: TranscriptMessage | null;
}

export function MessageList({ messages, activeTranscript }: MessageListProps) {
  return (
    <>
      {messages.map((message, index) =>
        message.type === MessageTypeEnum.TRANSCRIPT ? (
          <ConversationMessage
            message={message}
            key={message.type + message?.role + index}
          />
        ) : null
      )}
      {activeTranscript ? (
        <ConversationMessage message={activeTranscript} />
      ) : null}
    </>
  );
}
