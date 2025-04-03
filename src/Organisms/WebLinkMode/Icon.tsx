import React, { useState } from "react";
import Text from "../../Atoms/Text";
import UploadIcon from "../../Molecules/UploadIcon";
// import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import {
  setSocialLinkHighlightedDesc,
  setSocialLinkImgUrl,
  setSocialLinkIsHighlighted,
} from "../../Redux/socialLinkSlice";
import { useUploadFile } from "../../Hooks/useUploadFile";
import ImageCropperModal from "../Cropper";
import web from "../../assets/socialLink/web.png";
import IOSSwitch from "../../Atoms/CustomToggleBtn";
import InputWithLabel from "../../Molecules/InputWithLabel";

const Icon = () => {
  const socialLink = useAppSelector((state) => state.socialLinkHandler.link);
  const dispatch = useAppDispatch();

  const { uploadFile } = useUploadFile();

  const [open, setOpen] = useState<boolean>(false);
  const [image, setImage] = useState<string>("");
  const [uploadLoading, setUploadLoading] = useState<boolean>(false);

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
    <div className="w-[100%] mt-2">
      <Text
        classes="text-[12px] font-[600] text-[#8D8D8D]"
        text="Icon Thumbnail"
      />
      <div className="w-[65%] flex justify-between items-center mt-1 ">
        <UploadIcon
          imgSrc={socialLink?.linkImgUrl || web}
          isShare={false}
          handleFileChange={handleFileChange}
          removeImg={() => dispatch(setSocialLinkImgUrl(""))}
        />

        <div className="flex items-center gap-4">
          <Text
            text="Highlight"
            classes="font-[550] text-[12px] text-[#8D8D8D]"
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
      </div>

      {socialLink?.isLinkHighlighted && (
        <div className="mt-1 w-[416px]">
          <InputWithLabel
            type="text"
            label="Display Title"
            onChange={(e) =>
              dispatch(setSocialLinkHighlightedDesc(e.target.value))
            }
            value={socialLink?.linkHighlightDescription}
            inputClasses="w-[416px] h-[40px] bg-[#FAFAFB] rounded-[10px] outline-none mt-1 pl-2"
            labelClasses="font-[600] text-[12px] text-[#8D8D8D]"
            maxLength={35}
          />
          <Text
            text={`${socialLink?.linkHighlightDescription?.length}/35 characters`}
            classes="font-[400] text-[11px] text-[#A59595] text-right mt-[2px] mr-[2px]"
          />
        </div>
      )}

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
  );
};

export default Icon;
