import { CALL_STATUS, useVapi } from "./useVapi";
import { Loader2 } from "lucide-react";

const VapiButton = ({
  toggleCall,
  callStatus,
  audioLevel = 0,
}: Partial<ReturnType<typeof useVapi>>) => {
  const buttonStyle = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    color: "white",
    border: "none",
    boxShadow: `1px 1px ${10 + audioLevel * 40}px ${audioLevel * 10}px orange`,
    cursor: "pointer",
  };

  return (
    <button
      style={buttonStyle}
      className="transition ease-in-out bg-orange-500 hover:bg-orange-700 flex items-center justify-center"
      onClick={toggleCall}
    >
      {callStatus === CALL_STATUS.ACTIVE ? (
        "Stop"
      ) : callStatus === CALL_STATUS.LOADING ? (
        <Loader2 className="animate-spin" />
      ) : (
        "Play"
      )}
    </button>
  );
};

export { VapiButton };
