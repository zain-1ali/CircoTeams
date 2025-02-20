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
    "#ffffff",
    "#000",
    "#ff474c",
    "#ff9441",
    "#fdc64a",
    "#00985a",
    "#0082ed",
    "#a64ddf"
  ];



  // const colors: string[] = [
  //   "#000000",
  //   "#EB5757",
  //   "#F2994A",
  //   "#F2C94C",
  //   "#219653",
  //   "#2F80ED",
   
  //   "#9B51E0",
  // ];

  

  return (
    <div>
      {" "}
      <Text text={colorType} classes="font-[600] text-[12px] text-[#8D8D8D]" />
      <div
        className={`flex items-center relative ${
          colorType === "App Icon Color" ? "gap-[7px] xl:gap-[18px]" : "gap-[15px] xl:gap-[5%]"
        } h-[40px]`}
      >
        <label htmlFor={colorType}>
          <Image
            src={i10}
            classes="h-[20px] w-[20px] object-cover cursor-pointer"
          />
        </label>
        <input
          type="color"
          style={{ display: "none" }}
          className="absolute bottom-0 left-0"
          id={colorType}
          onChange={(e) => handleChangeColor(e.target.value)}
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
