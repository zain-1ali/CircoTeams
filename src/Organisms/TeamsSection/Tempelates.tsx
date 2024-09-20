import { useState } from "react";
import TableHeader from "../../Molecules/TableHeader";
import TemplateCard from "../../Molecules/TemplateCard";
import TempelatesGetStarted from "../../Molecules/TempelatesGetStarted";

const Tempelates = () => {
  const [isTempelate, setisTempelate] = useState(false);
  const createTeam = () => {
    setisTempelate(!isTempelate);
  };
  return (
    <div className="w-[100%] h-[100%]">
      {isTempelate ? (
        <div className="h-[100%] w-[100%]">
          <TableHeader number={3} headerName="Template" />
          <div className="w-[100%] flex justify-between mt-5">
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
          </div>
        </div>
      ) : (
        <TempelatesGetStarted createTeam={createTeam} />
      )}
    </div>
  );
};

export default Tempelates;
