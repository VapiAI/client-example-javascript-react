import { FunctionCallResultMessage } from "../../lib/types/conversation.type";

interface FunctionCallResultMessageProps {
  message: FunctionCallResultMessage;
}

export default function FunctionCallResult({
  message,
}: FunctionCallResultMessageProps) {
  return (
    <div
      className={`flex w-4/5 text-sm mb-4 justify-end text-[#1a0400] font-medium mx-auto`}
    >
      <div className={`p-3 rounded-xl bg-green-100 mx-auto`}>
        <p className="leading-relaxed">{message.functionCallResult.result}</p>
      </div>
    </div>
  );
}
