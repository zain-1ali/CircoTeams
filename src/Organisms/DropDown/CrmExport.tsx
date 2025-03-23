import { FC, useState } from "react";
import salesforce from "../../assets/images/salesforce.png";
import hubspot from "../../assets/images/hubspot.png";
import zapier from "../../assets/images/zapier.png";
import expcsv from "../../assets/images/expcsv.png";
import Image from "../../Atoms/Image";
import ZapierForm from "../Modal/ZapierForm";
import CustomModal from "../Modal/Modal";
import SalesforceExportForm from "../Modal/SalesforceExportForm";
import HubSpotForm from "../Modal/HubSpotForm";
import DownloadCsv from "../DownloadCsv";

const CrmExport: FC<any> = ({ data }) => {
  const [zapierModal, setZapierModal] = useState<boolean>(false);
  const [salesforceModal, setSalesforceModal] = useState<boolean>(false);
  const [hubspotModal, setHubspotModal] = useState<boolean>(false);
  return (
    <div className="h-[228px] w-[237px] rounded-[24px] flex flex-col items-center gap-y-3 pt-3">
      <div
        className="w-[218px] h-[40px] rounded-[9px] bg-[#F6F6F6] flex items-center pl-2 gap-4 cursor-pointer"
        onClick={() => setSalesforceModal(true)}
      >
        <Image src={salesforce} classes="w-[25px] h-[25px] object-cover" />
        <p className="text-[11px] font-[600] text-[#606060]">
          Export to Salesforce
        </p>
      </div>
      <div
        className="w-[218px] h-[40px] rounded-[9px] bg-[#F6F6F6] flex items-center pl-2 gap-4 cursor-pointer"
        onClick={() => setHubspotModal(true)}
      >
        <Image src={hubspot} classes="w-[25px] h-[25px] object-cover" />
        <p className="text-[11px] font-[600] text-[#606060]">
          Export to Hubspot
        </p>
      </div>
      <div
        className="w-[218px] h-[40px] rounded-[9px] bg-[#F6F6F6] flex items-center pl-2 gap-4 cursor-pointer"
        onClick={() => setZapierModal(true)}
      >
        <Image src={zapier} classes="w-[25px] h-[25px] object-cover" />
        <p className="text-[11px] font-[600] text-[#606060]">
          5000+ Integrations via Zapier
        </p>
      </div>
      <div className="w-[218px] h-[40px] rounded-[9px] bg-[#F6F6F6] flex items-center pl-2 gap-4 cursor-pointer">
        <div className="h-[25px] w-[25px] flex justify-center items-center bg-white rounded-[5px]">
          <Image src={expcsv} classes="w-[15px] h-[15px] object-cover" />
        </div>

        <p className="text-[11px] font-[600] text-[#606060]">
          <DownloadCsv data={data} /> as CSV file
        </p>
      </div>

      <CustomModal
        open={zapierModal}
        onClose={() => setZapierModal(false)}
        style={{ height: 300, borderRadius: "15px" }}
      >
        <ZapierForm data={data} />
      </CustomModal>

      <CustomModal
        open={salesforceModal}
        onClose={() => setSalesforceModal(false)}
        style={{ borderRadius: "15px" }}
      >
        <SalesforceExportForm data={data} />
      </CustomModal>

      <CustomModal
        open={hubspotModal}
        onClose={() => setHubspotModal(false)}
        style={{ borderRadius: "15px" }}
      >
        <HubSpotForm data={data} />
      </CustomModal>
    </div>
  );
};

export default CrmExport;
