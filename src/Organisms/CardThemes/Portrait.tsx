import { useAppSelector } from "../../Hooks/reduxHooks";
// import ProfileBackgroundImage from "../../Molecules/ProfileBackgroundImage";
import ProfileButtonsArea from "../../Molecules/ProfileButtonsArea";
// import ProfilePictureWithLogo from "../../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../../Molecules/ProfileTextualArea";
import { SocialLinks } from "../SocialLinks";

import profilePlchldr from "../../assets/images/plchldrsqr.jpg";
import logoPlchldr from "../../assets/images/logoPlchldr.png";

const Portrait = () => {
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

      <div className="w-[100%] h-[210px] relative">
        <div
          className="w-[100%] h-[70px]  absolute bottom-[-100px]"
          style={{
            background: `linear-gradient(to top, ${
              profileData?.profileDesign?.backgroundColor
                ? profileData?.profileDesign?.backgroundColor
                : "#ffffff"
            },${
              profileData?.profileDesign?.backgroundColor
                ? profileData?.profileDesign?.backgroundColor
                : "#ffffff"
            }, transparent)`,
            //   background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, ${profileData?.profileDesign?.backgroundColor} 100%)`,
          }}
        ></div>
        <div className="h-[60px] w-[60px]  rounded-full absolute bottom-[-45px] left-4">
          {profileData?.logoUrl && (
            <img
              src={profileData?.logoUrl || logoPlchldr}
              alt=""
              className="h-[50px] w-[50px]  rounded-full"
              style={{
                display: profileData?.profileDesign.hideCompanyLogo
                  ? "none"
                  : undefined,
              }}
            />
          )}
        </div>
        {/* {profileData?.profileUrl && ( */}
        <img
          src={profileData?.profileUrl || profilePlchldr}
          className="w-[100%] h-[280px] object-cover"
          alt=""
        />
        {/* // )} */}
      </div>
      <div className="w-[100%] mt-[90px]">
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

export default Portrait;
