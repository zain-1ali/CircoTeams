import { FormControlLabel, Radio, RadioGroup } from "@mui/material";
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
// import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import { setAssignedTo } from "../../Redux/TemplateInvidualLinkSlice";

const TemplateMembers: React.FC<{
  members: any[];
  onClose: () => void;
  setSelectedProfileName?: any;
  changeModeToAddLink: any;
}> = ({ members, onClose, setSelectedProfileName, changeModeToAddLink }) => {
  const assignedTo = useAppSelector(
    (state) => state.TemplateInvidualLinkHandeler.assignedTo
  );

  const handleSubmit = () => {
    if (assignedTo) {
      changeModeToAddLink(null);
    }
  };
  const dispatch = useAppDispatch();

  //  setAssignedTo

  return (
    <>
      <div className="h-[270px] w-[270px] p-3 rounded-[18px] overflow-hidden">
        <Text classes="text-[14px] font-[700]" text="Assign to:" />
        <div className="w-[100%] h-[160px] overflow-y-scroll">
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            name="radio-buttons-group"
            onChange={(e) => {
              dispatch(setAssignedTo(e.target.value)),
                setSelectedProfileName(e.target.value);
            }}
            value={assignedTo}
          >
            {members?.map((member, i) => {
              return (
                <FormControlLabel
                  key={i}
                  value={member?.id}
                  control={<Radio />}
                  label={member?.firstName + " " + member?.lastName}
                />
              );
            })}
          </RadioGroup>
        </div>

        <div className="w-[100%] flex flex-col justify-center items-center mt-3">
          <Button
            text="Select"
            btnClasses={` ${
              assignedTo ? "opacity-100" : "opacity-50"
            } bg-primary rounded-full w-[95%] h-[35px] text-white font-[700] text-[13px]`}
            onClick={() => handleSubmit()}
          />
          <Button
            text="Cancel"
            btnClasses="w-[95%] h-[30px] text-[#808080] font-[500] text-[12px]"
            onClick={() => onClose()}
          />
        </div>
      </div>
    </>
  );
};

export default TemplateMembers;
