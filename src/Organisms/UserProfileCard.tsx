import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import ProfileBackgroundImage from "../Molecules/ProfileBackgroundImage";
import ProfilePictureWithLogo from "../Molecules/ProfilePictureWithLogo";
import ProfileTextualArea from "../Molecules/ProfileTextualArea";
import { prflCardProps } from "../Types";
import { FaArrowRightLong } from "react-icons/fa6";
import SquareIconBtn from "../Molecules/SquareIconBtn";

const UserProfileCard: React.FC<prflCardProps> = ({ isCreatePrfl }) => {
  const navigate = useNavigate();
  return (
    <div
      className="h-[350px] w-[270px] shadow-md flex flex-col items-center rounded-[30px] bg-[white]"
      style={{ opacity: isCreatePrfl ? "50%" : "100%" }}
    >
      <div className="w-[94%] mt-2 flex justify-center relative">
        {!isCreatePrfl && (
          <div className="h-[26px] w-[99px] rounded-full bg-[#959595A8] text-[white] flex justify-center items-center font-[600] text-[10px] absolute left-[10px] top-[10px]">
            Business Profile
          </div>
        )}
        <ProfileBackgroundImage containerClass="" imgClass="" src="" />
        <div className="absolute bottom-[-45px]">
          <ProfilePictureWithLogo showLogo={false} />
        </div>
      </div>
      {!isCreatePrfl ? (
        <>
          <ProfileTextualArea />

          <div className="w-[100%] flex justify-center">
            <div className="w-[85%] flex justify-between mt-3">
              <SquareIconBtn
                btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer"
                imgClass="h-[20px] w-[18px] object-cover"
                action={() => {}}
                btnType={3}
              />
              <SquareIconBtn
                btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer"
                imgClass="h-[20px] w-[20px] object-cover"
                action={() => navigate("/edit/123")}
                btnType={2}
              />
              <SquareIconBtn
                btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer"
                imgClass="h-[20px] w-[20px] object-cover"
                action={() => {}}
                btnType={1}
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <Text
            text="CREATE NEW PROFILE"
            classes="font-[700] text-[17px] text-center mt-[60px]"
          />
          <Text
            text="With different information and design"
            classes="font-[400] text-[11px]"
          />
          <Button
            btnClasses="bg-[#2B6EF6] text-[white] w-[235px] h-[50px] text-[600] text-[16px] rounded-[12px] flex justify-center items-center mt-[35px] gap-2"
            text="Create new profile"
            icon={<FaArrowRightLong />}
            onClick={() => {}}
          />
        </>
      )}
    </div>
  );
};

export default UserProfileCard;