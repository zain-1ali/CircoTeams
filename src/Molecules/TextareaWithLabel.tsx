import Textarea from "../Atoms/Textarea";
import Text from "../Atoms/Text";
import { inputWithLabelProps } from "../Types";

const TextareaWithLabel: React.FC<inputWithLabelProps> = ({
  type,
  label,
  onChange,
  value,
  inputClasses,
  labelClasses,
}) => {
  return (
    <>
      <Text text={label} classes={labelClasses} />
      <Textarea
        type={type}
        onChange={onChange}
        classes={inputClasses}
        value={value}
      />
    </>
  );
};

export default TextareaWithLabel;
