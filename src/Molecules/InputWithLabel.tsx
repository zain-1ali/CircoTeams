import Image from "../Atoms/Image";
import Input from "../Atoms/Input";
import Text from "../Atoms/Text";
import { inputWithLabelProps } from "../Types";
import lockedIcon from "../assets/images/locked.png";
import unlockedIcon from "../assets/images/unlocked.png";

const InputWithLabel: React.FC<inputWithLabelProps> = ({
  type,
  label,
  onChange,
  value,
  inputClasses,
  labelClasses,
  maxLength,
  disabled = false,
  placeholder,
  isTemplate = false,
  locked,
  changeLockedStatus=()=>{}
}) => {
  return (
    <>
      <Text text={label} classes={labelClasses} />
      <div className="flex items-center">
        <Input
          type={type}
          onChange={onChange}
          classes={inputClasses}
          value={value}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
        />
        {isTemplate && (
          <div className="h-[40px] w-[20%] rounded-r-[10px] bg-[#FAFAFB] mt-[2px] flex justify-center items-center" onClick={changeLockedStatus}>
            <Image
              src={locked ? lockedIcon : unlockedIcon}
              classes="h-[20px] w-[20px] object-cover cursor-pointer"
            />
          </div>
        )}
      </div>
    </>
  );
};

export default InputWithLabel;
