import Image from "../Atoms/Image";
import Text from "../Atoms/Text";

import { TfiUpload } from "react-icons/tfi";
import { TfiTrash } from "react-icons/tfi";
import { uploadIconProps } from "../Types";
import { useRef } from "react";
import windowImg from "../assets/images/window.png";
import { useAppSelector } from "../Hooks/reduxHooks";

const UploadIcon: React.FC<uploadIconProps> = ({
  imgSrc,
  isShare,
  handleFileChange,
  removeImg,
  isBigImage,
}) => {
  const socialLink = useAppSelector((state) => state.socialLinkHandler.link);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <div>
      {isShare && (
        <Text text="Logo" classes="font-[600] text-[12px] text-[#8D8D8D]" />
      )}
      <div
        className={`flex mt-1 items-center ${
          isShare || isBigImage ? "gap-3" : "gap-6"
        }`}
      >
        {isBigImage ? (
          socialLink?.graphicImgUrl ? (
            <Image
              src={socialLink?.graphicImgUrl}
              classes={"w-[141px] h-[79px] object-cover rounded-[10px]"}
            />
          ) : (
            <div className="w-[141px] h-[79px] border rounded-[10px] border-[#D7D7D7] flex justify-center items-center">
              <Image src={windowImg} classes={"h-[21px] w-[21px]"} />
            </div>
          )
        ) : (
          <Image src={imgSrc} classes={"h-[74px] w-[74px] rounded-[12px]"} />
        )}
        <div className="flex gap-3 items-center">
          <div
            className="h-[32px] w-[32px] bg-[#2F80ED] flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => handleClick()}
          >
            <TfiUpload className="text-white text-[15px]" />
          </div>
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={(e) => handleFileChange(e)}
          />
          <div
            className="h-[32px] w-[32px] border border-[#DADADA] flex justify-center items-center rounded-full cursor-pointer"
            onClick={() => removeImg()}
          >
            <TfiTrash className="text-[#9D9D9D] text-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadIcon;
