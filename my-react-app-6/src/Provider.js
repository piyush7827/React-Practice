import React, { useState } from "react";
import PackageContext from "./Context";

function Provider(props) {
  const [mission, setMission] = useState({
    MissionName: "Go To Syria",
    AgentName: "Agent Vinod",
    Accept: "Not Accepted",
  });
  return (
    <PackageContext.Provider
      value={{
        data: mission,
        isMissionAccepted: () => {
          setMission({ ...mission, Accept: "ACCEPTED" });
        },
      }}
    >
      {props.children}
    </PackageContext.Provider>
  );
}

export default Provider;
