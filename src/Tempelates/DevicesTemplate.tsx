import TableHeader from "../Molecules/TableHeader";
import TableHeaderCell from "../Molecules/TableHeaderCell";
import Sidebar from "../Organisms/Sidebar";
import Table from "../Organisms/Table";

const DevicesTemplate = () => {
  const innerHeight: number = window.innerHeight;
  const headers = [
    <TableHeaderCell text="Device" width="30%" />,
    <TableHeaderCell text="Linked to" width="30%" />,
    <TableHeaderCell text="Date" width="150px" />,
  ];
  return (
    <div className="h-screen w-screen flex">
      <Sidebar />
      <div className="w-[83%] h-[100%] p-5 border bg-[#f6f6f6] relative">
        <TableHeader number="" headerName="Devices" />

        <div
          className={`w-[96%]  ${
            innerHeight <= 700 ? "h-[80%]" : "h-[83%]"
          }   bg-[white]  rounded-t-[20px] absolute bottom-0 flex justify-center  pt-4 pl-2 pr-2`}
        >
          <Table headers={headers} type="devices" />
        </div>
      </div>
    </div>
  );
};

export default DevicesTemplate;
