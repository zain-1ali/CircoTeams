// import React from "react";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import { useAppSelector } from "../Hooks/reduxHooks";
import CardPreview from "./CardPreview";
import { QRCode } from "react-qrcode-logo";
import { MdOutlineFileDownload } from "react-icons/md";
import { downloadQRCode } from "../utils/downloadQr";

const Profile_QrContainer = () => {
  const profileEditSection = useAppSelector(
    (state) => state.profileEditSectionHandeler.profileEditSectionStage
  );
  const profileData = useAppSelector((state) => state.profileHandler);
  return (
    <div className="h-[100%] border-l w-[33%] flex flex-col items-center   gap-3">
      {profileEditSection != 3 && (
        <>
          <Text
            text="Card Live Preview"
            classes="font-[400] text-[15px] text-center mt-3"
          />
          <div className="max-h-[90%] overflow-y-scroll w-[100%] flex justify-center">
            <div className="w-[100%] relative h-[600px] flex justify-center">
              <CardPreview isAuth={false} />
            </div>
          </div>
        </>
      )}

      {profileEditSection === 3 && (
        <>
          <Text
            text="QR Code Live Preview"
            classes="font-[400] text-[15px] text-center mt-4 mb-5"
          />

          <QRCode
            value={`https://www.test.com`}
            size={200}
            logoImage={profileData.qrLogo}
            fgColor={profileData.qrColor || "black"}
            logoOpacity={0.7}
            logoWidth={50}
            logoHeight={50}
            // eyeRadius={10}
          />
          {/* </div> */}

          <div style={{ display: "none" }}>
            <QRCode
              id="qrCodeEl"
              value={`https://www.test.com`}
              size={200}
              logoImage={profileData.qrLogo}
              enableCORS={true}
              fgColor={profileData.qrColor || "black"}
              logoOpacity={0.6}
              logoWidth={90}
              logoHeight={90}
              // eyeRadius={10}
            />
          </div>

          <Button
            onClick={() => downloadQRCode("qrCodeEl")}
            btnClasses="border rounded-[100px] border-[#6B6B6B] text-[15px] font-[600] text-[#6B6B6B] w-[211px] h-[50px] flex justify-center items-center gap-2 mt-5"
            text="Download QR Code"
            icon={<MdOutlineFileDownload className="text-xl" />}
          />
        </>
      )}
    </div>
  );
};

export default Profile_QrContainer;
