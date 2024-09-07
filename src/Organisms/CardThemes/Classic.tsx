import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";

const Classic = () => {
  return (
    <div className="w-[90%] h-[100%]  ">
      <div className="w-[100%] h-[128px] relative mt-4">
        <ProfileBackgroundImage />
        <div className="w-[100%] flex justify-center  absolute bottom-[-40px]">
          <ProfilePictureWithLogo />
        </div>
      </div>
      <ProfileTextualArea />
      <ProfileButtonsArea />
      <SocialLinks />
    </div>
  );
};

export default Classic;
