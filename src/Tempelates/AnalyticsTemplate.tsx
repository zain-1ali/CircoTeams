import Text from "../Atoms/Text";
import AnalyticsHeader from "../Molecules/AnalyticsHeader";
import AnalyticsLinks from "../Organisms/AnalyticsLinks";
import AnalyticsRecentConnections from "../Organisms/AnalyticsRecentConnections";
import AnalyticsSummary from "../Organisms/AnalyticsSummary";
import Sidebar from "../Organisms/Sidebar";

const AnalyticsTemplate = () => {
  return (
    <div className="h-screen w-screen flex bg-[#f6f6f6]">
      <Sidebar />
      <div className="h-[100%] w-[83%] pt-6 px-5">
        <AnalyticsHeader />
        <div className="w-[100%] h-[91%]  mt-5 flex flex-col justify-between">
          <div className="w-[100%] h-[47%]  flex justify-between items-center">
            <div className=" h-[100%] w-[59%] flex flex-col justify-between">
              <AnalyticsSummary />
              <AnalyticsRecentConnections />
            </div>

            <div className=" h-[100%] w-[39%]">
              <AnalyticsLinks />
            </div>
          </div>

          <div className="w-[100%] h-[50%]  flex justify-between">
            <div className="h-[100%] w-[49%] bg-white rounded-[10px] px-[14px] py-[14px]">
              <Text
                text="Views Over Time"
                classes="font-[700] text-[16px] text-[#4D4D4D]"
              />
            </div>
            <div className="h-[100%] w-[49%] bg-white rounded-[10px] px-[14px] py-[14px]">
              <Text
                text="Connections Over Time"
                classes="font-[700] text-[16px] text-[#4D4D4D]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTemplate;
