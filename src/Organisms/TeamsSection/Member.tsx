import TableHeader from "../../Molecules/TableHeader";
import Table from "../Table";
import TableHeaderCell from "../../Molecules/TableHeaderCell";
import { useEffect, useState } from "react";
import {
  getMultipleChilds,
  getSingleChildFromDb,
} from "../../Services/Constants";

const Member = () => {
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  // const [companyProfile, setCompanyProfile] = useState<any>({});
  // const [sureModal, setSureModal] = useState<boolean>(false);
  // const [creatTeamProfileModal, setTeamProfileModal] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  let [filteredConnections, setFilteredConnections] = useState<any[]>([]);
  let [selectedRows, setSelectedRows] = useState<string[]>([]);
  console.log(loading);
  const [allProfiles, setAllProfiles] = useState<any>([]);

  const getCompanyProfile = (data: any) => {
    if (data) {
      setFilteredConnections((prev) => [...prev, Object.values(data)?.[0]]);
      setAllProfiles((prev: any) => [...prev, Object.values(data)?.[0]]);
    }
  };

  const getAllProfiles = (data: object) => {
    const profiles = Object.values(data);
    console.log(profiles);

    if (data && Array.isArray(profiles)) {
      setFilteredConnections((prev) => [...prev, ...profiles]);
      setAllProfiles((prev: any) => [...prev, ...profiles]);
    }
  };

  console.log(filteredConnections);

  // getting company profile
  useEffect(() => {
    getSingleChildFromDb("/User", "id", companyId, getCompanyProfile);
  }, []);

  // console.log(companyProfile);

  // getting all child profiles
  useEffect(() => {
    getMultipleChilds(
      "User/",
      "parentID",
      companyId,
      getAllProfiles,
      setLoading
    );
  }, [companyId]);

  console.log(filteredConnections);

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
        setSelectedRows((prev) =>
          prev.filter((row: any) => row.id !== item.id)
        ); // Remove the single row by its ID
      }
    }
  };

  // console.log(allProfiles);

  const headers = [
    <TableHeaderCell text="Name" width="200px" />,
    <TableHeaderCell text="Email" width="200px" />,
    <TableHeaderCell text="Subteam" width="200px" />,
    <TableHeaderCell text="Template" width="200px" />,
  ];
  const searchItem = (searchValue: string) => {
    if (searchValue === "") {
      setFilteredConnections(allProfiles);
    } else {
      setFilteredConnections(
        allProfiles?.filter((item: any) =>
          item?.firstName?.toLowerCase().includes(searchValue.toLowerCase())
        )
      );
    }
  };
  return (
    <div className="w-[100%] h-[100%]">
      <TableHeader
        number={78}
        headerName="Members"
        selectedRows={selectedRows}
        searchItem={searchItem}
      />
      <div className="mt-5">
        <Table
          headers={headers}
          type="members"
          data={filteredConnections}
          selectedRows={selectedRows}
          handleRowSelect={handleRowSelect}
        />
      </div>
    </div>
  );
};

export default Member;
