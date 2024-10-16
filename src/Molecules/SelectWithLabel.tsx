import Select from "../Atoms/Select";
import Text from "../Atoms/Text";
import { selectWithLabelProps } from "../Types";

const SelectWithLabel: React.FC<selectWithLabelProps> = ({
  label,
  onChange,
  value,
  options, // options need to be passed to populate the select dropdown
  inputClasses,
  labelClasses,
}) => {
  return (
    <>
      <Text text={label} classes={labelClasses} />
      <Select
        onChange={onChange}
        value={value} // Add the value prop
        options={options} // Pass the options array to the Select component
        classes={inputClasses}
      />
    </>
  );
};

export default SelectWithLabel;
