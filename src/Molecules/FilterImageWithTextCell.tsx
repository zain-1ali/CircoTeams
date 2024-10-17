// import React from "react";
import Image from "../Atoms/Image";
import Text from "../Atoms/Text";
import { FilterImageWithTextProps } from "../Types";

const FilterImageWithTextCell: React.FC<FilterImageWithTextProps> = ({
  imgUrl,
  containerClass,
  texts,
}) => {
  return (
    <div className={containerClass}>
      <Image
        src={imgUrl}
        classes="h-[24px] w-[24px] rounded-full object-cover"
      />
      <Text text={texts} classes=" text-[14px]" />
    </div>
  );
};

export default FilterImageWithTextCell;
