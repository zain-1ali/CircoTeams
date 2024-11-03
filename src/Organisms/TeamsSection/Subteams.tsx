import { useEffect, useState } from "react";
import TableHeader from "../../Molecules/TableHeader";

import SubTeamsGetStarted from "../../Molecules/SubTeamsGetStarted";
import SubTeamCard from "../../Molecules/SubTeamCard";
import { getMultipleChilds } from "../../Services/Constants";

const Subteams = () => {
  const [loading, setloading] = useState<boolean>(false);
  console.log(loading);

  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [subteams, setSubteams] = useState<any[]>([]);

  // SEARCH FUNCTIONALITY

  let [filteredTeams, setFilteredTeams] = useState<any[]>([]);
  const searchItem = (searchValue: string) => {
    if (searchValue === "") {
      setFilteredTeams(subteams);
    } else {
      setFilteredTeams(
        subteams?.filter((item: any) =>
          item?.name?.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const callBackFunc = (data: any) => {
    setFilteredTeams(Object.values(data));
    setSubteams(Object.values(data));
  };

  console.log(subteams);

  useEffect(() => {
    getMultipleChilds(
      "SubTeams",
      "companyId",
      companyId,
      callBackFunc,
      setloading
    );
  }, []);

  return (
    <div className="w-[100%] h-[100%]">
      {subteams?.[0]?.id ? (
        <div className="h-[100%] w-[100%]">
          <TableHeader
            number={78}
            headerName="Subteams"
            searchItem={searchItem}
          />
          <div className="w-[100%] flex justify-start mt-5 gap-7">
            {filteredTeams?.map((team, index) => {
              return <SubTeamCard team={team} key={index} />;
            })}

            {/* <SubTeamCard />
            <SubTeamCard /> */}
          </div>
        </div>
      ) : (
        <SubTeamsGetStarted />
      )}
    </div>
  );
};

export default Subteams;
