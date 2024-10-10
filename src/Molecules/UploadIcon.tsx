import Image from "../Atoms/Image";
import Text from "../Atoms/Text";

import { TfiUpload } from "react-icons/tfi";
import { TfiTrash } from "react-icons/tfi";
import { uploadIconProps } from "../Types";

const UploadIcon: React.FC<uploadIconProps> = ({ imgSrc, isShare }) => {
  return (
    <div>
      {isShare && (
        <Text text="Logo" classes="font-[600] text-[12px] text-[#8D8D8D]" />
      )}
      <div className={`flex mt-1 items-center ${isShare ? "gap-3" : "gap-6"}`}>
        <Image src={imgSrc} classes="h-[74px] w-[74px] rounded-[12px]" />
        <div className="flex gap-3 items-center">
          <div className="h-[32px] w-[32px] bg-[#2F80ED] flex justify-center items-center rounded-full cursor-pointer">
            <TfiUpload className="text-white text-[15px]" />
          </div>
          <div className="h-[32px] w-[32px] border border-[#DADADA] flex justify-center items-center rounded-full cursor-pointer">
            <TfiTrash className="text-[#9D9D9D] text-[15px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadIcon;
