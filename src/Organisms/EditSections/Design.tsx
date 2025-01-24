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
import Image from "../../Atoms/Image";
import lockedIcon from "../../assets/images/locked.png";
import unlockedIcon from "../../assets/images/unlocked.png";
import { useDispatch } from "react-redux";
import {
  setGeneralStyleLock,
  sethighlightBoxStyleLock,
  setLayoutStyleLock,
  setsaveContactStyleLock,
  setWebLinkStyleLock,
} from "../../Redux/TemplateLockedSlice";

const Design = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const templateLockedData: any = useAppSelector(
    (state) => state.templateLockedHandeler
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);

  console.log(loading);

  console.log(templateLockedData, "here is locked way");

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
  const isTemplate = profileData?.profileType === "circoTemplate";

  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <div className="flex items-center gap-3">
        <Text text="General" classes="font-[600] text-[15px]" />
        {isTemplate && (
          <div
            onClick={() =>
              dispatch(
                setGeneralStyleLock(!templateLockedData?.generalStyleLock)
              )
            }
          >
            <Image
              classes="h-[17px] w-[17px] cursor-pointer"
              src={
                templateLockedData?.generalStyleLock ? lockedIcon : unlockedIcon
              }
            />
          </div>
        )}
      </div>

      <div
        style={{
          pointerEvents:
            profileData?.profileType != "circoTemplate" &&
            templateLockedData?.generalStyleLock
              ? "none"
              : undefined,
        }}
      >
        <GeneralDesign />
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Text text="Layout Style" classes="font-[600] text-[15px] " />
        {isTemplate && (
          <div
            onClick={() =>
              dispatch(setLayoutStyleLock(!templateLockedData?.layoutStyleLock))
            }
          >
            <Image
              classes="h-[17px] w-[17px] cursor-pointer"
              src={
                templateLockedData?.layoutStyleLock ? lockedIcon : unlockedIcon
              }
            />
          </div>
        )}
      </div>

      <div
        style={{
          pointerEvents:
            profileData?.profileType != "circoTemplate" &&
            templateLockedData?.layoutStyleLock
              ? "none"
              : undefined,
        }}
      >
        <LayoutDesign />
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Text text="Save Contact Style" classes="font-[600] text-[15px] " />
        {isTemplate && (
          <div
            onClick={() =>
              dispatch(
                setsaveContactStyleLock(
                  !templateLockedData?.saveContactStyleLock
                )
              )
            }
          >
            <Image
              classes="h-[17px] w-[17px] cursor-pointer"
              src={
                templateLockedData?.saveContactStyleLock
                  ? lockedIcon
                  : unlockedIcon
              }
            />
          </div>
        )}
      </div>
      <div
        style={{
          pointerEvents:
            profileData?.profileType != "circoTemplate" &&
            templateLockedData?.saveContactStyleLock
              ? "none"
              : undefined,
        }}
      >
        <SaveContactDesign />
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Text text="Web Link Button Style" classes="font-[600] text-[15px] " />
        {isTemplate && (
          <div
            onClick={() =>
              dispatch(
                setWebLinkStyleLock(!templateLockedData?.webLinkStyleLock)
              )
            }
          >
            <Image
              classes="h-[17px] w-[17px] cursor-pointer"
              src={
                templateLockedData?.webLinkStyleLock ? lockedIcon : unlockedIcon
              }
            />
          </div>
        )}
      </div>
      <div
        style={{
          pointerEvents:
            profileData?.profileType != "circoTemplate" &&
            templateLockedData?.webLinkStyleLock
              ? "none"
              : undefined,
        }}
      >
        <WebLinkDesign />
      </div>
      <div className="flex items-center gap-3 mt-6">
        <Text text="Highlight Box Style" classes="font-[600] text-[15px] " />
        {isTemplate && (
          <div
            onClick={() =>
              dispatch(
                sethighlightBoxStyleLock(
                  !templateLockedData?.highlightBoxStyleLock
                )
              )
            }
          >
            <Image
              classes="h-[17px] w-[17px] cursor-pointer"
              src={
                templateLockedData?.highlightBoxStyleLock
                  ? lockedIcon
                  : unlockedIcon
              }
            />
          </div>
        )}
      </div>

      <div
        style={{
          pointerEvents:
            profileData?.profileType != "circoTemplate" &&
            templateLockedData?.highlightBoxStyleLock
              ? "none"
              : undefined,
        }}
      >
        <HighlightedLinkDesign />
      </div>
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
                  {
                    generalStyleLock:
                      templateLockedData?.generalStyleLock || false,
                    layoutStyleLock:
                      templateLockedData?.layoutStyleLock || false,
                    saveContactStyleLock:
                      templateLockedData?.saveContactStyleLock || false,
                    webLinkStyleLock:
                      templateLockedData?.webLinkStyleLock || false,
                    highlightBoxStyleLock:
                      templateLockedData?.highlightBoxStyleLock || false,
                  },

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
