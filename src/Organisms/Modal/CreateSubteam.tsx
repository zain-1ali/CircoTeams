import React, { useState } from "react";
import InputWithLabel from "../../Molecules/InputWithLabel";
import Button from "../../Atoms/Button";
import useToastNotifications from "../../Hooks/useToastNotification";
import { createSubTeam } from "../../Services/SubTeamsServices";
// import { createTeamsProfile } from "../../Services/ProfileServices";

const CreateSubteam: React.FC<{
  onClose: () => void;
  setLoading: any;
}> = ({ setLoading, onClose }) => {
  const { showError, showSuccess } = useToastNotifications();
  const [data, setData] = useState({
    name: "",
  });
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  return (
    <div>
      <InputWithLabel
        label="Subteam Name*"
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
        value={data?.name}
        inputClasses="w-[100%] h-[43px] outline-none pl-2 bg-[#F7F7F8] rounded-md "
        labelClasses="font-[400] text-[14px] w-[100%] "
      />

      <div className="w-[100%] flex justify-center gap-4 items-center mt-4">
        <Button
          text="Cancel"
          onClick={onClose}
          btnClasses="h-[40px] w-[120px] border rounded-md"
        />
        <Button
          text="Create"
          onClick={() => {
            createSubTeam(
              { ...data, id: companyId },
              showError,
              showSuccess,
              setLoading
            ),
              onClose();
          }}
          btnClasses="h-[40px] w-[120px] border rounded-md bg-[#2B6EF6] text-white"
        />
      </div>
    </div>
  );
};

export default CreateSubteam;
