import Checkbox from "../Atoms/Checkbox";
import IconWithTextCell from "../Molecules/IconWithTextCell";
import ImageWithTextCell from "../Molecules/ImageWithTextCell";
import message from "../assets/images/message.png";
import hi11 from "../assets/images/hi11.png";
import hi12 from "../assets/images/hi12.png";

// : React.FC<TableRowProps>
const MembersTableRow: React.FC<any> = ({
  data,
  handleRowSelect,
  isSelected,
}) => {
  const handleSelectedItem = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleRowSelect(data, e.target.checked);
  };
  return (
    <div className="w-[100%] h-[60px]  rounded-[12px] mt-3 bg-[#f9f9f9] flex items-center justify-between pl-4">
      <div className="w-[35px]">
        <Checkbox
          checkValue={isSelected}
          onChange={handleSelectedItem}
          classes="h-[20px] w-[20px] border border-[#B3B3BF] rounded-[2px]"
        />
      </div>

      <ImageWithTextCell
        containerClass="flex w-[200px] items-center gap-3 "
        isAdmin={true}
        data={{
          text: data?.firstName + " " + data?.lastName,
          image: data?.profileUrl,
        }}
      />
      <IconWithTextCell
        icon={message}
        text={data?.email}
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
