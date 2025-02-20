import { useState } from "react";
import Text from "../Atoms/Text";
import { useAppDispatch, useAppSelector } from "../Hooks/reduxHooks";
import AnalyticsHeader from "../Molecules/AnalyticsHeader";
import AnalyticsLinks from "../Organisms/AnalyticsLinks";
import AnalyticsRecentConnections from "../Organisms/AnalyticsRecentConnections";
import AnalyticsSummary from "../Organisms/AnalyticsSummary";
import Sidebar from "../Organisms/Sidebar";
import { getAnalytics } from "../Services/AnalyticsServices";
import { setAnalytics } from "../Redux/AnalyticsSlice";
// import { LineChart } from "@mui/x-charts/LineChart";
import Chart from "../Molecules/Chart";

const AnalyticsTemplate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const analytics = useAppSelector((state) => state.analyticsHandeler);
  console.log(analytics);
  console.log(loading);

  const handleSetAnalytics = (data: any) => {
    dispatch(setAnalytics(data));
  };

  const handleGetAnalytics = (id: string | string[], type: string) => {
    getAnalytics(id, type, handleSetAnalytics, setLoading);
  };

  const returnDataForChart = (data: any[]) => {
    const chartData = data.map((item: any, i) => {
      return {
        name: `day ${i + 1}`,
        uv: item,
      };
    });

    return chartData;
  };

  return (
    <div className="h-screen w-screen flex bg-[#f6f6f6]">
      <Sidebar />
      <div className="h-[100%] w-[83%] pt-6 px-5">
        <AnalyticsHeader handleGetAnalytics={handleGetAnalytics} />
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

              {/* <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                series={[
                  {
                    data: analytics?.weeklyViews,
                  },
                ]}
                width={500}
                height={250}
              /> */}

              <div style={{ width: "100%", height: 200 }} className="mt-3">
                <Chart
                  data={returnDataForChart(analytics?.weeklyViews)}
                  dataKey={"views"}
                />
              </div>
            </div>
            <div className="h-[100%] w-[49%] bg-white rounded-[10px] px-[14px] py-[14px]">
              <Text
                text="Connections Over Time"
                classes="font-[700] text-[16px] text-[#4D4D4D]"
              />
              {/* <LineChart
                xAxis={[{ data: [1, 2, 3, 4, 5, 6, 7] }]}
                series={[
                  {
                    data: analytics?.weeklyConnections,
                  },
                ]}
                width={500}
                height={250}
              /> */}

              <div style={{ width: "100%", height: 200 }} className="mt-3">
                <Chart
                  data={returnDataForChart(
                    analytics?.weeklyConnections,
                   
                  )}
                  dataKey={"connections"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsTemplate;
