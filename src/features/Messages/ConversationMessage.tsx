import {
  MessageRoleEnum,
  TranscriptMessage,
} from "@/lib/types/conversation.type";

interface ConversationMessageProps {
  message: TranscriptMessage;
}

export function ConversationMessage({ message }: ConversationMessageProps) {
  return (
    <div
      className={`flex w-4/5 text-sm mb-4 justify-end text-[#1a0400] font-medium ${
        message.role == MessageRoleEnum.USER ? "ml-auto" : "mr-auto"
      }`}
    >
      <div
        className={`p-3 ${
          message.role !== MessageRoleEnum.USER
            ? "rounded-r-xl bg-blue-200 mr-auto"
            : "rounded-l-xl bg-orange-100 ml-auto"
        } rounded-t-xl`}
      >
        <p className="leading-relaxed">{message.transcript}</p>
      </div>
    </div>
  );
}
