import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
// import { HiFilter } from "react-icons/hi";
import { LuCalendarDays } from "react-icons/lu";
import HeaderFilter from "../Organisms/HeaderFilter";
// import { useAppDispatch } from "../Hooks/reduxHooks";

const AnalyticsHeader: React.FC<any> = ({ handleGetAnalytics,handleClearFilters }) => {
  const isAdmin: string | null = localStorage.getItem("isAdmin") || "true";
  return (
    <div className="w-[100%] flex justify-between items-center ">
      <Text text="Analytics" classes="font-[600] text-[18px]" />
      <div className="flex items-center gap-4">
        {/* <Button
          text="Filter"
          btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-3"
          onClick={() => {}}
          icon={<HiFilter className="absolute left-4 text-[16px]" />}
        /> */}
       {isAdmin === "true" && <>
        <HeaderFilter applyFilterId={handleGetAnalytics}  handleClearFilters={handleClearFilters} />
        <Button
          text="Week to date"
          btnClasses="w-[131px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-5"
          onClick={() => {}}
          icon={<LuCalendarDays className="absolute left-4 text-[16px]" />}
        />
        </>}
      </div>
    </div>
  );
};

export default AnalyticsHeader;
