import { useParams } from "react-router-dom";
import Button from "../../Atoms/Button";
import Text from "../../Atoms/Text";
import { useAppSelector } from "../../Hooks/reduxHooks";
import { updateProfileDesign } from "../../Services/ProfileServices";
import GeneralDesign from "../GeneralDesign";
import HighlightedLinkDesign from "../HighlightedLinkDesign";
import LayoutDesign from "../LayoutDesign";
import SaveContactDesign from "../SaveContactDesign";
import WebLinkDesign from "../WeblinkDesign";
import useToastNotifications from "../../Hooks/useToastNotification";
import { useState } from "react";
import { updateTemplateDesign } from "../../Services/TemplatesServices";

const Design = () => {
  const profileData = useAppSelector((state) => state.profileHandler);

  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  // const handleCropComplete = (croppedImage: string) => {
  //   const uniqueTime = Date.now();
  //   setUploadLoading(true);
  //   if (imageType === "Profile Image") {
  //     uploadFile(croppedImage?.slice(23), `profileUrl${uniqueTime}`).then(
  //       (url) => {
  //         dispatch(setProfileUrl(url));
  //         setUploadLoading(false);
  //         setOpen(false);
  //       }
  //     );
  //   } else if (imageType === "Logo") {
  //     uploadFile(croppedImage?.slice(23), `logoUrl${uniqueTime}`).then(
  //       (url) => {
  //         dispatch(setlogoUrl(url));
  //         setUploadLoading(false);
  //         setOpen(false);
  //       }
  //     );
  //   } else if (imageType === "Cover Image") {
  //     uploadFile(croppedImage?.slice(23), `coverUrl${uniqueTime}`).then(
  //       (url) => {
  //         dispatch(setCoverUrl(url));
  //         setUploadLoading(false);
  //         setOpen(false);
  //       }
  //     );
  //   }
  // };
  const { showSuccess, showError } = useToastNotifications();

  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text text="General" classes="font-[600] text-[15px]" />
      <GeneralDesign />
      <Text text="Layout Style" classes="font-[600] text-[15px] mt-6" />
      <LayoutDesign />
      <Text text="Save Contact Style" classes="font-[600] text-[15px] mt-6" />
      <SaveContactDesign />
      <Text
        text="Web Link Button Style"
        classes="font-[600] text-[15px] mt-6"
      />
      <WebLinkDesign />
      <Text text="Highlight Box Style" classes="font-[600] text-[15px] mt-6" />
      <HighlightedLinkDesign />

      <div className="w-[100%] flex justify-end mt-5 gap-4">
        <Button
          text="Cancel"
          btnClasses="text-[12px] font-[600] text-[#646464] w-[63px] h-[37px] rounded-[88px] bg-[#F0F0F0]"
          onClick={() => {}}
        />
        <Button
          text="Save"
          btnClasses="text-[12px] font-[600] text-white w-[138px] h-[37px] rounded-[88px] bg-[#2B6EF6]"
          onClick={() => {
            profileData?.profileType === "circoTemplate"
              ? updateTemplateDesign(
                  profileData?.profileDesign,
                  profileData?.id,
                  showError,
                  showSuccess,
                  setLoading
                )
              : updateProfileDesign(
                  profileData?.profileDesign,
                  id,
                  showError,
                  showSuccess,
                  setLoading
                );
          }}
        />
      </div>
    </div>
  );
};

export default Design;
