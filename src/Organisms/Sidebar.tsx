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
import lamp from "../assets/images/lamp.png";
import logout from "../assets/images/logout.png";
import { useNavigate } from "react-router-dom";
import Button from "../Atoms/Button";
import UserAvatar from "../Molecules/UserAvatar";
import Image from "../Atoms/Image";
import { useEffect, useState } from "react";
import { getSingleChildFromDb } from "../Services/Constants";
import CustomModal from "./Modal/Modal";
import AreYouSure from "./Modal/AreYouSure";
import { logoutUser } from "../Services/userService.js";

const Sidebar = () => {
  const navigate = useNavigate();
  const currentPath: string = window.location.pathname;
  const innerHeight = window.innerHeight;
  console.log(innerHeight, "innerHeight");
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [companyProfile, setCompanyProfile] = useState<any>({});

  const getCompanyProfile = (data: any) => {
    if (data) {
      setCompanyProfile(Object.values(data)?.[0]);
    }
  };

  // getting company profile
  useEffect(() => {
    getSingleChildFromDb("/User", "id", companyId, getCompanyProfile);
  }, []);

  console.log(companyProfile);

  const [sureModal, setSureModal] = useState<boolean>(false);

  return (
    <div className="h-[100%] w-[17%]  bg-white flex justify-center items-center">
      <div className="max-h-[95%] h-[95%] w-[92%]  flex flex-col items-center  overflow-y-scroll">
        <Logo Imgclasses="h-[50px] w-[50px] object-cover" containerClasses="" />
        <div className="mt-8 w-[100%] flex flex-col gap-4  ">
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
        <div
          className={`min-h-[161px]  max-h-[161px] rounded-[20px] w-[95%] bg-[#f0f7ff] mt-[30px] flex justify-center relative ${
            innerHeight < 700 ? "" : "mt-[30px]"
          }`}
        >
          <Image
            src={lamp}
            classes="h-[150px] w-[150px] absolute top-[-25px]"
          />
          <Button
            btnClasses="w-[138px] h-[33px] bg-primary rounded-[10px] text-white text-[12px] font-[600] absolute bottom-4"
            text="Upgrade Now"
            onClick={() => {}}
          />
        </div>

        <div className="w-[95%]  flex justify-between mt-6 items-center">
          <UserAvatar
            name={companyProfile?.firstName + " " + companyProfile?.lastName}
            picture={companyProfile?.profileUrl}
            type="Free Account"
          />
          <div onClick={() => setSureModal(true)}>
            <Image src={logout} classes="w-[34px] h-[32px]" />
          </div>
        </div>

        <CustomModal
          open={sureModal}
          onClose={() => setSureModal(false)}
          style={{ height: 150, width: 350, borderRadius: 5, p: 4 }}
        >
          <AreYouSure
            onClick={() => logoutUser()}
            onClose={() => setSureModal(false)}
            text="Are you sure you want to logout?"
          />
        </CustomModal>
      </div>
    </div>
  );
};

export default Sidebar;
