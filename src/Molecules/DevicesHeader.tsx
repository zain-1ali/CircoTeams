import React, { useState } from "react";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import ConfirmModal from "../Organisms/Modal/ConfirmModal";
import { CiSearch } from "react-icons/ci";
import Input from "../Atoms/Input";
import { removeMultipleDevices } from "../Services/DeviceServices";
// import Loading from "../Loading";
import { ConnectionHeaderProps } from "../Types";
import HeaderFilter from "../Organisms/HeaderFilter"

const DevicesHeader: React.FC<ConnectionHeaderProps> = ({ applyFilterId, searchItem, selectedRows, itemCounts, }) => {

  const [searchValue, setSearchValue] = useState<string>("");
  const [confirmModal, setConfirmModal] = useState<boolean>(false);
  console.log(itemCounts);
  

  const deleteRowCallback = () => {
    console.log("deleteRowCallback");
  };

  const handleRemoveMultiple = () => {
    console.log(selectedRows);
    const selectedTagsIds = selectedRows.map((row: any) => row?.device?.tagId || "none");
    removeMultipleDevices(selectedTagsIds, deleteRowCallback);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    searchItem(value);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
        <Text text="Device Management" classes="font-semibold text-lg" />
        <div className="flex items-center gap-2">
          <HeaderFilter applyFilterId={applyFilterId} />
          <Button
            text="Remove Devices"
            btnClasses="w-[140px] h-[32px] rounded-[22px] text-[#FF4545] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
            
            onClick={() => setConfirmModal(true)}
          />
        </div>
      </div>

      <div className="w-full flex h-10 rounded-full border border-gray-300 mt-4 items-center pl-2 gap-2 bg-white">
        <CiSearch className="text-gray-400 text-2xl" />
        <Input
          classes="h-full w-4/5 outline-none placeholder-gray-400 placeholder-font-medium placeholder-text-sm"
          onChange={(e) => handleSearch(e.target.value)}
          value={searchValue}
          placeholder="Search by name, job title, email, template, or subteam"
        />
      </div>
      
      <ConfirmModal
          open = {confirmModal}
          onClose={() => setConfirmModal(false)}
          onClick={handleRemoveMultiple}
           confirmText="Are you sure to remove selected devices ?"
        />
    </div>
  );
};

export default DevicesHeader;
