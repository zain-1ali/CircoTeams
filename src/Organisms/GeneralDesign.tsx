import ColorSelector from "../Molecules/ColorSelector";
import FontSelector from "../Molecules/FontSelector";

const GeneralDesign = () => {
  return (
    <div className="w-[100%] flex justify-between items-center h-[104px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 mt-1">
      <FontSelector />
      <ColorSelector colorType="App Icon Color" />
    </div>
  );
};

export default GeneralDesign;
