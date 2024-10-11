import {useState} from "react";
import Checkbox from "../Atoms/Checkbox";
import Text from "../Atoms/Text";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";
import { TableRowProps } from "../Types";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import ConnectionModal from "../Molecules/ConnectionModal";

// : React.FC<TableRowProps>
const ConnectionTableRow : React.FC<TableRowProps> = ({data}) => {

  const [modalOpen, setModalOpen] = useState(false);

  const handleModalSubmit = () => {
    console.log("callback", );
  };

  return (
    <>
    <div className="w-[100%] h-[60px]  rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4 pr-4">
      <Checkbox
        checkValue={false}
        onChange={() => {}}
        classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
      />

      <ImageWithTextCell
        containerClass="flex w-[150px] items-center gap-3"
        isAdmin={false}
      />
      <Text
        text={data?.name}
        classes="font-[600] text-[#939393] text-[12px] w-[150px]"
      />
      <Text
        text="July 21, 2024"
        classes="font-[600] text-[#939393] text-[12px] w-[150px]"
      />
      <Text
        text="Met at ACG Summit; interested in purchsing product"
        classes="font-[600] text-[#939393] text-[12px] w-[300px]"
      />
      <HiOutlineDotsHorizontal
      className="cursor-pointer"
      onClick={() => setModalOpen(true)}
      />
      
    </div>

    <ConnectionModal
    isOpen={modalOpen}
    onClose={() => setModalOpen(false)}
    onSubmit={handleModalSubmit}
    />
    </>
  );
};

export default ConnectionTableRow;
