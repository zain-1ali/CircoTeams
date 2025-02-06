// import React from 'react'

import Text from "../../Atoms/Text";

const LinkTypeSelector = () => {
  return (
    <div className="w-[383px] h-[218px] bg-white rounded-[18px] p-4 shadow-sm border">
      <Text
        text="Add link as a:"
        classes="text-[14px] font-[700] text-[#818194]"
      />
      <div className="w-[100%] flex justify-between mt-2 ">
        <div className="w-[47%] rounded-xl h-[160px] border">
          <Text text="Common Link" classes="text-[#818194] text-[13px] font-[700]" />
          <Text text="The same link for everyone" classes="" />
        </div>
        <div className="w-[47%] rounded-xl h-[160px] border"></div>
      </div>
    </div>
  );
};

export default LinkTypeSelector;
