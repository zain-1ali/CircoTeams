import SidebarButton from "../Molecules/SidebarButton";
import i11 from "../assets/images/i11.png";
import i12 from "../assets/images/i12.png";
import i13 from "../assets/images/i13.png";
import i2 from "../assets/images/i2.png";

import hi11 from "../assets/images/hi11.png";
import hi12 from "../assets/images/hi12.png";
import hi2 from "../assets/images/hi2.png";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Hooks/reduxHooks";
import { setTeamSection } from "../Redux/TeamsSectionSlice";

const TeamsSidebar = () => {
  const dispatch = useDispatch();
  const teamSectionStage = useAppSelector(
    (state) => state.teamSectionHandeler.teamSectionStage
  );

  return (
    <div className="h-[100%] w-[16%] flex justify-center  border-r">
      <div className="mt-7 w-[95%] gap-4 flex flex-col">
        <SidebarButton
          icon={i2}
          hoverIcon={hi2}
          text="Members"
          height="h-[40px]"
          onClick={() => dispatch(setTeamSection(0))}
          state={teamSectionStage === 0}
        />
        <SidebarButton
          icon={i11}
          hoverIcon={hi11}
          text="Subteams"
          height="h-[40px]"
          onClick={() => dispatch(setTeamSection(1))}
          state={teamSectionStage === 1}
        />
        <SidebarButton
          icon={i12}
          hoverIcon={hi12}
          text="Templates"
          height="h-[40px]"
          onClick={() => dispatch(setTeamSection(2))}
          state={teamSectionStage === 2}
        />
        <SidebarButton
          icon={i13}
          hoverIcon={i13}
          text="Add Member"
          height="h-[40px]"
          onClick={() => dispatch(setTeamSection(3))}
          state={teamSectionStage === 3}
        />
      </div>
    </div>
  );
};

export default TeamsSidebar;
