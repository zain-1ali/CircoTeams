// import { BiArrowBack } from "react-icons/bi";
// import { returnPngIcons } from "../../../assets/ReturnSocialIconsPng";
// import UploadIcon from "../../../Molecules/UploadIcon";
import CardPreview from "../../CardPreview";
import { webLinksProps } from "../../../Types";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import InputWithLabel from "../../../Molecules/InputWithLabel";
import Text from "../../../Atoms/Text";
// import IOSSwitch from "../../../Atoms/CustomToggleBtn";
import Button from "../../../Atoms/Button";
import { useEffect, useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import web from "../../../assets/socialLink/web.png";
import weblinkgraphic from "../../../assets/images/weblinkgraphic2.jpeg";
import weblinkgrafic from "../../../assets/images/weblinkgraphic.png";
import CustomModal from "../Modal";
import AreYouSure from "../AreYouSure";
import gi1 from "../../../assets/images/gi1.png";
import gi2 from "../../../assets/images/gi2.png";
import gi3 from "../../../assets/images/gi3.png";
import gi4 from "../../../assets/images/gi4.png";
import gi5 from "../../../assets/images/gi5.png";
import gi6 from "../../../assets/images/gi6.png";

import {
  setGraphicDisplayText,
  setSocialLinkBaseurl,
  setSocialLinkHighlightedDesc,
  setSocialLinkImgUrl,
  setSocialLinkIsHighlighted,
  setSocialLinklinkID,
  setSocialLinkName,
  setSocialLinkTitle,
  setSocialLinkUrl,
  setWebLinkStyle,
} from "../../../Redux/socialLinkSlice";
// import { motion } from "framer-motion";
import {
  addLinkToDb,
  updateLink,
  deleteLinkFromDb,
  updateTemplateLink,
} from "../../../Services/ProfileServices";
import { useParams } from "react-router-dom";
import useToastNotifications from "../../../Hooks/useToastNotification";
// import { useUploadFile } from "../../../Hooks/useUploadFile";
// import ImageCropperModal from "../../Cropper";
import Image from "../../../Atoms/Image";
import Icon from "../../WebLinkMode/Icon";
import ImageMode from "../../WebLinkMode/Image";
import ButtonMode from "../../WebLinkMode/Button";
import { addLinkToTemplate } from "../../../Services/TemplatesServices";
import { validateLink } from "../../../assets/ReturnSocialIconsPng";
import { setLinks } from "../../../Redux/ProfileSlice";

const AddWeblink: React.FC<webLinksProps> = ({
  changeLinkMode,
  linkEdit = false,
  id
}) => {
  const dispatch = useAppDispatch();
  // const linkInfo = useAppSelector((state) => state.singleLinkHandeler.linkInfo);
  const socialLink = useAppSelector((state) => state.socialLinkHandler.link);
  const profileData = useAppSelector((state) => state.profileHandler);
  // const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);
  const [sureModal, setSureModal] = useState<boolean>(false);
  console.log(socialLink);

  const handleCancelbtn = () => {
    changeLinkMode("allLinks");
    dispatch(setSocialLinkUrl(""));
    dispatch(setSocialLinkTitle(""));
    dispatch(setSocialLinkIsHighlighted(false));
    dispatch(setSocialLinkName(""));
    dispatch(setSocialLinkBaseurl(""));
    dispatch(setSocialLinklinkID(999));
    dispatch(setSocialLinkHighlightedDesc(""));
    dispatch(setSocialLinkImgUrl(""));
  };

  const handleLoading = (value: boolean) => {
    setLoading(value);
    changeLinkMode("allLinks");
    dispatch(setSocialLinkUrl(""));
    dispatch(setSocialLinkTitle(""));
    dispatch(setSocialLinkIsHighlighted(false));
    dispatch(setSocialLinkName(""));
    dispatch(setSocialLinkBaseurl(""));
    dispatch(setSocialLinklinkID(999));
    dispatch(setSocialLinkHighlightedDesc(""));
  };

  const { showError, showSuccess } = useToastNotifications();

  const handleWebLinkMode = (mode: "style1" | "style2" | "style3") => {
    if (mode != "style1") {
      dispatch(setSocialLinkIsHighlighted(false));
    }
    dispatch(setWebLinkStyle(mode));
  };

  useEffect(() => {
    if (!linkEdit) {
      handleWebLinkMode("style1");
    }
  }, []);

  const ifAddeed = profileData.links?.some((elm) => socialLink?.id === elm?.id);

  const handleAddLinkToDb = () => {
    console.log(socialLink?.url);
    if (!validateLink(socialLink?.linkID, socialLink?.url)) {
      showError("!Invalid Link");
      return;
    }
    if (ifAddeed) {
      updateLink(
        socialLink,
        id,
        profileData.links,
        showError,
        showSuccess,
        handleLoading
      );
    } else {
      addLinkToDb(
        socialLink,
        id,
        profileData.links,
        showError,
        showSuccess,
        handleLoading,
        (oldLinks: any, newLink: any) => {
          dispatch(setLinks([...oldLinks, newLink]));
        }
      );
    }
  };

  const handleAddLinkToTemplate = () => {
    if (!validateLink(socialLink?.linkID, socialLink?.url)) {
      showError("!Invalid Link");
      return;
    }
    if (socialLink?.placeholder) {
      updateTemplateLink(
        { ...socialLink },
        id,
        profileData?.links,
        showError,
        showSuccess,
        handleLoading
      );
    } else {
      addLinkToTemplate(
        { ...socialLink },
        profileData?.id,
        profileData?.links,
        showError,
        showSuccess,
        handleLoading,
        (oldLinks: any, newLink: any) => {
          dispatch(setLinks([...oldLinks, newLink]));
        }
      );
    }
  };

  const handleDeleteLink = (linkID: any) => {
    console.log(linkID);
    deleteLinkFromDb(
      linkID,
      id,
      profileData?.links,
      showError,
      showSuccess,
      handleLoading,
      (remainingLink: any) => {
        dispatch(setLinks(remainingLink));
      }
    );
  };

  const returnIconStyle = (style: string) => {
    if (style === "style1") {
      return gi1;
    } else if (style === "style2") {
      return gi2;
    } else if (style === "style3") {
      return gi3;
    } else if (style === "style4") {
      return gi4;
    } else if (style === "style5") {
      return gi5;
    } else if (style === "style6") {
      return gi6;
    }
  };
  return (
    <div className="w-[100%] h-[100%] flex">
      <div className="h-[100%] w-[65%] border-r">
        <div className="flex items-center justify-between w-[95%] mt-8">
          <Text classes="font-[600] text-[22px]" text="Web Link" />

          <div className="flex gap-4 ">
            {linkEdit && (
              <Button
                btnClasses={`w-[87px] h-[33px] border border-[#E2E2E2] rounded-[66px] text-[12px] font-[600] text-[#BBBBBB]`}
                onClick={() => setSureModal(true)}
                text="Delete"
              />
            )}
            <Button
              btnClasses="w-[87px] h-[33px] border border-[#E2E2E2] rounded-[66px] text-[12px] font-[600] text-[#BBBBBB]"
              onClick={() => handleCancelbtn()}
              text="Cancel"
            />
            <Button
              btnClasses={`w-[116px] h-[33px] bg-[#2B6EF6] border border-[#E2E2E2] rounded-[66px] text-[12px] font-[600] text-[white] ${
                socialLink?.url &&
                (socialLink?.title || socialLink?.graphicDisplayText)
                  ? "opacity-[100%]"
                  : "opacity-[50%]"
              }`}
              onClick={() =>
                socialLink?.url &&
                (socialLink?.title || socialLink?.graphicDisplayText)
                  ? profileData?.profileType === "circoTemplate"
                    ? handleAddLinkToTemplate()
                    : handleAddLinkToDb()
                  : () => {}
              }
              text="Save"
            />
          </div>
        </div>

        <div className="w-[100%]  mt-3">
          <div className="w-[416px] flex items-end">
            <div>
              <InputWithLabel
                type="text"
                label="Web URL"
                onChange={(e) => dispatch(setSocialLinkUrl(e.target.value))}
                value={socialLink?.url}
                inputClasses="w-[316px] h-[40px] bg-[#FAFAFB] rounded-l-[10px] outline-none mt-1 pl-2"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D]"
              />
            </div>

            <div className="w-[100px] rounded-r-[10px] bg-[#FAFAFB] h-[40px] mt-1 flex justify-center items-center">
            <Button
              btnClasses={`w-[73px] h-[28px] rounded-[50px] ${ socialLink?.url ? "bg-[#2B6EF6]" : "bg-[#B6EDFF]" } text-white font-[500] text-[12px] flex justify-center items-center relative pl-2`}                
              onClick={() => socialLink?.url && window.open(socialLink.url, "_blank")}
              icon={<RxExternalLink className="absolute left-3" />}
              text="View"
            />

            </div>
          </div>

          <div className="mt-3 w-[416px]">
            <InputWithLabel
              type="text"
              label="Display Title"
              onChange={(e) => {
                socialLink?.style === "style3"
                  ? dispatch(setGraphicDisplayText(e.target.value))
                  : dispatch(setSocialLinkTitle(e.target.value));
              }}
              value={
                socialLink?.style === "style3"
                  ? socialLink?.graphicDisplayText
                  : socialLink?.title
              }
              inputClasses="w-[416px] h-[40px] bg-[#FAFAFB] rounded-[10px] outline-none mt-1 pl-2"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D]"
              maxLength={35}
            />
            <Text
              text={`${socialLink?.title?.length}/35 characters`}
              classes="font-[400] text-[11px] text-[#A59595] text-right mt-[2px] mr-[2px]"
            />
          </div>
        </div>

        <div className="w-[100%] ">
          <Text
            text="Display Style"
            classes="text-[12px] font-[600] text-[#8D8D8D]"
          />
          <div className="w-[100%] flex justify-around mt-2">
            <div
              className={`w-[166px] h-[104px] bg-[#FAFAFB] rounded-[16px] flex flex-col items-center justify-center gap-2 ${
                socialLink?.style === "style1"
                  ? "border-[4px] border-[#2B6EF6]"
                  : ""
              }  cursor-pointer`}
              onClick={() => handleWebLinkMode("style1")}
            >
              <Image classes="h-[53px] w-[53px]" src={web} />
              <Text
                text="Display as Icon"
                classes="text-[#8D8D8D] font-[600] text-[12px]"
              />
            </div>

            <div
              className={`w-[166px] h-[104px] bg-[#FAFAFB] rounded-[16px] flex flex-col items-center justify-evenly cursor-pointer ${
                socialLink?.style === "style2"
                  ? "border-[4px] border-[#2B6EF6]"
                  : ""
              }`}
              onClick={() => handleWebLinkMode("style2")}
            >
              <div className="w-[150px] h-[32px] bg-[#D0CFFB54] rounded-[34px] pl-1 flex items-center ">
                <Image
                  classes="h-[27px] w-[27px] rounded-full object-cover "
                  src={weblinkgraphic}
                />
                <Text
                  text="Visit my site"
                  classes="text-[8px] font-[500] ml-7"
                />
              </div>

              <Text
                text="Display as Button"
                classes="text-[#8D8D8D] font-[600] text-[12px] mt-3"
              />
            </div>

            <div
              className={`w-[166px] h-[104px] bg-[#FAFAFB] rounded-[16px] flex flex-col items-center justify-center gap-2 cursor-pointer ${
                socialLink?.style === "style3"
                  ? "border-[4px] border-[#2B6EF6]"
                  : ""
              }`}
              onClick={() => handleWebLinkMode("style3")}
            >
              <div className="relative flex justify-center">
                <div className="h-[16px] w-[16px] rounded-full bg-[#00000040] absolute top-1 right-1  flex justify-center items-center">
                  <Image
                    src={returnIconStyle(socialLink.iconStyle)}
                    classes="filter invert brightness-0 h-[8px] object-cover"
                  />
                </div>
                <Text
                  text="Visit my site"
                  classes="text-[8px] font-[400] text-white absolute bottom-1"
                />
                <Image
                  classes="h-[58px] w-[115px] rounded-[8px] object-cover"
                  src={weblinkgrafic}
                />
              </div>

              <Text
                text="Display as Image"
                classes="text-[#8D8D8D] font-[600] text-[12px]"
              />
            </div>
          </div>
        </div>

        <div className="w-[100%]">
          {socialLink?.style === "style1" && <Icon />}
          {socialLink?.style === "style3" && <ImageMode />}
          {socialLink?.style === "style2" && <ButtonMode />}
        </div>

        {/* {socialLink?.isLinkHighlighted && (
          <div className="w-[95%] mt-11 ">
            <motion.div
              initial={{ opacity: 0, translateY: 10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: 10 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <InputWithLabel
                type="text"
                label="Highlight Description"
                onChange={(e) =>
                  dispatch(setSocialLinkHighlightedDesc(e.target.value))
                }
                value={socialLink?.linkHighlightDescription}
                inputClasses="w-[100%] h-[67px] bg-[#FAFAFB] rounded-[10px] outline-none mt-1 pl-2"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D]"
                maxLength={50}
              />
              <Text
                text={`${socialLink?.linkHighlightDescription?.length}/50 characters`}
                classes="font-[400] text-[11px] text-[#A59595] text-right mt-[2px] mr-[2px]"
              />
            </motion.div>
          </div>
        )}  */}
      </div>
      <div className="w-[35%] h-[100%] flex justify-center items-center">
        <CardPreview isAuth={false} />
      </div>
      <CustomModal
        open={sureModal}
        onClose={() => setSureModal(false)}
        style={{ height: 150, width: 350, borderRadius: 5, p: 4 }}
      >
        <AreYouSure
          onClick={() => handleDeleteLink(socialLink.id)}
          onClose={() => setSureModal(false)}
          text={"Are You sure to delete this link ?"}
        />
      </CustomModal>
    </div>
  );
};

export default AddWeblink;
