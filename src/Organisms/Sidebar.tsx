import Logo from "../Molecules/Logo";
import SidebarButton from "../Molecules/SidebarButton";
import i1 from "../assets/images/i1.png";
import i2 from "../assets/images/i2.png";
import i3 from "../assets/images/i3.png";
import i4 from "../assets/images/i4.png";
import i5 from "../assets/images/i5.png";
import i6 from "../assets/images/i6.png";

import hi1 from "../assets/images/hi1.png";
import hi2 from "../assets/images/hi2.png";
import hi3 from "../assets/images/hi3.png";
import hi5 from "../assets/images/hi5.png";
import hi6 from "../assets/images/hi6.png";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath: string = window.location.pathname;
  return (
    <div className="h-[100%] w-[17%] border bg-white flex justify-center items-center">
      <div className="h-[95%] w-[92%]  flex flex-col items-center">
        <Logo Imgclasses="h-[50px] w-[50px] object-cover" containerClasses="" />
        <div className="mt-8 w-[100%] flex flex-col gap-4 h-[60%] overflow-y-scroll">
          <SidebarButton
            icon={i1}
            hoverIcon={hi1}
            text="Profiles"
            onClick={() => navigate("/myprofiles")}
            state={
              currentPath === "/myprofiles" || currentPath?.includes("/edit")
            }
          />
          <SidebarButton
            icon={i2}
            hoverIcon={hi2}
            text="Team"
            onClick={() => navigate("/teams")}
            state={currentPath === "/teams"}
          />
          <SidebarButton
            icon={i3}
            hoverIcon={hi3}
            text="Connections"
            onClick={() => navigate("/connections")}
            state={currentPath === "/connections"}
          />
          <SidebarButton
            icon={i4}
            hoverIcon={i4}
            text="Analytics"
            onClick={() => navigate("/analytics")}
            state={currentPath === "/analytics"}
          />
          <SidebarButton
            icon={i5}
            hoverIcon={hi5}
            text="Devices"
            onClick={() => navigate("/devices")}
            state={currentPath === "/devices"}
          />
          <SidebarButton
            icon={i6}
            hoverIcon={hi6}
            text="Support"
            onClick={() => navigate("/support")}
            state={currentPath === "/support"}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
