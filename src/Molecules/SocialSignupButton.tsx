import Button from "../Atoms/Button";
import { socialbuttonProps } from "../Types";
import google from "../assets/images/google.png";
import microsoft from "../assets/images/microsoft.png";

const SocialSignupButton: React.FC<socialbuttonProps> = ({
  isGoogle,
  btnClasses,
  func,
}) => {
  return (
    <>
      <Button
        img={isGoogle ? google : microsoft}
        text={isGoogle ? "Google" : "Microsoft"}
        btnClasses={btnClasses}
        imgClasses="h-[20px] w-[20px] object-cover"
        onClick={() => func()}
      />
    </>
  );
};

export default SocialSignupButton;
