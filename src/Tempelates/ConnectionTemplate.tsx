import TableHeader from "../Molecules/TableHeader";
import TableHeaderCell from "../Molecules/TableHeaderCell";
import Sidebar from "../Organisms/Sidebar";
import Table from "../Organisms/Table";

const ConnectionTemplate = () => {
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
      <div className="w-[83%] h-[100%] p-5 border bg-[#f6f6f6] relative">
        <TableHeader number={78} headerName="Connections" />

        <div
          className={`w-[96%]  ${
            innerHeight <= 700 ? "h-[80%]" : "h-[83%]"
          }   bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center  pt-4 pl-2 pr-2`}
        >
          <Table headers={headers} type="connections" />
        </div>
      </div>
    </div>
  );
};

export default ConnectionTemplate;
