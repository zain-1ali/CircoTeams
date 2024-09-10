import card from "../assets/images/card.png";
import classic from "../assets/images/classic.png";
import color from "../assets/images/colored.png";
import custom from "../assets/images/custom.png";
import portrait from "../assets/images/portrait.png";
import IOSSwitch from "../Atoms/CustomToggleBtn";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import ColorSelector from "../Molecules/ColorSelector";
const LayoutDesign = () => {
  interface Layout {
    name: string;
    image: string;
  }

  const layout: Layout[] = [
    { name: "Classic", image: classic },
    { name: "Portrait", image: portrait },
    { name: "Color", image: color },
    { name: "Classic", image: card },
    { name: "Custm", image: custom },
  ];
  return (
    <div className="w-[100%]   h-[350px] rounded-[20px] bg-[#F9F9F9] pl-4 pr-4 pt-6 mt-1 ">
      <div className="w-[100%] flex justify-between">
        {layout?.map((elem) => {
          return (
            <Image
              src={elem?.image}
              classes="h-[174px] w-[78px]  cursor-pointer"
            />
          );
        })}
      </div>
      <div className="mt-6">
        <ColorSelector colorType="Background Color" />
      </div>
      <div className="flex mt-4 items-center gap-3">
        <Text
          text="Whiten Profile Text"
          classes="text-[#8D8D8D] text-[12px] font-[600]  "
        />
        <IOSSwitch />
      </div>
    </div>
  );
};

export default LayoutDesign;
