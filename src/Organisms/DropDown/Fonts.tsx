import { FC } from "react";
import Text from "../../Atoms/Text";

const Fonts: FC<any> = ({ handleSelectFont, ActiveFont }) => {
  const fonts = [
    { name: "SF Pro", id: "6" },
    { name: "Inika", id: "1" },
    { name: "Gugi", id: "2" },
    { name: "Gothic", id: "3" },
    { name: "Marck Script", id: "4" },
    { name: "Chivo", id: "5" },
   
  ];

  return (
    <div className="h-[230px] w-[240px] p-3 rounded-[18px] overflow-hidden">
      <Text classes="text-[14px] font-[700]" text="Select font" />
      <div className="w-[100%] h-[180px] overflow-y-scroll">
        {fonts?.map((elm) => {
          return (
            <div
            className="cursor-pointer mt-0"
            onClick={() => handleSelectFont(elm?.id)}
          >
            <Text
              classes={`text-[15px] font-[500] px-2 py-1 ${ActiveFont === elm?.id ? 'bg-[#e0e4e9]' : 'bg-white'}`}
              text={elm?.name}
            />
          </div>
          );
        })}
      </div>
    </div>
  );
};

export default Fonts;
