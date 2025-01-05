import { FC } from "react";
import Text from "../../Atoms/Text";

const Fonts: FC<any> = ({ handleSelectFont }) => {
  const fonts = [
    { name: "Inika", id: "1" },
    { name: "Gugi", id: "2" },
    { name: "Gothic", id: "3" },
    { name: "Marck Script", id: "4" },
    { name: "Chivo", id: "5" },
    { name: "SF Pro", id: "6" },
  ];

  return (
    <div className="h-[230px] w-[240px] p-3 rounded-[18px] overflow-hidden">
      <Text classes="text-[14px] font-[700]" text="Select font" />
      <div className="w-[100%] h-[180px] overflow-y-scroll">
        {fonts?.map((elm) => {
          return (
            <div
              className="cursor-pointer mt-2"
              onClick={() => handleSelectFont(elm?.id)}
            >
              <Text classes="text-[15px] font-[500]" text={elm?.name} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fonts;
