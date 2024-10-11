import React from "react";
import { tableProps } from "../Types";
import TableHead from "../Molecules/TableHead";
import MembersTableRow from "../Molecules/MembersTableRow";
import ConnectionTableRow from "../Molecules/ConnectionTableRow";
import DevicesTableRow from "../Molecules/DevicesTableRow";

const Table: React.FC<tableProps> = ({ headers, type, data }) => {
  // console.log(data);
  return (
    <div className="w-[100%]">
      <TableHead tableHeadCells={headers} />
      {type === "members" && (
        <>
          <MembersTableRow />
          <MembersTableRow />
          <MembersTableRow />
          <MembersTableRow />
          <MembersTableRow />
        </>
      )}

      {type === "connections" && (
        <>
          {/* {data?.map((item: object, index: any) => (
            <ConnectionTableRow key={index} data={item} />
          ))} */}
          <ConnectionTableRow />
        </>
      )}


      {type === "devices" && (
        <>
          <DevicesTableRow />
          <DevicesTableRow />
          <DevicesTableRow />
          <DevicesTableRow />
        </>
      )}
    </div>
  );
};

export default Table;
