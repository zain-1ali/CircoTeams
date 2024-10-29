import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import ColorSelector from "../Molecules/ColorSelector";
import FontSelector from "../Molecules/FontSelector";
import { setAppIconColor } from "../Redux/ProfileSlice";

const GeneralDesign = () => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const dispatch = useAppDispatch();
  const handleChangeAppIconColor = (color: string) => {
    dispatch(setAppIconColor(color));
  };
  return (
    <div className="w-[100%] flex justify-between items-center h-[104px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 mt-1">
      <FontSelector />
      <ColorSelector
        colorType="App Icon Color"
        handleChangeColor={handleChangeAppIconColor}
        color={profileDesign?.appIconColor}
      />
    </div>
  );
};

export default GeneralDesign;
