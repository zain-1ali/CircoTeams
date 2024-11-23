import TableHeader from "../Molecules/TableHeader";
import TableHeaderCell from "../Molecules/TableHeaderCell";
import Sidebar from "../Organisms/Sidebar";
import Table from "../Organisms/Table";
import { useState } from "react";

const DevicesTemplate=()=>{
  let [selectedRows, setSelectedRows] = useState<string[]>([]);
  const innerHeight: number = window.innerHeight;
  const headers = [
    <TableHeaderCell text="Device" width="30%" />,
    <TableHeaderCell text="Linked to" width="30%" />,
    <TableHeaderCell text="Date" width="150px" />,
  ];

  const handleRowSelect = (item: any | any[], isChecked: boolean) => {
    console.log(item);
    if (Array.isArray(item)) {
      // Handle array of data objects (e.g., from "select all")
      if (isChecked) {
        setSelectedRows((prev) => [...new Set([...prev, ...item])]); // Add all items (ensure uniqueness)
      } else {
        setSelectedRows([]); // Deselect all rows
      }
    } else {
      // Handle a single data object (e.g., from individual row selection)
      if (isChecked) {
        setSelectedRows((prev) => [...prev, item]); // Add the single row data object
      } else {
        setSelectedRows((prev) =>
          prev.filter((row: any) => row.id !== item.id)
        ); // Remove the single row by its ID
      }
    }
  };

  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="w-[83%] h-[100%] p-5 border bg-[#f6f6f6] relative">
        <TableHeader number="" headerName="Devices" />

        <div
          className={`w-[96%]  ${
            innerHeight <= 700 ? "h-[80%]" : "h-[83%]"
          }   bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center  pt-4 pl-2 pr-2`}
        >
          <Table
            headers={headers}
            type="devices"
            data={[]}
            selectedRows={selectedRows}
            handleRowSelect={handleRowSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default DevicesTemplate;
