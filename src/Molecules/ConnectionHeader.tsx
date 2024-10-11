import React, { useState } from "react";
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

const ConnectionHeader: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const open = Boolean(anchorEl);

  const handleClickListItem = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget); // Open the menu
  };

  const handleClose = () => {
    setAnchorEl(null); // Close the menu
  };


  const [selectedOptions, setSelectedOptions] = useState<{
    team: string;
    subteam: string;
    profile: string;
  }>({
    team: "",
    subteam: "",
    profile: "",
  });
  
  const handleSelectChange = (type: "team" | "subteam" | "profile", value: string) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [type]: value,
    }));
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
            onClick={handleClickListItem}
            text="Filter"
            aria-controls="filter"
            aria-haspopup="listbox"
            // id="lang-button2"
            btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center pl-3 relative"
            // Directly pass the handleClickListItem2 here

            icon={<HiFilter className="absolute left-2 text-[16px]" />}
          />

          <Menu
            id="filter"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            sx={{ marginTop: 1 }}
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
                    <label className="flex items-center p-0 py-2">
                      <input
                        type="radio"
                        name="profile"
                        value="Profile A"
                        className="mr-3"
                        checked={selectedOptions.profile === "Profile A"}
                        onChange={() => handleSelectChange("profile", "Profile A")}
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
                        name="profile"
                        value="Profile B"
                        className="mr-3"
                        checked={selectedOptions.profile === "Profile B"}
                        onChange={() => handleSelectChange("profile", "Profile B")}
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
                        name="profile"
                        value="Profile C"
                        className="mr-3"
                        checked={selectedOptions.profile === "Profile C"}
                        onChange={() => handleSelectChange("profile", "Profile C")}
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

              {/* Dropdown 2 */}
              <div className="w-[90%] bg-[#F6F6F6] min-h-[40px] max-h-[130px] overflow-y-scroll px-[10px] py-[5px] my-[6px] rounded-[9px] flex flex-col justify-start">
                <div className="flex justify-between items-center h-[29px] w-[100%] cursor-pointer" onClick={() => toggleDropdown("team")}>
                  <p className="text-sm">Team member</p>
                  <p>{dropdownOpen.team ? <BsChevronUp /> : <BsChevronDown />}</p> {/* Arrow indicator */}
                </div>
                {dropdownOpen.team && (
                  <div className=" mt-1 flex flex-col">
                    <label className="flex items-center p-0 py-2">
                      <input
                        type="radio"
                        name="team"
                        value="Team A"
                        className="mr-3"
                        checked={selectedOptions.team === "Team A"}
                        onChange={() => handleSelectChange("team", "Team A")}
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
                        name="team"
                        value="Team A"
                        className="mr-3"
                        checked={selectedOptions.team === "Team A"}
                        onChange={() => handleSelectChange("team", "Team A")}
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
                        name="team"
                        value="Team A"
                        className="mr-3"
                        checked={selectedOptions.team === "Team A"}
                        onChange={() => handleSelectChange("team", "Team A")}
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
                        checked={selectedOptions.subteam === "Team A"}
                        onChange={() => handleSelectChange("subteam", "Team A")}
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
                        checked={selectedOptions.subteam === "Team A"}
                        onChange={() => handleSelectChange("subteam", "Team A")}
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
                        checked={selectedOptions.subteam === "Team A"}
                        onChange={() => handleSelectChange("subteam", "Team A")}
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
                <p className="text-[#808080] text-[12px] cursor-pointer">Clear filter</p>
                <Button
                  onClick={handleClickListItem}
                  text="Apply"
                  btnClasses="w-[80px] h-[34px] rounded-[22px] ml-3 text-white font-[600] text-[12px]  bg-[#2B6EF6] flex justify-center items-center relative"
                // Directly pass the handleClickListItem2 here
                />
              </div>
            </div>

          </Menu>

          <Button
            text="Add Connection"
            btnClasses="w-[131px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
            onClick={() => { }}
          />
          <Button
            text="Export"
            btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-4"
            onClick={() => { }}
            icon={<TbFileExport className="absolute left-3 text-[16px]" />}
          />
          <Button
            text="Remove"
            btnClasses="w-[80px] h-[32px] rounded-[22px] text-[#FF4545] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative"
            onClick={() => { }}
          />
        </div>
      </div>
      <div className="w-[100%] flex h-[39px] rounded-[100px] border-[#CACACA] border mt-4 items-center pl-2 gap-2 bg-white">
        <CiSearch className="text-[#B7B7B7] text-[24px]" />
        <Input
          classes="h-[95%] w-[80%] outline-none placeholder:text-[#B7B7B7] placeholder:font-[500] placeholder:text-[14px]"
          value=""
          onChange={() => { }}
          placeholder="Search by name, job title, email, template, or subteam"
        />
      </div>
    </div>
  );
};

export default ConnectionHeader;
