import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { counterBoxProps } from "../Types";

const AnalyticsCountBox: React.FC<counterBoxProps> = ({
  icon,
  count,
  text,
  iconStyle,
}) => {
  return (
    <div className="h-[100px] w-[22%] bg-[#F9F9F9] rounded-[16px] py-2 px-3 flex flex-col">
      <div className="h-[30px] w-[30px] rounded-full bg-[#9CBDFF] flex justify-center items-center">
        <Image src={icon} classes={iconStyle} />
      </div>
      <Text
        classes="font-[700] text-[20px] text-[#151D48] mt-[2px]"
        text={JSON.stringify(count)}
      />
      <Text classes="font-[600] text-[14px] text-[#979797]" text={text} />
    </div>
  );
};

export default AnalyticsCountBox;
