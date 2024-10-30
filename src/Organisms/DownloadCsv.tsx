import React from "react";
import { CSVLink } from "react-csv";
// import Button from "../Atoms/Button";

import { timestampToDate } from "../Services/Constants";

interface DownloadCsvProps {
  data: any;
}

const DownloadCsv: React.FC<DownloadCsvProps> = ({ data }) => {
  // Map the data into a CSV-friendly format
  console.log(data);
  const csvData = data?.map((item: any) => ({
    Contact: item?.name || "",
    Email: item?.email || "",
    ConnectedWith: item?.memberName || "",
    Date: timestampToDate(item?.date) || "", // Ensure consistent naming
    Job: item?.job || "",
    Company: item?.company || "",
    Phone: item?.phone || "",
    Note: item?.message || "",
  }));

  return (
    <>
      {csvData?.length > 0 ? (
        <CSVLink
          data={csvData}
          filename={`MyContacts.csv`}
          style={{ textDecoration: "none" }}
        >
          Export
        </CSVLink>
      ) : (
        "Export"
      )}
    </>
  );
};

export default DownloadCsv;
