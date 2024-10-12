import { BiArrowBack } from "react-icons/bi";
import { returnPngIcons } from "../../../assets/ReturnSocialIconsPng";
import UploadIcon from "../../../Molecules/UploadIcon";
import CardPreview from "../../CardPreview";
import { webLinksProps } from "../../../Types";
import { useAppDispatch, useAppSelector } from "../../../Hooks/reduxHooks";
import InputWithLabel from "../../../Molecules/InputWithLabel";
import Text from "../../../Atoms/Text";
import IOSSwitch from "../../../Atoms/CustomToggleBtn";
import Button from "../../../Atoms/Button";
import { useEffect, useState } from "react";
import {
  setSocialLinkBaseurl,
  setSocialLinkHighlightedDesc,
  setSocialLinkImgUrl,
  setSocialLinkIsHighlighted,
  setSocialLinklinkID,
  setSocialLinkName,
  setSocialLinkTitle,
  setSocialLinkValue,
} from "../../../Redux/socialLinkSlice";
import { motion } from "framer-motion";
import { addLinkToDb } from "../../../Services/ProfileServices";
import { useParams } from "react-router-dom";
import useToastNotifications from "../../../Hooks/useToastNotification";
import { useUploadFile } from "../../../Hooks/useUploadFile";
import ImageCropperModal from "../../Cropper";

const AddSingleLink: React.FC<webLinksProps> = ({ changeLinkMode }) => {
  const dispatch = useAppDispatch();
  const linkInfo = useAppSelector((state) => state.singleLinkHandeler.linkInfo);
  const socialLink = useAppSelector((state) => state.socialLinkHandler.link);
  const profileData = useAppSelector((state) => state.profileHandler);
  const { id } = useParams();
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);

  const handleCancelbtn = () => {
    changeLinkMode("allLinks");
    dispatch(setSocialLinkValue(""));
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
    dispatch(setSocialLinkValue(""));
    dispatch(setSocialLinkTitle(""));
    dispatch(setSocialLinkIsHighlighted(false));
    dispatch(setSocialLinkName(""));
    dispatch(setSocialLinkBaseurl(""));
    dispatch(setSocialLinklinkID(999));
    dispatch(setSocialLinkHighlightedDesc(""));
  };

  useEffect(() => {
    dispatch(setSocialLinkName(linkInfo?.name));
    dispatch(setSocialLinkBaseurl(linkInfo.baseUrl));
    dispatch(setSocialLinklinkID(linkInfo.linkID));
  }, [linkInfo]);

  const { showError, showSuccess } = useToastNotifications();
  const { uploadFile } = useUploadFile();

  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

  console.log(loading);

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result as string);
        setOpen(true);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCropComplete = (croppedImage: string) => {
    const uniqueTime = Date.now();
    setUploadLoading(true);

    uploadFile(croppedImage?.slice(23), `social${uniqueTime}`).then((url) => {
      dispatch(setSocialLinkImgUrl(url));
      setUploadLoading(false);
      setOpen(false);
    });
  };

  return (
    <div className="w-[100%] h-[100%] flex">
      <div className="h-[100%] w-[65%] border-r">
        <BiArrowBack
          className="text-2xl text-[#929292] cursor-pointer"
          onClick={() => handleCancelbtn()}
        />
        {/* <div className="flex">
          <Image classes="h-[72px] w-[72px] " src={returnPngIcons(2)} />
          <div className=""></div>
        </div> */}
        <div className="mt-10">
          <UploadIcon
            imgSrc={socialLink?.linkImgUrl || returnPngIcons(linkInfo.linkID)}
            isShare={false}
            handleFileChange={handleFileChange}
            removeImg={() => dispatch(setSocialLinkImgUrl(""))}
          />
        </div>

        <div className="w-[100%] flex justify-start gap-6 mt-6">
          <div>
            <InputWithLabel
              type="text"
              label={linkInfo?.placeholder}
              onChange={(e) => dispatch(setSocialLinkValue(e.target.value))}
              value={socialLink?.value}
              inputClasses="w-[265px] h-[40px] bg-[#FAFAFB] rounded-[10px] outline-none mt-1 pl-2"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D]"
            />
          </div>

          <div className="">
            <InputWithLabel
              type="text"
              label="Display Name"
              onChange={(e) => dispatch(setSocialLinkTitle(e.target.value))}
              value={socialLink?.title}
              inputClasses="w-[265px] h-[40px] bg-[#FAFAFB] rounded-[10px] outline-none mt-1 pl-2"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D]"
              maxLength={35}
            />
            <Text
              text={`${socialLink?.title?.length}/35 characters`}
              classes="font-[400] text-[11px] text-[#A59595] text-right mt-[2px] mr-[2px]"
            />
          </div>
        </div>

        <div className="flex items-center gap-4 mt-7">
          <Text
            text="Highlight"
            classes="font-[550] text-[13px] text-[#8D8D8D]"
          />
          <IOSSwitch
            value={socialLink?.isLinkHighlighted}
            onChange={() =>
              dispatch(
                setSocialLinkIsHighlighted(!socialLink?.isLinkHighlighted)
              )
            }
          />
        </div>

        {/* slow transition  */}
        {socialLink?.isLinkHighlighted && (
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
        )}

        <div className="flex items-center justify-end w-[95%] gap-4 mt-8">
          <Button
            btnClasses="w-[87px] h-[33px] border border-[#E2E2E2] rounded-[66px] text-[12px] font-[600] text-[#BBBBBB]"
            onClick={() => handleCancelbtn()}
            text="Cancel"
          />
          <Button
            btnClasses={`w-[116px] h-[33px] bg-[#2B6EF6] border border-[#E2E2E2] rounded-[66px] text-[12px] font-[600] text-[white] ${
              socialLink?.value ? "opacity-[100%]" : "opacity-[50%]"
            }`}
            onClick={() =>
              socialLink?.value
                ? addLinkToDb(
                    socialLink,
                    id,
                    profileData?.links,
                    showError,
                    showSuccess,
                    handleLoading
                  )
                : () => {}
            }
            text="Save"
          />
        </div>
        <ImageCropperModal
          open={open}
          handleClose={handleClose}
          imageSrc={image}
          onCropComplete={handleCropComplete}
          aspect={1 / 1}
          shape={"rect"}
          loading={uploadLoading}
        />
      </div>
      <div className="w-[35%] h-[100%] flex justify-center items-center">
        <CardPreview />
      </div>
    </div>
  );
};

export default AddSingleLink;