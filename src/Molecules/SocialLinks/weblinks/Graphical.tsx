import Image from "../../../Atoms/Image";
import Text from "../../../Atoms/Text";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import gi1 from "../../../assets/images/gi1.png";
import gi2 from "../../../assets/images/gi2.png";
import gi3 from "../../../assets/images/gi3.png";
import gi4 from "../../../assets/images/gi4.png";
import gi5 from "../../../assets/images/gi5.png";
import gi6 from "../../../assets/images/gi6.png";

const Graphical = () => {
  const socialLink = useAppSelector((state) => state?.socialLinkHandler.link);
  const returnIconStyle = (style: string) => {
    if (style === "style1") {
      return gi1;
    } else if (style === "style2") {
      return gi2;
    } else if (style === "style3") {
      return gi3;
    } else if (style === "style4") {
      return gi4;
    } else if (style === "style5") {
      return gi5;
    } else if (style === "style6") {
      return gi6;
    }
  };
  return (
    <div
      className={`w-[100%] h-[115px] rounded-[17px] border flex justify-center items-center ${
        socialLink?.graphicDisplayType === "style1" &&
        "shadow-div relative overflow-hidden"
      }`}
      style={{
        display: socialLink?.shareable === false ? "none" : "",
        backgroundImage: `url(${socialLink?.graphicImgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        // marginBottom: elm?.graphicDisplayType === "style2" ? "30px" : "0px",
      }}
    >
      <div className="h-[20px] w-[20px] rounded-full bg-[#00000040] absolute top-2 right-2 flex justify-center items-center">
        <Image
          src={returnIconStyle(socialLink.iconStyle)}
          classes="filter invert brightness-0 h-[10px] object-cover"
        />
      </div>
      <Text
        text={socialLink.graphicDisplayText}
        classes={`absolute bottom-3 z-10 text-xs ${
          socialLink?.graphicDisplayType === "style1"
            ? "text-white"
            : "absolute bottom-[-20px]"
        }`}
      />
    </div>
  );
};

export default Graphical;
