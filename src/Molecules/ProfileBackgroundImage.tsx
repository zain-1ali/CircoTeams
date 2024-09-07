import Image from "../Atoms/Image";
import { prflBgImgProps } from "../Types";
import bgPlchldr from "../assets/images/bgPlchldr.png";

const ProfileBackgroundImage: React.FC<prflBgImgProps> = ({
  imgClass = "w-[100%] h-[128px] rounded-[16px]",
  containerClass = "w-[100%] h-[100%] rounded-[16px]",
  src,
}) => {
  return (
    <div className={containerClass}>
      <Image classes={imgClass} src={src || bgPlchldr} />
    </div>
  );
};

export default ProfileBackgroundImage;
