import React from "react";
import Text from "../../Atoms/Text";
import Button from "../../Atoms/Button";

const ConfirmModal: React.FC<{
  open: boolean;
  onClose: () => void;
  onClick: () => void;
  confirmText: string;
}> = ({ open, onClose, onClick, confirmText }) => {
  if (!open) return null; // Only render if open

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-[20px] shadow-lg w-[350px] max-w-md">
        <Text text={confirmText} classes="text-center font-[500]" />
        <div className="flex justify-center gap-4 items-center mt-4">
          <Button
            text="Cancel"
            onClick={onClose}
            btnClasses="h-[36px] w-[90px] border rounded-full"
          />
          <Button
            text="Sure"
            onClick={() => {
              onClick();
              onClose();
            }}
            btnClasses="h-[36px] w-[90px] border rounded-full bg-[#2B6EF6] text-white"
          />
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
