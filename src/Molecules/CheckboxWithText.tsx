import Checkbox from "../Atoms/Checkbox";
import Text from "../Atoms/Text";
import { checkboxTextProps } from "../Types";

const CheckboxWithText: React.FC<checkboxTextProps> = ({
  text,
  state,
  func,
  isSignin,
}) => {
  return (
    <div className={`flex ${isSignin ? "items-center" : "items-start"}`}>
      <Checkbox
        checkValue={state}
        onChange={func}
        classes={`h-[15px] w-[15px] ${!isSignin && "mt-1"}`}
      />
      {isSignin}
      <Text text={text} classes="font-[400] text-[14px] ml-1" />
    </div>
  );
};

export default CheckboxWithText;
