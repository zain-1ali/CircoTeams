import { useEffect, useState } from "react";
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
import { getMultipleChilds } from "../Services/Constants";

const AnalyticsTemplate = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allProfiles, setAllProfiles] = useState<any>([]);
  const dispatch = useAppDispatch();
  const analytics = useAppSelector((state) => state.analyticsHandeler);
  console.log(loading);

  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const isAdmin: string | null = localStorage.getItem("isAdmin") || "true";
  const handleSetAnalytics = (data: any) => {
    console.log(data, "here is data into the function");
    dispatch(setAnalytics(data));
  };
  const getAllProfiles = (data: any) => {
    if (data) {
      const teamIds = Object.values(data)?.map((item: any) => {
        if (item?.profileType !== "self" && item?.id !== undefined) {
          return item?.id;
        }
      });

      // console.log(teamIds,"team ids");
      setAllProfiles(teamIds?.map((item: any) => item !== undefined && item));

      if (isAdmin === "true") {
        getAnalytics(
          teamIds?.map((item: any) => item !== undefined && item),
          "object",
          handleSetAnalytics,
          setLoading
        );
      } else {
        getAnalytics(companyId, "user", handleSetAnalytics, setLoading);
      }
    } else {
      getAnalytics(companyId, "user", handleSetAnalytics, setLoading);
    }
  };

  const handleClearFilters = () => {
    getAnalytics(allProfiles, "object", handleSetAnalytics, setLoading);
  };

  // getting company profile
  useEffect(() => {
    if (isAdmin === "true") {
      getMultipleChilds(
        "User/",
        "parentID",
        companyId,
        getAllProfiles,
        setLoading
      );
    } else {
      getAnalytics(companyId, "user", handleSetAnalytics, setLoading);
    }
  }, []);

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
        <AnalyticsHeader
          handleGetAnalytics={handleGetAnalytics}
          handleClearFilters={handleClearFilters}
        />
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
                  data={returnDataForChart(analytics?.weeklyConnections)}
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
