import { useAppSelector } from "../../Hooks/reduxHooks";
import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";

const Classic = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div className="w-[90%] h-[100%]  ">
      <div className="w-[100%] h-[128px] relative mt-4">
        <ProfileBackgroundImage src={profileData?.coverUrl} />
        <div className="w-[100%] flex justify-center  absolute bottom-[-40px]">
          <ProfilePictureWithLogo
            logo={profileData?.logoUrl}
            profile={profileData?.profileUrl}
          />
        </div>
      </div>
      <ProfileTextualArea
        name={profileData?.firstName + " " + profileData?.lastName}
        job={profileData.jobTitle}
        location={profileData.address}
        company={profileData?.company}
      />
      <ProfileButtonsArea />
      <SocialLinks />
    </div>
  );
};

export default Classic;
