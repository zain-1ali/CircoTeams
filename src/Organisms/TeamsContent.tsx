import TeamsGetStarted from "../Molecules/TeamsGetStarted";

const TeamsContent = () => {
  const innerHeight: number = window.innerHeight;
  return (
    <div className="w-[83%] h-[100%] bg-[#F7F7F8] flex justify-center  relative">
      <div
        className={`w-[97%] flex ${
          innerHeight > 700 ? "h-[97%]" : "h-[97%]"
        }  bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center items-center`}
      >
        <TeamsGetStarted />
      </div>
    </div>
  );
};

export default TeamsContent;
