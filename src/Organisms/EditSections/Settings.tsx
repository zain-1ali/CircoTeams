import { useParams } from "react-router-dom";
import Text from "../../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import TextButton from "../../Molecules/TextButton";
import ToggleArea from "../../Molecules/ToggleArea";
import {
  setProfileDesign,
  toggleDirectMode,
  toggleLeadMode,
} from "../../Redux/ProfileSlice";
import {
  updateProfileDesign,
  updateProfileInfo,
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
          text="kevinjin"
          btnText="Save"
          width="w-[238px]"
          onClick={() =>
            updateProfileInfo(
              {
                leadMode: profileData.leadMode,
                directMode: profileData?.directMode,
              },
              id,
              showError,
              () =>
                updateProfileDesign(
                  {
                    hideCompanyLogo: profileData.profileDesign.hideCompanyLogo,
                    whiteTextAndBorder:
                      profileData.profileDesign.whiteTextAndBorder,
                  },
                  id,
                  showError,
                  showSuccess,
                  setLoading
                ),
              setLoading
            )
          }
        />
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <ToggleArea
          text="Lead Capture Mode"
          width="w-[340px]"
          toggleValue={profileData?.leadMode}
          toggleChange={() => dispatch(toggleLeadMode())}
        />
        <ToggleArea
          text="One Link Mode"
          width="w-[340px]"
          toggleValue={profileData?.directMode}
          toggleChange={() => dispatch(toggleDirectMode())}
        />
        <ToggleArea
          text="Hide Your Company Logo"
          width="w-[340px]"
          toggleValue={profileData?.profileDesign.hideCompanyLogo}
          toggleChange={() =>
            dispatch(
              setProfileDesign({
                hideCompanyLogo: !profileData.profileDesign.hideCompanyLogo,
              })
            )
          }
        />
        <ToggleArea
          text="Whiten Profile Text"
          width="w-[340px]"
          toggleValue={profileData.profileDesign.whiteTextAndBorder}
          toggleChange={() =>
            dispatch(
              setProfileDesign({
                whiteTextAndBorder:
                  !profileData.profileDesign.whiteTextAndBorder,
              })
            )
          }
        />
      </div>
    </div>
  );
};

export default Settings;
