import { ScrollArea } from "@/components/ui/ScrollArea";
import { VapiButton, vapi } from "./features/Assistant";
import { MessageList } from "./features/Messages";
import { useVapi } from "./features/Assistant";
import { CharacterPreview } from "./features/Character";
import { useEffect, useRef } from "react";

function App() {
  const scrollAreaRef = useRef<any>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    const viewport = viewportRef.current;
    if (viewport) {
      viewport.scrollTop = viewport.scrollHeight;
    }
  };
  const { toggleCall, messages, callStatus, activeTranscript, audioLevel } =
    useVapi();

  useEffect(() => {
    vapi.on("message", scrollToBottom);
    return () => {
      vapi.off("message", scrollToBottom);
    };
  });

  return (
    <main className="flex h-screen">
      <CharacterPreview />
      <div
        id="card"
        className="text-slate-950 dark:text-slate-50 w-full relative"
      >
        {/* <div
          id="card-header"
          className="flex flex-col space-y-1.5 p-6 shadow pb-4"
        ></div> */}
        <div id="card-content" className="p-6 pt-0">
          <ScrollArea
            ref={scrollAreaRef}
            viewportRef={viewportRef}
            className="h-[90vh] flex flex-1 p-4"
          >
            <div className="flex flex-1 flex-col min-h-[85vh] justify-end">
              <MessageList
                messages={messages}
                activeTranscript={activeTranscript}
              />
            </div>
          </ScrollArea>
        </div>
        <div
          id="card-footer"
          className="flex justify-center absolute bottom-0 left-0 right-0 py-4"
        >
          <VapiButton
            audioLevel={audioLevel}
            callStatus={callStatus}
            toggleCall={toggleCall}
          />
        </div>
      </div>
    </main>
  );
}

export default App;
