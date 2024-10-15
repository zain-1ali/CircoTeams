import React, { useState, useEffect } from "react";
import Button from "../Atoms/Button";
import Text from "../Atoms/Text";
import { HiFilter } from "react-icons/hi";
import { CiSearch } from "react-icons/ci";
import Input from "../Atoms/Input";
import { TbFileExport } from "react-icons/tb";
import { Menu } from "@mui/material";
import { BsChevronUp } from "react-icons/bs";
import { BsChevronDown } from "react-icons/bs";
import FilterImageWithTextCell from "../Molecules/FilterImageWithTextCell";
import { getMultipleChilds, appendBucketPath, removeMultipleChildFromDb } from "../Services/Constants";
import Loading from "./Loading";
import { ConnectionHeaderProps } from "../Types"
import ConnectionModal from "../Molecules/ConnectionModal";
import DownloadCsv from "../Organisms/DownloadCsv";


const ConnectionHeader: React.FC<ConnectionHeaderProps> = ({ applyFilterId, searchItem, selectedRows }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [allProfiles, setAllProfiles] = useState<any>([]);
  const [updatedRows, setUpdatedRows] = useState<any[]>([]);
  const [connectionModal, setConnectionModal] = useState<boolean>(false);


  const getAllProfiles = (data: any) => {
    if (data) {
      setAllProfiles(Object.values(data));
    }
  };
  const companyId = localStorage.getItem("circoCompanyUid") || "";
  useEffect(() => {
    getMultipleChilds(
      "User/",
      "parentID",
      companyId,
      getAllProfiles,
      setLoading
    );
  }, [companyId]);
  useEffect(() => {
    // Enrich selectedRows with user names based on userid
    const enrichSelectedRows = () => {
      const enrichedData = selectedRows.map(connection => {
        // Find the profile that matches the userid
        const profile = allProfiles.find(profile => profile.id === connection?.userid);
        
        return {
          ...connection, // Spread the existing connection data
          memberName: profile ? profile?.firstName + " "+ profile?.lastName : "Unknown", // Add the user name or default to "Unknown"
        };
      });

      setUpdatedRows(enrichedData); // Update state with enriched data
    };

    // Only run this effect if allProfiles have been loaded
    if (allProfiles.length > 0) {
      enrichSelectedRows();
    }
  }, [selectedRows, allProfiles]);
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
    // Create an object where all keys except the selected one are empty
    const updatedOptions = {
      teamId: type === "teamId" ? value : "",
      subteamId: type === "subteamId" ? value : "",
      profileId: type === "profileId" ? value : "",
    };

    // Update state with the newly constructed object
    setSelectedOptions(updatedOptions);

    // Call the API with the updated selection
    // applyFilterId(value);  // Or pass the entire updatedOptions object if needed
  };
  const handleApplyFilter = () => {
    handleClose();
    // Call the API with the currently selected options
    applyFilterId(selectedOptions.teamId || selectedOptions.subteamId || selectedOptions.profileId || "");
  };
  
  const handleClearFilter = () => {
    setSelectedOptions({
      teamId: "",
      subteamId: "",
      profileId: "",
    });
    handleClose();
    applyFilterId(""); 
  }
  const deleteRowCallback = () => {
    console.log("deleteRowCallback");
  };
  const handleRemoveMultiple = () => {
    const selectedIds = selectedRows.map((row) => row.id);
    removeMultipleChildFromDb("Contacts/", selectedIds, deleteRowCallback);
  };
  const [searchValue, setSearchValue] = useState<string>("");

  const handleSearch = (value:string) => {
    setSearchValue(value); 
    searchItem(value);
  };

  
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

  return (
    <div>
      <div className="w-[100%] flex justify-between items-center">
        <Text text="Connections" classes="font-[600] text-[18px]" />
        <div className="flex items-center gap-2">
          <Button
            onClick={handleOpenFilter}
            text="Filter"
            aria-controls="filter"
            aria-haspopup="listbox"
            // id="lang-button2"
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
                borderRadius: "14px", // Tailwind equivalent of rounded-lg
              },
            }}

          >
            <div className="w-[310px] py-[10px] h-max bg-white flex flex-col items-center">


              <div className="w-[90%] flex h-[28px] rounded-[100px] border-[#CACACA] border mt-4 mb-5 items-center pl-2 gap-2 bg-white">
                <CiSearch className="text-[#B7B7B7] text-[15px]" />
                <Input
                  classes="h-[95%] w-[80%] outline-none placeholder:text-[#B7B7B7] placeholder:font-[500] placeholder:text-[12px] pb-1"
                  value=""
                  onChange={() => { }}
                  placeholder="Search member or subteam"
                />
              </div>


              {/* Dropdown 1 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer" onClick={() => toggleDropdown("profile")}>
                  <p className="text-sm">My profile</p>
                  <p>{dropdownOpen.profile ? <BsChevronUp /> : <BsChevronDown />}</p> {/* Arrow indicator */}
                </div>
                {dropdownOpen.profile && (
                  <div className=" mt-1 flex flex-col">
                    {allProfiles
                      ?.filter((item: any) => item?.profileType === "self") // Corrected the filter
                      .map((item: any, index: any) => (
                        <label key={index} className="flex items-center p-0 py-2">
                          <input
                            type="radio"
                            name="profile"
                            value={item.id}
                            className="mr-3"
                            checked={selectedOptions.profileId === item.id}
                            onChange={() => handleSelectChange("profileId", item.id)}
                          />
                          <FilterImageWithTextCell
                            containerClass="flex w-[150px] items-center gap-3"
                            texts={item.firstName + " " + item.lastName}
                            imgUrl={appendBucketPath(item.profileUrl)} // Default image fallback
                          />
                        </label>
                      ))}
                  </div>
                )}
              </div>

              {/* Dropdown 2 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer" onClick={() => toggleDropdown("team")}>
                  <p className="text-sm">Team member</p>
                  <p>{dropdownOpen.team ? <BsChevronUp /> : <BsChevronDown />}</p> {/* Arrow indicator */}
                </div>
                {dropdownOpen.team && (
                  <div className="mt-1 flex flex-col">
                    {allProfiles
                      ?.filter((item: any) => item?.profileType === "team") // Corrected the filter
                      .map((item: any, index: any) => (
                        <label key={index} className="flex items-center p-0 py-2">
                          <input
                            type="radio"
                            name="team"
                            value={item.id}
                            className="mr-3"
                            checked={selectedOptions.teamId === item.id}
                            onChange={() => handleSelectChange("teamId", item.id)}
                          />
                          <FilterImageWithTextCell
                            containerClass="flex w-[150px] items-center gap-3"
                            texts={item.firstName + " " + item.lastName}
                            imgUrl={appendBucketPath(item.profileUrl)} // Default image fallback
                          />
                        </label>
                      ))}
                  </div>

                )}
              </div>

              {/* Dropdown 3 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer" onClick={() => toggleDropdown("subteam")}>
                  <p className="text-sm">Subteam</p>
                  <p>{dropdownOpen.subteam ? <BsChevronUp /> : <BsChevronDown />}</p> {/* Arrow indicator */}
                </div>
                {dropdownOpen.subteam && (
                  <div className=" mt-1 flex flex-col">
                    <label className="flex items-center p-0 py-2">
                      <input
                        type="radio"
                        name="subteam"
                        value="Team A"
                        className="mr-3"
                        checked={selectedOptions.subteamId === "Team A"}
                        onChange={() => handleSelectChange("subteamId", "Team A")}
                      />
                      <FilterImageWithTextCell
                        containerClass="flex w-[150px] items-center gap-3"
                        texts="Person 1"
                        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
                      />
                    </label>
                    <label className="flex items-center p-0 py-2">
                      <input
                        type="radio"
                        name="subteam"
                        value="Team A"
                        className="mr-3"
                        checked={selectedOptions.subteamId === "Team A"}
                        onChange={() => handleSelectChange("subteamId", "Team A")}
                      />
                      <FilterImageWithTextCell
                        containerClass="flex w-[150px] items-center gap-3"
                        texts="Person 1"
                        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
                      />
                    </label>
                    <label className="flex items-center p-0 py-2">
                      <input
                        type="radio"
                        name="subteam"
                        value="Team A"
                        className="mr-3"
                        checked={selectedOptions.subteamId === "Team A"}
                        onChange={() => handleSelectChange("subteamId", "Team A")}
                      />
                      <FilterImageWithTextCell
                        containerClass="flex w-[150px] items-center gap-3"
                        texts="Person 1"
                        imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHdLZAJzeEA2iYjsrN4CEXrg8ATQ1tB04blQ&s"
                      />
                    </label>
                  </div>
                )}
              </div>
              {/* filter action */}
              <div className="w-[90%] flex items-center justify-end mt-5">
                <p
                  className="text-[#808080] text-[12px] cursor-pointer"
                  onClick={handleClearFilter}
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

          <Button
            text="Add Connection"
            btnClasses="w-[131px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
            onClick={() => { setConnectionModal(true)}}
          />
          <Button
              text={<DownloadCsv data={updatedRows} />}
              btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-4"
              onClick={() => { }}
              icon={<TbFileExport className="absolute left-3 text-[16px]" />}
              
            />
          <Button
            text="Remove"
            btnClasses="w-[80px] h-[32px] rounded-[22px] text-[#FF4545] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
            onClick={handleRemoveMultiple}
          />
        </div>
      </div>
      <div className="w-[100%] flex h-[39px] rounded-[100px] border-[#CACACA] border mt-4 items-center pl-2 gap-2 bg-white">
        <CiSearch className="text-[#B7B7B7] text-[24px]" />
        <Input
          classes="h-[95%] w-[80%] outline-none placeholder:text-[#B7B7B7] placeholder:font-[500] placeholder:text-[14px]"
          onChange={(e) => handleSearch(e.target.value)} // Set the onChange handler
          value={searchValue} // Bind the input value to state
          placeholder="Search by name, job title, email, template, or subteam"
        />
      </div>
      {
        connectionModal && (
          <ConnectionModal
            isOpen={connectionModal}
            onClose={() => setConnectionModal(false)}
            onSubmit={() => {}} 
            data={[]}
          />
        )
      }
    </div>
  );
};

export default ConnectionHeader;
