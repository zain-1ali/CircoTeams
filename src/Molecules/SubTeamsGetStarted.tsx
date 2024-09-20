// import React from 'react'
import subteamsStarter from "../assets/images/subteamsStarter.png";
import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { IoMdAdd } from "react-icons/io";
import { SubTeamsGetStartedProps } from "../Types";

const SubTeamsGetStarted: React.FC<SubTeamsGetStartedProps> = ({
  createTeam,
}) => {
  return (
    <div className="w-[100%] flex flex-col  items-center justify-center h-[100%]">
      <Image
        src={subteamsStarter}
        classes="w-[597px] h-[217px] object-cover "
      />
      <Text
        text="No Subteam"
        classes="font-[600] text-[20px] text-center mt-2"
      />
      <Text
        text="Create a subteam and easily manage all members across your team"
        classes="font-[500] text-[18px] text-[#A9A9A9] text-center mt-3"
      />
      <Button
        text="Create Subteam"
        btnClasses="bg-[#2B6EF6] w-[256px] h-[56px] rounded-[50px] font-[600] text-[18px] text-white mt-4 flex justify-center items-center relative pl-4"
        onClick={() => createTeam()}
        icon={
          <IoMdAdd
            className="text-white absolute left-[17%]"
            height={13}
            width={13}
          />
        }
      />
    </div>
  );
};

export default SubTeamsGetStarted;
