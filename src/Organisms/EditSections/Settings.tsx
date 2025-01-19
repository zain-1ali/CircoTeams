import { useParams } from "react-router-dom";
import Text from "../../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import TextButton from "../../Molecules/TextButton";
import ToggleArea from "../../Molecules/ToggleArea";
import {
  setDirect,
  setProfileDesign,
  toggleDirectMode,
  toggleLeadMode,
} from "../../Redux/ProfileSlice";
import {
  toggleLogo,
  updateDirectMode,
  updateLeadCapture,
  // updateProfileDesign,
  // updateProfileInfo,
  updateTextWhiteStatus,
  updateUserName,
} from "../../Services/ProfileServices";
import { useState } from "react";
import useToastNotifications from "../../Hooks/useToastNotification";

const Settings = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);

  const { showSuccess, showError } = useToastNotifications();
  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <div className="flex items-center gap-[5px]">
        <Text
          text="www.circo.me/"
          classes="font-[600] text-[13px] text-[#818194]"
        />
        <TextButton
          text=""
          btnText="Save"
          width="w-[238px]"
          onClick={
            () =>
              updateUserName(
                profileData?.username,
                id,
                showError,
                showSuccess,
                setLoading
              )
            // updateProfileInfo(
            //   {
            //     leadMode: profileData.leadMode,
            //     directMode: profileData?.directMode,
            //   },
            //   id,
            //   showError,
            //   () =>
            //     updateProfileDesign(
            //       {
            //         hideCompanyLogo: profileData.profileDesign.hideCompanyLogo,
            //         whiteTextAndBorder:
            //           profileData.profileDesign.whiteTextAndBorder,
            //       },
            //       id,
            //       showError,
            //       showSuccess,
            //       setLoading
            //     ),
            //   setLoading
            // )
          }
        />
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <ToggleArea
          text="Lead Capture Mode"
          width="w-[340px]"
          toggleValue={profileData?.leadMode}
          toggleChange={() =>
            updateLeadCapture(
              profileData.leadMode,
              profileData.directMode,
              id,
              (mode: boolean) => dispatch(toggleLeadMode(mode)),
              (mode: boolean) => dispatch(toggleDirectMode(mode))
            )
          }
        />
        <ToggleArea
          text="One Link Mode"
          width="w-[340px]"
          toggleValue={profileData?.directMode}
          toggleChange={() =>
            updateDirectMode(
              profileData?.directMode,
              id,
              (mode: boolean) => dispatch(toggleDirectMode(mode)),
              (mode: any) => dispatch(setDirect(mode)),
              (mode: boolean) => dispatch(toggleLeadMode(mode)),
              profileData?.links?.[0],
              profileData?.links?.length,
              profileData.leadMode
            )
          }
        />
        <ToggleArea
          text="Hide Your Company Logo"
          width="w-[340px]"
          toggleValue={profileData?.profileDesign.hideCompanyLogo}
          toggleChange={() =>
            toggleLogo(
              id,
              profileData?.profileDesign.hideCompanyLogo,
              (data: boolean) =>
                dispatch(
                  setProfileDesign({
                    hideCompanyLogo: data,
                  })
                )
            )
          }
        />
        <ToggleArea
          text="Whiten Profile Text"
          width="w-[340px]"
          toggleValue={profileData.profileDesign.whiteTextAndBorder}
          toggleChange={() =>
            updateTextWhiteStatus(
              id,
              profileData.profileDesign.whiteTextAndBorder,
              (data: boolean) =>
                dispatch(
                  setProfileDesign({
                    whiteTextAndBorder: data,
                  })
                )
            )
          }
        />
      </div>
    </div>
  );
};

export default Settings;
