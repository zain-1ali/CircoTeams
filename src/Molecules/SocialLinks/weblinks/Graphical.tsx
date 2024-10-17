import Text from "../../../Atoms/Text";
import { useAppSelector } from "../../../Hooks/reduxHooks";

const Graphical = () => {
  const socialLink = useAppSelector((state) => state?.socialLinkHandler.link);
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
      <Text
        text={socialLink.graphicDisplayText}
        classes="absolute bottom-3 z-10"
      />
    </div>
  );
};

export default Graphical;
