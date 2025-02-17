import TableHeader from "../../Molecules/TableHeader";
import Table from "../Table";
import TableHeaderCell from "../../Molecules/TableHeaderCell";
import { useEffect, useState } from "react";
import {
  getMultipleChilds,
  getSingleChildFromDb,
} from "../../Services/Constants";
import UserProfileCard from "../UserProfileCard";
import CustomModal from "../Modal/Modal";
import Qr from "../Modal/Qr";

const Member = () => {
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [loading, setLoading] = useState<boolean>(false);
  let [filteredConnections, setFilteredConnections] = useState<any[]>([]);
  let [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectedId, setSelectedId] = useState<string>("");
  const [qrModal, setQrModal] = useState<boolean>(false);
  console.log(selectedRows);

  console.log(loading);
  const [allProfiles, setAllProfiles] = useState<any>([]);
  const [isCardLayout, setIsCardLayout] = useState<boolean>(false);

  // const getCompanyProfile = (data: any) => {
  //   if (data) {
  //     setFilteredConnections((prev) => [...prev, Object.values(data)?.[0]]);
  //     setAllProfiles((prev: any) => [...prev, Object.values(data)?.[0]]);
  //   }
  // };

  // const getAllProfiles = (data: object) => {
  //   const profiles = Object.values(data);
  //   console.log(profiles);

  //   if (data && Array.isArray(profiles)) {
  //     setFilteredConnections((prev) => [...prev, ...profiles]);
  //     setAllProfiles((prev: any) => [...prev, ...profiles]);
  //   }
  // };

  const getCompanyProfile = (data: any) => {
    console.log(data);

    // if (data) {
    //   const profile: any = Object.values(data)?.[0];
    //   setFilteredConnections((prev) =>
    //     prev.some((item) => item.id === profile?.id) ? prev : [...prev, profile]
    //   );
    //   setAllProfiles((prev: any) =>
    //     prev.some((item: any) => item.id === profile?.id)
    //       ? prev
    //       : [...prev, profile]
    //   );
    // }
  };

  const handleQrModal = (id: string) => {
    setQrModal(true);
    setSelectedId(id);
  };

  const getAllProfiles = (data: object) => {
    const profiles = Object.values(data);
    if (data && Array.isArray(profiles)) {
      // setFilteredConnections((prev) =>
      //   [...prev, ...profiles].filter(
      //     (item, index, self) =>
      //       index === self.findIndex((t) => t.id === item.id)
      //   )
      // );
      setFilteredConnections(profiles);
      // setAllProfiles((prev: any) =>
      //   [...prev, ...profiles].filter(
      //     (item, index, self) =>
      //       index === self.findIndex((t) => t.id === item.id)
      //   )
      // );
      setAllProfiles(profiles);
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
    <TableHeaderCell
      text="Name"
      width="200px"
      keyName="firstName"
      data={filteredConnections}
      setData={setFilteredConnections}
    />,
    <TableHeaderCell
      text="Email"
      width="200px"
      keyName="email"
      data={filteredConnections}
      setData={setFilteredConnections}
    />,
    <TableHeaderCell
      text="Subteam"
      width="200px"
      keyName="subTeamId"
      data={filteredConnections}
      setData={setFilteredConnections}
    />,
    <TableHeaderCell
      text="Template"
      width="200px"
      keyName="templateId"
      data={filteredConnections}
      setData={setFilteredConnections}
    />,
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
    <div className="w-[100%] h-[100%] overflow-y-scroll">
      <TableHeader
        number={allProfiles?.length || 0}
        headerName="Members"
        selectedRows={selectedRows}
        searchItem={searchItem}
        isCardLayout={isCardLayout}
        setIsCardLayout={setIsCardLayout}
      />
      <div className="mt-5">
        {!isCardLayout ? (
          <Table
            headers={headers}
            type="members"
            data={filteredConnections}
            selectedRows={selectedRows}
            handleRowSelect={handleRowSelect}
          />
        ) : (
          <div className="w-[100%] flex justify-start gap-[4%] gap-y-5 mt-3 flex-wrap">
            {filteredConnections?.map((profile: any, i: any) => {
              if (profile?.profileType === "team") {
                return (
                  <UserProfileCard
                    isCreatePrfl={false}
                    profile={profile}
                    key={i}
                    handleQrModal={handleQrModal}
                    isTeams={true}
                  />
                );
              }
            })}
          </div>
        )}

        <CustomModal
          open={qrModal}
          onClose={() => setQrModal(false)}
          style={{ height: "300px", width: "300px", borderRadius: 5, p: 4 }}
        >
          <Qr userId={selectedId} />
        </CustomModal>
      </div>
    </div>
  );
};

export default Member;
