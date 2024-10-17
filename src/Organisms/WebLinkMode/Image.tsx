import { useState } from "react";
import Text from "../../Atoms/Text";
import UploadIcon from "../../Molecules/UploadIcon";
import { useUploadFile } from "../../Hooks/useUploadFile";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import {
  setGraphicDisplayType,
  setGraphicImgUrl,
} from "../../Redux/socialLinkSlice";
import ImageCropperModal from "../Cropper";
import windowImg from "../../assets/images/window.png";
import Image from "../../Atoms/Image";

const ImageMode = () => {
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
      if (url) dispatch(setGraphicImgUrl(url));
      setUploadLoading(false);
      setOpen(false);
    });
  };
  return (
    <div className="w-[100%] mt-2">
      <Text
        classes="text-[12px] font-[600] text-[#8D8D8D]"
        text="Upload Image"
      />
      <div className="w-[100%] flex mt-1 justify-around">
        <div className=" flex  items-center">
          <UploadIcon
            imgSrc={socialLink?.buttonImgUrl || ""}
            isShare={false}
            handleFileChange={handleFileChange}
            removeImg={() => dispatch(setGraphicImgUrl(""))}
            isBigImage={true}
          />
        </div>
        <div className="flex">
          <div
            className={`rounded-[10px] ${
              socialLink?.graphicDisplayType === "style1" &&
              "border-[#2B6EF6] border-[3px]"
            }  mr-2`}
            onClick={() => dispatch(setGraphicDisplayType("style1"))}
          >
            <div className="w-[141px] h-[79px] border rounded-[10px] border-[#D7D7D7] flex justify-center items-center  relative overflow-hidden shadow-div">
              <Image src={windowImg} classes={"h-[21px] w-[21px]"} />
              <Text
                text="Text on image"
                classes="text-white z-10 font-[700] text-[8px] absolute bottom-[6px]"
              />
            </div>
          </div>

          <div
            className={`rounded-[10px] ${
              socialLink?.graphicDisplayType === "style2" &&
              "border-[#2B6EF6] border-[3px]"
            }`}
            onClick={() => dispatch(setGraphicDisplayType("style2"))}
          >
            <div className="w-[141px] h-[79px] border rounded-[10px] border-[#D7D7D7] flex justify-center items-center relative">
              <Image src={windowImg} classes={"h-[21px] w-[21px]"} />
              <Text
                text="Text on image"
                classes="text-black font-[700] text-[8px] absolute bottom-[-16px]"
              />
            </div>
          </div>
        </div>
      </div>
      <ImageCropperModal
        open={open}
        handleClose={handleClose}
        imageSrc={image}
        onCropComplete={handleCropComplete}
        aspect={388 / 186}
        shape={"rect"}
        loading={uploadLoading}
      />
    </div>
  );
};

export default ImageMode;
