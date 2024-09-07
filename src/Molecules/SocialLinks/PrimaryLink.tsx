import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import Image from "../../Atoms/Image";
import Text from "../../Atoms/Text";

const PrimaryLink = () => {
  return (
    <div className="w-[65px] h-[60px]  flex flex-col items-center">
      <Image src={returnPngIcons(2)} classes="h-[45px] w-[45px]" />
      <Text classes="font-[400] text-[9px] mt-[2px]" text="Phone" />
    </div>
  );
};

export default PrimaryLink;
