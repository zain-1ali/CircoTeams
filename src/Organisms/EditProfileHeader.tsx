import { useEffect, useState } from "react";
import SelectProfileDropdownButton from "../Molecules/SelectProfileDropdownButton";
import SquareIconBtn from "../Molecules/SquareIconBtn";
import DropDown from "./DropDown/DropDown";
import Profiles from "./DropDown/Profiles";
import { getMultipleChilds, getSingleChildFromDb } from "../Services/Constants";
import CustomModal from "./Modal/Modal";
import Qr from "./Modal/Qr";
import { useParams } from "react-router-dom";
import useToastNotifications from "../Hooks/useToastNotification";

const EditProfileHeader = () => {
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [companyProfile, setCompanyProfile] = useState<any>({});
  const [qrModal, setQrModal] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { showSuccess } = useToastNotifications();
  console.log(loading);
  const { id } = useParams();
  const [allProfiles, setAllProfiles] = useState<any>([]);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const handleOpenFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const openSubTeam = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const getCompanyProfile = (data: any) => {
    if (data) {
      setCompanyProfile(Object.values(data)?.[0]);
    }
  };

  const getAllProfiles = (data: any) => {
    if (data) {
      setAllProfiles(Object.values(data));
    }
  };

  const handleQrModal = (id: any) => {
    setQrModal(true);
    setSelectedId(id);
  };

  // getting company profile
  useEffect(() => {
    getSingleChildFromDb("/User", "id", companyId, getCompanyProfile);
  }, []);

  console.log(companyProfile);

  // getting all child profiles
  useEffect(() => {
    getMultipleChilds(
      "User/",
      "parentID",
      companyProfile?.id,
      getAllProfiles,
      setLoading
    );
  }, [companyProfile?.id]);

  const handleCopy = (text: any) => {
    navigator.clipboard.writeText("https://circome.netlify.app/" + text);
    showSuccess("Copied to clipboard");
  };

  return (
    <div className="w-[100%]  flex justify-between mt-3">
      <button
        id="profiles-button"
        aria-haspopup="listbox"
        aria-controls="profiles-menu"
        onClick={handleOpenFilter}
        className="outline-none focus:outline-none"
      >
        <SelectProfileDropdownButton />
      </button>

      <DropDown
        id="profiles-menu"
        anchorEl={anchorEl}
        open={openSubTeam}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "profiles-button",
          role: "listbox",
        }}
      >
        <Profiles
          teamProfiles={allProfiles?.filter(
            (elm: any) => elm?.profileType === "team"
          )}
          selfProfiles={[
            companyProfile,
            ...allProfiles?.filter((elm: any) => elm?.profileType === "self"),
          ]}
        />
      </DropDown>

      <div className="flex gap-4 items-center">
        <SquareIconBtn
          btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer bg-white"
          imgClass="h-[20px] w-[20px] object-cover"
          action={() => handleCopy(id)}
          btnType={4}
        />
        <SquareIconBtn
          btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer bg-white"
          imgClass="h-[20px] w-[20px] object-cover"
          action={() => handleQrModal(id)}
          btnType={5}
        />
        <SquareIconBtn
          btnClass="h-[50px] w-[50px] rounded-[12px] bg-[#F4F4F4] flex justify-center items-center cursor-pointer bg-white"
          imgClass="h-[20px] w-[20px] object-cover"
          action={() => {}}
          btnType={6}
        />
      </div>
      <CustomModal
        open={qrModal}
        onClose={() => setQrModal(false)}
        style={{ height: "300px", width: "300px", borderRadius: 5, p: 4 }}
      >
        <Qr userId={selectedId} />
      </CustomModal>
    </div>
  );
};

export default EditProfileHeader;
