import { useState } from "react";
import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
import Input from "../Atoms/Input";
import Text from "../Atoms/Text";
import AreYouSure from "../Organisms/Modal/AreYouSure";
import { pageHeadProps } from "../Types";
import i14 from "../assets/images/i14.png";
import { CiSearch } from "react-icons/ci";
import CustomModal from "../Organisms/Modal/Modal";
import { removeMultipleChildFromDb } from "../Services/Constants";
import CreateTeamProfile from "../Organisms/Modal/CreateTeamProfile";
import CreateSubteam from "../Organisms/Modal/CreateSubteam";
import CreateTemplate from "../Organisms/Modal/CreateTemplate";

const TableHeader: React.FC<pageHeadProps> = ({
  headerName,
  number,
  selectedRows,
  searchItem,
}) => {
  const [warnText, setWarnText] = useState<string>("");
  const [sureModal, setSureModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openCreateTemplate, setOpenCreateTemplate] = useState<boolean>(false);
  const onClose = () => {
    setOpen(!open);
  };
  const deleteRowCallback = () => {};
  const handleRemoveMultiple = () => {
    const selectedIds = selectedRows?.map((row: any) => row.id) || [];
    removeMultipleChildFromDb("User/", selectedIds, deleteRowCallback);
  };

  const [creatTeamProfileModal, setTeamProfileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);

  const handleSearch = (value: string) => {
    setSearchValue(value);
    if (searchItem) searchItem(value);
  };

  return (
    <div className="w-[100%]">
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex items-center gap-1">
          <Text text={headerName} classes="font-[600] text-[18px]" />{" "}
          {number && (
            <Text
              text={`(${number})`}
              classes="font-[600] text-[12px] text-[#B5B5B5] mt-1"
            />
          )}
        </div>
        {headerName === "Members" && (
          <div className="flex items-center gap-4">
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
              text="Add Member"
              onClick={() => setTeamProfileModal(true)}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
              text="Assign Template"
              onClick={() => {}}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
              text="Assign to Subteam"
              onClick={() => {}}
            />
            <div
              onClick={() => {
                if (Array.isArray(selectedRows) && selectedRows?.length > 0) {
                  setSureModal(true),
                    setWarnText("Are you sure to delete these members?");
                }
              }}
            >
              <Image
                src={i14}
                classes="w-[15.62px] h-[18.38px] object-cover cursor-pointer"
              />
            </div>
          </div>
        )}

        {headerName === "Template" && (
          <Button
            btnClasses="h-[32px] rounded-[22px] w-[143px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
            text="Create New Template"
            onClick={() => setOpenCreateTemplate(true)}
          />
        )}

        {headerName === "Subteams" && (
          <div className="flex items-center gap-4">
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[143px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
              text="Create New Subteam"
              onClick={() => setOpen(true)}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
              text="Assign Template"
              onClick={() => {}}
            />
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9]  text-red-500"
              text="Remove Subteam"
              onClick={() => {}}
            />
          </div>
        )}
      </div>

      <div className="w-[100%] flex h-[39px] rounded-[100px] border-[#CACACA] border mt-4 items-center pl-2 gap-2 bg-white">
        <CiSearch className="text-[#B7B7B7] text-[24px]" />
        <Input
          classes="h-[95%] w-[80%] outline-none placeholder:text-[#B7B7B7] placeholder:font-[500] placeholder:text-[14px]"
          value={searchValue}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search by name, job title, email, template, or subteam"
        />
      </div>
      <CustomModal
        open={sureModal}
        onClose={() => setSureModal(false)}
        style={{ height: 150, width: 350, borderRadius: 5, p: 4 }}
      >
        <AreYouSure
          onClick={handleRemoveMultiple}
          onClose={() => setSureModal(false)}
          text={warnText}
        />
      </CustomModal>

      <CustomModal
        open={creatTeamProfileModal}
        onClose={() => setTeamProfileModal(false)}
        style={{ height: 250, width: 300, borderRadius: 5, p: 4 }}
      >
        <CreateTeamProfile
          onClose={() => setSureModal(false)}
          setLoading={setLoading}
        />
      </CustomModal>

      <CustomModal
        open={open}
        onClose={() => setOpen(false)}
        style={{ height: 180, width: 350, borderRadius: 5, p: 4 }}
      >
        <CreateSubteam setLoading={setLoading} onClose={onClose} />
      </CustomModal>

      <CustomModal
        open={openCreateTemplate}
        onClose={() => setOpenCreateTemplate(false)}
        style={{ height: 180, width: 350, borderRadius: 5, p: 4 }}
      >
        <CreateTemplate setLoading={setLoading} onClose={onClose} />
      </CustomModal>
    </div>
  );
};

export default TableHeader;
