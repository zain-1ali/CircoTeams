// import React from "react";
import { MdKeyboardBackspace } from "react-icons/md";
// import InputWithLabel from "./InputWithLabel";
import CustomButton from "./CustomButton";
import { setProfileCreationStage } from "../Redux/SignupSlice";
import { useAppDispatch } from "../Hooks/reduxHooks";
import upldPrfl from "../assets/images/upldPrfl.png";
import upldLogo from "../assets/images/upldLogo.png";
import upldCover from "../assets/images/upldCover.png";
import ImageSelecter from "./ImageSelecter";

const SignupCreateProfileStage3 = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="w-[100%] mt-2">
      <div className="w-[100%]">
        <MdKeyboardBackspace
          className="text-[#030229] text-3xl cursor-pointer"
          onClick={() => {
            dispatch(setProfileCreationStage(1));
          }}
        />
      </div>
      <ImageSelecter
        text="Profile Image"
        textClasses="font-[400] text-[16px]"
        image={upldPrfl}
        imgClasses="h-[112px] w-[112px] object-cover mt-3"
        containerClasse="mt-4"
      />
      <ImageSelecter
        text="Cover Image"
        textClasses="font-[400] text-[16px]"
        image={upldCover}
        imgClasses="h-[128px] w-[246px] object-cover mt-3"
        containerClasse="mt-4"
      />
      <ImageSelecter
        text="Logo"
        textClasses="font-[400] text-[16px]"
        image={upldLogo}
        imgClasses="h-[112px] w-[112px] object-cover mt-3"
        containerClasse="mt-4"
      />

      <CustomButton
        text="Continue"
        onClick={() => {
          // isSignin
          //   ?
          console.log("testing");
          //   :
          //    dispatch(setStartProfileCreation(true));
        }}
        btnClasses="bg-[#2B6EF6] text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-6"
      />
    </div>
  );
};

export default SignupCreateProfileStage3;
