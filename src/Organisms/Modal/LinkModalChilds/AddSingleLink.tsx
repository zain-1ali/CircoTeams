import { BiArrowBack } from "react-icons/bi";
import { returnPngIcons } from "../../../assets/ReturnSocialIconsPng";
import UploadIcon from "../../../Molecules/UploadIcon";
import CardPreview from "../../CardPreview";
import { webLinksProps } from "../../../Types";

const AddSingleLink: React.FC<webLinksProps> = ({ changeLinkMode }) => {
  return (
    <div className="w-[100%] h-[100%] flex">
      <div className="h-[100%] w-[65%] border-r">
        <BiArrowBack className="text-2xl text-[#929292] cursor-pointer" />
        {/* <div className="flex">
          <Image classes="h-[72px] w-[72px] " src={returnPngIcons(2)} />
          <div className=""></div>
        </div> */}
        <div className="mt-10">
          <UploadIcon imgSrc={returnPngIcons(2)} isShare={false} />
        </div>
      </div>
      <div className="w-[35%] h-[100%] flex justify-center items-center">
        <CardPreview />
      </div>
    </div>
  );
};

export default AddSingleLink;
