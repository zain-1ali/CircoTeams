import { useEffect, useState } from "react";
import TableHeader from "../../Molecules/TableHeader";
import TemplateCard from "../../Molecules/TemplateCard";
import TempelatesGetStarted from "../../Molecules/TempelatesGetStarted";
import { getMultipleChilds } from "../../Services/Constants";

const Tempelates = () => {
  const [isTempelate, setisTempelate] = useState(false);
  const createTeam = () => {
    setisTempelate(!isTempelate);
  };

  const [loading, setloading] = useState<boolean>(false);
  console.log(loading);

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
          item?.name?.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const callBackFunc = (data: any) => {
    setFilteredTeams(Object.values(data));
    settemplates(Object.values(data));
  };

  console.log(templates);

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
      {isTempelate ? (
        <div className="h-[100%] w-[100%]">
          <TableHeader
            number={3}
            headerName="Template"
            searchItem={searchItem}
          />
          <div className="w-[100%] flex justify-between mt-5">
            {filteredTeams?.map((elm, i) => {
              return <TemplateCard key={i} data={elm} />;
            })}

            {/* <TemplateCard />
            <TemplateCard /> */}
          </div>
        </div>
      ) : (
        <TempelatesGetStarted createTeam={createTeam} />
      )}
    </div>
  );
};

export default Tempelates;
