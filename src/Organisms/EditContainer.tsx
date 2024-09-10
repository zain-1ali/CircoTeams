import { useAppSelector } from "../Hooks/reduxHooks";
import Design from "./EditSections/Design";
import EditInfo from "./EditSections/EditInfo";
import Links from "./EditSections/Links";
import Settings from "./EditSections/Settings";
import Share from "./EditSections/Share";

const EditContainer = () => {
  const profileEditSection = useAppSelector(
    (state) => state.profileEditSectionHandeler.profileEditSectionStage
  );
  return (
    <div className="w-[53%] h-[100%]  flex justify-center">
      {profileEditSection === 0 ? (
        <EditInfo />
      ) : profileEditSection === 1 ? (
        <Links />
      ) : profileEditSection === 2 ? (
        <Design />
      ) : profileEditSection === 3 ? (
        <Share />
      ) : profileEditSection === 4 ? (
        <Settings />
      ) : (
        <EditInfo />
      )}
      {/* <EditInfo /> */}
      {/* <Links /> */}
      {/* <Design /> */}
      {/* <Share /> */}
    </div>
  );
};

export default EditContainer;
