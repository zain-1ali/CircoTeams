import { useAppSelector } from "../../Hooks/reduxHooks";
import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";
import { appendBucketPath } from "../../Services/Constants";

const Classic = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const name = profileData?.profileType == "circoTemplate" ? "User Name" : profileData?.firstName + " " + profileData?.lastName;
  return (
    <div className={`w-[90%] h-[100%]`}>
      <div className="w-[100%] h-[128px] relative mt-4">
        <ProfileBackgroundImage src={appendBucketPath(profileData?.coverUrl || "")} />
        <div className="w-[100%] flex justify-center  absolute bottom-[-40px]">
          <ProfilePictureWithLogo
            logo={appendBucketPath(profileData?.logoUrl || "")}
            profile={appendBucketPath(profileData?.profileUrl || "")}
            showLogo={!profileData?.profileDesign?.hideCompanyLogo}
          />
        </div>
      </div>
      <div
        className={`w-[100%] mt-[55px] ${
          profileData.profileDesign.whiteTextAndBorder
            ? "text-white"
            : "text-black"
        }`}
      >
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

export default Classic;
