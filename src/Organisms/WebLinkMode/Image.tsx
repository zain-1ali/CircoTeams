import { useState } from "react";
import Text from "../../Atoms/Text";
import UploadIcon from "../../Molecules/UploadIcon";
import { useUploadFile } from "../../Hooks/useUploadFile";
import { useAppDispatch, useAppSelector } from "../../Hooks/reduxHooks";
import {
  setGraphicDisplayType,
  setGraphicImgUrl,
  setGraphicLinkIcon,
} from "../../Redux/socialLinkSlice";
import ImageCropperModal from "../Cropper";
import windowImg from "../../assets/images/window.png";
import Image from "../../Atoms/Image";
import gi1 from "../../assets/images/gi1.png";
import gi2 from "../../assets/images/gi2.png";
import gi3 from "../../assets/images/gi3.png";
import gi4 from "../../assets/images/gi4.png";
import gi5 from "../../assets/images/gi5.png";
import gi6 from "../../assets/images/gi6.png";

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
                classes={`text-white z-10 font-[700] text-[8px] absolute bottom-[6px]`}
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

      <Text classes="text-[12px] font-[600] text-[#8D8D8D] mt-3" text="Icon" />
      <div className="flex mt-1 gap-3">
        <div
          className="h-[33px] w-[34px] bg-[#FAFAFA] rounded-[10px] cursor-pointer flex justify-center items-center"
          style={{
            border:
              socialLink?.iconStyle === "style1" ? "2px solid #2B6EF6" : "",
          }}
          onClick={() => dispatch(setGraphicLinkIcon("style1"))}
        >
          <Image src={gi1} classes="object-cover" />
        </div>
        <div
          className="h-[33px] w-[34px] bg-[#FAFAFA] rounded-[10px] cursor-pointer flex justify-center items-center"
          style={{
            border:
              socialLink?.iconStyle === "style2" ? "2px solid #2B6EF6" : "",
          }}
          onClick={() => dispatch(setGraphicLinkIcon("style2"))}
        >
          <Image src={gi2} classes="object-cover" />
        </div>
        <div
          className="h-[33px] w-[34px] bg-[#FAFAFA] rounded-[10px] cursor-pointer flex justify-center items-center"
          style={{
            border:
              socialLink?.iconStyle === "style3" ? "2px solid #2B6EF6" : "",
          }}
          onClick={() => dispatch(setGraphicLinkIcon("style3"))}
        >
          <Image src={gi3} classes="object-cover" />
        </div>
        <div
          className="h-[33px] w-[34px] bg-[#FAFAFA] rounded-[10px] cursor-pointer flex justify-center items-center"
          style={{
            border:
              socialLink?.iconStyle === "style4" ? "2px solid #2B6EF6" : "",
          }}
          onClick={() => dispatch(setGraphicLinkIcon("style4"))}
        >
          <Image src={gi4} classes="object-cover" />
        </div>
        <div
          className="h-[33px] w-[34px] bg-[#FAFAFA] rounded-[10px] cursor-pointer flex justify-center items-center"
          style={{
            border:
              socialLink?.iconStyle === "style5" ? "2px solid #2B6EF6" : "",
          }}
          onClick={() => dispatch(setGraphicLinkIcon("style5"))}
        >
          <Image src={gi5} classes="object-cover" />
        </div>
        <div
          className="h-[33px] w-[34px] bg-[#FAFAFA] rounded-[10px] cursor-pointer flex justify-center items-center"
          style={{
            border:
              socialLink?.iconStyle === "style6" ? "2px solid #2B6EF6" : "",
          }}
          onClick={() => dispatch(setGraphicLinkIcon("style6"))}
        >
          <Image src={gi6} classes="object-cover" />
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
