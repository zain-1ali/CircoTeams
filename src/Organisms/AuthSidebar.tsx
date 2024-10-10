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
import { LoginUser } from "../Services/userService.js";
import useToastNotifications from "../Hooks/useToastNotification.js";
import { CircularProgress } from "@mui/material";

const AuthSidebar: React.FC<authSidebarProps> = ({ isSignin }) => {
  const innerHeight: number = window.innerHeight;
  const navigate = useNavigate();
  interface Passwords {
    password: string;
    confirmPassword: string;
  }
  const [passwords, setPassword] = useState<Passwords>({
    password: "",
    confirmPassword: "",
  });

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

  const permitToGoForward = () => {
    if (isSignin) {
      if (email && passwords?.password) {
        return true;
      } else {
        return false;
      }
    } else {
      if (
        email &&
        passwords?.password &&
        passwords?.confirmPassword &&
        firstName
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
          text={isSignin ? "Log in" : "Sign up"}
          classes={`${
            isSignin ? "text-[25px]" : "text-[22px]"
          } font-[600] mt-3`}
        />

        {!isSignupCreateProfile ? (
          <>
            <div className="w-[100%] flex justify-between mt-6">
              <SocialSignupButton
                isGoogle={true}
                btnClasses="w-[47%] rounded-md outline-none border-none h-[50px] bg-[#F7F7F8] flex justify-center items-center gap-2 text-[16px] font-[400]"
                func={() => {}}
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
                    onChange={(e) => dispatch(setFirstName(e.target.value))}
                    value={firstName}
                    inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
                    labelClasses="font-[400] text-[15px] w-[100%] mt-2"
                  />
                </div>
                <div className="w-[47%]">
                  <InputWithLabel
                    type="text"
                    label="Last Name"
                    onChange={(e) => dispatch(setLastName(e.target.value))}
                    value={lastName}
                    inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
                    labelClasses="font-[400] text-[15px] w-[100%] mt-2"
                  />
                </div>
              </div>
            )}
            <InputWithLabel
              type="text"
              label="Email Address"
              onChange={(e) => dispatch(setEmail(e.target.value))}
              value={email}
              inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
              labelClasses="font-[400] text-[15px] w-[100%] mt-2"
            />
            <InputWithLabel
              type="password"
              label="Password"
              onChange={(e) => {
                setPassword({
                  ...passwords,
                  password: e.target.value,
                });
              }}
              value={passwords?.password}
              inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
              labelClasses="font-[400] text-[15px] w-[100%] mt-3"
            />

            {!isSignin && (
              <InputWithLabel
                type="password"
                label="Confirm Password"
                onChange={(e) => {
                  setPassword({
                    ...passwords,
                    confirmPassword: e.target.value,
                  });
                }}
                value={passwords?.confirmPassword}
                inputClasses="w-[100%] h-[46px] outline-none pl-2 bg-[#F7F7F8] rounded-md mt-1"
                labelClasses="font-[400] text-[15px] w-[100%] mt-3"
              />
            )}
            <div className="w-[100%] flex justify-between mt-2 items-center">
              <CheckboxWithText
                text={
                  isSignin
                    ? "Remember me"
                    : "By creating an account you agree to the terms of use and our privacy policy."
                }
                state={false}
                func={() => {}}
                isSignin={isSignin}
              />
              {isSignin && (
                <Button
                  onClick={() => {}}
                  text="Reset Password?"
                  btnClasses="outline-none bg-none border-none text-[#2B6EF6] text-[14px] font-[400]"
                />
              )}
            </div>

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
                        : dispatch(setStartProfileCreation(true));
                    }
                  : () => {}
              }
              icon={
                loading && (
                  <CircularProgress sx={{ color: "#ffffff" }} size={30} />
                )
              }
              btnClasses={`bg-primary text-[white] w-[100%] h-[50px] text-[600] text-[16px] rounded-md mt-4 ${
                permitToGoForward() === false && "opacity-[50%]"
              }`}
            />

            <div
              className={`w-[100%] flex justify-center items-center gap-1 ${
                innerHeight <= 700 ? "mt-2" : "mt-3"
              }`}
            >
              <Text
                text={
                  isSignin
                    ? "Don't have account yet?"
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
