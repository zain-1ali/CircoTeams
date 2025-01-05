// import { useState } from "react";
import { useAppSelector } from "../Hooks/reduxHooks";
import LeadFormSlider from "../Molecules/LeadFormSlider";
import { cardPreview } from "../Types";
import Classic from "./CardThemes/Classic";
import Color from "./CardThemes/Color";
import Custom from "./CardThemes/Custom";
import Portrait from "./CardThemes/Portrait";
import Card from "./CardThemes/Card";

const CardPreview: React.FC<cardPreview> = ({ isAuth }) => {
  const innerHeight: number = window.innerHeight;

  const profileData = useAppSelector((state) => state.profileHandler);
  console.log(profileData?.profileDesign?.backgroundImage);

  return (
    <div
      className={`w-[272px] flex justify-center  overflow-y-scroll absolute z-20 ${
        innerHeight <= 700 && isAuth ? "h-[589px]" : "h-[589px]"
      } ${
        profileData?.profileDesign?.profileFont === "1"
          ? "inika"
          : profileData?.profileDesign?.profileFont === "2"
          ? "gugi"
          : profileData?.profileDesign?.profileFont === "3"
          ? "gothic"
          : profileData?.profileDesign?.profileFont === "4"
          ? "marckScript"
          : profileData?.profileDesign?.profileFont === "5"
          ? "chivo"
          : profileData?.profileDesign?.profileFont === "6"
          ? "sf"
          : "sf"
      }  border rounded-[26px] shadow-lg`}
      style={{ backgroundColor: profileData?.profileDesign?.backgroundColor }}
    >
      {profileData?.profileDesign?.backgroundTheme === "Custom" &&
      profileData?.profileDesign?.backgroundImage ? (
        <img
          // backgroundImage
          src={profileData?.profileDesign?.backgroundImage}
          className="h-[100%] w-[100%] object-cover"
          style={{
            opacity: `${profileData?.profileDesign?.backgroundOpacity}%`,
          }}
        />
      ) : null}
      {profileData?.profileDesign?.backgroundTheme === "Classic" && <Classic />}
      {profileData?.profileDesign?.backgroundTheme === "Color" && <Color />}
      {profileData?.profileDesign?.backgroundTheme === "Custom" && <Custom />}
      {profileData?.profileDesign?.backgroundTheme === "Portrait" && (
        <Portrait />
      )}
      {profileData?.profileDesign?.backgroundTheme === "Card" && <Card />}

      {profileData?.leadMode && <LeadFormSlider />}
    </div>
  );
};

export default CardPreview;
