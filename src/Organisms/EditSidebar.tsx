import SidebarButton from "../Molecules/SidebarButton";
import i1 from "../assets/images/i1.png";
import pfb4 from "../assets/images/pfb4.png";
import i7 from "../assets/images/i7.png";
import pfb5 from "../assets/images/pfb5.png";
import i8 from "../assets/images/i8.png";

import hi1 from "../assets/images/hi1.png";
import hi8 from "../assets/images/hi8.png";
import hi7 from "../assets/images/hi7.png";
import hi10 from "../assets/images/hi10.png";
import hi9 from "../assets/images/hi9.png";
import { useDispatch } from "react-redux";
import { useAppSelector } from "../Hooks/reduxHooks";
import { setProfileEditSection } from "../Redux/EditSectionsSlice";

const EditSidebar = () => {
  const dispatch = useDispatch();
  const profileEditSection = useAppSelector(
    (state) => state.profileEditSectionHandeler.profileEditSectionStage
  );
  const profileTitle = useAppSelector(
    (state) => state.profileHandler?.profileTitle
  );

  console.log(profileEditSection);

  return (
    <div className="h-[100%] w-[14%] flex justify-center  border-r">
      <div className="mt-7 w-[95%] gap-4 flex flex-col">
        <SidebarButton
          icon={i1}
          hoverIcon={hi1}
          text="Info"
          height="h-[40px]"
          onClick={() => dispatch(setProfileEditSection(0))}
          state={profileEditSection === 0}
        />
        <SidebarButton
          icon={pfb4}
          hoverIcon={hi8}
          text="Links"
          height="h-[40px]"
          onClick={() => dispatch(setProfileEditSection(1))}
          state={profileEditSection === 1}
        />
        <SidebarButton
          icon={i7}
          hoverIcon={hi7}
          text="Design"
          height="h-[40px]"
          onClick={() => dispatch(setProfileEditSection(2))}
          state={profileEditSection === 2}
        />
        {profileTitle != "circoTemplate" && (
          <SidebarButton
            icon={pfb5}
            hoverIcon={hi10}
            text="Share"
            height="h-[40px]"
            onClick={() => dispatch(setProfileEditSection(3))}
            state={profileEditSection === 3}
          />
        )}
        {profileTitle != "circoTemplate" && (
          <SidebarButton
            icon={i8}
            hoverIcon={hi9}
            text="Settings"
            height="h-[40px]"
            onClick={() => dispatch(setProfileEditSection(4))}
            state={profileEditSection === 4}
          />
        )}
      </div>
    </div>
  );
};

export default EditSidebar;
