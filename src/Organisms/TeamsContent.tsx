import { useEffect, useState } from "react";
import TeamsGetStarted from "../Molecules/TeamsGetStarted";
import TeamsSidebar from "./TeamsSidebar";
// import TableHeader from "../Molecules/TableHeader";

// import TableHeaderCell from "../Molecules/TableHeaderCell";
// import Table from "./Table";
import Member from "./TeamsSection/Member";
import { useAppSelector } from "../Hooks/reduxHooks";
import Subteams from "./TeamsSection/Subteams";
import Tempelates from "./TeamsSection/Tempelates";
import AddMember from "./TeamsSection/AddMember";

const TeamsContent = () => {
  const innerHeight: number = window.innerHeight;
  const [isPaid, setIspaid] = useState<boolean>(true);
  useEffect(() => {
    setIspaid(isPaid);
  }, []);

  const teamSectionStage = useAppSelector(
    (state) => state.teamSectionHandeler.teamSectionStage
  );

  // const [tableData, setTableData] = useState([
  //   {
  //     checked: false,
  //     imageUrl: "https://via.placeholder.com/50",
  //     text: "John Doe",
  //     buttonText: "View",
  //     onButtonClick: () => alert("Viewing John Doe"),
  //     additionalData: [28, "john@example.com"],
  //   },
  //   {
  //     checked: false,
  //     imageUrl: "https://via.placeholder.com/50",
  //     text: "Jane Smith",
  //     buttonText: "View",
  //     onButtonClick: () => alert("Viewing Jane Smith"),
  //     additionalData: [32, "jane@example.com"],
  //   },
  // ]);

  // const handleRowCheckboxChange = (rowIndex: number, checked: boolean) => {
  //   const newData = [...tableData];
  //   newData[rowIndex].checked = checked;
  //   setTableData(newData);
  // };
  return (
    <div className="w-[83%] h-[100%] bg-[#F7F7F8] flex justify-center  relative">
      <div
        className={`w-[97%] flex ${
          innerHeight > 700 ? "h-[97%]" : "h-[97%]"
        }  bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center items-center`}
      >
        {!isPaid ? (
          <TeamsGetStarted />
        ) : (
          <div className={`h-[100%] w-[100%] flex justify-between`}>
            <TeamsSidebar />
            <div
              className={`w-[84%] ${
                teamSectionStage === 0 ? "h-[95%]" : "h-[100%]"
              } pt-5 pl-4 pr-4 `}
            >
              {teamSectionStage === 0 ? (
                <Member />
              ) : teamSectionStage === 1 ? (
                <Subteams />
              ) : teamSectionStage === 2 ? (
                <Tempelates />
              ) : teamSectionStage === 3 ? (
                <AddMember />
              ) : null}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamsContent;
