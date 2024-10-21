import React from "react";
import { tableProps } from "../Types";
import TableHead from "../Molecules/TableHead";
import MembersTableRow from "../Molecules/MembersTableRow";
import ConnectionTableRow from "../Molecules/ConnectionTableRow";
import DevicesTableRow from "../Molecules/DevicesTableRow";

const Table: React.FC<tableProps> = ({
  headers,
  type,
  data,
  selectedRows,
  handleRowSelect,
}) => {
  const allSelected = selectedRows?.length === data?.length;

  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      const allItems = data; // Select all row data objects
      handleRowSelect(allItems, true); // Pass all items
    } else {
      handleRowSelect([], false); // Deselect all rows
    }
  };

  return (
    <div className="w-[100%]">
      <TableHead
        tableHeadCells={headers}
        allSelected={allSelected}
        onSelectAll={handleSelectAll} // Pass the select all handler
      />

      {/* Rendering for "members" type */}
      {type === "members" && (
        <>
          <MembersTableRow />
          <MembersTableRow />
          <MembersTableRow />
          <MembersTableRow />
          <MembersTableRow />
        </>
      )}

      {/* Rendering for "connections" type */}
      {type === "connections" && (
        <>
          {data?.map((item: any, index: any) => (
            <ConnectionTableRow
              key={index}
              data={item}
              handleRowSelect={handleRowSelect} // Pass handler to row
              isSelected={selectedRows.some((row: any) => row.id === item.id)}
            />
          ))}
        </>
      )}

      {/* Rendering for "devices" type */}
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
