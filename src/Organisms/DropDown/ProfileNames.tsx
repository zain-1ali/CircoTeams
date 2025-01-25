import { FC } from "react";
import Text from "../../Atoms/Text";

const ProfileNames: FC<any> = ({ handleSelectName, ActiveName }) => {
  const Names = [
    "Primary Profile",

    "Secondary Profile",

    "Business Profile",

    "Event Profile",

    "Social Profile",
  ];

  return (
    <div className="h-[210px] w-[240px] p-3 rounded-[18px] overflow-hidden">
      <Text classes="text-[14px] font-[700]" text="Select Profile Name" />
      <div className="w-[100%] h-[180px] overflow-y-scroll">
        {Names?.map((elm) => {
          return (
            <div
              className="cursor-pointer mt-1"
              onClick={() => handleSelectName(elm)}
            >
              <Text
                classes={`text-[15px] font-[500] px-2 py-1 ${
                  ActiveName === elm ? "bg-[#e0e4e9]" : "bg-white"
                }`}
                text={elm}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProfileNames;
