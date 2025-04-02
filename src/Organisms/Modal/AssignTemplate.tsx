import { CiSearch } from "react-icons/ci";
import Text from "../../Atoms/Text";
import Input from "../../Atoms/Input";
import Button from "../../Atoms/Button";
import { useEffect, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import Checkbox from "../../Atoms/Checkbox";
import useToastNotifications from "../../Hooks/useToastNotification";
import { getMultipleChilds, appendBucketPath } from "../../Services/Constants";
import Image from "../../Atoms/Image";
import plchldr from "../../assets/images/profilePlchldr.png";
import { addMembersToTemplate } from "../../Services/TemplatesServices";
// import DropDown from "../DropDown/DropDown";

const AssignTemplate: React.FC<any> = ({ template }) => {
  const [allProfiles, setAllProfiles] = useState<any>([]);
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [loading, setLoading] = useState<boolean>(false);
  console.log(loading);

  // getting all members
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

  const membersId = selectedRows?.map((elm: any) => {
    return elm?.id;
  });

  console.log(membersId);

  return (
    <div className="w-[100%] h-[100%] flex justify-between items-center ">
      {/* All profles section  */}
      {/* <div className="w-[47%]"> */}
      {/* <Text
        text="Add New Member"
        classes="text-[14px] font-[600] text-[#8D8D8D]"
      /> */}
      <div className="w-[100%] h-[100%] bg-[#FAFAFB] rounded-[10px] p-4">
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
              addMembersToTemplate(
                membersId,
                template,
                showError,
                showSuccess,
                setLoading
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
                    elm?.templateId === template?.id ? "none" : undefined,
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
                  src={appendBucketPath(elm?.profileUrl) || plchldr}
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
      {/* </div> */}
    </div>
  );
};

export default AssignTemplate;
