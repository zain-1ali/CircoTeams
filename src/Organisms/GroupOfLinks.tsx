import React from "react";
import Text from "../Atoms/Text";
import LinkRepresenterBtn from "../Molecules/LinkRepresenterBtn";

const GroupOfLinks: React.FC<any> = ({
  linksGroupData,
  changeModeToAddLink,
}) => {
  console.log(linksGroupData);
  return (
    <div className="w-[100%] mt-6">
      <Text
        text={linksGroupData?.name}
        classes="font-[600] text-[15px] text-[#7C7C7C]"
      />
      <div className="w-[100%] flex justify-start gap-x-10 gap-y-5 flex-wrap mt-3">
        {linksGroupData?.links?.map((link: any, i: number) => {
          return (
            <div onClick={() => changeModeToAddLink(link)}>
              {" "}
              <LinkRepresenterBtn key={i} link={link} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GroupOfLinks;
