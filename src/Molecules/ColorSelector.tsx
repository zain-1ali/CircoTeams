import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { colorSelectorProps } from "../Types";
import i10 from "../assets/images/i10.png";
const ColorSelector: React.FC<colorSelectorProps> = ({
  colorType,
  handleChangeColor,
  color,
}) => {
  const colors: string[] = [
    "#000000",
    "#EB5757",
    "#F2994A",
    "#F2C94C",
    "#219653",
    "#2F80ED",
    "#9B51E0",
  ];

  return (
    <div>
      {" "}
      <Text text={colorType} classes="font-[600] text-[12px] text-[#8D8D8D]" />
      <div
        className={`flex items-center ${
          colorType === "App Icon Color" ? "gap-[7px]" : "gap-[15px]"
        } h-[40px]`}
      >
        <Image
          src={i10}
          classes="h-[20px] w-[20px] object-cover cursor-pointer"
        />
        {colors?.map((elm) => {
          return (
            <div
              className={`h-[20px] w-[20px] rounded-full  cursor-pointer ${
                elm === color && "border-[2px] border-primary"
              }`}
              style={{ backgroundColor: elm }}
              onClick={() => handleChangeColor(elm)}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorSelector;
