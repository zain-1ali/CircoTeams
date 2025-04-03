import { useAppSelector } from "../../Hooks/reduxHooks";
// import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
// import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";
import profilePlchldr from "../../assets/images/plchldrsqr.jpg";
import logoPlchldr from "../../assets/images/logoPlchldr.png";

const Card = () => {
  const profileData = useAppSelector((state) => state.profileHandler);
  const name = profileData?.profileType == "circoTemplate" ? "User Name" : profileData?.firstName + " " + profileData?.lastName;
  return (
    <div className={`w-[100%] h-[100%]`}>
      {/* <div className="w-[100%] flex justify-center mt-11">
        <ProfilePictureWithLogo
          logo={profileData?.logoUrl}
          profile={profileData?.profileUrl}
          showLogo={!profileData?.profileDesign?.hideCompanyLogo}
        />
      </div> */}

      <div className="w-[100%] h-[300px] relative overflow-hidden">
        <div
          className="w-[100%] h-[20px] absolute bottom-[0px]  rounded-t-3xl "
          style={{
            backgroundColor: profileData?.profileDesign?.backgroundColor,
          }}
        ></div>

        {/* {profileData?.profileUrl && ( */}
        <img
          src={profileData?.profileUrl || profilePlchldr}
          className="w-[100%] h-[300px]  object-cover"
          alt=""
        />
        {/* )} */}
      </div>
      <div className="w-[100%]">
        <ProfileTextualArea
          name={name}
          job={profileData.jobTitle}
          location={profileData.address}
          company={profileData?.company}
          isCard={true}
          logo={profileData?.logoUrl || logoPlchldr}
        />
      </div>

      <ProfileButtonsArea />
      <SocialLinks />
    </div>
  );
};

export default Card;
