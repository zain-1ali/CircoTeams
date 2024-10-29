import Text from "../Atoms/Text";
import { prfTextsProps } from "../Types";

const ProfileTextualArea: React.FC<prfTextsProps> = ({
  name,
  job,
  location,
  company,
}) => {
  return (
    <div className="w-[100%] flex flex-col items-center  h-[80px] ">
      <Text
        classes="text-[15px] font-[700] w-[80%] text-center"
        text={name === "undefined undefined" ? "" : name}
      />
      <Text
        classes="font-[400] text-[10px] w-[85%] text-center mt-[2px]"
        text={job || ""}
      />
      <Text
        classes="font-[400] text-[10px] w-[85%] text-center mt-[2px]"
        text={company || ""}
      />
      <Text
        classes="font-[400] text-[10px] w-[85%] text-center mt-[2px]"
        text={location || ""}
      />
    </div>
  );
};

export default ProfileTextualArea;
