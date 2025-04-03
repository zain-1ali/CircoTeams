import { useEffect, useState } from "react";
import Button from "../Atoms/Button";
import Image from "../Atoms/Image";
import Input from "../Atoms/Input";
import Text from "../Atoms/Text";
import AreYouSure from "../Organisms/Modal/AreYouSure";
import { pageHeadProps } from "../Types";
import i14 from "../assets/images/i14.png";
import { CiSearch } from "react-icons/ci";
import CustomModal from "../Organisms/Modal/Modal";
import {
  getMultipleChilds,
  removeMultipleChildFromDb
} from "../Services/Constants";
import CreateTeamProfile from "../Organisms/Modal/CreateTeamProfile";
import CreateSubteam from "../Organisms/Modal/CreateSubteam";
import CreateTemplate from "../Organisms/Modal/CreateTemplate";
import DropDown from "../Organisms/DropDown/DropDown";
import ReasignTeam from "../Organisms/DropDown/ReasignTeam";
import ReasignTemplate from "../Organisms/DropDown/ReasignTemplate";
import { removeTeams } from "../Services/SubTeamsServices";
import useToastNotifications from "../Hooks/useToastNotification";
import { useAppDispatch } from "../Hooks/reduxHooks";
import { resetState } from "../Redux/ProfileSlice";
import hamBurger from "../assets/images/hamBurger.png";
import hamBurgerWhite from "../assets/images/hamBurgerWhite.png";
import cardsWhite from "../assets/images/cardsWhite.png";
import cards from "../assets/images/cards.png";
import { useNavigate } from "react-router-dom";


const TableHeader: React.FC<pageHeadProps> = ({
  headerName,
  number,
  selectedRows,
  searchItem,
  isCardLayout,
  setIsCardLayout,
  companyProfile
}) => {
  const [warnText, setWarnText] = useState<string>("");
  const [sureModal, setSureModal] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");
  const [open, setOpen] = useState<boolean>(false);
  const [openCreateTemplate, setOpenCreateTemplate] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [anchorEl2, setAnchorEl2] = useState<HTMLElement | null>(null);
  const [subteams, setSubteams] = useState<any[]>([]);
  const [templates, setTemplates] = useState<any[]>([]);
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const navigate = useNavigate();
  const callBackFunc = (data: any) => {
    setSubteams(Object.values(data));
  };

  const callBackFunc2 = (data: any) => {
    setTemplates(Object.values(data));
  };

  const handleOpenTemplateFilter = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl2(event.currentTarget);
  };

  const { showError, showSuccess } = useToastNotifications();

  const dispatch = useAppDispatch();

  const handleOpenFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  useEffect(() => {
    getMultipleChilds(
      "SubTeams",
      "companyId",
      companyId,
      callBackFunc,
      setLoading
    );
  }, []);

  useEffect(() => {
    getMultipleChilds(
      "Template",
      "parentID",
      companyId,
      callBackFunc2,
      setLoading
    );
  }, []);
  const openSubTeam = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const openTemplate = Boolean(anchorEl2);
  const handleCloseTemplate = () => {
    setAnchorEl2(null);
  };
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
            <div className="w-[83px] h-[32px] border border[#D5D5D5] rounded-[22px] flex">
              <div
                className={`w-[50%] h-[100%] rounded-[22px] flex justify-center items-center ${
                  isCardLayout && "bg-primary"
                }  cursor-pointer`}
                onClick={() => setIsCardLayout(true)}
              >
                <Image
                  src={isCardLayout ? cardsWhite : cards}
                  classes="w-[18px] h-[18px]"
                />
              </div>
              <div
                className={`w-[50%] h-[100%] rounded-[22px] flex justify-center ${
                  !isCardLayout && "bg-primary"
                } items-center cursor-pointer`}
                onClick={() => setIsCardLayout(false)}
              >
                <Image
                  src={isCardLayout ? hamBurger : hamBurgerWhite}
                  classes="w-[18px] h-[18px]"
                />
              </div>
            </div>
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] text-white bg-[#2B6EF6]"
              text="Add Member"
              onClick={() => companyProfile?.isTeamsProVersion && number < 5
              ? setTeamProfileModal(true)
              : navigate("/plans")}
            />
            <div
              id="reassignTemp-button"
              aria-haspopup="listbox"
              aria-controls="reassignTemp-menu"
            >
              <Button
                btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
                text="Assign Template"
                onClick={handleOpenTemplateFilter}
              />
            </div>

            <DropDown
              id="reassignTemp-menu"
              anchorEl={anchorEl2}
              open={openTemplate}
              onClose={handleCloseTemplate}
              MenuListProps={{
                "aria-labelledby": "reassignTemp-button",
                role: "listbox",
              }}
            >
              <ReasignTemplate
                templates={templates}
                selectedMemberRows={selectedRows}
                crntTemplate={null}
                onClose={handleCloseTemplate}
              />
            </DropDown>
            <div
              id="reassign-button"
              aria-haspopup="listbox"
              aria-controls="reassign-menu"
            >
              <Button
                btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
                text="Assign to Subteam"
                onClick={handleOpenFilter}
              />
            </div>

            <DropDown
              id="reassign-menu"
              anchorEl={anchorEl}
              open={openSubTeam}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "reassign-button",
                role: "listbox",
              }}
            >
              <ReasignTeam
                subteams={subteams}
                selectedMemberRows={selectedRows}
                crntSubteam={null}
                onClose={handleClose}
              />
            </DropDown>
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
              onClick={() => {
                setOpen(true), dispatch(resetState());
              }}
            />
            <div
              id="reassignTemp-button"
              aria-haspopup="listbox"
              aria-controls="reassignTemp-menu"
            >
              <Button
                btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9] text-[#808080]"
                text="Assign Template"
                onClick={handleOpenTemplateFilter}
              />
            </div>

            <DropDown
              id="reassignTemp-menu"
              anchorEl={anchorEl2}
              open={openTemplate}
              onClose={handleCloseTemplate}
              MenuListProps={{
                "aria-labelledby": "reassignTemp-button",
                role: "listbox",
              }}
            >
              <ReasignTemplate
                templates={templates}
                selectedMemberRows={selectedRows}
                crntTemplate={null}
                onClose={handleCloseTemplate}
                isSubTeam={true}
              />
            </DropDown>
            <Button
              btnClasses="h-[32px] rounded-[22px] w-[139px] text-[12px] font-[600] bg-[#F9F9F9]  text-red-500"
              text="Remove Subteam"
              onClick={() =>
                removeTeams(selectedRows, showError, showSuccess, setLoading)
              }
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
          placeholder={headerName == "Template" ? "Search by name" 
            : "Search by name, job title, email, template, or subteam"
          }
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
          loading={loading}
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
