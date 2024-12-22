import React, { useState } from "react";
import InputWithLabel from "../../Molecules/InputWithLabel";
import Button from "../../Atoms/Button";
import useToastNotifications from "../../Hooks/useToastNotification";
import { createTeamsProfile } from "../../Services/ProfileServices";

// import { createTeamsProfile } from "../../Services/ProfileServices";

const CreateTeamProfile: React.FC<{
  onClose: () => void;
  setLoading: any;
  loading: boolean;
}> = ({ setLoading, onClose, loading }) => {
  const { showError, showSuccess } = useToastNotifications();
  const [data, setData] = useState({
    name: "",
    email: "",
  });
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  return (
    <div>
      <InputWithLabel
        label="Name*"
        type="text"
        onChange={(e) => setData({ ...data, name: e.target.value })}
        value={data?.name}
        inputClasses="w-[100%] h-[43px] outline-none pl-2 bg-[#F7F7F8] rounded-md "
        labelClasses="font-[400] text-[14px] w-[100%] "
      />
      <InputWithLabel
        label="Email*"
        type="text"
        onChange={(e) => setData({ ...data, email: e.target.value })}
        value={data?.email}
        inputClasses="w-[100%] h-[43px] outline-none pl-2 bg-[#F7F7F8] rounded-md "
        labelClasses="font-[400] text-[14px] w-[100%] mt-5"
      />
      <div className="w-[100%] flex justify-center gap-4 items-center mt-4">
        <Button
          text="Cancel"
          onClick={onClose}
          btnClasses={`h-[40px] w-[120px] border rounded-md `}
        />
        <Button
          text="Create"
          onClick={() => {
            loading
              ? () => {}
              : createTeamsProfile(
                  { ...data, id: companyId },
                  showError,
                  showSuccess,
                  setLoading
                ),
              onClose();
          }}
          btnClasses={`h-[40px] w-[120px] border rounded-md bg-[#2B6EF6] text-white ${
            loading ? "opacity-[50%]" : "opacity-[100%]"
          }`}
        />
      </div>
    </div>
  );
};

export default CreateTeamProfile;
