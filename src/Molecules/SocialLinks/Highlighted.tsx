import React from "react";
import { returnPngIcons } from "../../assets/ReturnSocialIconsPng";
import Image from "../../Atoms/Image";
// import Text from "../../Atoms/Text";
import { Link } from "../../Types";
import { hexToRGBA } from "../../utils/hexToRGBA";
import { useAppSelector } from "../../Hooks/reduxHooks";
import { returnWhiteIcons } from "../../assets/ReturnWhiteIcons";

const Highlighted: React.FC<Link> = (link) => {
  const profileDesign = useAppSelector(
    (state) => state.profileHandler.profileDesign
  );
  const highlightBoxStyle = profileDesign.highlightBoxStyle;
  const boxBackgroundColor = profileDesign.boxBackgroundColor;
  const appIconColor = profileDesign?.appIconColor;
  return (
    <div
      className="w-[100%] h-[80px]  rounded-[17px]  flex items-center px-4 gap-3 "
      style={
        highlightBoxStyle === "style3"
          ? {
              background: `linear-gradient(90deg, ${hexToRGBA(
                boxBackgroundColor,
                "1"
              )} 0%, ${hexToRGBA(boxBackgroundColor, "2")} 0%)`,

              backdropFilter: "blur(5px)",
              WebkitBackdropFilter: "blur(5px)",
              display: link?.shareable === false ? "none" : undefined,
            }
          : {
              display: link?.shareable === false ? "none" : undefined,

              backgroundColor:
                highlightBoxStyle === "style1"
                  ? "transparent"
                  : boxBackgroundColor,
              border:
                highlightBoxStyle === "style1"
                  ? `1px solid ${
                      boxBackgroundColor ? boxBackgroundColor : "#f2f3f5"
                    }`
                  : undefined,

              // boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
            }
      }
    >
      {appIconColor ? (
        <div
          className="h-[45px] w-[45px] rounded-[9px] flex justify-center items-center"
          style={{ backgroundColor: profileDesign?.appIconColor }}
        >
          {returnWhiteIcons({
            id: link?.linkID,
            appcolor: appIconColor,
            size: 30,
          })}
        </div>
      ) : (
        <Image
          src={link?.linkImgUrl || returnPngIcons(link?.linkID)}
          classes="h-[45px] w-[45px] rounded-[9px]"
        />
      )}
      <div>
        <p
          className="font-[700] text-[10px]"
          style={{ color: profileDesign.boxTextColor }}
        >
          {link.title || link.name}
        </p>
        <p
          className="font-[400] text-[8px] mt-[2px]"
          style={{ color: profileDesign.boxTextColor }}
        >
          {link?.linkHighlightDescription}
        </p>
        {/* <Text classes="font-[700] text-[10px]" text={link.title || link.name} />
        <Text
          classes="font-[400] text-[8px] mt-[2px]"
          text={link?.linkHighlightDescription}
        /> */}
      </div>
    </div>
  );
};

export default Highlighted;
