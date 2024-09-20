import Checkbox from "../Atoms/Checkbox";
import IconWithTextCell from "../Molecules/IconWithTextCell";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";
import message from "../assets/images/Message.png";
import hi11 from "../assets/images/hi11.png";
import hi12 from "../assets/images/hi12.png";

// : React.FC<TableRowProps>
const MembersTableRow = () => {
  return (
    <div className="w-[100%] h-[60px]  rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4">
      <Checkbox
        checkValue={false}
        onChange={() => {}}
        classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
      />
      <ImageWithTextCell
        containerClass="flex w-[200px] items-center gap-3"
        isAdmin={true}
      />
      <IconWithTextCell
        icon={message}
        text="arroragaur@gmail.com"
        iconClass="w-[15.56px] h-[14px]"
      />
      <IconWithTextCell
        icon={hi11}
        text="Sales Team"
        iconClass="h-[14px] w-[14px] object-cover"
      />
      <IconWithTextCell
        icon={hi12}
        text="Main Template"
        iconClass="h-[14px] w-[14px] object-cover"
      />
    </div>
  );
};

export default MembersTableRow;
