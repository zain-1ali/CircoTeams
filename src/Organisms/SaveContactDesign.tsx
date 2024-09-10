import Text from "../Atoms/Text";
import ColorSelector from "../Molecules/ColorSelector";
import btnBg from "../assets/images/btnBg.png";

const SaveContactDesign = () => {
  return (
    <div className="w-[100%]   h-[320px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 pt-6 mt-1 ">
      <Text
        text="Button Style"
        classes="font-[600] text-[12px] text-[#8D8D8D]"
      />
      <div className="flex gap-5 mt-2">
        <div className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-[7px] text-[12px] font-[700]">
          Save Contact
        </div>
        <div className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-[7px] text-[12px] font-[700]">
          Save Contact
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-[7px] text-[12px] font-[700]"
          style={{
            background: `url(${btnBg})`,
          }}
        >
          Save Contact
        </div>
      </div>

      <div className="flex gap-5 mt-4">
        <div className="h-[37px] w-[110px] flex justify-center items-center bg-black text-white rounded-full cursor-pointer text-[12px] font-[700]">
          Save Contact
        </div>
        <div className="h-[37px] w-[110px] flex justify-center items-center border border-black  text-black rounded-full cursor-pointer text-[12px] font-[700]">
          Save Contact
        </div>
        <div
          className="h-[37px] w-[110px] flex justify-center items-center  text-white rounded-full cursor-pointer text-[12px] font-[700]"
          style={{
            background: `url(${btnBg})`,
          }}
        >
          Save Contact
        </div>
      </div>

      <div className="mt-6">
        <ColorSelector colorType="Button Color" />
      </div>
      <div className="mt-3">
        <ColorSelector colorType="Text Color" />
      </div>
    </div>
  );
};

export default SaveContactDesign;
