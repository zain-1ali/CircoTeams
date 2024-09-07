// import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "./CustomButton";
import {
  setProfileCreationStage,
  setStartProfileCreation,
} from "../Redux/SignupSlice";
import { useAppDispatch } from "../Hooks/reduxHooks";

const SignupCreateProofileStage1 = () => {
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
        onChange={() => {}}
        value=""
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      />
      <InputWithLabel
        type="text"
        label="Job Title"
        onChange={() => {}}
        value=""
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      />
      <InputWithLabel
        type="text"
        label="Location"
        onChange={() => {}}
        value=""
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
