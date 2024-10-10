import Text from "../../Atoms/Text";
import ColorSelector from "../../Molecules/ColorSelector";
import TextButton from "../../Molecules/TextButton";
import UploadIcon from "../../Molecules/UploadIcon";
import junk1 from "../../assets/images/junk1.png";

const Share = () => {
  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text text="QR Code" classes="font-[600] text-[15px]" />
      <div className="mt-3">
        <ColorSelector colorType="QR Code Color" />
        <div className="mt-2">
          <UploadIcon imgSrc={junk1} isShare={true} />
        </div>
      </div>

      <Text text="Share" classes="font-[600] text-[15px] mt-5" />
      <Text
        text="Profile URL"
        classes="font-[600] text-[12px] text-[#8D8D8D] mt-3"
      />
      <TextButton
        text="http://www.circo.me/username"
        btnText="Copy"
        width="w-[416px] mt-2"
      />
    </div>
  );
};

export default Share;
