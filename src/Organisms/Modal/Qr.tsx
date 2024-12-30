import React from "react";
import { QRCode } from "react-qrcode-logo";

const Qr: React.FC<any> = ({ userId }) => {
  return (
    <div className="h-[100%] w-[100%] flex justify-center items-center">
      <QRCode
        id="qrCodeEl"
        value={`https://circome.netlify.app/${userId}`}
        size={200}
        enableCORS={true}
        fgColor={"black"}
      />
    </div>
  );
};

export default Qr;
