import { useAppSelector } from "../../Hooks/reduxHooks";
// import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
// import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";

const Card = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div className={`w-[100%] h-[100%]`}>
      {/* <div className="w-[100%] flex justify-center mt-11">
        <ProfilePictureWithLogo
          logo={profileData?.logoUrl}
          profile={profileData?.profileUrl}
          showLogo={!profileData?.profileDesign?.hideCompanyLogo}
        />
      </div> */}

      <div className="w-[100%] h-[210px] relative overflow-hidden">
        <div
          className="w-[100%] h-[20px] absolute bottom-[0px]  rounded-t-3xl"
          style={{
            backgroundColor: profileData?.profileDesign?.backgroundColor,
          }}
        ></div>

        {profileData?.profileUrl && (
          <img
            src={profileData?.profileUrl}
            className="w-[100%] h-[400px]  object-cover"
            alt=""
          />
        )}
      </div>
      <div className="w-[100%]">
        <ProfileTextualArea
          name={profileData?.firstName + " " + profileData?.lastName}
          job={profileData.jobTitle}
          location={profileData.address}
          company={profileData?.company}
          isCard={true}
          logo={profileData?.logoUrl || ""}
        />
      </div>

      <ProfileButtonsArea />
      <SocialLinks />
    </div>
  );
};

export default Card;
