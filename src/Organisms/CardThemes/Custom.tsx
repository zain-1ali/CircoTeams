import { useAppSelector } from "../../Hooks/reduxHooks";
// import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";

const Custom = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  console.log(profileData?.profileDesign?.hideCompanyLogo);

  return (
    <div className={`w-[90%] h-[100%] absolute overflow-y-scroll`}>
      <div className="w-[100%] flex justify-center mt-11">
        <ProfilePictureWithLogo
          showLogo={!profileData?.profileDesign?.hideCompanyLogo}
          logo={profileData?.logoUrl}
          profile={profileData?.profileUrl}
        />
      </div>
      <div className="w-[100%] mt-[20px]">
        <ProfileTextualArea
          name={profileData?.firstName + " " + profileData?.lastName}
          job={profileData.jobTitle}
          location={profileData.address}
          company={profileData?.company}
        />
      </div>

      <ProfileButtonsArea />
      <SocialLinks />
    </div>
  );
};

export default Custom;
