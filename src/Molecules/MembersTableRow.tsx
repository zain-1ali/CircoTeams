import Checkbox from "../Atoms/Checkbox";
import IconWithTextCell from "../Molecules/IconWithTextCell";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";
import message from "../assets/images/message.png";
import hi11 from "../assets/images/hi11.png";
import hi12 from "../assets/images/hi12.png";
import { useEffect, useState } from "react";
import { getSingleChildFromDb } from "../Services/Constants";
import { useNavigate } from "react-router-dom";
import { GoKebabHorizontal } from "react-icons/go";
import DropDown from "../Organisms/DropDown/DropDown";
import TeamMembersOptions from "../Organisms/DropDown/TeamMembersOptions";
import { appendBucketPath } from "../Services/Constants";

// : React.FC<TableRowProps>
const MembersTableRow: React.FC<any> = ({
  data,
  handleRowSelect,
  isSelected,
}) => {
  const [subteamData, setSubteamData] = useState<any>({});
  const [templateData, settemplateData] = useState<any>({});
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();

  const openMemberMenu = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const handleOpenMemberMenu = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRowSelect(
      {
        ...data,
        subTeamMembers: subteamData?.members,
      },
      e.target.checked
    );
  };

  const getProfileData = (data: any) => {
    if (data) {
      setSubteamData(Object.values(data)?.[0]);
    }
  };

  const getTemplateData = (data: any) => {
    if (data) {
      settemplateData(Object.values(data)?.[0]);
    }
  };

  useEffect(() => {
    if (data?.subTeamId) {
      getSingleChildFromDb("SubTeams/", "id", data?.subTeamId, getProfileData);
    }
  }, [data?.subTeamId]);

  useEffect(() => {
    if (data?.templateId) {
      getSingleChildFromDb(
        "Template/",
        "id",
        data?.templateId,
        getTemplateData
      );
    }
  }, [data?.templateId]);

  return (
    <div className="w-[100%] h-[60px]  rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4 cursor-pointer ">
      <div className="w-[35px]">
        <Checkbox
          checkValue={isSelected}
          onChange={handleSelectedItem}
          classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
        />
      </div>
      <div onClick={() => navigate(`/edit/${data?.id}`)}>
        <ImageWithTextCell
          containerClass="flex w-[200px] items-center gap-3"
          isAdmin={true}
          data={{
            text: data?.firstName + " " + data?.lastName,
            image: appendBucketPath(data?.profileUrl),
            isAdmin: data?.isAdmin,
          }}
        />
      </div>

      <IconWithTextCell
        icon={message}
        text={data?.email}
        iconClass="w-[15.56px] h-[14px]"
      />
      <IconWithTextCell
        icon={hi11}
        text={subteamData?.name}
        iconClass="h-[14px] w-[14px] object-cover"
      />
      <IconWithTextCell
        icon={hi12}
        text={templateData?.profileName}
        iconClass="h-[14px] w-[14px] object-cover"
        width="w-[160px]"
      />
      <button
        id="reassign-button"
        aria-haspopup="listbox"
        aria-controls="reassign-menu"
        onClick={handleOpenMemberMenu}
      >
 <GoKebabHorizontal className="text-[#B3B3BF] mr-4 text-[18px]" />
      </button>
     

      <DropDown
        id="reassign-menu"
        anchorEl={anchorEl}
        open={openMemberMenu}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "reassign-button",
          role: "listbox",
        }}
      >
        {/* <ReasignTeam
          subteams={subteams}
          selectedMemberRows={selectedRows}
          crntSubteam={null}
          onClose={handleClose}
        /> */}
        <TeamMembersOptions  profileData={data}/>
      </DropDown>
    </div>
  );
};

export default MembersTableRow;
