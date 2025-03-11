import Text from "../../Atoms/Text";
import InputWithLabel from "../../Molecules/InputWithLabel";
import { CiSearch } from "react-icons/ci";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import Checkbox from "../../Atoms/Checkbox";
import Image from "../../Atoms/Image";
import plchldr from "../../assets/images/profilePlchldr.png";
import React, { useEffect, useState } from "react";
import { getMultipleChilds } from "../../Services/Constants";
import useToastNotifications from "../../Hooks/useToastNotification";
import { RxCross1 } from "react-icons/rx";
// import DropDown from "../DropDown/DropDown";
// import ReasignTeam from "../DropDown/ReasignTeam";
import {
  addMembersToTemplate,
  removeMembersFromTemplate,
  updateTemplate,
} from "../../Services/TemplatesServices";

const ManageTemplate: React.FC<any> = ({ onClose, team }) => {
  // getting all child profiles
  const [teamName, setTeamName] = useState<string>("");
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);
  const [allProfiles, setAllProfiles] = useState<any>([]);
  // const [notMembers, setNotMembers] = useState<any>([]);
  const [teamMembers, setTeamMembers] = useState<any[]>([]);

  // getting Team members

  const getTeamMembers = (data: any) => {
    console.log("data rec", data);
    if (data) {
      setTeamMembers(Object.values(data));
    }
  };

  console.log(team);

  useEffect(() => {
    setTeamName(team?.profileName);
    getMultipleChilds(
      "User/",
      "templateId",
      team?.id,
      getTeamMembers,
      setLoading
    );
  }, [team?.id]);

  let [selectedMemberRows, setSelectedMemberRows] = useState<string[]>([]);

  const handleMemberRowSelect = (item: any | any[], isChecked: boolean) => {
    console.log(item);
    if (Array.isArray(item)) {
      // Handle array of data objects (e.g., from "select all")
      if (isChecked) {
        setSelectedMemberRows((prev) => [...new Set([...prev, ...item])]); // Add all items (ensure uniqueness)
      } else {
        setSelectedMemberRows([]); // Deselect all rows
      }
    } else {
      // Handle a single data object (e.g., from individual row selection)
      if (isChecked) {
        setSelectedMemberRows((prev) => [...prev, item]); // Add the single row data object
      } else {
        console.log("this is working");

        setSelectedMemberRows((prev) =>
          prev.filter((row: any) => row.id !== item.id)
        ); // Remove the single row by its ID
      }
    }
  };

  const handleSelectedMemberItem = (
    data: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleMemberRowSelect(data, e.target.checked);
  };

  // console.log(selectedMemberRows);

  // getting all members
  const getAllProfiles = (data: any) => {
    console.log("here is all pf data", data);

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
      setLoading
    );
  }, [companyId]);

  let [selectedRows, setSelectedRows] = useState<string[]>([]);

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
        console.log("this is working");

        setSelectedRows((prev) =>
          prev.filter((row: any) => row.id !== item.id)
        ); // Remove the single row by its ID
      }
    }
  };

  const handleSelectedItem = (
    data: any,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    handleRowSelect(data, e.target.checked);
  };

  console.log(selectedRows);
  const { showError, showSuccess } = useToastNotifications();

  const membersId = selectedRows?.map((elm: any) => {
    return elm?.id;
  });

  // getting all sub teams
  const [subteams, setSubteams] = useState<any[]>([]);

  const callBackFunc = (data: any) => {
    setSubteams(Object.values(data));
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

  console.log("sub teams", subteams);

  // ---------------------------------------Search functionality for All profiles--------------------------------------------

  let [filteredProfiles, setfilteredProfiles] = useState<any[]>([]);
  useEffect(() => {
    setfilteredProfiles(allProfiles);
  }, [allProfiles]);
  let [search, setsearch] = useState("");

  useEffect(() => {
    const result = allProfiles?.filter((elm: any) => {
      return (
        elm?.firstName.toLowerCase().match(search.toLowerCase()) ||
        elm?.lastName.toLowerCase().match(search.toLowerCase())
      );
    });

    setfilteredProfiles(result);
  }, [search]);

  // ---------------------------------------Search functionality for All profiles--------------------------------------------

  let [filteredMembers, setfilteredMembers] = useState<any[]>([]);
  useEffect(() => {
    setfilteredMembers(teamMembers);
  }, [teamMembers]);
  let [searchMembers, setsearchMembers] = useState("");

  useEffect(() => {
    const result = teamMembers?.filter((elm: any) => {
      return (
        elm?.firstName.toLowerCase().match(searchMembers.toLowerCase()) ||
        elm?.lastName.toLowerCase().match(searchMembers.toLowerCase())
      );
    });

    setfilteredMembers(result);
    console.log("working");
  }, [searchMembers]);

  console.log(filteredMembers);
  console.log(teamMembers);

  //   const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  //   const open = Boolean(anchorEl);

  //   const handleOpenFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
  //     setAnchorEl(event.currentTarget); // Open the menu
  //   };

  //   const handleClose = () => {
  //     setAnchorEl(null); // Close the menu
  //   };
  const membersUid = selectedMemberRows?.map((member: any) => member?.id);

  const handleLoading = (loading: boolean, deletedIds: any) => {
    setLoading(loading);
    if (deletedIds) {
      const remainingMembers = filteredMembers?.filter(
        (member: any) => !deletedIds.includes(member.id)
      );
      setfilteredMembers(remainingMembers);
    }
  };

  return (
    <div className="w-[100%] h-[100%]">
      <Text text="Template Setting" classes="font-[600] text-[22px]" />
      <div className="w-[100%] flex justify-between items-center mt-7">
        <div className="w-[47%]">
          <InputWithLabel
            label="Template Name"
            inputClasses="w-[100%] h-[40px] rounded-[10px] bg-[#FAFAFB] outline-none pl-3"
            labelClasses="font-[600] text-[14px] text-[#8D8D8D]"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
        </div>
      </div>

      <div className="w-[100%] flex justify-between items-center mt-7">
        {/* template members section  */}
        <div className="w-[47%]">
          <Text
            text="Members"
            classes="text-[14px] font-[600] text-[#8D8D8D]"
          />
          <div className="w-[100%] h-[323px] bg-[#FAFAFB] rounded-[10px] p-4">
            <div className="w-[100%] flex  items-center gap-4">
              <div className="w-[290px] h-[27px] rounded-[50px] border border-[#E1E1E1] flex items-center px-1 gap-2">
                <CiSearch className="text-[#B7B7B7]" />
                <Input
                  classes="bg-transparent outline-none  w-[80%] placeholder:text-[12px]"
                  value={searchMembers}
                  onChange={(e) => setsearchMembers(e.target.value)}
                  placeholder="Search by name or info"
                />
              </div>
              {/* <div
                id="reassign-button"
                aria-haspopup="listbox"
                aria-controls="reassign-menu"
                // onClick={() => handleOpenFilter()}
              >
                <Button
                  btnClasses={`h-[27px] w-[73px] ${
                    selectedMemberRows?.[0] ? "bg-primary" : "bg-[#9CBDFF]"
                  } rounded-[50px] text-white font-[600] text-[10px]`}
                  onClick={
                    selectedMemberRows?.[0] ? handleOpenFilter : () => {}
                  }
                  text="Reassign"
                />
              </div>

              <DropDown
                id="reassign-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "reassign-button",
                  role: "listbox",
                }}
              >
                <ReasignTeam
                  subteams={subteams}
                  selectedMemberRows={selectedMemberRows}
                  crntSubteam={team}
                  onClose={handleClose}
                />
              </DropDown> */}

              <Button
                btnClasses="h-[27px] w-[73px] bg-[#E9E9E9] rounded-[50px] text-[#FF2C2C] font-[600] text-[10px]"
                onClick={() =>
                  selectedMemberRows?.[0]
                    ? removeMembersFromTemplate(
                        membersUid,
                        team,
                        showError,
                        showSuccess,
                        handleLoading
                      )
                    : () => {}
                }
                text="Remove"
              />
            </div>

            <div className="w-[100%] h-[80%] mt-3 overflow-y-scroll">
              {filteredMembers?.map((member, i) => {
                return (
                  <div className="flex items-center gap-3 mt-3" key={i}>
                    <Checkbox
                      checkValue={selectedMemberRows.some(
                        (row: any) => row.id === member.id
                      )}
                      onChange={(e) => handleSelectedMemberItem(member, e)}
                      // onChange={() => {}}
                      classes="h-[15px] w-[15px] border border-[#B3B3BF] rounded-[2px]"
                    />
                    <Image
                      src={member?.profileUrl || plchldr}
                      classes="h-[36px] w-[36px] rounded-full"
                    />
                    <Text
                      text={member?.firstName + " " + member?.lastName}
                      classes="text-[12px] font-[500] text-[#030229]"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* All profles section  */}
        <div className="w-[47%]">
          <Text
            text="Add New Member"
            classes="text-[14px] font-[600] text-[#8D8D8D]"
          />
          <div className="w-[100%] h-[323px] bg-[#FAFAFB] rounded-[10px] p-4">
            <div className="w-[100%] flex justify-between items-center">
              <div className="w-[290px] h-[27px] rounded-[50px] border border-[#E1E1E1] flex items-center px-1 gap-2">
                <CiSearch className="text-[#B7B7B7]" />
                <Input
                  classes="bg-transparent outline-none  w-[80%] placeholder:text-[12px]"
                  value={search}
                  onChange={(e) => setsearch(e.target.value)}
                  placeholder="Search by name or info"
                />
              </div>
              <Button
                btnClasses="h-[27px] w-[73px] bg-primary rounded-[50px] text-white font-[600] text-[10px]"
                onClick={() =>
                  //   addMembersToSubTeam(
                  //     membersId,
                  //     team,
                  //     showError,
                  //     showSuccess,
                  //     setLoading
                  //   )

                  addMembersToTemplate(
                    membersId,
                    team,
                    showError,
                    showSuccess,
                    setLoading,
                    true
                  )
                }
                text="Add"
              />
            </div>

            <div className="w-[100%] h-[80%] mt-3 overflow-y-scroll">
              {filteredProfiles?.map((elm: any) => {
                return (
                  <div
                    className="flex items-center gap-3 mt-3"
                    style={{
                      display:
                        elm?.templateId === team?.id ||
                        elm?.profileType === "self" ||
                        elm?.isAdmin === true
                          ? "none"
                          : undefined,
                    }}
                  >
                    {elm?.templateId ? (
                      <div className="h-[15px] w-[15px] border bg-[#B3B3BF] rounded-[2px] flex justify-center items-center">
                        <RxCross1 className="text-[10px] text-white" />
                      </div>
                    ) : (
                      <Checkbox
                        checkValue={selectedRows.some(
                          (row: any) => row.id === elm.id
                        )}
                        onChange={(e) => handleSelectedItem(elm, e)}
                        classes="h-[15px] w-[15px] border border-[#B3B3BF] rounded-[2px]"
                      />
                    )}
                    <Image
                      src={elm?.profileUrl || plchldr}
                      classes="h-[36px] w-[36px] rounded-full "
                    />
                    <Text
                      text={elm?.firstName + " " + elm?.lastName}
                      classes="text-[12px] font-[500] text-[#030229]"
                    />

                    {elm?.templateId && (
                      <Text
                        text="(In another template)"
                        classes="text-[12px] font-[400] text-[#A8A8A8]"
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="w-[100%] flex mt-4 items-center justify-end gap-3">
        <Button
          onClick={() => onClose()}
          text="Cancel"
          btnClasses="w-[87px] h-[37px] border border-[#E2E2E2] rounded-[66px] font-[600] text-[12px] text-[#BBBBBB]"
        />
        <Button
          onClick={() =>
            updateTemplate(
              { profileName: teamName },
              team.id,
              showError,
              showSuccess,
              setLoading
            )
          }
          text="Save"
          btnClasses="w-[116px] h-[37px] border bg-primary rounded-[66px] font-[600] text-[12px] text-white"
        />
      </div>
    </div>
  );
};

export default ManageTemplate;
