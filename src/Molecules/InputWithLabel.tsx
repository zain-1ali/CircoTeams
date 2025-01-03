import Input from "../Atoms/Input";
import Text from "../Atoms/Text";
import { inputWithLabelProps } from "../Types";

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
}) => {
  return (
    <>
      <Text text={label} classes={labelClasses} />
      <Input
        type={type}
        onChange={onChange}
        classes={inputClasses}
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        disabled={disabled}
      />
    </>
  );
};

export default InputWithLabel;
