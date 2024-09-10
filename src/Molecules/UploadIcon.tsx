import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import junk1 from "../assets/images/junk1.png";
import { TfiUpload } from "react-icons/tfi";
import { TfiTrash } from "react-icons/tfi";

const UploadIcon = () => {
  return (
    <div>
      <Text text="Logo" classes="font-[600] text-[12px] text-[#8D8D8D]" />
      <div className="flex mt-1 items-center gap-3">
        <Image src={junk1} classes="h-[74px] w-[74px] rounded-[12px]" />
        <div className="h-[32px] w-[32px] bg-[#2F80ED] flex justify-center items-center rounded-full cursor-pointer">
          <TfiUpload className="text-white text-[15px]" />
        </div>
        <div className="h-[32px] w-[32px] border border-[#DADADA] flex justify-center items-center rounded-full cursor-pointer">
          <TfiTrash className="text-[#9D9D9D] text-[15px]" />
        </div>
      </div>
    </div>
  );
};

export default UploadIcon;
