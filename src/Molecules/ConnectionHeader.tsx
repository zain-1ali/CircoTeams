import React, { useState, useEffect } from "react";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import { CiSearch } from "react-icons/ci";
import ConfirmModal from "../Organisms/Modal/ConfirmModal";
import Input from "../Atoms/Input";
import { TbFileExport } from "react-icons/tb";
import {
  getMultipleChilds,
  removeMultipleChildFromDb,
} from "../Services/Constants";
// import Loading from "../Loading";
import { ConnectionHeaderProps } from "../Types";
import ConnectionModal from "../Molecules/ConnectionModal";
import DownloadCsv from "../Organisms/DownloadCsv";
import HeaderFilter from "../Organisms/HeaderFilter";

const ConnectionHeader: React.FC<ConnectionHeaderProps> = ({
  applyFilterId,
  searchItem,
  selectedRows,
  itemCounts
}) => {
  // const [loading, setLoading] = useState<boolean>(false);
  const [allProfiles, setAllProfiles] = useState<any[]>([]);
  const [updatedRows, setUpdatedRows] = useState<any[]>([]);
  const [connectionModal, setConnectionModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [confirmModal, setConfirmModal] = useState<boolean>(false);

  const companyId = localStorage.getItem("circoCompanyUid") || "";

  const getAllProfiles = (data: any) => {
    if (data) {
      setAllProfiles(Object.values(data));
    }
  };

  useEffect(() => {
    getMultipleChilds(
      "User/",
      "parentID",
      companyId,
      getAllProfiles,
      false //setLoading
    );
  }, [companyId]);

  useEffect(() => {
    const enrichSelectedRows = () => {
      const enrichedData = selectedRows.map((connection: any) => {
        const profile = allProfiles.find(
          (profile: any) => profile.id === connection?.userid
        );

        return {
          ...connection,
          memberName: profile ? `${profile.firstName} ${profile.lastName}` : "",
        };
      });
      setUpdatedRows(enrichedData);
    };

    if (allProfiles.length > 0) {
      enrichSelectedRows();
    }
  }, [selectedRows, allProfiles]);

  const deleteRowCallback = () => {
    console.log("deleteRowCallback");
  };

  const handleRemoveMultiple = () => {
    const selectedIds = selectedRows.map((row: any) => row.id);
    removeMultipleChildFromDb("Contacts/", selectedIds, deleteRowCallback);
  };

  const handleSearch = (value: string) => {
    setSearchValue(value);
    searchItem(value);
  };

  return (
    <div>
      <div className="w-full flex justify-between items-center">
      <Text
        text={<> Connections <span className="text-sm text-[#B5B5B5]">({itemCounts})</span> </>}
        classes="font-semibold text-lg"
      />
        <div className="flex items-center gap-2">
          <HeaderFilter applyFilterId={applyFilterId} />
          <Button
            text="Add Connection"
            btnClasses="w-[131px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
            onClick={() => {
              setConnectionModal(true);
            }}
          />
          <Button
            text={""}
            btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-4"
            onClick={() => {}}
            icon={
              <>
                <TbFileExport className="absolute left-3 text-[16px]" />
                <DownloadCsv data={updatedRows} />
              </>
            }
          />
          <Button
            text="Remove"
            btnClasses="w-[80px] h-[32px] rounded-[22px] text-[#FF4545] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
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

      {connectionModal && (
        <ConnectionModal
          action="add"
          isOpen={connectionModal}
          onClose={() => setConnectionModal(false)}
          data={[]}
        />
      )}
      <ConfirmModal
          open = {confirmModal}
          onClose={() => setConfirmModal(false)}
          onClick={handleRemoveMultiple}
           confirmText="Are you sure to remove selected connections ?"
        />
    </div>
  );
};

export default ConnectionHeader;
