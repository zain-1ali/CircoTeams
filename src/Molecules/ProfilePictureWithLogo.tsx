import Image from "../Atoms/Image";
import profilePlchldr from "../assets/images/profilePlchldr.png";
import logoPlchldr from "../assets/images/logoPlchldr.png";
import { prflLogoImgProps } from "../Types";

const ProfilePictureWithLogo: React.FC<prflLogoImgProps> = ({
  profileClasses = "h-[96px] w-[96px] relative  rounded-full",
  logoClasses = "h-[36px] w-[36px]  rounded-full absolute right-[-5px] bottom-[-5px]",
  profile = profilePlchldr,
  logo = logoPlchldr,
  showLogo,
}) => {
  return (
    <div className={profileClasses}>
      <Image
        src={profile}
        classes="h-[100%] w-[100%] rounded-full object-cover"
      />
      {showLogo && (
        <div className={logoClasses}>
          <Image
            src={logo}
            classes="h-[100%] w-[100%] rounded-full object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default ProfilePictureWithLogo;
