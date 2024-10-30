import React, { useEffect, useState } from "react";
import DevicesHeader from "../Molecules/DevicesHeader";
import TableHeaderCell from "../Molecules/TableHeaderCell";
import Sidebar from "../Organisms/Sidebar";
import Table from "../Organisms/Table";
import { getDevices } from "../Services/DeviceServices";

const DevicesTemplate = () => {
  const [allDevices, setAllDevices] = useState<any[]>([]);
  const [filteredDevices, setFilteredDevices] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const companyId = localStorage.getItem("circoCompanyUid") || "";

  const applyFilterId = (id: string) => {
    if (id === "") {
      getDevices(companyId, updateDevices);
    } else {
      getDevices(id, updateDevices);
    }
  };

  const searchItem = (searchValue: string) => {
    if (searchValue === "") {
      setFilteredDevices(allDevices);
    } else {
      setFilteredDevices(
        allDevices.filter((item) => 
          item?.name?.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };

  const updateDevices = (devices: any) => {
    setFilteredDevices(devices);
    setAllDevices(devices);
  };

  useEffect(() => {
    getDevices(companyId, updateDevices);
  }, [companyId]);

  const innerHeight: number = window.innerHeight;
  const headers = [
    <TableHeaderCell text="Device" width="30%" key="device" />,
    <TableHeaderCell text="Linked to" width="30%" key="linkedTo" />,
    <TableHeaderCell text="Date" width="150px" key="date" />,
  ];

  const handleRowSelect = (item: any | any[], isChecked: boolean) => {
  console.log(item)
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
      setSelectedRows((prev) => prev.filter((row:any) => row.device.id !== item.device.id)); // Remove the single row by its ID
    }
  }
};
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="w-[83%] h-[100%] p-5 border bg-[#f6f6f6] relative">
        <DevicesHeader 
          applyFilterId={applyFilterId} 
          searchItem={searchItem} 
          selectedRows={selectedRows}  
        />

        <div
          className={`w-[96%]  ${
            innerHeight <= 700 ? "h-[80%]" : "h-[83%]"
          }   bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center  pt-4 pl-2 pr-2`}
        >
          <Table
            headers={headers}
            type="devices"
            data={filteredDevices}  // Updated to use filteredDevices
            selectedRows={selectedRows}
            handleRowSelect={handleRowSelect}
          />
        </div>
      </div>
    </div>
  );
};

export default DevicesTemplate;
