import Text from "../Atoms/Text";
import { RiArrowDownSFill } from "react-icons/ri";
import AnalyticsSingleLink from "../Molecules/AnalyticsSingleLink";
import { useAppSelector } from "../Hooks/reduxHooks";

const AnalyticsLinks = () => {
  const analytics = useAppSelector((state) => state.analyticsHandeler);
  console.log(analytics?.links);

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
        {analytics?.links?.length > 0 ? (
          analytics?.links?.map((elm) => {
            return <AnalyticsSingleLink link={elm} />;
          })
        ) : (
          <div className="w-[100%] h-[100%] flex items-center justify-center ">
            <Text
              text="No links to show"
              classes="font-[600] text-[16px] text-[#4D4D4D]"
            />
          </div>
        )}

        {/* <AnalyticsSingleLink />
        <AnalyticsSingleLink />
        <AnalyticsSingleLink /> */}
      </div>
    </div>
  );
};

export default AnalyticsLinks;
