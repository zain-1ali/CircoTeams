import React, { useState, useRef, useEffect } from "react";
import { Modal, Box } from "@mui/material";
import Text from "../Atoms/Text";
import Button from "../Atoms/Button";
import { TbFileExport } from "react-icons/tb";
import InputWithLabel from "../Molecules/InputWithLabel";
import TextareaWithLabel from "../Molecules/TextareaWithLabel";

interface ConnectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: any) => void;
}

const ConnectionModal: React.FC<ConnectionModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleSave = () => {
    // onSubmit();
    onClose();
  };

  const modalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    borderRadius: '30px',
    boxShadow: 24,
    outline:"none",
    p: 4,
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={modalStyles} ref={modalRef}>
        <div className="w-full flex justify-between items-center mb-4">
          <Text text="Connection Info" classes="font-[600] text-[18px]" />
          <div className="flex">
            <Button
              text="Export"
              btnClasses="w-[88px] h-[32px] rounded-[22px] text-[#808080] font-[600] text-[12px] border border-[#E1E1E1] bg-white flex justify-center items-center relative pl-4"
              onClick={() => { }}
              icon={<TbFileExport className="absolute left-3 text-[16px]" />}
            />
            <Button
              text="Save"
              btnClasses="w-[80px] h-[34px] rounded-[22px] ml-3 text-white font-[600] text-[12px] bg-[#2B6EF6] flex justify-center items-center relative"
              onClick={handleSave}
            />
          </div>
        </div>

        {/* Input Fields */}
        <div className="grid grid-cols-1 gap-2">
          <div className="flex justify-between w-[100%]">
            <div className="w-[48%]">
              <InputWithLabel
                type="text"
                label="Name"
                onChange={(e) => (null)}
                value="some text"
                inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
              />
            </div>
            <div className="w-[48%]">
              <InputWithLabel
                type="text"
                label="Status"
                onChange={(e) => (null)}
                value="some text"
                inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
                labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Connected with"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />

          </div>
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Date"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />

          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Company"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />

          </div>
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Job Title"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />

          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Email"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />

          </div>
          <div className="w-[48%]">
            <InputWithLabel
              type="text"
              label="Phone"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="h-[40px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
          </div>
        </div>
        <div className="flex justify-between w-[100%]">
          <div className="w-[100%]">
            <TextareaWithLabel
              type="text"
              label="Note"
              onChange={(e) => (null)}
              value="some text"
              inputClasses="min-h-[70px] max-h-[90px] w-[100%] rounded-[10px] bg-[#FAFAFB] outline-none pl-2 mt-[2px]"
              labelClasses="font-[600] text-[12px] text-[#8D8D8D] mt-3"
            />
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ConnectionModal;
