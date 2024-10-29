import { hexToRGBA } from "../../../utils/hexToRGBA";
import Image from "../../../Atoms/Image";
// import Text from "../../../Atoms/Text";
import { useAppSelector } from "../../../Hooks/reduxHooks";
import { Link } from "../../../Types";

const ButtonLink: React.FC<Link> = (socialLink) => {
  // const socialLink = useAppSelector((state) => state?.socialLinkHandler.link);
  const profileData = useAppSelector((state) => state.profileHandler);

  const getBorderRadius = (style: string | undefined): string | undefined => {
    switch (style) {
      case "style9":
      case "style1":
      case "style5":
        return "0px";
      case "style10":
      case "style2":
      case "style6":
        return "8px";
      case "style11":
      case "style3":
      case "style7":
        return "14px";
      case "style12":
      case "style4":
      case "style8":
        return "40px";
      default:
        return undefined;
    }
  };

  const weblinkStyle = profileData?.profileDesign.weblinkStyle;
  const buttonBackgroundColor =
    profileData?.profileDesign.weblinkButtonBackgroundColor;

  const getBackgroundStyle = (
    style: string | undefined,
    color: string | undefined
  ) => {
    if (["style9", "style10", "style11", "style12"].includes(style || "")) {
      return `linear-gradient(90deg, ${hexToRGBA(color, "1")} 0%, ${hexToRGBA(
        color,
        "2"
      )} 100%)`;
    }
    return undefined;
  };

  const getBorderStyle = (
    style: string | undefined,
    color: string | undefined
  ): string | undefined => {
    if (["style5", "style6", "style7", "style8"].includes(style || "")) {
      return `1px solid ${color}`;
    }
    return undefined;
  };

  const shouldHideLink = (
    shareable: boolean | undefined
  ): "none" | undefined => {
    return shareable === false ? "none" : undefined;
  };

  const linkStyle: React.CSSProperties = {
    display: shouldHideLink(socialLink?.shareable),
    borderRadius: getBorderRadius(weblinkStyle),
    background: getBackgroundStyle(weblinkStyle, buttonBackgroundColor),
    backdropFilter:
      weblinkStyle &&
      ["style9", "style10", "style11", "style12"].includes(weblinkStyle)
        ? "blur(5px)"
        : undefined,
    WebkitBackdropFilter:
      weblinkStyle &&
      ["style9", "style10", "style11", "style12"].includes(weblinkStyle)
        ? "blur(5px)"
        : undefined,
    backgroundColor: ![
      "style5",
      "style6",
      "style7",
      "style8",
      "style9",
      "style10",
      "style11",
      "style12",
    ].includes(weblinkStyle || "")
      ? buttonBackgroundColor
      : "transparent",
    border: getBorderStyle(weblinkStyle, buttonBackgroundColor),
  };

  return (
    <div
      className="w-[100%] h-[32px] flex justify-center items-center text-[10px] font-[400] relative"
      style={linkStyle}
    >
      {socialLink?.buttonImgUrl && (
        <Image
          src={socialLink?.buttonImgUrl}
          classes={`
            h-[27px] w-[27px]
            absolute
            left-[2px]
            ${socialLink?.shareable === false ? "hidden" : ""}
            ${
              weblinkStyle === "style1" ||
              weblinkStyle === "style5" ||
              weblinkStyle === "style9"
                ? "rounded-none"
                : ""
            }
            ${
              weblinkStyle === "style2" ||
              weblinkStyle === "style6" ||
              weblinkStyle === "style10"
                ? "rounded-md"
                : ""
            }
            ${
              weblinkStyle === "style3" ||
              weblinkStyle === "style7" ||
              weblinkStyle === "style11"
                ? "rounded-lg"
                : ""
            }
            ${
              weblinkStyle === "style4" ||
              weblinkStyle === "style8" ||
              weblinkStyle === "style12"
                ? "rounded-full"
                : ""
            }
          `}
        />
      )}
      <p style={{ color: profileData.profileDesign.weblinkButtonTextColor }}>
        {socialLink?.title}
      </p>
    </div>
  );
};

export default ButtonLink;
