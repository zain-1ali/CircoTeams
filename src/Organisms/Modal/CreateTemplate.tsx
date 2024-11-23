import React, { useEffect, useState } from "react";
import InputWithLabel from "../../Molecules/InputWithLabel";
import Button from "../../Atoms/Button";
import useToastNotifications from "../../Hooks/useToastNotification";
// import { createSubTeam } from "../../Services/SubTeamsServices";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import { resetState } from "../../Redux/ProfileSlice";
import { createTemplate } from "../../Services/TemplatesServices";
// import { createTeamsProfile } from "../../Services/ProfileServices";

const CreateTemplate: React.FC<{
  onClose: () => void;
  setLoading: any;
}> = ({ setLoading, onClose }) => {
  const { showError, showSuccess } = useToastNotifications();
  const [data, setData] = useState({
    name: "",
  });
  const dispatch = useAppDispatch();
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const profileData = useAppSelector((state) => state.profileHandler);
  useEffect(() => {
    dispatch(resetState());
  }, []);
  return (
    <div>
      <InputWithLabel
        label="Template Name*"
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
            createTemplate(
              { ...profileData, parentID: companyId, profileName: data?.name },
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

export default CreateTemplate;
