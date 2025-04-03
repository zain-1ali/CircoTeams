import { useAppSelector } from "../../Hooks/reduxHooks";
// import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";
import { appendBucketPath } from "../../Services/Constants";

const Custom = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const name = profileData?.profileType == "circoTemplate" ? "User Name" : profileData?.firstName + " " + profileData?.lastName;

  return (
    <div className={`w-[90%] h-[100%] absolute overflow-y-scroll`}>
      <div className="w-[100%] flex justify-center mt-11">
        <ProfilePictureWithLogo
          showLogo={!profileData?.profileDesign?.hideCompanyLogo}
          logo={appendBucketPath(profileData?.logoUrl || "")}
          profile={appendBucketPath(profileData?.profileUrl || "")}
        />
      </div>
      <div className="w-[100%] mt-[20px]">
        <ProfileTextualArea
          name={name}
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
