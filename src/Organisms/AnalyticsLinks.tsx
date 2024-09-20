import Text from "../Atoms/Text";
import { RiArrowDownSFill } from "react-icons/ri";
import AnalyticsSingleLink from "../Molecules/AnalyticsSingleLink";

const AnalyticsLinks = () => {
  return (
    <div className="h-[100%] w-[100%] bg-white rounded-[20px] px-3 py-3">
      <div className="flex items-center gap-1">
        <Text
          text="Link Clicks"
          classes="font-[600] text-[16px] text-[#4D4D4D]"
        />
        <RiArrowDownSFill />
      </div>
      <div className="w-[100%] h-[90%] overflow-y-scroll">
        <AnalyticsSingleLink />
        <AnalyticsSingleLink />
        <AnalyticsSingleLink />
        <AnalyticsSingleLink />
      </div>
    </div>
  );
};

export default AnalyticsLinks;
