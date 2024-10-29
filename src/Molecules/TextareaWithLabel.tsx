import Textarea from "../Atoms/Textarea";
import Text from "../Atoms/Text";
import { textAreaWithLabelProps } from "../Types";

const TextareaWithLabel: React.FC<textAreaWithLabelProps> = ({
  type,
  label,
  onTextChange,
  value,
  inputClasses,
  labelClasses,
}) => {
  return (
    <>
      <Text text={label} classes={labelClasses} />
      <Textarea
        type={type}
        onTextChange={onTextChange}
        classes={inputClasses}
        value={value}
      />
    </>
  );
};

export default TextareaWithLabel;
