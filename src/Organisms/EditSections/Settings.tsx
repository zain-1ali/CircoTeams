import Text from "../../Atoms/Text";
import TextButton from "../../Molecules/TextButton";
import ToggleArea from "../../Molecules/ToggleArea";

const Settings = () => {
  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <div className="flex items-center gap-[5px]">
        <Text
          text="www.circo.me/"
          classes="font-[600] text-[13px] text-[#818194]"
        />
        <TextButton text="kevinjin" btnText="Save" width="w-[238px]" />
      </div>

      <div className="mt-4 flex flex-col gap-5">
        <ToggleArea text="Lead Capture Mode" width="w-[340px]" />
        <ToggleArea text="One Link Mode" width="w-[340px]" />
        <ToggleArea text="Hide Your Company Logo" width="w-[340px]" />
        <ToggleArea text="Whiten Profile Text" width="w-[340px]" />
      </div>
    </div>
  );
};

export default Settings;
