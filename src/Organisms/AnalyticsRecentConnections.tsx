import Text from "../Atoms/Text";
import { useAppSelector } from "../Hooks/reduxHooks";

const AnalyticsRecentConnections = () => {
  const analytics = useAppSelector((state) => state.analyticsHandeler);
  return (
    <div className="w-[100%] h-[39%] bg-white rounded-[20px] px-3 py-1">
      <Text text="Recent Connections" classes="font-[700] text-[15px]" />
      <div className="w-[100%] h-[80%]  flex justify-start gap-3 flex-wrap">
        {analytics?.recentConnections?.map((elm) => {
          return (
            <div className="w-[32%] h-[30px] rounded-[8px] bg-[#F9F9F9] font-[500] text-[8.5px] flex justify-center items-center text-center text-[#8B8B8B]">
              Connected with {elm?.name} on {elm?.date}
            </div>
          );
        })}

        {/* <div className="w-[32%] h-[30px] rounded-[8px] bg-[#F9F9F9] font-[500] text-[8.5px] flex justify-center items-center text-center text-[#8B8B8B]">
          Connected with Ryan Poole on August 7th
        </div>
        <div className="w-[32%] h-[30px] rounded-[8px] bg-[#F9F9F9] font-[500] text-[8.5px] flex justify-center items-center text-center text-[#8B8B8B]">
          Connected with Ryan Poole on August 7th
        </div>
        <div className="w-[32%] h-[30px] rounded-[8px] bg-[#F9F9F9] font-[500] text-[8.5px] flex justify-center items-center text-center text-[#8B8B8B]">
          Connected with Ryan Poole on August 7th
        </div> */}
      </div>
    </div>
  );
};

export default AnalyticsRecentConnections;
