import React, { useEffect } from "react";
import { vapi } from "../Assistant";
import { Message, MessageTypeEnum } from "../../lib/types/conversation.type";

function CharacterPreview() {
  const [characterDetails, setCharacterDetails] = React.useState<
    Record<string, string>
  >({});

  useEffect(() => {
    const onMessageUpdate = (message: Message) => {
      if (message.type !== MessageTypeEnum.FUNCTION_CALL) return;
      console.log("messaged", message);
      if (message.functionCall.name === "finalizeDetail") {
        console.log(
          "message.functionCall.parameters",
          message.functionCall.parameters
        );
        const params = message.functionCall.parameters;
        // Add the topping to the pizza
        setCharacterDetails((details) => ({
          ...details,
          [params.key]: [params.value],
        }));
      }
    };

    vapi.on("message", onMessageUpdate);

    return () => {
      vapi.off("message", onMessageUpdate);
    };
  }, []);

  return (
    <div>
      <div className="border rounded-lg p-4 flex flex-col gap-2 w-96 m-3 h-auto">
        <h1 className="text-2xl text-center w-full">Preview</h1>
        {Object.keys(characterDetails).length === 0 ? (
          <p className="text-slate-500 w-full text-center">No details yet.</p>
        ) : null}
        {Object.keys(characterDetails).map((key: string) => (
          <div className="flex flex-row gap-2 justify-between w-full" key={key}>
            <h1 className="font-bold capitalize">{key}</h1>
            <p className="text-right">{characterDetails[key]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export { CharacterPreview };
