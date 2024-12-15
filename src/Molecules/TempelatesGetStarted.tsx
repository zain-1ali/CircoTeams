import React, { useState } from "react";
import tempelates from "../assets/images/tempelates.png";
import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { IoMdAdd } from "react-icons/io";
import { SubTeamsGetStartedProps } from "../Types";
import CustomModal from "../Organisms/Modal/Modal";
import CreateTemplate from "../Organisms/Modal/CreateTemplate";

const TempelatesGetStarted: React.FC<SubTeamsGetStartedProps> = ({
  createTeam,
}) => {
  console.log(createTeam);

  const [openCreateTemplate, setOpenCreateTemplate] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const handleOpenCreateTemplate = () => {
    setOpenCreateTemplate(!loading);
  };
  console.log(loading);

  return (
    <div className="w-[100%] flex flex-col  items-center justify-center h-[100%]">
      <Image src={tempelates} classes="w-[655px] h-[307px] object-cover " />
      <Text
        text="No Template"
        classes="font-[600] text-[20px] text-center mt-2"
      />
      <Text
        text="Create a template and maintain a consistent look among members"
        classes="font-[500] text-[18px] text-[#A9A9A9] text-center mt-3"
      />
      <Button
        text="Create Template"
        btnClasses="bg-[#2B6EF6] w-[256px] h-[56px] rounded-[50px] font-[600] text-[18px] text-white mt-4 flex justify-center items-center relative pl-4"
        onClick={() => handleOpenCreateTemplate()}
        icon={
          <IoMdAdd
            className="text-white absolute left-[17%]"
            height={13}
            width={13}
          />
        }
      />

      <CustomModal
        open={openCreateTemplate}
        onClose={() => setOpenCreateTemplate(false)}
        style={{ height: 180, width: 350, borderRadius: 5, p: 4 }}
      >
        <CreateTemplate
          setLoading={setLoading}
          onClose={handleOpenCreateTemplate}
        />
      </CustomModal>
    </div>
  );
};

export default TempelatesGetStarted;
