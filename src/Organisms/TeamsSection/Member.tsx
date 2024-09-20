import TableHeader from "../../Molecules/TableHeader";
import Table from "../Table";
import TableHeaderCell from "../../Molecules/TableHeaderCell";

const Member = () => {
  const headers = [
    <TableHeaderCell text="Name" width="200px" />,
    <TableHeaderCell text="Email" width="200px" />,
    <TableHeaderCell text="Subteam" width="200px" />,
    <TableHeaderCell text="Template" width="200px" />,
  ];
  return (
    <div className="w-[100%] h-[100%]">
      <TableHeader number={78} headerName="Members" />
      <div className="mt-5">
        <Table headers={headers} type="members" />
      </div>
    </div>
  );
};

export default Member;
