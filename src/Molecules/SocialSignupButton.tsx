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
        icon={
          isGoogle ? (
            <img src={google} className="h-[20px] w-[20px] object-cover" />
          ) : (
            <img src={microsoft} className="h-[20px] w-[20px] object-cover" />
          )
        }
        text={isGoogle ? "Google" : "Microsoft"}
        btnClasses={btnClasses}
        onClick={() => func()}
      />
    </>
  );
};

export default SocialSignupButton;
