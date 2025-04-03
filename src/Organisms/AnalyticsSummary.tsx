import Text from "../Atoms/Text";
import { useAppSelector } from "../Hooks/reduxHooks";
import AnalyticsCountBox from "../Molecules/AnalyticsCountBox";
import i18 from "../assets/images/i18.png";
import i19 from "../assets/images/i19.png";
import i20 from "../assets/images/i20.png";
import i21 from "../assets/images/i21.png";

const AnalyticsSummary = () => {
  const innerHeight: number = window.innerHeight;
  const analytics = useAppSelector((state) => state.analyticsHandeler);
  const ctr: number =
    (analytics?.totalClicks / analytics?.totalViews) * 100 || 0;
  return (
    <div
      className={`w-[100%] h-[58%] bg-white rounded-[20px] px-3 ${
        innerHeight <= 700 ? "py-1" : "py-3"
      }`}
    >
      <Text classes="font-[700] text-[16px]" text="Summary" />
      <div
        className={`w-[100%] flex justify-between ${
          innerHeight <= 700 ? "mt-1" : "mt-3"
        }`}
      >
        <AnalyticsCountBox
          text="Profile Views"
          icon={i18}
          count={analytics?.todayViews}
          iconStyle="h-[12px] w-[18px]"
        />
        <AnalyticsCountBox
          text="Link Clinks"
          icon={i19}
          count={analytics?.totalClicks}
          iconStyle="h-[17px] w-[17.5px]"
        />
        <AnalyticsCountBox
          text="CTR"
          icon={i20}
          count={ parseFloat(ctr.toFixed(2))}
          iconStyle="h-[18px] w-[18px]"
        />
        <AnalyticsCountBox
          text="Connections"
          icon={i21}
          count={analytics?.totalLeads}
          iconStyle="h-[12px] w-[14px]"
        />
      </div>
    </div>
  );
};

export default AnalyticsSummary;
