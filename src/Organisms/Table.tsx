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
  const allSelected = selectedRows?.length === data?.length && data?.length > 0;

  const handleSelectAll = (isChecked: boolean) => {
    if (isChecked) {
      const allItems = data; // Select all row data objects
      handleRowSelect(allItems, true); // Pass all items
    } else {
      handleRowSelect([], false); // Deselect all rows
    }
  };

  return (
    <div className="w-[100%] overflow-y-scroll h-[100%]">
      <TableHead
        tableHeadCells={headers}
        allSelected={allSelected}
        onSelectAll={handleSelectAll} // Pass the select all handler
      />

      {/* Rendering for "members" type */}
      {type === "members" &&
        (data?.filter((item) => {
          return item?.profileType === "team";
        })?.length < 1 ? (
          <>
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              No members to show
            </div>
          </>
        ) : (
          <>
            {data?.map(
              (item: any, index: any) =>
                item?.profileType === "team" && (
                  <MembersTableRow
                    key={index}
                    data={item}
                    handleRowSelect={handleRowSelect} // Pass handler to row
                    isSelected={selectedRows.some(
                      (row: any) => row.id === item.id
                    )}
                  />
                )
            )}
          </>
        ))}

      {/* Rendering for "connections" type */}
      {type === "connections" && (
        <>
          {data?.length > 0 ? (
            data?.map((item: any, index: any) => (
              <ConnectionTableRow
                key={index}
                data={item}
                handleRowSelect={handleRowSelect}
                isSelected={selectedRows.some((row: any) => row.id === item.id)}
              />
            ))
          ) : (
            <div className="w-[100%] h-[100%] flex justify-center items-center">
              No connections to show
            </div>
          )}
        </>
      )}

      {/* Rendering for "devices" type */}
      {type === "devices" && (
        <>
          {data?.map((item: any, index: any) => (
            <DevicesTableRow
              key={index}
              data={item}
              handleRowSelect={handleRowSelect} // Pass handler to row
              isSelected={selectedRows.some(
                (row: any) => row.device.id === item.device.id
              )}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Table;
