import React from "react";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";

const SellfProfileSure: React.FC<{
  onClose: () => void;
  onClick: () => void;
}> = ({ onClose, onClick }) => {
  return (
    <div className="h-[100%] w-[100%] ">
      <Text
        text="Are you sure to create new self profile?"
        classes="text-center font-[500]"
      />
      <div className="w-[100%] flex justify-center gap-4 items-center mt-4">
        <Button
          text="Cancel"
          onClick={onClose}
          btnClasses="h-[40px] w-[100px] border rounded-full"
        />
        <Button
          text="Sure"
          onClick={() => {
            onClick(), onClose();
          }}
          btnClasses="h-[40px] w-[100px] border rounded-full bg-[#2B6EF6] text-white"
        />
      </div>
    </div>
  );
};

export default SellfProfileSure;
