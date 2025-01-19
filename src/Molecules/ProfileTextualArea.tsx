import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { useAppSelector } from "../Hooks/reduxHooks";
// import { useAppSelector } from "../Hooks/reduxHooks";
import { prfTextsProps } from "../Types";

const ProfileTextualArea: React.FC<prfTextsProps> = ({
  name,
  job,
  location,
  company,
  isCard = false,
  logo,
}) => {
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div
      className={`w-[100%] flex ${
        isCard ? "justify-between pl-3 pr-2" : "justify-center"
      } ${profileData?.profileDesign?.whiteTextAndBorder ? "text-white":"text-black"} min-h-[80px]`}
    >
      <div
        className={`flex flex-col ${
          isCard ? "items-start" : "items-center"
        }  w-[80%]`}
      >
        <div className="w-[80%] h-max relative">
          {isCard && (
            <div
              className="h-[85%] w-[5px] absolute left-[-8px] rounded-full mt-[3px]"
              style={{
                backgroundColor: profileData?.profileDesign?.whiteTextAndBorder
                  ? "white"
                  : "black",
              }}
            ></div>
          )}
          <Text
            classes={`text-[15px] font-[700] ${
              isCard ? "text-left  w-[30%] " : "text-center  w-[100%]"
            }`}
            text={name === "undefined undefined" ? "" : name}
          />
        </div>

        <Text
          classes={`font-[400] text-[10px] w-[85%] ${
            isCard ? "text-left" : "text-center"
          } mt-[2px] `}
          text={job || ""}
        />
        <Text
          classes={`font-[400] text-[10px] w-[85%] ${
            isCard ? "text-left" : "text-center"
          } mt-[2px]`}
          text={company || ""}
        />
        <Text
          classes={`font-[400] text-[10px] w-[85%] ${
            isCard ? "text-left" : "text-center"
          } mt-[2px]`}
          text={location || ""}
        />
      </div>
      {isCard && <Image src={logo} classes="h-[40px] w-[40px]  rounded-full" />}
    </div>
  );
};

export default ProfileTextualArea;
