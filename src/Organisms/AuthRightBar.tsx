import authImg from "../assets/images/authImg.png";
import Image from "../Atoms/Image";
import { useAppSelector } from "../Hooks/reduxHooks";
import CardPreview from "./CardPreview";

const AuthRightBar = () => {
  const isSignupCreateProfile = useAppSelector(
    (state) => state.CreateProfileHandeler.isSignupCreateProfile
  );
  return (
    <div className="h-[100%] w-[73%] bg-[#F7F7F8] flex justify-center items-center">
      {isSignupCreateProfile ? (
        <CardPreview isAuth={true} />
      ) : (
        <Image src={authImg} classes="h-[532px] w-[517px] object-cover" />
      )}
    </div>
  );
};

export default AuthRightBar;
