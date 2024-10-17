import React, { useState } from "react";
import Text from "../../Atoms/Text";
import UploadIcon from "../../Molecules/UploadIcon";
// import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import {
  setBtnImageUrl,
  setSocialLinkImgUrl,
} from "../../Redux/socialLinkSlice";
import { useUploadFile } from "../../Hooks/useUploadFile";
import ImageCropperModal from "../Cropper";
import web from "../../assets/socialLink/web.png";

const ButtonMode = () => {
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
      dispatch(setBtnImageUrl(url));
      setUploadLoading(false);
      setOpen(false);
    });
  };
  return (
    <div className="w-[100%] mt-2">
      <Text
        classes="text-[12px] font-[600] text-[#8D8D8D]"
        text="Button Thumbnail"
      />
      <div className="w-[65%] flex justify-between items-center mt-1 ">
        <UploadIcon
          imgSrc={socialLink?.buttonImgUrl || web}
          isShare={false}
          handleFileChange={handleFileChange}
          removeImg={() => dispatch(setSocialLinkImgUrl(""))}
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
  );
};

export default ButtonMode;

// simple link image variable >> image
// web link images:
// style3>> graphicImgUrl
// style2>> buttonImgUrl
// style1>> linkImgUrl
