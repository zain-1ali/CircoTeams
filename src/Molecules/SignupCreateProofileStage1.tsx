// import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "./CustomButton";
import {
  setProfileCreationStage,
  setStartProfileCreation,
} from "../Redux/SignupSlice";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import { setAddress, setCompany, setJobTitle } from "../Redux/ProfileSlice";

const SignupCreateProofileStage1 = () => {
  const address = useAppSelector((state) => state.profileHandler.address);

  const company = useAppSelector((state) => state.profileHandler.company);

  const jobTitle = useAppSelector((state) => state.profileHandler.jobTitle);

  const dispatch = useAppDispatch();

  return (
    <div className="w-[100%] mt-6">
      <div className="w-[100%]">
        <MdKeyboardBackspace
          className="text-[#030229] text-3xl cursor-pointer"
          onClick={() => {
            dispatch(setStartProfileCreation(false));
          }}
        />
      </div>
      <InputWithLabel
        type="text"
        label="Company"
        onChange={(e) => dispatch(setCompany(e.target.value))}
        value={company}
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      />
      <InputWithLabel
        type="text"
        label="Job Title"
        onChange={(e) => dispatch(setJobTitle(e.target.value))}
        value={jobTitle}
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      />
      <InputWithLabel
        type="text"
        label="Location"
        onChange={(e) => dispatch(setAddress(e.target.value))}
        value={address}
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      />
      <CustomButton
        text="Continue"
        onClick={() => {
          dispatch(setProfileCreationStage(1));
        }}
        btnClasses="bg-[#2B6EF6] text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-6"
      />
    </div>
  );
};

export default SignupCreateProofileStage1;
