import Checkbox from "../Atoms/Checkbox";
import Text from "../Atoms/Text";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";

// : React.FC<TableRowProps>
const ConnectionTableRow = () => {
  return (
    <div className="w-[100%] h-[60px]  rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4">
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
        text="Kevin Jin"
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
    </div>
  );
};

export default ConnectionTableRow;
