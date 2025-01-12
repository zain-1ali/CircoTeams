// import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
import InputWithLabel from "./InputWithLabel";
import CustomButton from "./CustomButton";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import { setProfileCreationStage } from "../Redux/SignupSlice";
import InternationalPhone from "./InternationalPhone";
import { setSocialCall, setSocialEmail } from "../Redux/AuthAddLinkSlice";
import Button from "../Atoms/Button";

const SignupCreateProfileStage2 = () => {
  const dispatch = useAppDispatch();
  const authLinks = useAppSelector((state) => state.authLinkHandler.links);
  const handleChangePhone = (value: string) => {
    dispatch(setSocialCall(value));
  };
  return (
    <div className="w-[100%] mt-6">
      <div className="w-[100%]">
        <MdKeyboardBackspace
          className="text-[#030229] text-3xl cursor-pointer"
          onClick={() => {
            dispatch(setProfileCreationStage(0));
          }}
        />
      </div>
      <InputWithLabel
        type="text"
        label="Email"
        onChange={(e) => dispatch(setSocialEmail(e.target.value))}
        value={authLinks[1].value}
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      />
      {/* <InputWithLabel
        type="text"
        label="Phone"
        onChange={() => {}}
        value=""
        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        labelClasses="font-[400] text-[15px] w-[100%] mt-4"
      /> */}
      <InternationalPhone
        value={authLinks[0].value}
        onChange={handleChangePhone}
      />

      <CustomButton
        text="Continue"
        onClick={() => {
          dispatch(setProfileCreationStage(2));
        }}
        btnClasses="bg-[#2B6EF6] text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-6"
      />
      <div className="w-[100%] flex justify-center mt-[30px]">
        <Button
          btnClasses="font-[700] text-primary outline-none background-none"
          text="Skip"
          onClick={() => {
            dispatch(setProfileCreationStage(2));
          }}
        />
      </div>
    </div>
  );
};

export default SignupCreateProfileStage2;
