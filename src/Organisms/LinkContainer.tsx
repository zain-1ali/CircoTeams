import IOSSwitch from "../Atoms/CustomToggleBtn";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { returnPngIcons } from "../assets/ReturnSocialIconsPng";
import dragIcon from "../assets/images/i9.png";

const LinkContainer: React.FC<any> = ({ link }) => {
  return (
    <div className="w-[100%] flex justify-between items-center h-[66px] rounded-[20px] bg-[#F9F9F9] pl-3 pr-3">
      <div className="flex items-center gap-3">
        <Image src={dragIcon} classes="h-[22px] w-[22px]" />
        <Image
          src={link.linkImageUrl || returnPngIcons(link.linkID)}
          classes="h-[36px] w-[36px] object-cover"
        />
        <Text
          text={link.name || link.title}
          classes="font-[600] text-[14px] w-[50%]"
        />
      </div>
      <IOSSwitch />
    </div>
  );
};

export default LinkContainer;
