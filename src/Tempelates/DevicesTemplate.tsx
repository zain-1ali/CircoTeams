import DevicesHeader from "../Molecules/DevicesHeader";
import TableHeaderCell from "../Molecules/TableHeaderCell";
import Sidebar from "../Organisms/Sidebar";
import Table from "../Organisms/Table";
import { useEffect, useState } from "react";
import { getDevices } from "../Services/DeviceServices";

const DevicesTemplate = () => {
  let [allDevices, setAllDevices] = useState([]);
  let [filteredDevices, setFilteredDevices] = useState([]);
  let [selectedRows, setSelectedRows] = useState<string[]>([]); 
  const companyId = localStorage.getItem("circoCompanyUid") || "";
  const applyFilterId = (id: string) => {
    if(id == "")
    {
      setFilteredDevices(allDevices);
    }
    else{
      setFilteredDevices(
        allDevices.filter((item: any) => item?.userid === id)
      );
    }
  };
  const searchItem = (searchValue: string) => {
    if (searchValue === "") {
      setAllDevices(allDevices);
    } else {
      setAllDevices(
        allDevices.filter((item: any) => 
          item?.name?.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };
  useEffect(() => {
    getDevices(companyId , updateDevices);
  }, [companyId]);

const updateDevices = (devices: any) => {
  setFilteredDevices(devices);
  setAllDevices(devices);
}

  const innerHeight: number = window.innerHeight;
  const headers = [
    <TableHeaderCell text="Device" width="30%" />,
    <TableHeaderCell text="Linked to" width="30%" />,
    <TableHeaderCell text="Date" width="150px" />,
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
        setSelectedRows((prev) => prev.filter((row) => row.id !== item.id)); // Remove the single row by its ID
      }
    }
  };

  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="w-[83%] h-[100%] p-5 border bg-[#f6f6f6] relative">
        <DevicesHeader applyFilterId={applyFilterId} searchItem = {searchItem} selectedRows={selectedRows}  />

        <div
          className={`w-[96%]  ${
            innerHeight <= 700 ? "h-[80%]" : "h-[83%]"
          }   bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center  pt-4 pl-2 pr-2`}
        >
          <Table headers={headers} type="devices" data = {[]} selectedRows={selectedRows} handleRowSelect = {handleRowSelect}/>
        </div>
      </div>
    </div>
  );
};

export default DevicesTemplate;
