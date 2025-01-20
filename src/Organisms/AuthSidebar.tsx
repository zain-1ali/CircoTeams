import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import CustomButton from "../Molecules/CustomButton";
import InputWithLabel from "../Molecules/InputWithLabel";
import Logo from "../Molecules/Logo";
import SocialSignupButton from "../Molecules/SocialSignupButton";
import { authSidebarProps } from "../Types";
import CheckboxWithText from "../Molecules/CheckboxWithText";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import SignupCreateProofileStage1 from "../Molecules/SignupCreateProofileStage1";
import { setStartProfileCreation } from "../Redux/SignupSlice";
import SignupCreateProfileStage2 from "../Molecules/SignupCreateProfileStage2";
import SignupCreateProfileStage3 from "../Molecules/SignupCreateProfileStage3";
import { useState } from "react";
import { setEmail, setFirstName, setLastName } from "../Redux/ProfileSlice";
import {
  handleSignUpGoogle,
  LoginUser,
  SendResetLink,
} from "../Services/userService.js";
import useToastNotifications from "../Hooks/useToastNotification.js";
import { CircularProgress } from "@mui/material";
import { IoEyeSharp } from "react-icons/io5";
import { AiFillEyeInvisible } from "react-icons/ai";

const AuthSidebar: React.FC<authSidebarProps> = ({ isSignin, isReset }) => {
  const innerHeight: number = window.innerHeight;
  const navigate = useNavigate();
  const profileData = useAppSelector((state) => state.profileHandler);
  interface Passwords {
    password: string;
    confirmPassword: string;
  }
  const [passwords, setPassword] = useState<Passwords>({
    password: "",
    confirmPassword: "",
  });

  const [isBoxChecked, setIsBoxChecked] = useState<boolean>(false);

  // pre-typed redux hooks
  const isSignupCreateProfile = useAppSelector(
    (state) => state.CreateProfileHandeler.isSignupCreateProfile
  );
  const signupCreateProfileStage = useAppSelector(
    (state) => state.CreateProfileHandeler.signupCreateProfileStage
  );

  const email = useAppSelector((state) => state.profileHandler.email);

  const firstName = useAppSelector((state) => state.profileHandler.firstName);

  const lastName = useAppSelector((state) => state.profileHandler.lastName);
  const { showSuccess, showError } = useToastNotifications();

  const [loading, setLoading] = useState<boolean>(false);
  const [gloading, setGLoading] = useState<boolean>(false);
  console.log(gloading);

  let [showPass, setShowPass] = useState(false);
  let [showPass2, setShowPass2] = useState(false);
  const permitToGoForward = () => {
    if (isSignin) {
      if (email && passwords?.password) {
        return true;
      } else {
        return false;
      }
    } else if (isReset) {
      if (email) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        email &&
        passwords?.password &&
        passwords?.confirmPassword &&
        firstName &&
        isBoxChecked
      ) {
        return true;
      } else {
        return false;
      }
    }
  };

  const dispatch = useAppDispatch();

  return (
    <div className="h-[100%] w-[27%] bg-white rounded-r-[40px] flex justify-center items-center overflow-y-scroll">
      <div
        className={`w-[85%] flex flex-col items-center ${
          signupCreateProfileStage === 2 && "h-[96%] overflow-y-scroll"
        }`}
      >
        <div>
          <Logo
            Imgclasses={`${
              isSignin ? " h-[45px] w-[45px]" : " h-[45px] w-[45px]"
            }`}
            containerClasses={`border border-[#E3E3E3]  ${
              isSignin
                ? "h-[78px] w-[78px] rounded-[22px]"
                : `h-[78px] w-[78px] rounded-[22px] ${
                    innerHeight <= 700 && !isSignupCreateProfile && "mt-[140px]"
                  } `
            } flex justify-center items-center `}
          />
        </div>

        <Text
          text={isReset ? "Reset Password" : isSignin ? "Log in" : "Sign up"}
          classes={`${
            isSignin ? "text-[25px]" : "text-[22px]"
          } font-[600] mt-3`}
        />

        {!isSignupCreateProfile ? (
          <>
            {!isReset && (
              <>
                <div className="w-[100%] flex justify-between mt-6">
                  <SocialSignupButton
                    isGoogle={true}
                    btnClasses="w-[47%] rounded-md outline-none border-none h-[50px] bg-[#F7F7F8] flex justify-center items-center gap-2 text-[16px] font-[400]"
                    func={() =>
                      handleSignUpGoogle(
                        profileData,
                        showError,
                        showSuccess,
                        navigate,
                        setGLoading
                      )
                    }
                  />
                  <SocialSignupButton
                    isGoogle={false}
                    btnClasses="w-[47%] rounded-md outline-none border-none h-[50px] bg-[#F7F7F8] flex justify-center items-center gap-2  text-[16px] font-[400]"
                    func={() => {}}
                  />
                </div>

                <div className="w-[100%] flex justify-between items-center mt-4">
                  <div className="w-[45%] h-[2px] bg-[#F7F7F8]"></div>
                  <Text text={"Or"} classes="font-[600] text-[16px]" />
                  <div className="w-[45%] h-[2px] bg-[#F7F7F8]"></div>
                </div>
                {!isSignin && (
                  <div className="w-[100%] flex justify-between">
                    <div className="w-[47%]">
                      <InputWithLabel
                        type="text"
                        label="First Name"
                        placeholder="David"
                        onChange={(e) => dispatch(setFirstName(e.target.value))}
                        value={firstName}
                        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        labelClasses="font-[400] text-[15px] w-[100%] mt-2"
                      />
                    </div>
                    <div className="w-[47%]">
                      <InputWithLabel
                        type="text"
                        label="Last Name"
                        placeholder="Ryan"
                        onChange={(e) => dispatch(setLastName(e.target.value))}
                        value={lastName}
                        inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        labelClasses="font-[400] text-[15px] w-[100%] mt-2"
                      />
                    </div>
                  </div>
                )}
              </>
            )}
            {isReset && (
              <>
                {" "}
                <br />
                <br />{" "}
              </>
            )}
            <InputWithLabel
              type="text"
              label="Email Address"
              onChange={(e) => dispatch(setEmail(e.target.value))}
              placeholder="example@gmail.com"
              value={email}
              inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              labelClasses="font-[400] text-[15px] w-[100%] mt-2"
            />
            {!isReset && (
              <>
                <div className="w-[100%] relative">
                  <InputWithLabel
                    type={showPass ? "text" : "password"}
                    label="Password"
                    placeholder="******"
                    onChange={(e) => {
                      setPassword({
                        ...passwords,
                        password: e.target.value,
                      });
                    }}
                    value={passwords?.password}
                    inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    labelClasses="font-[400] text-[15px] w-[100%] mt-3"
                  />
                  {showPass ? (
                    <IoEyeSharp
                      className="absolute right-4 bottom-[12px] text-[20px] cursor-pointer text-[#7d7d91]"
                      onClick={() => setShowPass(false)}
                    />
                  ) : (
                    <AiFillEyeInvisible
                      className="absolute right-4 bottom-[12px] text-[20px] cursor-pointer text-[#7d7d91]"
                      onClick={() => setShowPass(true)}
                    />
                  )}
                </div>

                {!isSignin && (
                  <div className="w-[100%] relative">
                    <InputWithLabel
                      type={showPass2 ? "text" : "password"}
                      label="Confirm Password"
                      placeholder="******"
                      onChange={(e) => {
                        setPassword({
                          ...passwords,
                          confirmPassword: e.target.value,
                        });
                      }}
                      value={passwords?.confirmPassword}
                      inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      labelClasses="font-[400] text-[15px] w-[100%] mt-3"
                    />
                    {showPass2 ? (
                      <IoEyeSharp
                        className="absolute right-4 bottom-[12px] text-[20px] cursor-pointer text-[#7d7d91]"
                        onClick={() => setShowPass2(false)}
                      />
                    ) : (
                      <AiFillEyeInvisible
                        className="absolute right-4 bottom-[12px] text-[20px] cursor-pointer text-[#7d7d91]"
                        onClick={() => setShowPass2(true)}
                      />
                    )}
                  </div>
                )}
                <div className="w-[100%] flex justify-between mt-2 items-center">
                  <CheckboxWithText
                    text={
                      isSignin ? (
                        "Remember me"
                      ) : (
                        <>
                          By creating an account you agree to the{" "}
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            terms of use
                          </a>{" "}
                          and our{" "}
                          <a
                            href="#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 underline"
                          >
                            privacy policy
                          </a>
                          .
                        </>
                      )
                    }
                    state={isBoxChecked}
                    func={() => setIsBoxChecked(!isBoxChecked)}
                    isSignin={isSignin}
                  />

                  {isSignin && (
                    <Button
                      onClick={() => navigate("/reset-password")}
                      text="Reset Password?"
                      btnClasses="outline-none bg-none border-none text-[#2B6EF6] text-[14px] font-[400]"
                    />
                  )}
                </div>
              </>
            )}
            <CustomButton
              text={isSignin ? (loading ? "" : "Log in") : "Continue"}
              onClick={
                permitToGoForward() === true || !loading
                  ? () => {
                      isSignin
                        ? LoginUser(
                            { email, password: passwords?.password },
                            showError,
                            showSuccess,
                            navigate,
                            setLoading
                          )
                        : isReset
                        ? SendResetLink(email, showError, showSuccess, () =>
                            dispatch(setEmail(""))
                          )
                        : dispatch(setStartProfileCreation(true));
                    }
                  : () => {}
              }
              icon={
                loading && (
                  <CircularProgress sx={{ color: "#ffffff" }} size={30} />
                )
              }
              btnClasses={`bg-primary text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-6 ${
                permitToGoForward() === false &&
                "opacity-[50%] pointer-events-none"
              }`}
            />

            <div
              className={`w-[100%] flex justify-center items-center gap-1 mb-5 ${
                innerHeight <= 700 ? "mt-2" : "mt-3"
              }`}
            >
              <Text
                text={
                  isSignin
                    ? "Don't have account yet?"
                    : isReset
                    ? "Go back to"
                    : "Already have an account?"
                }
                classes="font-[400] text-[16px]"
              />
              <Button
                onClick={() => navigate(isSignin ? "/register" : "/")}
                text={isSignin ? "New Account" : " Log in"}
                btnClasses="font-[400] text-[16px] text-[#2B6EF6]"
              />
            </div>
          </>
        ) : (
          <>
            {signupCreateProfileStage === 0 ? (
              <SignupCreateProofileStage1 />
            ) : signupCreateProfileStage === 1 ? (
              <SignupCreateProfileStage2 />
            ) : (
              <SignupCreateProfileStage3 passwords={passwords} />
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AuthSidebar;
