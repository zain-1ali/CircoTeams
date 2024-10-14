// import TableHeader from "../Molecules/TableHeader";
import ConnectionHeader from "../Molecules/ConnectionHeader";
import TableHeaderCell from "../Molecules/TableHeaderCell";
import Sidebar from "../Organisms/Sidebar";
import Table from "../Organisms/Table";
import { useEffect, useState } from "react";
import { getConnections } from "../Services/ConnectionServices";

const ConnectionTemplate = () => {
  let [allConnections, setAllConnections] = useState([]);
  let [filteredConnections, setFilteredConnections] = useState([]);
  const companyId = localStorage.getItem("circoCompanyUid");
  useEffect(() => {
    getConnections(companyId , updateConnections);
  }, [companyId]);

const updateConnections = (connections: any) => {
  setFilteredConnections(connections);
  setAllConnections(connections);
}

const applyFilterId = (id: string) => {

  if(id == "")
  {
    setFilteredConnections(allConnections);
  }
  else{
    setFilteredConnections(
      allConnections.filter((item: any) => item?.userid === id)
    );
  }

};
const searchItem = (searchValue: string) => {
  if (searchValue === "") {
    setFilteredConnections(allConnections);
  } else {
    setFilteredConnections(
      allConnections.filter((item: any) => 
        item?.name?.toLowerCase().includes(searchValue.toLowerCase())
      )
    );
  }
};


  const innerHeight: number = window.innerHeight;
  const headers = [
    <TableHeaderCell text="Connections" width="150px" />,
    <TableHeaderCell text="Connected with" width="150px" />,
    <TableHeaderCell text="Date" width="150px" />,
    <TableHeaderCell text="Note" width="300px" />,
  ];
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      
      <div className="w-[83%] h-[100%] px-5 pt-6 border bg-[#f6f6f6] relative">
        {/* <TableHeader number={78} headerName="Connections" /> */}
        <ConnectionHeader applyFilterId={applyFilterId} searchItem = {searchItem} />

        <div
          className={`w-[96%]  ${
            innerHeight <= 700 ? "h-[80%]" : "h-[83%]"
          }   bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center  pt-4 pl-2 pr-2`}
        >
          <Table headers={headers} type="connections" data ={filteredConnections} />
        </div>
      </div>
    </div>
  );
};

export default ConnectionTemplate;
