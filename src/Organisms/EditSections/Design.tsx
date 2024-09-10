import Text from "../../Atoms/Text";
import GeneralDesign from "../GeneralDesign";
import LayoutDesign from "../LayoutDesign";
import SaveContactDesign from "../SaveContactDesign";

const Design = () => {
  return (
    <div className="w-[94%] mt-6 overflow-y-scroll pb-4">
      <Text text="General" classes="font-[600] text-[15px]" />
      <GeneralDesign />
      <Text text="Layout Style" classes="font-[600] text-[15px] mt-6" />
      <LayoutDesign />
      <Text text="Save Contact Style" classes="font-[600] text-[15px] mt-6" />
      <SaveContactDesign />
    </div>
  );
};

export default Design;
