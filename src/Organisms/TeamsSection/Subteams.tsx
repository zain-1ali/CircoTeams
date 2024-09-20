import React, { useState } from "react";
import TableHeader from "../../Molecules/TableHeader";

import SubTeamsGetStarted from "../../Molecules/SubTeamsGetStarted";
import SubTeamCard from "../../Molecules/SubTeamCard";

const Subteams = () => {
  const [isTeams, setisTeams] = useState(false);
  const createTeam = () => {
    setisTeams(!isTeams);
  };
  return (
    <div className="w-[100%] h-[100%]">
      {isTeams ? (
        <div className="h-[100%] w-[100%]">
          <TableHeader number={78} headerName="Subteams" />
          <div className="w-[100%] flex justify-between mt-5">
            <SubTeamCard />
            <SubTeamCard />
            <SubTeamCard />
          </div>
        </div>
      ) : (
        <SubTeamsGetStarted createTeam={createTeam} />
      )}
    </div>
  );
};

export default Subteams;
