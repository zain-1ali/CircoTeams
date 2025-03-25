import React, { useState, useEffect } from "react";
import Button from "../Atoms/Button";
import { HiFilter } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Input from "../Atoms/Input";
import { Menu } from "@mui/material";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import FilterImageWithTextCell from "../Molecules/FilterImageWithTextCell";
import { getMultipleChilds, appendBucketPath } from "../Services/Constants";
// import Loading from "./Loading";

interface HeaderFilterProps {
  applyFilterId: (filterId: string, type: string) => void;
  handleClearFilters?: () => void;
}

interface Profile {
  id: string;
  firstName: string;
  lastName: string;
  profileUrl: string;
  profileType: string;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({
  applyFilterId,
  handleClearFilters,
}) => {
  const [allProfiles, setAllProfiles] = useState<Profile[]>([]);
  const [subTeams, setSubTeams] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectionType, setSelectionType] = useState<string>("user");
  const [selectedSubTeam, setSelectedSubTeam] = useState<string>("");
  console.log(loading);

  const getAllProfiles = (data: any) => {
    if (data) {
      setAllProfiles(Object.values(data));
    }
  };

  const getAllSubTeams = (data: any) => {
    if (data) {
      setSubTeams(Object.values(data));
    }
  };
  console.log(allProfiles);
  const companyId = localStorage.getItem("circoCompanyUid") || "";

  useEffect(() => {
    getMultipleChilds(
      "User/",
      "parentID",
      companyId,
      getAllProfiles,
      setLoading
    );

    getMultipleChilds(
      "SubTeams/",
      "companyId",
      companyId,
      getAllSubTeams,
      setLoading
    );
  }, [companyId]);

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  const handleOpenFilter = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };

  const [selectedOptions, setSelectedOptions] = useState<{
    teamId: string;
    subteamId: string;
    profileId: string;
  }>({
    teamId: "",
    subteamId: "",
    profileId: "",
  });

  const handleSelectChange = (
    type: "teamId" | "subteamId" | "profileId",
    value: string
  ) => {
    console.log(value, "here is id");

    const updatedOptions = {
      teamId: type === "teamId" ? value : "",
      subteamId: type === "subteamId" ? value : "",
      profileId: type === "profileId" ? value : "",
    };
    if (type === "subteamId") {
      const selectedSubTeam = subTeams?.find(
        (elm) => elm?.id === value
      )?.members;
      // updatedOptions.subteamId = selectedSubTeam;
      setSelectedOptions({ ...updatedOptions, subteamId: selectedSubTeam });
      setSelectedSubTeam(value);
    } else {
      setSelectedOptions(updatedOptions);
      setSelectedSubTeam("");
    }

    if (type === "teamId" || type === "profileId") {
      setSelectionType("user");
    } else {
      setSelectionType("subTeam");
    }

    console.log(updatedOptions, "here are the options");
  };

  const handleApplyFilter = () => {
    handleClose();
    applyFilterId(
      selectedOptions.teamId ||
        selectedOptions.subteamId ||
        selectedOptions.profileId ||
        "",
      selectionType
    );
  };

  // const handleClearFilter = () => {
  //   setSelectedOptions({
  //     teamId: "",
  //     subteamId: "",
  //     profileId: "",
  //   });
  //   handleClose();
  //   applyFilterId("", "user");
  // };

  const [dropdownOpen, setDropdownOpen] = useState({
    team: false,
    subteam: false,
    profile: false,
  });

  const toggleDropdown = (type: string) => {
    setDropdownOpen((prev) => ({
      team: type === "team" ? !prev.team : false,
      subteam: type === "subteam" ? !prev.subteam : false,
      profile: type === "profile" ? !prev.profile : false,
    }));
  };

  console.log(selectedOptions.subteamId, "subteamId");

  return (
    <div>
      <div className="w-[100%] flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Button
            onClick={handleOpenFilter}
            text="Filter"
            aria-controls="filter"
            aria-haspopup="listbox"
            btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center pl-3 relative"
            icon={<HiFilter className="absolute left-2 text-[16px]" />}
          />

          <Menu
            id="filter"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{
              marginTop: 1,
              "& .MuiPaper-root": {
                borderRadius: "14px",
              },
            }}
          >
            <div className="w-[310px] py-[10px] h-max bg-white flex flex-col items-center">
              <div className="w-[90%] flex h-[28px] rounded-[100px] border-[#CACACA] border mt-4 mb-5 items-center pl-2 gap-2 bg-white">
                <CiSearch className="text-[#B7B7B7] text-[15px]" />
                <Input
                  classes="h-[95%] w-[80%] outline-none placeholder:text-[#B7B7B7] placeholder:font-[500] placeholder:text-[12px] pb-1"
                  value=""
                  onChange={() => {}}
                  placeholder="Search member or subteam"
                />
              </div>

              {/* Dropdown 1 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div
                  className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer"
                  onClick={() => toggleDropdown("profile")}
                >
                  <p className="text-[13px] font-[600] text-[#606060]">
                    My profile
                  </p>
                  <p>
                    {dropdownOpen.profile ? (
                      <BsChevronUp className="text-[#606060] text-[14px]" />
                    ) : (
                      <BsChevronDown className="text-[#606060] text-[14px]" />
                    )}
                  </p>
                </div>
                {dropdownOpen.profile && (
                  <div className="mt-1 flex flex-col">
                    {allProfiles
                      ?.filter(
                        (item) =>
                          item?.profileType === "self" ||
                          item?.profileType === "admin" ||
                          item?.profileType === ""
                      )
                      .map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center p-0 py-2"
                        >
                          <input
                            type="radio"
                            name="profile"
                            value={item.id}
                            className="mr-3"
                            checked={selectedOptions.profileId === item.id}
                            onChange={() =>
                              handleSelectChange("profileId", item.id)
                            }
                          />
                          <FilterImageWithTextCell
                            containerClass="flex w-[150px] items-center gap-3"
                            texts={item.firstName + " " + item.lastName}
                            imgUrl={appendBucketPath(item.profileUrl)}
                          />
                        </label>
                      ))}
                  </div>
                )}
              </div>

              {/* Dropdown 2 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div
                  className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer"
                  onClick={() => toggleDropdown("team")}
                >
                  <p className="text-[13px] font-[600] text-[#606060]">
                    Team member
                  </p>
                  <p>
                    {dropdownOpen.team ? (
                      <BsChevronUp className="text-[#606060] text-[14px]" />
                    ) : (
                      <BsChevronDown className="text-[#606060] text-[14px]" />
                    )}
                  </p>
                </div>
                {dropdownOpen.team && (
                  <div className="mt-1 flex flex-col">
                    {allProfiles
                      ?.filter((item) => item?.profileType === "team")
                      .map((item, index) => (
                        <label
                          key={index}
                          className="flex items-center p-0 py-2"
                        >
                          <input
                            type="radio"
                            name="team"
                            value={item.id}
                            className="mr-3"
                            checked={selectedOptions.teamId === item.id}
                            onChange={() =>
                              handleSelectChange("teamId", item.id)
                            }
                          />
                          <FilterImageWithTextCell
                            containerClass="flex w-[150px] items-center gap-3"
                            texts={item.firstName + " " + item.lastName}
                            imgUrl={appendBucketPath(item.profileUrl)}
                          />
                        </label>
                      ))}
                  </div>
                )}
              </div>

              {/* Dropdown 3 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div
                  className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer"
                  onClick={() => toggleDropdown("subteam")}
                >
                  <p className="text-[13px] font-[600] text-[#606060]">
                    Subteam
                  </p>
                  <p>
                    {dropdownOpen.subteam ? (
                      <BsChevronUp className="text-[#606060] text-[14px]" />
                    ) : (
                      <BsChevronDown className="text-[#606060] text-[14px]" />
                    )}
                  </p>
                </div>
                {dropdownOpen.subteam && (
                  <div className="mt-1 flex flex-col">
                    {/* Render subteam options similarly */}

                    {subTeams?.map((item, index) => (
                      <label className="flex items-center p-0 py-2" key={index}>
                        <input
                          type="radio"
                          name={item?.name}
                          value={item?.id}
                          className="mr-3"
                          checked={selectedSubTeam === item?.id}
                          onChange={() =>
                            handleSelectChange("subteamId", item?.id)
                          }
                        />
                        {item?.name}
                      </label>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-[90%] flex items-center justify-end mt-5">
                <p
                  className="text-[#808080] text-[12px] cursor-pointer"
                  onClick={() => {
                    handleClearFilters && handleClearFilters();
                    handleClose();
                  }}
                >
                  Clear filter
                </p>
                <Button
                  onClick={handleApplyFilter} // Use the new handler here
                  text="Apply"
                  btnClasses="w-[80px] h-[34px] rounded-[22px] ml-3 text-white font-[600] text-[12px] bg-[#2B6EF6] flex justify-center items-center relative"
                />
              </div>
            </div>
          </Menu>
        </div>
      </div>

      {/* {loading && <Loading />} */}
    </div>
  );
};

export default HeaderFilter;
