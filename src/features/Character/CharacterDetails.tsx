import { Message, MessageTypeEnum } from "@/lib/types/conversation.type";
import { Check, Pencil, X } from "lucide-react";
import React, { useEffect } from "react";
import { vapi } from "../Assistant";

function CharacterDetails() {
  const [characterDetails, setCharacterDetails] = React.useState<
    Record<string, string>
  >({});

  const [editKey, setEditKey] = React.useState<string | null>(null);
  const [editValue, setEditValue] = React.useState<string>("");

  useEffect(() => {
    const onMessageUpdate = (message: Message) => {
      if (message.type !== MessageTypeEnum.FUNCTION_CALL) return;
      if (message.functionCall.name === "finalizeDetail") {
        const params = message.functionCall.parameters;
        setCharacterDetails((details) => ({
          ...details,
          [params.key.toLowerCase()]: [params.value],
        }));
      }
    };

    vapi.on("message", onMessageUpdate);
    return () => {
      vapi.off("message", onMessageUpdate);
    };
  }, []);

  const handleEdit = (key: string) => {
    setEditKey(key);
    setEditValue(characterDetails[key]);
  };

  const handleEditChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditValue(event.target.value);
  };

  const handleCancel = () => {
    setEditKey(null);
    setEditValue("");
  };

  const handleSave = () => {
    if (editKey) {
      vapi.send({
        type: MessageTypeEnum.ADD_MESSAGE,
        message: {
          role: "system",
          content: `The user has updated the final value for ${editKey} to ${editValue}.`,
        },
      });
    }
    setEditKey(null);
    setEditValue("");
  };
  return (
    <>
      {Object.keys(characterDetails).map((key: string) => (
        <div className="flex flex-row gap-2 justify-between w-full" key={key}>
          <h1 className="font-bold capitalize">{key}</h1>
          <div className="flex">
            {editKey === key ? (
              <textarea
                value={editValue}
                className="border-0 h-auto focus-visible:ring-0 focus-visible:outline-none"
                onChange={handleEditChange}
              />
            ) : (
              <div className="transition text-right ">
                {characterDetails[key]}
              </div>
            )}
            {editKey === key ? (
              <div className="right-0 top-0 flex">
                <button onClick={handleCancel} className="py-1">
                  <X size={16} className="font-bold text-red-500" />
                </button>
                <button className="py-1">
                  <Check
                    size={16}
                    onClick={handleSave}
                    className="font-bold text-green-500"
                  />
                </button>
              </div>
            ) : (
              <button className="p-1" onClick={() => handleEdit(key)}>
                <Pencil size={16} className="font-bold text-blue-500" />
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export { CharacterDetails };
