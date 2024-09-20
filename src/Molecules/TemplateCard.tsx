import Text from "../Atoms/Text";
import i16 from "../assets/images/i16.png";
import Image from "../Atoms/Image";
import Button from "../Atoms/Button";
import bgPlchldr from "../assets/images/bgPlchldr.png";

const TemplateCard = () => {
  return (
    <div className="w-[270px] h-[240px] bg-white shadow-md rounded-[23px] pt-2 flex flex-col items-center">
      <div className="w-[95%] border h-[130px] rounded-[18px]">
        <Image
          src={bgPlchldr}
          classes="h-[100%] w-[100%] object-cover rounded-[18px]"
        />
      </div>
      <Text text="HR Template" classes="font-[700] text-[16px] mt-2" />
      <div className="flex items-center gap-2 mt-[2px]">
        <Image src={i16} classes="h-[11px] w-[11px]" />
        <Text
          text="6 Members"
          classes="font-[700] text-[11px] text-[#CDCCD4]"
        />
      </div>

      <div className="flex gap-2 mt-3">
        <Button
          text="Edit"
          btnClasses="font-[600] text-[12px] text-[#808080] w-[100px] h-[30px] border rounded-[22px] border-[#C9C9C9]"
          onClick={() => {}}
        />

        <Button
          text="Assign"
          btnClasses="font-[600] text-[12px] text-[#808080] w-[100px] h-[30px] border rounded-[22px] border-[#C9C9C9]"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default TemplateCard;
