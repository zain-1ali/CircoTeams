import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { contactOptionsProps } from "../Types";

const ContactUsOptions: React.FC<contactOptionsProps> = ({
  icon,
  heading,
  text,
  btnText,
}) => {
  return (
    <div className="w-[419px] h-[100px] bg-white rounded-[13px] shadow-md px-5 flex items-center pt-0 border">
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="h-[50px] w-[50px] rounded-[12px] shadow-md flex justify-center items-center">
            <Image
              src={icon}
              classes={`${
                heading === "Email us"
                  ? "h-[17px] w-[24px]"
                  : "h-[24px] w-[18px]"
              }  `}
            />
          </div>
          <div>
            <Text
              text={heading}
              classes="text-[#1F1F1F] text-[14px] font-[600]"
            />
            <Text text={text} classes="font-[500] text-[11px] text-[#8B8B8B]" />
          </div>
        </div>
        <Button
          text={btnText}
          btnClasses="w-[82px] h-[32px] rounded-full bg-[#2B6EF6] font-[600] text-[14px] text-white"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default ContactUsOptions;
