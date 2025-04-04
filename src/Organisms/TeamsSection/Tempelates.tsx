import { useEffect, useState } from "react";
import TableHeader from "../../Molecules/TableHeader";
import TemplateCard from "../../Molecules/TemplateCard";
import TempelatesGetStarted from "../../Molecules/TempelatesGetStarted";
import { getMultipleChilds } from "../../Services/Constants";
import Loading from "../Loading";

const Tempelates = () => {
  const [isTempelate, setisTempelate] = useState(false);
  const createTeam = () => {
    setisTempelate(!isTempelate);
  };

  const [loading, setloading] = useState<boolean>(false);
  // console.log(loading);

  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [templates, settemplates] = useState<any[]>([]);

  // SEARCH FUNCTIONALITY

  let [filteredTeams, setFilteredTeams] = useState<any[]>([]);
  const searchItem = (searchValue: string) => {
    if (searchValue === "") {
      setFilteredTeams(templates);
    } else {
      setFilteredTeams(
        templates?.filter((item: any) =>
          item?.profileName?.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const callBackFunc = (data: any) => {
    setFilteredTeams(Object.values(data));
    settemplates(Object.values(data));
  };

  // console.log(templates);

  useEffect(() => {
    getMultipleChilds(
      "Template",
      "parentID",
      companyId,
      callBackFunc,
      setloading
    );
  }, []);

  return (
    <div className="w-[100%] h-[100%]">
      {loading ? (
        <Loading bgColor="#F7F7F8" />
      ) : templates?.[0]?.id ? (
        <div className="h-[100%] w-[100%]">
          <TableHeader
            number={templates?.length}
            headerName="Template"
            searchItem={searchItem}
          />
          <div className="w-[100%] h-[80%] flex justify-start gap-[5%] mt-5 flex-wrap overflow-y-scroll">
            {filteredTeams?.map((elm, i) => {
              return <TemplateCard key={i} data={elm} />;
            })}
          </div>
        </div>
      ) : (
        <TempelatesGetStarted createTeam={createTeam} />
      )}
    </div>
  );
};

export default Tempelates;
