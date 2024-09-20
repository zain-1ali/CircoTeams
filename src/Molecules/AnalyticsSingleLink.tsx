import { returnPngIcons } from "../assets/ReturnSocialIconsPng";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";

const AnalyticsSingleLink = () => {
  return (
    <div className="w-[100%] h-[50px] bg-[#F9F9F9] rounded-[12px] mt-2 flex px-3 justify-between items-center">
      <Image src={returnPngIcons(3)} classes="h-[29px] w-[29px] object-cover" />
      <Text
        text="Email me"
        classes="font-[600] text-[12px] w-[70%] text-[#7C7C7C] "
      />
      <Text
        text="212 Clicks"
        classes="font-[600] text-[12px]  text-[#7C7C7C]"
      />
    </div>
  );
};

export default AnalyticsSingleLink;
