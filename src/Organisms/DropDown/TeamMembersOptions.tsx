import { MenuItem } from "@mui/material";
import React from "react";
import { QRCode } from "react-qrcode-logo";
import { downloadQRCode } from "../../utils/downloadQr";
import CustomModal from "../Modal/Modal";
import AreYouSure from "../Modal/AreYouSure";
import { deleteSingleChild } from "../../Services/userService.js";
import useToastNotifications from "../../Hooks/useToastNotification.js";

const TeamMembersOptions: React.FC<any> = ({ profileData }) => {
  const qrValue = `https://circome.netlify.app/${
    profileData?.username || profileData?.id
  }`; // Change to your desired QR data

  const [sureModal, setSureModal] = React.useState(false);
  const [warnText, setWarnText] = React.useState(
    "Are you sure you want to set this profile as admin?"
  );
  const [loading, setLoading] = React.useState(false);

  const { showError, showSuccess } = useToastNotifications();
  console.log(loading);

  const handleDeleteProfile = () => {
    console.log(profileData);
    let updatedData = {
      ...profileData,
      id: profileData?.id,
      parentID: profileData?.parentID,
    };
    deleteSingleChild(
      updatedData,
      showError,
      showSuccess,
      () => {},
      setLoading
    );
    // DeleteProfileByApi(selectedId, deleteProfileCallback);
  };
  return (
    <>
      <MenuItem
        // onClick={handleViewClick}
        sx={{
          fontSize: "14px",
          textAlign: "center",
          justifyContent: "center", // Ensures the text is fully centered
        }}
        onClick={() =>
          window.open(
            `https://circome.netlify.app/${
              profileData?.username || profileData?.id
            }`
          )
        }
      >
        View card
      </MenuItem>
      <hr className="border-t border-gray-200" />
      <MenuItem
        onClick={() => downloadQRCode("qrCodeEl")}
        sx={{
          fontSize: "14px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Download QR
      </MenuItem>
      <hr className="border-t border-gray-200" />
      <MenuItem
        onClick={() => {
          setSureModal(true),
            setWarnText("Are you sure you want to set this profile as admin?");
        }}
        sx={{
          fontSize: "14px",
          textAlign: "center",
          justifyContent: "center",
        }}
      >
        Set as admin
      </MenuItem>
      <hr className="border-t border-gray-200" />
      <MenuItem
        onClick={() => {
          setSureModal(true),
            setWarnText("Are you sure you want to remove this profile?");
        }}
        sx={{
          fontSize: "14px",
          textAlign: "center",
          justifyContent: "center",
          color: "#FB2E2E",
        }}
      >
        Remove from team
      </MenuItem>

      <CustomModal
        open={sureModal}
        onClose={() => setSureModal(false)}
        style={{ height: 150, width: 350, borderRadius: 5, p: 4 }}
      >
        <AreYouSure
          onClick={
            warnText?.includes("admin") ? () => {} : () => handleDeleteProfile()
          }
          onClose={() => setSureModal(false)}
          text={warnText}
        />
      </CustomModal>
      <div style={{ display: "none" }}>
        <QRCode
          id="qrCodeEl"
          value={qrValue}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          logoWidth={40}
          logoHeight={40}
        />
      </div>
    </>
  );
};

export default TeamMembersOptions;
